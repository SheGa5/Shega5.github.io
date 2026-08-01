(function () {
  "use strict";

  function openDish2(key) {
    var LANG = window.MMF_LANG;
    var lang = LANG ? LANG.getLang() : "cs";
    var dict = (LANG && LANG.translations[lang]) || (LANG && LANG.translations.cs) || {};
    var d = LANG ? LANG.dishData[key] : null;
    if (!d) return;
    var btn = document.querySelector('.dish2-trigger[data-dish="' + key + '"]');
    document.getElementById("dish2Title").textContent = btn ? btn.textContent : key;

    var li = btn ? btn.closest("li") : null;
    var priceEl = li ? li.querySelector(".price2") : null;
    var price = priceEl ? priceEl.textContent : "";
    var weight = li ? (li.querySelector(".g2") || {}).textContent : "";
    var weightPart = weight ? ((dict["dish.weightLabel"] || "gramáž") + " " + weight) : "";
    var pricePart = price ? ((dict["dish.priceLabel"] || "cena:") + " " + price) : "";
    document.getElementById("dish2Meta").textContent = [weightPart, pricePart].filter(Boolean).join(", ");

    document.getElementById("dish2Ingredients").textContent =
      d.ingredients[lang] || d.ingredients.en || d.ingredients.cs;
    document.getElementById("dish2Allergens").textContent =
      d.allergens[lang] || d.allergens.en || d.allergens.cs;

    var photo = document.getElementById("dish2Photo");
    photo.style.display = "none";
    photo.onload = function () { photo.style.display = "block"; };
    photo.onerror = function () { photo.style.display = "none"; };
    photo.src = "images/dishes/" + key + ".jpg";

    document.getElementById("dish2Overlay").hidden = false;
    document.getElementById("dish2Popup").hidden = false;
  }
  function closeDish2() {
    document.getElementById("dish2Overlay").hidden = true;
    document.getElementById("dish2Popup").hidden = true;
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".dish2-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openDish2(btn.getAttribute("data-dish"));
      });
    });
    var closeBtn = document.getElementById("dish2Close");
    var overlay = document.getElementById("dish2Overlay");
    if (closeBtn) closeBtn.addEventListener("click", closeDish2);
    var orderLink = document.getElementById("dish2OrderLink");
    if (orderLink) orderLink.addEventListener("click", closeDish2);
    if (overlay) overlay.addEventListener("click", closeDish2);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDish2();
    });
  });
})();
