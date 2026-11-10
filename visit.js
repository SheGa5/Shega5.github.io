(function () {
  var ENDPOINT_BASE = 'https://motolmixfusion-pos.onrender.com/api/public';

  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Znacka z odkazu (?utm_source=instagram). Instagram a Facebook otviraji
  // odkazy ve vlastnim prohlizeci uvnitr aplikace a ten referrer neposila -
  // bez znacky se takova navsteva neda od primeho prichodu rozeznat.
  function utmSource() {
    var m = location.search.match(/[?&]utm_source=([^&]*)/);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')).slice(0, 40) : '';
  }

  // Meri se anonymne a hned, bez cookie listy. Driv se cekalo na souhlas,
  // protoze se nastavovala cookie s identifikatorem na 400 dni - jenze lista
  // vetsinu lidi jen otravuje, vetsina ji odklikne pryc, a zmerila se tak
  // mensina navstev. Cislo, ktere ma clovek porovnavat s tim, co mu tvrdi
  // Seznam, musi sedet za vsechny.
  //
  // Identifikator proto zije jen v pameti tehle stranky: po zavreni je pryc a
  // pri dalsim nacteni vznikne novy. Nic se neuklada do prohlizece, takze neni
  // co odsouhlasovat - a zaroven z toho nejde slozit, kdo se kdy vracel.
  // Jeden zaznam = jedno zobrazeni stranky, ne jeden clovek.
  function start() {
    var visitorId = uuid();

    var page = location.pathname.split('/').pop() || 'index.html';
    var startTime = Date.now();
    var maxScrollPct = 0;
    var visitId = null;

    // Casove pasmo prohlizece - hruba nahrada za geolokaci u lidi, u kterych
    // prekad IP -> mesto selze (VPN, firemni sit). Zadny osobni udaj to neni.
    function browserTimezone() {
      try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; }
      catch (e) { return ''; }
    }

    function currentScrollPct() {
      var doc = document.documentElement;
      var scrollable = (doc.scrollHeight || 0) - (window.innerHeight || 0);
      if (scrollable <= 0) return 100;
      return Math.min(100, Math.round((window.scrollY / scrollable) * 100));
    }

    window.addEventListener('scroll', function () {
      maxScrollPct = Math.max(maxScrollPct, currentScrollPct());
    }, { passive: true });

    fetch(ENDPOINT_BASE + '/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor_id: visitorId,
        page: page,
        referrer: document.referrer || '',
        utm_source: utmSource(),
        language: navigator.language || '',
        languages: (navigator.languages || []).slice(0, 5).join(','),
        timezone: browserTimezone(),
        screen_w: window.screen ? window.screen.width : null,
        screen_h: window.screen ? window.screen.height : null
      })
    }).then(function (r) { return r.json(); })
      .then(function (d) { if (d && d.id) visitId = d.id; })
      .catch(function () {});

    function sendEngagement() {
      if (!visitId) return;
      var payload = {
        id: visitId,
        time_on_page_sec: Math.round((Date.now() - startTime) / 1000),
        scroll_pct: Math.max(maxScrollPct, currentScrollPct())
      };
      var blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT_BASE + '/visit-engagement', blob);
      } else {
        fetch(ENDPOINT_BASE + '/visit-engagement', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload), keepalive: true
        }).catch(function () {});
      }
    }

    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') sendEngagement();
    });
    window.addEventListener('pagehide', sendEngagement);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
