/* ===================================================================
   Akce a události — galerie fotek a videí
   -------------------------------------------------------------------
   Seznam akcí se nikde neudržuje ručně: stránka si přečte složky
   v images/akce/ přímo přes veřejné GitHub API.

   Struktura na GitHubu:
     images/akce/RRRR-MM-DD_nazev-akce/   ← jedna složka = jedna akce
       01-foto.jpg, 02-foto.jpg, video.mp4
       popis.txt            (volitelné: 1. řádek nadpis, zbytek popis)
       video-odkazy.txt     (volitelné: odkazy na YouTube, 1 na řádek)

   Použití:  initAkce({ repo:'SheGa5/Shega5.github.io',
                        path:'images/akce',
                        base:'images/akce/',
                        fallbackApi:'/api/akce' })   // fallbackApi je volitelný
   =================================================================== */

var PHOTO_EXT = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif'];
var VIDEO_EXT = ['mp4', 'webm', 'mov', 'm4v', 'ogv'];
var CACHE_KEY = 'mmf_akce_cache';
var CACHE_MS  = 10 * 60 * 1000;   // 10 minut, ať se GitHub API zbytečně netahá

var CZ_MONTHS = ['ledna', 'února', 'března', 'dubna', 'května', 'června',
                 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];

var media = [];    // vsechny polozky napric akcemi (pro lightbox)
var lbIndex = 0;
var mediaBase = '';

function ext(name) {
  var i = name.lastIndexOf('.');
  return i < 0 ? '' : name.slice(i + 1).toLowerCase();
}

function formatDate(iso) {
  var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!m) return '';
  return Number(m[3]) + '. ' + CZ_MONTHS[Number(m[2]) - 1] + ' ' + m[1];
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// nazev slozky "2026-09-15_foceni-jidel" -> datum + nadpis
function parseFolderName(folder) {
  var m = /^(\d{4}-\d{2}-\d{2})[_\-\s]*(.*)$/.exec(folder);
  return {
    date: m ? m[1] : '',
    title: ((m ? m[2] : folder) || folder).replace(/[_\-]+/g, ' ').trim()
  };
}

// YouTube / Vimeo odkaz -> vlozitelna adresa + nahledovy obrazek
function parseVideoLink(url) {
  var yt = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/.exec(url);
  if (yt) {
    return { kind: 'youtube', embed: 'https://www.youtube-nocookie.com/embed/' + yt[1],
             thumb: 'https://i.ytimg.com/vi/' + yt[1] + '/hqdefault.jpg', url: url };
  }
  var vi = /vimeo\.com\/(\d+)/.exec(url);
  if (vi) return { kind: 'vimeo', embed: 'https://player.vimeo.com/video/' + vi[1], thumb: '', url: url };
  return { kind: 'link', embed: '', thumb: '', url: url };
}

// ── Načtení dat ───────────────────────────────────────────────────────────
function readCache(repo) {
  try {
    var c = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
    if (c && c.repo === repo && Date.now() - c.t < CACHE_MS) return c.events;
  } catch (e) { /* cache je jen pomocnik, chyba nevadi */ }
  return null;
}
function writeCache(repo, events) {
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ repo: repo, t: Date.now(), events: events })); }
  catch (e) { /* plne uloziste - nevadi */ }
}

function ghJson(url) {
  return fetch(url, { headers: { 'Accept': 'application/vnd.github+json' } }).then(function (r) {
    if (r.status === 403) throw new Error('rate-limit');
    if (!r.ok) throw new Error('GitHub API ' + r.status);
    return r.json();
  });
}

function loadFromGitHub(cfg) {
  var cached = readCache(cfg.repo);
  if (cached) return Promise.resolve(cached);

  return ghJson('https://api.github.com/repos/' + cfg.repo + '/contents/' + cfg.path)
    .then(function (root) {
      var dirs = root.filter(function (e) { return e.type === 'dir' && e.name.charAt(0) !== '.'; });
      return Promise.all(dirs.map(function (d) { return loadFolder(d); }));
    })
    .then(function (events) {
      events = events.filter(Boolean);
      events.sort(function (a, b) { return (b.date || b.folder).localeCompare(a.date || a.folder); });
      writeCache(cfg.repo, events);
      return events;
    });
}

