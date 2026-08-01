(function () {
  "use strict";

  function getConfig(type) {
    var LANG = window.MMF_LANG;
    var lang = LANG ? LANG.getLang() : "cs";
    var dict = (LANG && LANG.translations[lang]) || (LANG && LANG.translations.cs) || {};
    var isEvent = type === "event";
    return {
      title: isEvent ? (dict["inquiry.titleEvent"] || "Poptávka oslavy / soukromé akce") : (dict["inquiry.titleCatering"] || "Poptávka cateringu"),
      dateLabel: dict["inquiry.dateLabel"] || "Datum akce",
      countLabel: isEvent ? (dict["inquiry.countLabelEvent"] || "Počet hostů") : (dict["inquiry.countLabelCatering"] || "Počet porcí"),
      subjectPrefix: isEvent ? "Poptávka oslavy" : "Poptávka cateringu"
    };
  }

  var currentType = "catering";

  function openInquiry(type) {
    currentType = type;
    var cfg = getConfig(type);
    document.getElementById("inqTitle").textContent = cfg.title;
    document.getElementById("inqDateLabel").textContent = cfg.dateLabel;
    document.getElementById("inqCountLabel").textContent = cfg.countLabel;
    document.getElementById("inqOverlay").hidden = false;
    document.getElementById("inqPopup").hidden = false;
  }
  function closeInquiry() {
    document.getElementById("inqOverlay").hidden = true;
    document.getElementById("inqPopup").hidden = true;
  }

  function submitInquiry(e) {
    e.preventDefault();
    var cfg = getConfig(currentType);
    var name = document.getElementById("inqName").value;
    var phone = document.getElementById("inqPhone").value;
    var email = document.getElementById("inqEmail").value;
    var date = document.getElementById("inqDate").value;
    var count = document.getElementById("inqCount").value;
    var msg = document.getElementById("inqMsg").value;

    var countLabelCs = currentType === "event" ? "Počet hostů" : "Počet porcí";
    var subject = cfg.subjectPrefix + " — " + name;
    var body =
      "Jméno: " + name + "\n" +
      "Telefon: " + phone + "\n" +
      "E-mail: " + (email || "-") + "\n" +
      "Datum akce: " + (date || "-") + "\n" +
      countLabelCs + ": " + (count || "-") + "\n" +
      "Popis / přání: " + (msg || "-");

    var mailto =
      "mailto:info@motolmixfusion.cz" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-inquiry]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openInquiry(btn.getAttribute("data-inquiry"));
      });
    });
    document.getElementById("inqClose").addEventListener("click", closeInquiry);
    document.getElementById("inqOverlay").addEventListener("click", closeInquiry);
    document.getElementById("inqForm").addEventListener("submit", submitInquiry);

    var todayStr = new Date().toISOString().split("T")[0];
    var dateInput = document.getElementById("inqDate");
    if (dateInput) dateInput.setAttribute("min", todayStr);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeInquiry();
    });
  });
})();
