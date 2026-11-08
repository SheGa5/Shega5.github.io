// Strukturovana data (schema.org) pro Google a AI vyhledavace.
//
// Generuje se ze stranek samotnych, ne rucne - jidla a ceny uz zijou na trech
// mistech (index.html, index2.html, lang.js) a ctvrty rucne psany seznam by se
// rozesel pri prvni zmene ceny. Skript proto cte <li> ze stranek a vlozi
// hotovy JSON-LD mezi znacky SCHEMA-START a SCHEMA-END.
//
// Spusteni po kazde zmene menu nebo otviracich hodin:
//     node tools/gen-schema.js
//
// Bez parametru prepise oba soubory; s --kontrola jen rekne, jestli jsou
// aktualni (vhodne, kdyz si nejsi jisty, jestli jsi to po zmene pustil).

'use strict';

const fs = require('fs');
const path = require('path');

const KOREN = path.join(__dirname, '..');
const WEB = 'https://motolmixfusion.cz';

// Udaje, ktere se na strankach nedaji precist jednoznacne. Kdyz se zmeni
// otviraci doba nebo telefon, zmen je tady i v textu stranek.
const PODNIK = {
  nazev: 'MotolMixFusion',
  telefon: '+420604962398',
  ulice: 'Kudrnova 234/6',
  mesto: 'Praha 5',
  psc: '150 00',
  ctvrt: 'Motol',
  // Ut-Ne 10:00-22:00; v pondeli zavreno. Zavreny den se uvadi zamerne -
  // bez nej si Google domysli, ze je otevreno, a posila hosty na zavrene dvere.
  hodiny: [{ dny: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], od: '10:00', do: '22:00' }],
  zavreno: ['Monday'],
  kuchyne: ['Czech', 'Thai', 'Asian'],
  cenovaHladina: '$$',
  rezervace: 'https://calendar.app.google/YoSqNuTJ7RKH2dBe6',
  instagram: 'https://www.instagram.com/motolmixfusion',
};

const odEntit = t => String(t)
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/\s+/g, ' ').trim();

// Z <li> vytahne nazev, miru a cenu. Jidla maji nazev v tlacitku (klikem se
// otevre slozeni), napoje jsou prosty <span> - proto se nehleda konkretni
// znacka, ale prvni <span>, ktery neni mira, cena, tecky ani stuzka
// "Specialita podniku". Jinak by cely napojovy listek v datech chybel.
const PRESKOCIT = /class="(g\d?|dots\d?|price\d?|tag\d?)"/;

function polozky(html) {
  const out = [];
  for (const m of html.matchAll(/<li>([\s\S]*?)<\/li>/g)) {
    const blok = m[1];
    const cena = odEntit((blok.match(/class="price\d?"[^>]*>([\s\S]*?)<\/span>/) || [])[1] || '');
    const kc = Number(String(cena).replace(/[^\d]/g, ''));
    if (!kc) continue;
    let nazev = '';
    for (const s of blok.matchAll(/<span([^>]*)>([\s\S]*?)<\/span>/g)) {
      if (PRESKOCIT.test(s[1])) continue;
      const t = odEntit(s[2]);
      if (t) { nazev = t; break; }
    }
    const mira = odEntit((blok.match(/class="g\d?"[^>]*>([\s\S]*?)<\/span>/) || [])[1] || '');
    if (nazev) out.push({ nazev, mira, kc });
  }
  return out;
}