function loadFolder(dir) {
  return ghJson(dir.url).then(function (files) {
    var meta = parseFolderName(dir.name);
    var ev = { folder: dir.name, date: meta.date, title: meta.title,
               description: '', photos: [], videos: [], videoLinks: [] };
    var extras = [];

    files.sort(function (a, b) { return a.name.localeCompare(b.name, 'cs'); });
    files.forEach(function (f) {
      if (f.type !== 'file') return;
      var e = ext(f.name);
      if (PHOTO_EXT.indexOf(e) >= 0) ev.photos.push(f.name);
      else if (VIDEO_EXT.indexOf(e) >= 0) ev.videos.push(f.name);
      else if (f.name === 'popis.txt' || f.name === 'video-odkazy.txt') {
        extras.push(fetch(f.download_url).then(function (r) { return r.text(); })
          .then(function (txt) {
            if (f.name === 'popis.txt') {
              var lines = txt.replace(/\r/g, '').split('\n');
              if (lines[0] && lines[0].trim()) ev.title = lines[0].trim();
              ev.description = lines.slice(1).join('\n').trim();
            } else {
              ev.videoLinks = txt.split('\n').map(function (l) { return l.trim(); })
                .filter(function (l) { return l && l.charAt(0) !== '#'; });
            }
          })
          .catch(function () { /* popis je volitelny */ }));
      }
    });

    return Promise.all(extras).then(function () {
      if (!ev.photos.length && !ev.videos.length && !ev.videoLinks.length) return null;
      return ev;
    });
  }).catch(function () { return null; });
}

// Popisky jednotlivych fotek: radky "01 - Beef broth" v popis.txt.
// Cislo na zacatku radku se parove s cislem na zacatku nazvu souboru (01.jpg).
function fileNumber(name) {
  var m = /^(\d{1,3})/.exec(name);
  return m ? String(Number(m[1])) : null;
}
function extractCaptions(ev) {
  var nums = {};
  ev.photos.concat(ev.videos).forEach(function (f) {
    var n = fileNumber(f);
    if (n) nums[n] = true;
  });

  var caps = {}, rest = [];
  (ev.description || '').split('\n').forEach(function (line) {
    var m = /^\s*(\d{1,3})\s*[-–—:.)]\s+(.+?)\s*$/.exec(line);
    if (m && nums[String(Number(m[1]))]) caps[String(Number(m[1]))] = m[2];
    else rest.push(line);
  });
  ev.description = rest.join('\n').trim();
  return caps;
}

// ── Vykreslení ────────────────────────────────────────────────────────────
function renderEvents(events) {
  var box = document.getElementById('events');
  media = [];

  box.innerHTML = events.map(function (ev) {
    var base = mediaBase + encodeURIComponent(ev.folder) + '/';
    var caps = extractCaptions(ev);
    var tiles = [];

    function shot(inner, caption) {
      return '<figure class="shot">' + inner +
        (caption ? '<figcaption class="shot-caption">' + esc(caption) + '</figcaption>' : '') +
        '</figure>';
    }

    ev.photos.forEach(function (f) {
      var src = base + encodeURIComponent(f);
      var cap = caps[fileNumber(f)] || '';
      var i = media.push({ type: 'image', src: src, caption: cap || (ev.title + ' — ' + f) }) - 1;
      tiles.push(shot('<button class="tile" onclick="openLightbox(' + i + ')">' +
        '<img src="' + esc(src) + '" alt="' + esc(cap || f) + '" loading="lazy" ' +
        'onerror="this.closest(&#39;.shot&#39;).remove()">' +
        '</button>', cap));
    });

    ev.videos.forEach(function (f) {
      var src = base + encodeURIComponent(f);
      var cap = caps[fileNumber(f)] || '';
      var i = media.push({ type: 'video', src: src, caption: cap || (ev.title + ' — ' + f) }) - 1;
      tiles.push(shot('<button class="tile" onclick="openLightbox(' + i + ')">' +
        '<video src="' + esc(src) + '#t=0.5" muted playsinline preload="metadata"></video>' +
        '<span class="play-badge">▶</span></button>', cap));
    });

    (ev.videoLinks || []).forEach(function (url) {
      var v = parseVideoLink(url);
      if (v.kind === 'link') {
        tiles.push(shot('<button class="tile" onclick="window.open(\'' + esc(url) + '\',\'_blank\',\'noopener\')">' +
          '<span class="play-badge">🔗</span><span class="yt-label">ODKAZ NA VIDEO</span></button>', ''));
        return;
      }
      var i = media.push({ type: 'embed', src: v.embed, caption: ev.title + ' — video' }) - 1;
      tiles.push(shot('<button class="tile" onclick="openLightbox(' + i + ')">' +
        (v.thumb ? '<img src="' + esc(v.thumb) + '" alt="video" loading="lazy">' : '') +
        '<span class="play-badge">▶</span>' +
        '<span class="yt-label">' + (v.kind === 'youtube' ? 'YOUTUBE' : 'VIMEO') + '</span></button>', ''));
    });

    var nPhoto = ev.photos.length;
    var nVideo = ev.videos.length + (ev.videoLinks || []).length;
    var counts = [
      nPhoto ? nPhoto + ' ' + (nPhoto === 1 ? 'fotka' : nPhoto < 5 ? 'fotky' : 'fotek') : '',
      nVideo ? nVideo + ' ' + (nVideo === 1 ? 'video' : nVideo < 5 ? 'videa' : 'videí') : ''
    ].filter(Boolean).join(' · ');

    return '<div class="event">' +
      '<div class="event-head">' +
        '<div class="event-title">' + esc(ev.title) + '</div>' +
        (ev.date ? '<div class="event-date">' + esc(formatDate(ev.date)) + '</div>' : '') +
      '</div>' +
      (ev.description ? '<div class="event-desc">' + esc(ev.description) + '</div>' : '') +
      (counts ? '<div class="event-count">' + counts + '</div>' : '') +
      '<div class="gallery">' + tiles.join('') + '</div>' +
    '</div>';
  }).join('');
}

