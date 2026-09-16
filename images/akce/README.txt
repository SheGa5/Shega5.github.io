SLOŽKA PRO AKCE / UDÁLOSTI (fotky a videa)
===========================================

Stránka:  https://motolmixfusion.cz/akce.html
(a totéž se ukazuje i v POS: motolmixfusion-pos.onrender.com/akce.html)

Stránka zatím není nikde prolinkovaná — jde na ni jen přes přímou adresu.
Fotky a videa patří JEN sem, do tohohle repa (Shega5.github.io); POS si je
načítá odtud, takže se nikam nenahrávají dvakrát.

JAK PŘIDAT NOVOU AKCI
---------------------
1. Tady v "images/akce" vytvoř novou složku pojmenovanou takto:

       RRRR-MM-DD_nazev-akce

   například:   2026-09-15_foceni-jidel
                2026-12-05_vanocni-vecere

   Datum na začátku určuje pořadí — nejnovější akce je na stránce nahoře.
   Podtržítka a pomlčky v názvu se na stránce zobrazí jako mezery.

2. Do té složky nahraj fotky a videa (na GitHubu: "Add file" → "Upload files").

   Fotky:  .jpg  .jpeg  .png  .gif  .webp  .avif
   Videa:  .mp4  .webm  .mov  .m4v  .ogv

   Řadí se podle názvu souboru, takže pomáhá číslovat: 01.jpg, 02.jpg, …

3. Hotovo. Nic se nikam nezapisuje, stránka si složky načte sama.

VOLITELNÉ: VLASTNÍ NÁZEV A POPIS
--------------------------------
Do složky akce přidej soubor  popis.txt :

    Focení jídel v restauraci
    Ve středu jsme fotili nové menu — brancin, wok i dezerty.
    Fotil Honza, děkujeme!

  • první řádek = nadpis akce (přepíše název složky)
  • zbytek = text pod nadpisem

VOLITELNÉ: VIDEO Z YOUTUBE
--------------------------
Velká videa (nad ~50 MB) na GitHub nepatří — nahraj je na YouTube a do složky
akce přidej soubor  video-odkazy.txt  s jednou adresou na řádek:

    https://www.youtube.com/watch?v=XXXXXXXXXXX
    https://youtu.be/YYYYYYYYYYY

Řádek začínající # se ignoruje (dá se použít na poznámky).

POZOR NA VELIKOST
-----------------
  • fotka do webu:  ideálně do 1600 px na delší straně, do ~500 kB
  • video přímo v repu: max ~50 MB (GitHub nad 100 MB soubor vůbec nepustí)
  • všechno nahrané sem je veřejně dostupné na internetu
