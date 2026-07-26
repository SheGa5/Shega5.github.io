(function () {
  "use strict";

  var dish2Data = {
    siomai_r: { weight: "180 g", ingredients: "Pšeničné taštičky, vepřové maso, krevety, sójová omáčka.", allergens: "Lepek, korýši, sója" },
    tomyam_r: { weight: "350 g", ingredients: "Krevety, vývar, citronová tráva, kaffir limetka, chilli, houby, rajčata, koriandr.", allergens: "Korýši, ryby (omáčka)" },
    gyoza_r: { weight: "180 g", ingredients: "Pšeničné taštičky, vepřové maso, zelí, zázvor, sójová omáčka.", allergens: "Lepek, sója" },
    beefbroth: { weight: "350 g", ingredients: "Hovězí vývar, hovězí maso, rýžové nudle, jarní cibulka, koriandr.", allergens: "Může obsahovat sóju" },
    carrotsoup: { weight: "300 g", ingredients: "Mrkev, vývar, smetana, máslo, zázvor.", allergens: "Mléko" },
    stickyrice: { weight: "200 g", ingredients: "Lepkavá rýže, kokosové mléko, cukr, mango/ovoce.", allergens: "—" },
    pannacotta: { weight: "150 g", ingredients: "Smetana, mléko, cukr, vanilka, želatina, ovocné pyré.", allergens: "Mléko" },
    cheesecake: { weight: "150 g", ingredients: "Cream cheese, smetana, vejce, sušenkový korpus, máslo.", allergens: "Lepek, mléko, vejce" },

    salmon: { weight: "400 g", ingredients: "Losos, žampiony, pečené brambory, bylinkové máslo.", allergens: "Ryby, mléko" },
    padthai_r: { weight: "400 g", ingredients: "Rýžové nudle, kuřecí maso, krevety, vejce, tamarindová omáčka, arašídy, klíčky.", allergens: "Korýši, vejce, arašídy, sója, ryby (omáčka)" },
    greencurry: { weight: "400 g", ingredients: "Kuřecí maso, zelené kari koření, kokosové mléko, lilek, bazalka, rýže.", allergens: "Může obsahovat stopy ořechů" },
    noodlesoup_r: { weight: "450 g", ingredients: "Hovězí vývar, rýžové nudle, hovězí maso, jarní cibulka, koriandr, limetka, chilli.", allergens: "Může obsahovat sóju" },
    riz_r: { weight: "450 g", ingredients: "Vepřové nebo kuřecí maso, strouhanka, mouka, vejce, bramborová kaše.", allergens: "Lepek, vejce, mléko" },
    chickensupreme: { weight: "350 g", ingredients: "Kuřecí prsa, brokolice, smetanová omáčka, bylinky.", allergens: "Mléko" },
    crispypork_rice: { weight: "400 g", ingredients: "Vepřové maso (křupavé), sladká sójová omáčka, rýže, jarní cibulka.", allergens: "Sója, může obsahovat lepek" },
    herbchicken: { weight: "350 g", ingredients: "Kuřecí maso marinované v bylinkách, česnek, olej, brambory nebo rýže.", allergens: "Může obsahovat lepek" },
    kungpao: { weight: "350 g", ingredients: "Kuřecí maso, arašídy, sušené chilli, paprika, sójová omáčka, rýže.", allergens: "Arašídy, sója" },
    friedrice_r: { weight: "400 g", ingredients: "Rýže, kuřecí maso, krevety, vejce, zelenina, sójová omáčka.", allergens: "Korýši, vejce, sója" },
    pumpkinrisotto: { weight: "350 g", ingredients: "Dýně, arborio rýže, parmazán, vývar, máslo.", allergens: "Mléko" },
    crispypork_norice: { weight: "300 g", ingredients: "Vepřové maso (křupavé), sladká sójová omáčka, jarní cibulka.", allergens: "Sója, může obsahovat lepek" },
    grilledveg: { weight: "300 g", ingredients: "Grilovaná sezónní zelenina, žampiony, bylinkový olej.", allergens: "—" },
  };

  function openDish2(key) {
    var d = dish2Data[key];
    if (!d) return;
    var btn = document.querySelector('.dish2-trigger[data-dish="' + key + '"]');
    document.getElementById("dish2Title").textContent = btn ? btn.textContent : key;
    document.getElementById("dish2Weight").textContent = d.weight;
    document.getElementById("dish2Ingredients").textContent = d.ingredients;
    document.getElementById("dish2Allergens").textContent = d.allergens;

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
    if (overlay) overlay.addEventListener("click", closeDish2);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDish2();
    });
  });
})();
