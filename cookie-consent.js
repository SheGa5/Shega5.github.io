(function () {
  var STORAGE_KEY = 'mmf_consent';

  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function readConsent() {
    var v = null;
    try { v = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    // volba z drivejsi verze listy byla v cookie - prevezmeme ji, at se lidi neptame znovu
    if (!v) {
      var old = getCookie('mmf_consent');
      if (old === 'accepted' || old === 'declined') { v = old; saveConsent(old); }
    }
    return v;
  }
  function saveConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
  }

  function loadGoogleAnalytics() {
    var id = window.MMF_GA_ID;
    if (!id || window.mmfGaLoaded) return;
    window.mmfGaLoaded = true;

    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', id);
  }

  function startTracking() {
    loadGoogleAnalytics();
    if (typeof window.mmfStartVisitTracking === 'function') window.mmfStartVisitTracking();
  }

  var consent = readConsent();
  if (consent === 'accepted') { startTracking(); return; }
  if (consent === 'declined') { return; }

  var CSS = "\
    .mmf-cookie-bar{position:fixed;left:16px;right:16px;bottom:16px;z-index:960;max-width:640px;margin:0 auto;\
      background:var(--ink,#2b2620);color:#fff;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.3);\
      padding:16px 18px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;\
      font-family:var(--font-body,inherit);font-size:13.5px;}\
    .mmf-cookie-bar p{margin:0;flex:1 1 260px;line-height:1.45;}\
    .mmf-cookie-bar a{color:#fff;text-decoration:underline;}\
    .mmf-cookie-actions{display:flex;gap:8px;flex-shrink:0;margin-left:auto;}\
    .mmf-cookie-btn{border:none;border-radius:999px;padding:8px 18px;font-size:13px;font-weight:600;\
      cursor:pointer;font-family:inherit;}\
    .mmf-cookie-accept{background:var(--terracotta,#c9713f);color:#fff;}\
    .mmf-cookie-accept:hover{filter:brightness(1.08);}\
    .mmf-cookie-decline{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4);}\
    .mmf-cookie-decline:hover{border-color:rgba(255,255,255,.75);}\
    @media (max-width:480px){.mmf-cookie-actions{margin-left:0;width:100%;}.mmf-cookie-btn{flex:1;}}\
  ";
  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var DEFAULT_TEXT = 'Používáme cookies a Google Analytics, abychom věděli, jak web lidé používají. Bez vašeho souhlasu se nic neměří.';
  var bar = document.createElement('div');
  bar.className = 'mmf-cookie-bar';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-label', 'Souhlas s cookies');
  bar.innerHTML =
    '<p><span id="mmfCookieText"></span> <a href="privacy.html">Zásady ochrany soukromí</a></p>' +
    '<div class="mmf-cookie-actions">' +
      '<button type="button" class="mmf-cookie-btn mmf-cookie-decline" id="mmfCookieDecline">Odmítnout</button>' +
      '<button type="button" class="mmf-cookie-btn mmf-cookie-accept" id="mmfCookieAccept">Přijmout</button>' +
    '</div>';
  document.body.appendChild(bar);
  document.getElementById('mmfCookieText').textContent = DEFAULT_TEXT;

  // text lišty jde přepsat z admin panelu (POS); když backend neodpoví, zůstane výchozí
  fetch('https://motolmixfusion-pos.onrender.com/api/public/cookie-consent-text')
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (d && d.text) document.getElementById('mmfCookieText').textContent = d.text;
    })
    .catch(function () {});

  document.getElementById('mmfCookieAccept').addEventListener('click', function () {
    saveConsent('accepted');
    bar.remove();
    startTracking();
  });
  document.getElementById('mmfCookieDecline').addEventListener('click', function () {
    saveConsent('declined');
    bar.remove();
  });
})();