// Nadpisy sekci a jidla pod nimi. Poradi v souboru = poradi na strance, takze
// se jde jen podle pozice nadpisu.
function sekce(html) {
  const nadpisy = [...html.matchAll(/<h3[^>]*data-i18n="menu2?\.[^"]*"[^>]*>([\s\S]*?)<\/h3>/g)]
    .map(m => ({ nazev: odEntit(m[1]), od: m.index }));
  if (!nadpisy.length) return [{ nazev: 'Menu', polozky: polozky(html) }];
  return nadpisy.map((h, i) => {
    const do_ = i + 1 < nadpisy.length ? nadpisy[i + 1].od : html.length;
    return { nazev: h.nazev, polozky: polozky(html.slice(h.od, do_)) };
  }).filter(s => s.polozky.length);
}

function restaurace(menuUrl) {
  return {
    '@type': 'Restaurant',
    '@id': WEB + '/#restaurant',
    name: PODNIK.nazev,
    url: WEB + '/',
    telephone: PODNIK.telefon,
    image: [WEB + '/images/pristup.jpg'],
    servesCuisine: PODNIK.kuchyne,
    priceRange: PODNIK.cenovaHladina,
    currenciesAccepted: 'CZK',
    paymentAccepted: 'Hotovost, platební karta, QR platba',
    address: {
      '@type': 'PostalAddress',
      streetAddress: PODNIK.ulice,
      addressLocality: PODNIK.mesto,
      postalCode: PODNIK.psc,
      addressCountry: 'CZ',
    },
    areaServed: [{ '@type': 'Place', name: 'Praha 5 – Motol' }, { '@type': 'Place', name: 'Praha 5 – Košíře' }],
    openingHoursSpecification: [
      ...PODNIK.hodiny.map(h => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.dny, opens: h.od, closes: h.do,
      })),
      ...PODNIK.zavreno.map(d => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: d, opens: '00:00', closes: '00:00',
      })),
    ],
    acceptsReservations: 'True',
    potentialAction: {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: PODNIK.rezervace, inLanguage: 'cs' },
      result: { '@type': 'FoodEstablishmentReservation', name: 'Rezervace stolu' },
    },
    hasMenu: { '@id': menuUrl + '#menu' },
    sameAs: [PODNIK.instagram],
  };
}

function menu(url, nazevMenu, seznamSekci) {
  return {
    '@type': 'Menu',
    '@id': url + '#menu',
    name: nazevMenu,
    inLanguage: 'cs',
    url,
    hasMenuSection: seznamSekci.map(s => ({
      '@type': 'MenuSection',
      name: s.nazev,
      hasMenuItem: s.polozky.map(p => ({
        '@type': 'MenuItem',
        name: p.nazev,
        ...(p.mira ? { suggestedServingSize: p.mira } : {}),
        offers: { '@type': 'Offer', price: String(p.kc), priceCurrency: 'CZK' },
      })),
    })),
  };
}

const ZNACKA_OD = '<!-- SCHEMA-START (generuje tools/gen-schema.js — needituj ručně) -->';
const ZNACKA_DO = '<!-- SCHEMA-END -->';

function vloz(html, blok) {
  const skript = ZNACKA_OD + '\n<script type="application/ld+json">\n' +
    JSON.stringify(blok, null, 2) + '\n</script>\n' + ZNACKA_DO;
  const od = html.indexOf(ZNACKA_OD);
  if (od !== -1) {
    const do_ = html.indexOf(ZNACKA_DO, od);
    return html.slice(0, od) + skript + html.slice(do_ + ZNACKA_DO.length);
  }
  // Prvni spusteni: vlozit tesne pred </head>.
  return html.replace('</head>', skript + '\n</head>');
}

function zpracuj(soubor, nazevMenu, kontrola) {
  const cesta = path.join(KOREN, soubor);
  const html = fs.readFileSync(cesta, 'utf8');
  const url = WEB + '/' + soubor;
  const seznamSekci = sekce(html);
  const pocet = seznamSekci.reduce((s, x) => s + x.polozky.length, 0);
  const blok = {
    '@context': 'https://schema.org',
    '@graph': [restaurace(url), menu(url, nazevMenu, seznamSekci)],
  };
  const novy = vloz(html, blok);
  if (kontrola) {
    const sedi = novy === html;
    console.log(`${sedi ? '✓' : '!!'} ${soubor}: ${pocet} položek v ${seznamSekci.length} sekcích` +
      (sedi ? ' — data jsou aktuální' : ' — DATA NESEDÍ, pusť bez --kontrola'));
    return sedi ? 0 : 1;
  }
  if (novy === html) {
    console.log(`= ${soubor}: beze změny (${pocet} položek)`);
  } else {
    fs.writeFileSync(cesta, novy, 'utf8');
    console.log(`✓ ${soubor}: ${pocet} položek v ${seznamSekci.length} sekcích`);
  }
  return 0;
}

const kontrola = process.argv.includes('--kontrola');
let chyb = 0;
chyb += zpracuj('index.html', 'Menu To GO — rozvoz a výdej', kontrola);
chyb += zpracuj('index2.html', 'Menu restaurace', kontrola);
if (chyb) process.exit(1);
