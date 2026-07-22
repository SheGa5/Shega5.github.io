(function () {
  "use strict";

  var config = {
    catering: {
      title: "Poptávka cateringu",
      dateLabel: "Datum akce",
      countLabel: "Počet porcí",
      subjectPrefix: "Poptávka cateringu"
    },
    event: {
      title: "Poptávka oslavy / soukromé akce",
      dateLabel: "Datum akce",
      countLabel: "Počet hostů",
      subjectPrefix: "Poptávka oslavy"
    }
  };

  var currentType = "catering";

  function openInquiry(type) {
    currentType = type;
    var cfg = config[type] || config.catering;
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
    var cfg = config[currentType] || config.catering;
    var name = document.getElementById("inqName").value;
    var phone = document.getElementById("inqPhone").value;
    var email = document.getElementById("inqEmail").value;
    var date = document.getElementById("inqDate").value;
    var count = document.getElementById("inqCount").value;
    var msg = document.getElementById("inqMsg").value;

    var subject = cfg.subjectPrefix + " — " + name;
    var body =
      "Jméno: " + name + "\n" +
      "Telefon: " + phone + "\n" +
      "E-mail: " + (email || "-") + "\n" +
      cfg.dateLabel + ": " + (date || "-") + "\n" +
      cfg.countLabel + ": " + (count || "-") + "\n" +
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
