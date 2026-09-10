(function () {
  "use strict";

  var PHONE = "+420 604 962 398";
  var PHONE_TEL = "+420604962398";
  var EMAIL = "postmaster@motolmixfusion.cz";
  var LOYALTY_ENDPOINT = "https://motolmixfusion-pos.onrender.com/api/public/loyalty-signup";
  var LOYALTY_PROMPT = "Chcete se stát součástí našeho loyalty programu? Přináší to cenové i jiné výhody — budete vždy jako první vědět o akcích a budete mít přednost. Zatím stačí napsat e-mail 📧";

  var FAQ = [
    {
      id: "hours",
      kws: ["hodin", "otevira", "otevřen", "otevren", "oteviraci", "kdy mate otevreno", "kdy otvira"],
      a: "Máme otevřeno <strong>Út–Ne 10:00–22:00</strong>. Restaurační (večerní) menu servírujeme od 12 hodin."
    },
    {
      id: "delivery",
      kws: ["vlastni doruceni", "doruc", "rozvoz", "dovoz", "donask", "donášk"],
      a: "Ano, doručujeme i sami — objednat a zaplatit můžete na <a href=\"https://motolmixfusion-pos.onrender.com/order.html\" target=\"_blank\" rel=\"noopener\">našem e-shopu</a>, a to v pracovních dnech <strong>Út–Ne 10:30–21:30</strong>. Doporučujeme si telefonicky ověřit, že je vše v pořádku, na <a href=\"tel:" + PHONE_TEL + "\">" + PHONE + "</a>."
    },
    {
      id: "aggregators",
      kws: ["wolt", "bolt"],
      a: "Najdete nás i na Wolt a Bolt Food, pokud tyto aplikace preferujete."
    },
    {
      id: "address",
      kws: ["adresa", "kde jste", "kde vas najdu", "kde vás najdu", "kde najdu", "kde sidlite", "lokace", "kudrnova"],
      a: "Jsme na adrese <strong>Kudrnova 234/6, 150 00 Praha 5 – Motol</strong>, kousek od Nemocnice Motol (Metro A, 6 min pěšky)."
    },
    {
      id: "parking",
      kws: ["parkovani", "parkovani", "parkovat", "zaparkovat"],
      a: "Ulice Kudrnova je slepá — zaparkujte prosím na veřejném parkovišti před ulicí Deylova a pokračujte pěšky za roh."
    },
    {
      id: "contact",
      kws: ["telefon", "kontakt", "zavolat", "cislo", "číslo", "email", "e-mail", "mail"],
      a: "Zavolejte nám na <a href=\"tel:" + PHONE_TEL + "\">" + PHONE + "</a> nebo napište na <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>."
    },
    {
      id: "reservation",
      kws: ["rezervac", "rezervovat", "stul", "stůl"],
      a: "Stůl si zarezervujete přímo v <a href=\"https://calendar.app.google/YoSqNuTJ7RKH2dBe6\" target=\"_blank\" rel=\"noopener\">našem kalendáři</a>."
    },
    {
      id: "allergens",
      kws: ["alergen", "alergi", "lepek", "laktoz", "bezlepk"],
      a: "Složení a alergeny u každého jídla najdete po kliknutí na jeho název přímo v menu. Na cokoliv konkrétního se nás ale klidně zeptejte i telefonicky na <a href=\"tel:" + PHONE_TEL + "\">" + PHONE + "</a>."
    },
    {
      id: "menu",
      kws: ["menu", "jidelnicek", "jídelníček", "cena", "kolik stoji", "kolik stojí", "co mate", "co máte"],
      a: "Denní menu k odnesení najdete výš na této stránce, <a href=\"index2.html\">večerní/restaurační menu</a> pak na samostatné stránce."
    },
    {
      id: "loyalty",
      kws: ["loyalty", "vernost", "věrnost", "vernostni", "věrnostní", "vernostni program"],
      a: LOYALTY_PROMPT
    },
    {
      id: "greeting",
      kws: ["ahoj", "dobry den", "dobrý den", "cau", "čau", "zdravim", "zdravím"],
      a: "Dobrý den! Zeptejte se na otevírací dobu, doručení, rezervaci nebo cokoliv jiného 🙂"
    }
  ];

  var FALLBACK = "Na tohle přesně neumím odpovědět. Zavolejte nám na <a href=\"tel:" + PHONE_TEL + "\">" + PHONE + "</a> nebo napište na <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a> — rádi pomůžeme.";

  var QUICK = [
    { label: "Otevírací doba", q: "Jaká je otevírací doba?" },
    { label: "Doručení", q: "Máte vlastní doručení?" },
    { label: "Rezervace", q: "Chci zarezervovat stůl" },
    { label: "Kontakt", q: "Jaký máte telefon?" },
    { label: "Loyalty program", q: "Chci se přidat do loyalty programu" }
  ];

  function normalize(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function matchFaq(text) {
    var n = normalize(text);
    for (var i = 0; i < FAQ.length; i++) {
      var f = FAQ[i];
      for (var j = 0; j < f.kws.length; j++) {
        if (n.indexOf(normalize(f.kws[j])) !== -1) return f;
      }
    }
    return null;
  }

  function isValidEmail(s) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
  }

  var DECLINE_WORDS = ["ne", "nic", "nechci", "diky", "dekuji", "nevadi", "jindy", "pozdeji", "priste", "skoda", "zrusit"];
  function isDecline(text) {
    var n = normalize(text).trim();
    if (n.indexOf("nemam zajem") !== -1 || n.indexOf("jina otazka") !== -1 || n.indexOf("neco jineho") !== -1) return true;
    var words = n.split(/\s+/);
    for (var i = 0; i < words.length; i++) {
      if (DECLINE_WORDS.indexOf(words[i]) !== -1) return true;
    }
    return false;
  }

  function submitLoyaltyEmail(email) {
    return fetch(LOYALTY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim() })
    }).then(function (r) { return r.ok; }).catch(function () { return false; });
  }

  var BANNER_ENDPOINT = "https://motolmixfusion-pos.onrender.com/api/public/banner";
  var bannerTextPromise = null;
  function getBannerText() {
    if (!bannerTextPromise) {
      bannerTextPromise = fetch(BANNER_ENDPOINT)
        .then(function (r) { return r.json(); })
        .then(function (d) { return (d && d.active && d.text) ? d.text : null; })
        .catch(function () { return null; });
    }
    return bannerTextPromise;
  }

  var CSS = "\
    .mmf-chat-btn{position:fixed;right:20px;bottom:20px;z-index:940;width:56px;height:56px;border-radius:50%;\
      background:var(--terracotta,#c9713f);color:#fff;border:none;box-shadow:0 6px 20px rgba(0,0,0,.25);\
      font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;}\
    .mmf-chat-btn:hover{filter:brightness(1.08);}\
    .mmf-chat-panel{position:fixed;right:20px;bottom:86px;z-index:950;width:320px;max-width:calc(100vw - 32px);\
      max-height:min(480px,70vh);background:var(--cream,#fbf8f2);border:1px solid var(--line,rgba(0,0,0,.12));\
      border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.25);display:none;flex-direction:column;overflow:hidden;\
      font-family:inherit;}\
    .mmf-chat-panel.open{display:flex;}\
    .mmf-chat-head{background:var(--ink,#2b2620);color:#fff;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;}\
    .mmf-chat-head strong{font-size:14px;}\
    .mmf-chat-head span{font-size:11px;opacity:.7;display:block;margin-top:1px;}\
    .mmf-chat-close{background:none;border:none;color:#fff;font-size:18px;cursor:pointer;line-height:1;padding:4px;}\
    .mmf-chat-body{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;}\
    .mmf-msg{max-width:85%;padding:8px 12px;border-radius:12px;font-size:13.5px;line-height:1.4;}\
    .mmf-msg a{color:inherit;text-decoration:underline;}\
    .mmf-msg.bot{align-self:flex-start;background:var(--cream-panel,var(--cream-dim,#efe6d4));color:var(--text,#3a342c);border-bottom-left-radius:2px;}\
    .mmf-msg.user{align-self:flex-end;background:var(--terracotta,#c9713f);color:#fff;border-bottom-right-radius:2px;}\
    .mmf-chat-quick{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 10px;}\
    .mmf-chip{border:1px solid var(--line,rgba(0,0,0,.15));background:#fff;color:var(--text,#3a342c);\
      border-radius:999px;padding:5px 10px;font-size:12px;cursor:pointer;}\
    .mmf-chip:hover{border-color:var(--terracotta,#c9713f);color:var(--terracotta,#c9713f);}\
    .mmf-chat-form{display:flex;gap:6px;padding:10px;border-top:1px solid var(--line,rgba(0,0,0,.12));background:#fff;}\
    .mmf-chat-input{flex:1;border:1px solid var(--line,rgba(0,0,0,.15));border-radius:999px;padding:8px 12px;font-size:13.5px;font-family:inherit;}\
    .mmf-chat-input:focus{outline:2px solid var(--terracotta,#c9713f);}\
    .mmf-chat-send{background:var(--terracotta,#c9713f);color:#fff;border:none;border-radius:50%;width:34px;height:34px;\
      cursor:pointer;font-size:15px;flex-shrink:0;}\
    @media (max-width:400px){.mmf-chat-panel{right:16px;left:16px;width:auto;}}\
  ";

  function injectStyles() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function buildWidget() {
    var btn = document.createElement("button");
    btn.className = "mmf-chat-btn";
    btn.type = "button";
    btn.setAttribute("aria-label", "Otevřít chat s dotazy");
    btn.textContent = "💬";

    var panel = document.createElement("div");
    panel.className = "mmf-chat-panel";
    panel.innerHTML =
      '<div class="mmf-chat-head">' +
        '<div><strong>MotolMixFusion</strong><span>Zeptejte se nás na cokoliv</span></div>' +
        '<button type="button" class="mmf-chat-close" aria-label="Zavřít chat">✕</button>' +
      "</div>" +
      '<div class="mmf-chat-body" id="mmfChatBody" role="log" aria-live="polite"></div>' +
      '<div class="mmf-chat-quick" id="mmfChatQuick"></div>' +
      '<form class="mmf-chat-form" id="mmfChatForm">' +
        '<input type="text" class="mmf-chat-input" id="mmfChatInput" placeholder="Napište dotaz…" autocomplete="off">' +
        '<button type="submit" class="mmf-chat-send" aria-label="Odeslat">➤</button>' +
      "</form>";

    document.body.appendChild(btn);
    document.body.appendChild(panel);

    var body = panel.querySelector("#mmfChatBody");
    var quick = panel.querySelector("#mmfChatQuick");
    var form = panel.querySelector("#mmfChatForm");
    var input = panel.querySelector("#mmfChatInput");

    function addMessage(html, who) {
      var msg = document.createElement("div");
      msg.className = "mmf-msg " + who;
      msg.innerHTML = html;
      body.appendChild(msg);
      body.scrollTop = body.scrollHeight;
    }

    var awaitingEmail = false;
    var emailAttempts = 0;

    function finalInvalidEmailMessage() {
      return "Nejde to? Můžete nám napsat rovnou na <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>, nebo zavolejte na <a href=\"tel:" + PHONE_TEL + "\">" + PHONE + "</a> a e-mail nadiktujete.";
    }

    function ask(text) {
      if (!text.trim()) return;
      addMessage(text.replace(/</g, "&lt;"), "user");

      if (awaitingEmail) {
        awaitingEmail = false;

        if (isValidEmail(text)) {
          emailAttempts = 0;
          setTimeout(function () {
            submitLoyaltyEmail(text).then(function (ok) {
              addMessage(
                ok
                  ? "Díky! Váš e-mail máme zapsaný — budeme vás informovat o akcích a výhodách. 🎉"
                  : "Něco se nepovedlo. Zkuste to prosím znovu, nebo nám napište na <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>.",
                "bot"
              );
            });
          }, 250);
          return;
        }

        // od druhého neplatného pokusu bereme vážně, že o e-mail třeba vůbec nestojí -
        // buď to sami řeknou, nebo se zeptají na něco úplně jiného
        if (emailAttempts >= 1) {
          var declined = isDecline(text);
          var otherMatch = !declined && matchFaq(text);
          if (declined || otherMatch) {
            emailAttempts = 0;
            setTimeout(function () {
              addMessage(
                declined
                  ? "Dobře, žádný problém 🙂 Kdybyste si to rozmysleli, stačí kdykoliv napsat „loyalty program“."
                  : otherMatch.a,
                "bot"
              );
            }, 250);
            return;
          }
        }

        if (emailAttempts === 0) {
          emailAttempts = 1;
          setTimeout(function () {
            addMessage("Tohle nevypadá jako platný e-mail 🤔 Zkuste to prosím ještě jednou.", "bot");
            awaitingEmail = true;
          }, 250);
        } else if (emailAttempts === 1) {
          emailAttempts = 2;
          getBannerText().then(function (bannerText) {
            var teaser = bannerText
              ? "Mimochodem, víte že " + bannerText + " 😊"
              : "Mimochodem, klidně se zeptejte na otevírací dobu, menu nebo rezervaci 😊";
            addMessage(
              "Pořád to nevypadá jako e-mail — mělo by to být ve tvaru jméno@domena.cz. Chcete to zkusit ještě jednou, nebo radši probereme něco jiného? " + teaser,
              "bot"
            );
            awaitingEmail = true;
          });
        } else {
          emailAttempts = 0;
          setTimeout(function () {
            addMessage(finalInvalidEmailMessage(), "bot");
          }, 250);
        }
        return;
      }

      setTimeout(function () {
        var match = matchFaq(text);
        addMessage(match ? match.a : FALLBACK, "bot");
        if (match && match.id === "loyalty") {
          awaitingEmail = true;
          emailAttempts = 0;
          getBannerText(); // prefetch, ať je hotovo do doby, kdy bychom banner případně zmiňovali
        }
      }, 250);
    }

    QUICK.forEach(function (q) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "mmf-chip";
      chip.textContent = q.label;
      chip.addEventListener("click", function () { ask(q.q); });
      quick.appendChild(chip);
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = input.value;
      input.value = "";
      ask(val);
    });

    var opened = false;
    function toggle() {
      opened = !opened;
      panel.classList.toggle("open", opened);
      if (opened) {
        if (!body.childElementCount) {
          addMessage("Dobrý den! Jak vám můžu pomoct? Zkuste otevírací dobu, doručení, rezervaci nebo napište vlastní dotaz.", "bot");
        }
        input.focus();
      }
    }

    btn.addEventListener("click", toggle);
    panel.querySelector(".mmf-chat-close").addEventListener("click", toggle);
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectStyles();
    buildWidget();
  });
})();
