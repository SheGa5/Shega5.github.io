(function () {
  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  }

  function startTracking() {
    if (typeof window.mmfStartVisitTracking === 'function') window.mmfStartVisitTracking();
  }

  var consent = getCookie('mmf_consent');
  if (consent === 'accepted') { startTracking(); return; }
  if (consent === 'declined') { return; }

  var CSS = "\
    .mmf-cookie-bar{position:fixed;left:16px;right:16px;bottom:16px;z-index:960;max-width:640px;margin:0 auto;\
      background:var(--ink,#2b2620);color:#fff;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.3);\
      padding:16px 18px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;font-family:inherit;font-size:13.5px;}\
    .mmf-cookie-bar p{margin:0;flex:1 1 260px;line-height:1.4;}\
    .mmf-cookie-actions{display:flex;gap:8px;flex-shrink:0;margin-left:auto;}\
    .mmf-cookie-btn{border:none;border-radius:999px;padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;}\
    .mmf-cookie-accept{background:var(--terracotta,#c9713f);color:#fff;}\
    .mmf-cookie-decline{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4);}\
    @media (max-width:480px){.mmf-cookie-actions{margin-left:0;width:100%;}.mmf-cookie-btn{flex:1;}}\
  ";
  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.className = 'mmf-cookie-bar';
  bar.innerHTML = '<p id="mmfCookieText">Tento web používá cookies.</p>' +
    '<div class="mmf-cookie-actions">' +
      '<button type="button" class="mmf-cookie-btn mmf-cookie-decline" id="mmfCookieDecline">Odmítnout</button>' +
      '<button type="button" class="mmf-cookie-btn mmf-cookie-accept" id="mmfCookieAccept">Souhlasím</button>' +
    '</div>';
  document.body.appendChild(bar);

  fetch('https://motolmixfusion-pos.onrender.com/api/public/cookie-consent-text')
    .then(function (r) { return r.json(); })
    .then(function (d) { if (d && d.text) document.getElementById('mmfCookieText').textContent = d.text; })
    .catch(function () {});

  document.getElementById('mmfCookieAccept').addEventListener('click', function () {
    setCookie('mmf_consent', 'accepted', 400);
    bar.remove();
    startTracking();
  });
  document.getElementById('mmfCookieDecline').addEventListener('click', function () {
    setCookie('mmf_consent', 'declined', 400);
    bar.remove();
  });
})();
