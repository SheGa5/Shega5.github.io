(function () {
  var ENDPOINT_BASE = 'https://motolmixfusion-pos.onrender.com/api/public';

  function getCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function setCookie(name, value, days) {
    var expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
  }
  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  // Spusti se az kdyz mmf-cookie-consent.js zavola window.mmfStartVisitTracking()
  // po odsouhlaseni cookie listy - do te doby se nic neodesila ani nenastavuje.
  window.mmfStartVisitTracking = function () {
    var visitorId = getCookie('mmf_visitor') || uuid();
    setCookie('mmf_visitor', visitorId, 400); // 400 dní = max co prohlížeče cookie životnost dovolí

    var page = location.pathname.split('/').pop() || 'index.html';
    var startTime = Date.now();
    var maxScrollPct = 0;
    var visitId = null;

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
  };
})();