function showNote(html) {
  document.getElementById('events').innerHTML = '<p class="akce-note">' + html + '</p>';
}

// ── Lightbox ──────────────────────────────────────────────────────────────
function openLightbox(i) {
  lbIndex = i;
  renderLightbox();
  document.getElementById('lightbox').classList.add('show');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('show');
  document.getElementById('lightboxBody').innerHTML = '';   // zastavi prehravani
}
function navLightbox(step) {
  if (!media.length) return;
  lbIndex = (lbIndex + step + media.length) % media.length;
  renderLightbox();
}
function renderLightbox() {
  var m = media[lbIndex];
  if (!m) return;
  var body = document.getElementById('lightboxBody');
  if (m.type === 'image')      body.innerHTML = '<img src="' + esc(m.src) + '" alt="">';
  else if (m.type === 'video') body.innerHTML = '<video src="' + esc(m.src) + '" controls autoplay playsinline></video>';
  else                         body.innerHTML = '<iframe src="' + esc(m.src) + '?autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
  document.getElementById('lightboxCaption').textContent =
    m.caption + '  (' + (lbIndex + 1) + '/' + media.length + ')';
}

document.addEventListener('keydown', function (e) {
  var lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('show')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navLightbox(-1);
  if (e.key === 'ArrowRight') navLightbox(1);
});

// ── Start ─────────────────────────────────────────────────────────────────
function initAkce(cfg) {
  mediaBase = cfg.base;

  loadFromGitHub(cfg)
    .then(function (events) {
      if (!events.length) {
        showNote('Zatím tu nic není.<br><br>Nahraj fotky do složky ' +
                 '<code>' + esc(cfg.path) + '/RRRR-MM-DD_nazev-akce/</code> na GitHubu — ' +
                 'objeví se tady samy.');
        return;
      }
      renderEvents(events);
    })
    .catch(function (err) {
      // GitHub nedostupny (nebo vycerpany limit dotazu) — zkusime lokalni API
      if (!cfg.fallbackApi) {
        showNote(err && err.message === 'rate-limit'
          ? 'GitHub teď odmítá další dotazy (limit načtení). Zkus to prosím za pár minut.'
          : 'Fotky se nepodařilo načíst. Zkus obnovit stránku.');
        return;
      }
      mediaBase = cfg.fallbackBase || cfg.base;
      fetch(cfg.fallbackApi)
        .then(function (r) { return r.json(); })
        .then(function (events) {
          if (!events.length) { showNote('Zatím tu nic není.'); return; }
          renderEvents(events);
        })
        .catch(function () { showNote('Fotky se nepodařilo načíst. Zkus obnovit stránku.'); });
    });
}
