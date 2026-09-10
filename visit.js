(function () {
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

  var visitorId = getCookie('mmf_visitor') || uuid();
  setCookie('mmf_visitor', visitorId, 400); // 400 dní = max co prohlížeče cookie životnost dovolí

  var page = location.pathname.split('/').pop() || 'index.html';

  fetch('https://motolmixfusion-pos.onrender.com/api/public/visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      visitor_id: visitorId,
      page: page,
      referrer: document.referrer || ''
    })
  }).catch(function () {});
})();
