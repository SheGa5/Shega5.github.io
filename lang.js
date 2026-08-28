   (function () {
  "use strict";

  var LANG_NAMES = {
    cs: "Čeština",
    en: "English",
    fr: "Français",
    uk: "Українська",
    vi: "Tiếng Việt",
    th: "ไทย"
  };

  var translations = {
    cs: {
      "nav.menu": "Menu",
      "nav.menuGo": "Jídelníček to GO",
      "nav.menuRestaurant": "Restaurační menu",
      "nav.order": "Objednat",
      "nav.location": "Kde nás najdete",
      "nav.contact": "Kontakt",
      "lang.choose": "Zvolte jazyk",
      "hero.eyebrow": "Kudrnova 234 · Praha 5 – Motol",
      "hero.title": "Fusion chutí Česka a Asie, jen pár kroků od FN Motol",
      "hero.lede": "Vaříme čerstvě každý den. Objednejte si oběd mezi směnami",
      "hero.eveningLink": "nebo se za námi zastavte odpoledne či večer",
      "hero.btnOrder": "Chci objednat",
      "hero.btnMenu": "Zobrazit menu",
      "menu.title": "Jídelníček to GO",
      "menu.note": "⚠ Ukázkové položky — finální menu a ceny budou po 02.09.2026, jakmile budou hotové.",
      "menu.mainsHeading": "Hlavní jídla",
      "menu.soupsHeading": "Salát & malé",
      "menu.dailyHeading": "Denní menu (11–14 h)",
      "menu.allergen": "Alergeny u jednotlivých jídel najdete po kliknutí na položku menu. MotolMixFusion nenahrazuje nemocniční ani dietní stravu — objednávkou potvrzujete, že jídlo konzumujete na vlastní odpovědnost.",
      "order.dineInName": "Posezení v restauraci",
      "order.dineInDesc": "10 stolů, rezervace přes kalendář níže.",
      "menu.clickHint": "💡 Klikněte na jídlo pro složení a alergeny.",
      "dish.ingredientsLabel": "Složení",
      "dish.allergenLabel": "Alergeny",
      "dish.weightLabel": "gramáž",
      "dish.priceLabel": "cena:",
      "res.btn": "Rezervovat stůl",
      "res.title": "Rezervace stolu",
      "res.date": "Datum",
      "res.time": "Čas",
      "res.guests": "Počet osob",
      "res.name": "Jméno",
      "res.phone": "Telefon",
      "res.note": "Poznámka (nepovinné)",
      "res.submit": "Odeslat rezervaci",
      "res.hint": "Odesláním se otevře e-mail s vyplněnými údaji — rezervaci potvrdíme zpětně telefonicky nebo e-mailem.",
      "dish.riz_pork": "Řízek vepřový s bramborovou kaší",
      "dish.riz_chicken": "Řízek kuřecí s bramborovou kaší",
      "dish.padthai": "Pad Thai (kuře, krevety)",
      "dish.friedrice": "Fried rice (kuře, krevety)",
      "dish.noodlesoup": "Thajská nudlová polévka s hovězím",
      "dish.greencurry": "Chicken green curry s rýží",
      "dish.crispypork_rice": "Crispy pork s rýží, sladká sójová omáčka",
      "dish.kungpao": "Chicken kung pao",
      "dish.herbchickenwing": "Herb fried chicken wings",
      "dish.crispypork_norice": "Crispy pork, sladká sójová omáčka",
      "dish2.siomai_r": "Siomai (vepřové, krevety), 6 ks",
      "dish2.gyoza_r": "Gyoza (vepřové), 6 ks",
      "dish2.beefbroth": "Beef broth s nudlemi",
      "dish2.carrotsoup": "Carrot soup",
      "dish2.stickyrice": "Sticky rice coconut",
      "dish2.pannacotta": "Panna cotta fruit",
      "dish2.cheesecake": "Cheesecake",
      "dish2.salmon": "Losos grilovaný, houby, pečené brambory",
      "dish2.noodlesoup_r": "Thai noodles beef soup",
      "dish2.chickensupreme": "Chicken supreme s brokolicí",
      "dish2.pumpkinrisotto": "Dýňové rizoto (Pumpkin risotto)",
      "dish2.herbchicken": "Herb fried chicken",
      "dish2.grilledveg": "Grilled vegetable mushroom",
      "dish.caesar": "Caesar salát (kuře, krevety)",
      "dish.leafsalad": "Listový salát s javorovým dresinkem",
      "dish.springroll": "Jarní závitky (kuřecí), 4 ks",
      "dish.gyoza": "Gyoza (vepřové) se sójovou omáčkou, 4 ks",
      "dish.siomai": "Siomai (vepřové, krevety), 4 ks",
      "dish.tomyam": "Tom Yam Kung",
      "order.title": "Jak objednat",
      "order.tagDelivery": "Rozvoz",
      "order.tagHere": "U nás",
      "order.tagOwnDelivery": "Vlastní dovoz",
      "order.ownDeliveryName": "Objednat přímo u nás",
      "order.ownDeliveryDesc": "Bez provizí agregátorům, doručíme sami.",
      "order.woltDesc": "Doručíme na patro, do bytu i před vrátnici.",
      "order.boltDesc": "Objednávka do pár kliků, sledování v appce.",
      "order.menu55Name": "Menu55 — rezervace stolu",
      "order.menu55Desc": "10 stolů, rychlá obsluha o pauze.",
      "location.title": "Kde nás najdete",
      "location.metro": "Nemocnice Motol (6 min pěšky)",
      "location.tram": "Hotel Golf (3 min pěšky)",
      "location.bus": "Nemocnice Motol (6 min pěšky)",
      "location.hoursLabel": "Otevřeno:",
      "location.hours": "Út–Ne 10:00–22:00",
      "contact.title": "Kontakt",
      "contact.lede": "Dotaz, hromadná objednávka pro oddělení, nebo si chcete jen popovídat o menu?",
      "contact.phone": "Telefon",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234/6, Praha 5",
      "footer.disclaimer": "Jídlo nenahrazuje nemocniční ani dietní stravu. Konzumace na vlastní odpovědnost.",
      "nav2.story": "Náš příběh",
      "nav2.menu": "Menu",
      "nav2.evening": "Večer u nás",
      "nav2.catering": "Catering",
      "nav2.parties": "Oslavy",
      "nav2.contact": "Kontakt",
      "menu2.deptLabel": "JÍDELNÍČEK",
      "menu2.title": "Restaurační menu",
      "menu2.note": "Servírujeme od 12 hodin. 💡 Klikněte na jídlo pro složení a alergeny.",
      "menu2.startersHeading": "Předkrmy",
      "menu2.dessertsHeading": "Dezerty",
      "menu2.mainsHeading": "Hlavní jídla",
      "menu2.allergenNote": "MotolMixFusion nenahrazuje nemocniční ani dietní stravu — objednávkou/konzumací potvrzujete, že jídlo konzumujete na vlastní odpovědnost.",
      "hero2.titleLine1": "Po šestnácté hodině",
      "hero2.titleLine2": "u nás plyne čas jinak.",
      "hero2.lede": "Přes den vaříme rychle, na oběd mezi směnami. Večer si na jídlo i na vás uděláme čas — u stolu, na oslavě, nebo tam, kde budete potřebovat vy.",
      "hero2.time1Label": "Express oběd",
      "hero2.time2Label": "Mění se nálada",
      "hero2.time3Label": "Zavíráme",
      "hero2.btnEvening": "Prohlédnout večerní nabídku",
      "story.title": "Dvě kuchyně, jeden stůl.",
      "story.p1": "MotolMixFusion vaří Onuma — recepty rostly na dvou stranách světa a sešly se v jedné kuchyni v Motole. Česká svíčková vedle wok jídel, vývar vedle knedlíku. Nesnažíme se být exotičtí ani okázalí — vaříme to, co bychom chtěli sami dostat na talíř po dlouhém dni.",
      "story.p2": "Přes den to musí být rychlé, protože víme, jak krátkou pauzu má člověk na směně. Večer si ale na vás rádi uděláme čas — u sklenky vína, u dobrého jídla, beze spěchu.",
      "story.photoPlaceholder": "Sem přijde fotka Onumy v kuchyni",
      "evening2.title": "Posezení bez spěchu",
      "evening2.lede": "Od 16 hodin otevíráme prostor pro klidnější večeři — stejná kuchyně, o něco pomalejší tempo. Rezervace stolu doporučujeme předem.",
      "catering2.eyebrow": "Catering",
      "catering2.title": "Přivezeme jídlo k vám.",
      "catering2.lede": "Firemní akce, konference na klinice, rodinná oslava — připravíme menu na míru a jídlo dovezeme přesně na čas. Množství, chody i styl servírování (bufet nebo balené porce) domluvíme podle akce.",
      "catering2.point1": "Menu na míru — česká i asijská kuchyně",
      "catering2.point2": "Od 10 do 200 porcí",
      "catering2.point3": "Dovoz a případně i servírování na místě",
      "catering2.btn": "Poptat catering",
      "catering2.photoPlaceholder": "Sem přijde fotka z cateringové akce",
      "oslavy2.eyebrow": "Oslavy a soukromé akce",
      "oslavy2.title": "Celý podnik jen pro vás.",
      "oslavy2.lede": "Narozeniny, výročí, firemní večírek nebo rozlučka s kolegy — restauraci si můžete pronajmout celou, mimo běžný provoz i po zavírací době. Kapacita 10 stolů, až 40 hostů.",
      "oslavy2.point1": "Kapacita až 40 hostů (10 stolů)",
      "oslavy2.point2": "Vlastní menu, hudba i výzdoba dle domluvy",
      "oslavy2.point3": "Možnost i mimo otevírací dobu",
      "oslavy2.btn": "Poptat oslavu",
      "oslavy2.photoPlaceholder": "Sem přijde fotka prostoru při oslavě",
      "contact2.title": "Domluvme se",
      "contact2.lede": "Na catering i oslavy odpovídáme obvykle do druhého dne.",
      "contact2.addressLabel": "Adresa",
      "footer2.backLink": "← Zpět na denní express menu",
      "inquiry.titleCatering": "Poptávka cateringu",
      "inquiry.titleEvent": "Poptávka oslavy / soukromé akce",
      "inquiry.dateLabel": "Datum akce",
      "inquiry.countLabelCatering": "Počet porcí",
      "inquiry.countLabelEvent": "Počet hostů",
      "inquiry.msgLabel": "Popis / přání",
      "inquiry.submitBtn": "Odeslat poptávku",
      "inquiry.hint": "Otevře se e-mail s vyplněnými údaji, ozveme se zpět."
    },

    en: {
      "nav.menu": "Menu",
      "nav.menuGo": "Menu to GO",
      "nav.menuRestaurant": "Restaurant menu",
      "nav.order": "Order",
      "nav.location": "Find us",
      "nav.contact": "Contact",
      "lang.choose": "Choose language",
      "hero.eyebrow": "Kudrnova 234 · Prague 5 – Motol",
      "hero.title": "A fusion of Czech and Asian flavors, just steps from Motol hospital",
      "hero.lede": "Cooked fresh every day. Order for a break between shifts",
      "hero.eveningLink": "or stop by in the afternoon or evening",
      "hero.btnOrder": "Order now",
      "hero.btnMenu": "View menu",
      "menu.title": "Menu to GO",
      "menu.note": "⚠ Sample items — replace with the final menu and prices once ready.",
      "menu.mainsHeading": "Mains",
      "menu.soupsHeading": "Salad & small plates",
      "menu.dailyHeading": "Daily menu (11am–2pm)",
      "menu.allergen": "Tap any menu item to see its allergens. MotolMixFusion does not replace hospital or medical diets — by ordering you confirm you're eating at your own responsibility.",
      "order.dineInName": "Dine in with us",
      "order.dineInDesc": "10 tables, book via the calendar below.",
      "menu.clickHint": "💡 Tap a dish to see ingredients and allergens.",
      "dish.ingredientsLabel": "Ingredients",
      "dish.allergenLabel": "Allergens",
      "dish.weightLabel": "weight",
      "dish.priceLabel": "price:",
      "res.btn": "Reserve a table",
      "res.title": "Table reservation",
      "res.date": "Date",
      "res.time": "Time",
      "res.guests": "Number of guests",
      "res.name": "Name",
      "res.phone": "Phone",
      "res.note": "Note (optional)",
      "res.submit": "Send reservation",
      "res.hint": "This opens an email with your details filled in — we'll confirm the reservation back by phone or email.",
      "dish.riz_pork": "Pork schnitzel with mashed potatoes",
      "dish.riz_chicken": "Chicken schnitzel with mashed potatoes",
      "dish.padthai": "Pad Thai (chicken, shrimp)",
      "dish.friedrice": "Fried rice (chicken, shrimp)",
      "dish.noodlesoup": "Thai beef noodle soup",
      "dish.greencurry": "Chicken green curry with rice",
      "dish.crispypork_rice": "Crispy pork with rice, sweet soy sauce",
      "dish.kungpao": "Chicken kung pao",
      "dish.herbchickenwing": "Herb fried chicken wings",
      "dish.crispypork_norice": "Crispy pork, sweet soy sauce",
      "dish2.siomai_r": "Siomai (pork, shrimp), 6 pcs",
      "dish2.gyoza_r": "Gyoza (pork), 6 pcs",
      "dish2.beefbroth": "Beef broth with noodles",
      "dish2.carrotsoup": "Carrot soup",
      "dish2.stickyrice": "Sticky rice coconut",
      "dish2.pannacotta": "Panna cotta fruit",
      "dish2.cheesecake": "Cheesecake",
      "dish2.salmon": "Grilled salmon, mushrooms, roasted potatoes",
      "dish2.noodlesoup_r": "Thai noodles beef soup",
      "dish2.chickensupreme": "Chicken supreme with broccoli",
      "dish2.pumpkinrisotto": "Pumpkin risotto",
      "dish2.herbchicken": "Herb fried chicken",
      "dish2.grilledveg": "Grilled vegetable mushroom",
      "dish.caesar": "Caesar salad (chicken, shrimp)",
      "dish.leafsalad": "Leaf salad with maple dressing",
      "dish.springroll": "Spring rolls (chicken), 4 pcs",
      "dish.gyoza": "Gyoza (pork) with soy sauce, 4 pcs",
      "dish.siomai": "Siomai (pork, shrimp), 4 pcs",
      "dish.tomyam": "Tom Yum Kung",
      "order.title": "How to order",
      "order.tagDelivery": "Delivery",
      "order.tagHere": "Dine-in",
      "order.tagOwnDelivery": "Our own delivery",
      "order.ownDeliveryName": "Order directly with us",
      "order.ownDeliveryDesc": "No middleman fees, we deliver ourselves.",
      "order.woltDesc": "We deliver to your floor, flat, or the front desk.",
      "order.boltDesc": "Order in a few taps, track it in the app.",
      "order.menu55Name": "Menu55 — table booking",
      "order.menu55Desc": "10 tables, fast service on your break.",
      "location.title": "Find us",
      "location.metro": "Nemocnice Motol station (6 min walk)",
      "location.tram": "Hotel Golf stop (3 min walk)",
      "location.bus": "Nemocnice Motol stop (6 min walk)",
      "location.hoursLabel": "Open:",
      "location.hours": "Tue–Sun 10:00am–10pm",
      "contact.title": "Contact",
      "contact.lede": "Questions, a group order for your department, or just want to talk menu?",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234/6, Prague 5",
      "footer.disclaimer": "Food does not replace hospital or medical diets. Eat at your own responsibility.",
      "nav2.story": "Our Story",
      "nav2.menu": "Menu",
      "nav2.evening": "Evening at ours",
      "nav2.catering": "Catering",
      "nav2.parties": "Parties",
      "nav2.contact": "Contact",
      "menu2.deptLabel": "MENU",
      "menu2.title": "Restaurant menu",
      "menu2.note": "We serve from 4pm. 💡 Tap a dish to see ingredients and allergens.",
      "menu2.startersHeading": "Starters",
      "menu2.dessertsHeading": "Desserts",
      "menu2.mainsHeading": "Mains",
      "menu2.allergenNote": "MotolMixFusion does not replace hospital or medical diets — by ordering/eating you confirm you're doing so at your own responsibility.",
      "hero2.titleLine1": "After four in the afternoon,",
      "hero2.titleLine2": "time moves differently here.",
      "hero2.lede": "During the day we cook fast, for lunch between shifts. In the evening we take our time for the food and for you — at the table, at a party, or wherever you need us.",
      "hero2.time1Label": "Express lunch",
      "hero2.time2Label": "The mood shifts",
      "hero2.time3Label": "We close",
      "hero2.btnEvening": "See the evening menu",
      "story.title": "Two kitchens, one table.",
      "story.p1": "MotolMixFusion is cooked by Onuma — recipes that grew on two sides of the world and met in one kitchen in Motol. Czech beef sirloin next to wok dishes, broth next to dumplings. We don't try to be exotic or flashy — we cook what we'd want on our own plate after a long day.",
      "story.p2": "During the day it has to be fast, because we know how short a shift break is. In the evening, though, we're happy to take our time for you — with a glass of wine, good food, no rush.",
      "story.photoPlaceholder": "Photo of Onuma in the kitchen goes here",
      "evening2.title": "An unhurried evening",
      "evening2.lede": "From 4pm we open up the space for a calmer dinner — same kitchen, a slightly slower pace. We recommend booking a table in advance.",
      "catering2.eyebrow": "Catering",
      "catering2.title": "We'll bring the food to you.",
      "catering2.lede": "Company events, clinic conferences, family celebrations — we'll prepare a tailored menu and deliver the food right on time. We'll agree on quantity, courses, and serving style (buffet or packed portions) to match your event.",
      "catering2.point1": "Tailored menu — Czech and Asian cuisine",
      "catering2.point2": "From 10 to 200 portions",
      "catering2.point3": "Delivery and, if needed, on-site serving",
      "catering2.btn": "Request catering",
      "catering2.photoPlaceholder": "Photo from a catering event goes here",
      "oslavy2.eyebrow": "Parties and private events",
      "oslavy2.title": "The whole place, just for you.",
      "oslavy2.lede": "Birthdays, anniversaries, a company party or a farewell for colleagues — you can rent out the whole restaurant, outside regular hours too, even after closing time. Capacity 10 tables, up to 40 guests.",
      "oslavy2.point1": "Capacity up to 40 guests (10 tables)",
      "oslavy2.point2": "Your own menu, music, and decorations by arrangement",
      "oslavy2.point3": "Possible outside regular opening hours too",
      "oslavy2.btn": "Request a party",
      "oslavy2.photoPlaceholder": "Photo of the space during a party goes here",
      "contact2.title": "Let's talk",
      "contact2.lede": "We usually reply to catering and party inquiries by the next day.",
      "contact2.addressLabel": "Address",
      "footer2.backLink": "← Back to the day express menu",
      "inquiry.titleCatering": "Catering inquiry",
      "inquiry.titleEvent": "Party / private event inquiry",
      "inquiry.dateLabel": "Event date",
      "inquiry.countLabelCatering": "Number of portions",
      "inquiry.countLabelEvent": "Number of guests",
      "inquiry.msgLabel": "Description / wishes",
      "inquiry.submitBtn": "Send inquiry",
      "inquiry.hint": "This opens an email with your details filled in, we'll get back to you."
    },

    fr: {
      "nav.menu": "Menu",
      "nav.menuGo": "Menu à emporter",
      "nav.menuRestaurant": "Menu du restaurant",
      "nav.order": "Commander",
      "nav.location": "Nous trouver",
      "nav.contact": "Contact",
      "lang.choose": "Choisissez la langue",
      "hero.eyebrow": "Kudrnova 234 · Prague 5 – Motol",
      "hero.title": "Fusion de saveurs tchèques et asiatiques, à quelques pas de l'hôpital Motol",
      "hero.lede": "Cuisiné frais chaque jour. Commandez pour votre pause entre deux services",
      "hero.eveningLink": "ou passez nous voir l'après-midi ou le soir",
      "hero.btnOrder": "Commander",
      "hero.btnMenu": "Voir le menu",
      "menu.title": "Le menu to GO",
      "menu.note": "⚠ Exemples de plats — à remplacer par le menu et les prix définitifs.",
      "menu.mainsHeading": "Plats principaux",
      "menu.soupsHeading": "Salade & petites entrées",
      "menu.dailyHeading": "Menu du jour (11h–14h)",
      "menu.allergen": "Cliquez sur un plat pour voir ses allergènes. MotolMixFusion ne remplace pas un régime hospitalier ou médical — en commandant, vous confirmez consommer sous votre propre responsabilité.",
      "order.dineInName": "Sur place chez nous",
      "order.dineInDesc": "10 tables, réservez via le calendrier ci-dessous.",
      "menu.clickHint": "💡 Cliquez sur un plat pour voir les ingrédients et allergènes.",
      "dish.ingredientsLabel": "Ingrédients",
      "dish.allergenLabel": "Allergènes",
      "dish.weightLabel": "poids",
      "dish.priceLabel": "prix :",
      "res.btn": "Réserver une table",
      "res.title": "Réservation de table",
      "res.date": "Date",
      "res.time": "Heure",
      "res.guests": "Nombre de personnes",
      "res.name": "Nom",
      "res.phone": "Téléphone",
      "res.note": "Remarque (facultatif)",
      "res.submit": "Envoyer la réservation",
      "res.hint": "Cela ouvre un e-mail pré-rempli avec vos informations — nous confirmerons la réservation par téléphone ou e-mail.",
      "dish.riz_pork": "Escalope de porc, purée de pommes de terre",
      "dish.riz_chicken": "Escalope de poulet, purée de pommes de terre",
      "dish.padthai": "Pad Thaï (poulet, crevettes)",
      "dish.friedrice": "Riz sauté (poulet, crevettes)",
      "dish.noodlesoup": "Soupe de nouilles thaïe au bœuf",
      "dish.greencurry": "Curry vert au poulet, riz",
      "dish.crispypork_rice": "Porc croustillant au riz, sauce soja sucrée",
      "dish.kungpao": "Poulet kung pao",
      "dish.herbchickenwing": "Ailes de poulet frites aux herbes",
      "dish.crispypork_norice": "Porc croustillant, sauce soja sucrée",
      "dish2.siomai_r": "Siomai (porc, crevettes), 6 pcs",
      "dish2.gyoza_r": "Gyoza (porc), 6 pcs",
      "dish2.beefbroth": "Bouillon de bœuf aux nouilles",
      "dish2.carrotsoup": "Soupe de carottes",
      "dish2.stickyrice": "Riz gluant à la noix de coco",
      "dish2.pannacotta": "Panna cotta aux fruits",
      "dish2.cheesecake": "Cheesecake",
      "dish2.salmon": "Saumon grillé, champignons, pommes de terre rôties",
      "dish2.noodlesoup_r": "Soupe de nouilles thaïe au bœuf",
      "dish2.chickensupreme": "Suprême de poulet au brocoli",
      "dish2.pumpkinrisotto": "Risotto à la courge",
      "dish2.herbchicken": "Poulet frit aux herbes",
      "dish2.grilledveg": "Légumes grillés et champignons",
      "dish.caesar": "Salade César (poulet, crevettes)",
      "dish.leafsalad": "Salade verte, sauce à l'érable",
      "dish.springroll": "Rouleaux de printemps (poulet), 4 pcs",
      "dish.gyoza": "Gyoza (porc), sauce soja, 4 pcs",
      "dish.siomai": "Siomai (porc, crevettes), 4 pcs",
      "dish.tomyam": "Tom Yum Kung",
      "order.title": "Comment commander",
      "order.tagDelivery": "Livraison",
      "order.tagHere": "Sur place",
      "order.tagOwnDelivery": "Livraison maison",
      "order.ownDeliveryName": "Commander directement chez nous",
      "order.ownDeliveryDesc": "Sans commission, nous livrons nous-mêmes.",
      "order.woltDesc": "Livré à votre étage, chez vous ou à l'accueil.",
      "order.boltDesc": "Commande en quelques clics, suivi dans l'appli.",
      "order.menu55Name": "Menu55 — réservation de table",
      "order.menu55Desc": "10 tables, service rapide pendant votre pause.",
      "location.title": "Nous trouver",
      "location.metro": "Station Nemocnice Motol (6 min à pied)",
      "location.tram": "Arrêt Hotel Golf (3 min à pied)",
      "location.bus": "Arrêt Nemocnice Motol (6 min à pied)",
      "location.hoursLabel": "Ouvert :",
      "location.hours": "Mar–Dim 10h–22h",
      "contact.title": "Contact",
      "contact.lede": "Une question, une commande groupée pour votre service, ou juste envie de parler menu ?",
      "contact.phone": "Téléphone",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234/6, Prague 5",
      "footer.disclaimer": "Ces plats ne remplacent pas un régime hospitalier ou médical. Consommation sous votre propre responsabilité.",
      "nav2.story": "Notre histoire",
      "nav2.menu": "Menu",
      "nav2.evening": "Le soir chez nous",
      "nav2.catering": "Traiteur",
      "nav2.parties": "Fêtes",
      "nav2.contact": "Contact",
      "menu2.deptLabel": "MENU",
      "menu2.title": "Menu du restaurant",
      "menu2.note": "Service à partir de 16h. 💡 Cliquez sur un plat pour voir les ingrédients et allergènes.",
      "menu2.startersHeading": "Entrées",
      "menu2.dessertsHeading": "Desserts",
      "menu2.mainsHeading": "Plats principaux",
      "menu2.allergenNote": "MotolMixFusion ne remplace pas un régime hospitalier ou médical — en commandant/consommant, vous confirmez le faire sous votre propre responsabilité.",
      "hero2.titleLine1": "Après seize heures,",
      "hero2.titleLine2": "le temps s'écoule autrement chez nous.",
      "hero2.lede": "Le jour, nous cuisinons vite, pour le déjeuner entre deux services. Le soir, nous prenons le temps pour la cuisine et pour vous — à table, en fête, ou là où vous en avez besoin.",
      "hero2.time1Label": "Déjeuner express",
      "hero2.time2Label": "L'ambiance change",
      "hero2.time3Label": "Nous fermons",
      "hero2.btnEvening": "Voir l'offre du soir",
      "story.title": "Deux cuisines, une seule table.",
      "story.p1": "MotolMixFusion est cuisiné par Onuma — des recettes qui ont grandi aux deux bouts du monde et se sont rencontrées dans une seule cuisine à Motol. Le bœuf à la crème tchèque à côté des plats au wok, le bouillon à côté des knedlíky. Nous n'essayons pas d'être exotiques ni tape-à-l'œil — nous cuisinons ce que nous aimerions nous-mêmes trouver dans notre assiette après une longue journée.",
      "story.p2": "Le jour, il faut que ce soit rapide, car nous savons combien la pause d'un service est courte. Le soir, en revanche, nous prenons volontiers le temps pour vous — autour d'un verre de vin, d'un bon repas, sans précipitation.",
      "story.photoPlaceholder": "Photo d'Onuma en cuisine à venir",
      "evening2.title": "Une soirée sans hâte",
      "evening2.lede": "À partir de 16h, nous ouvrons un espace pour un dîner plus calme — la même cuisine, un rythme un peu plus lent. Nous recommandons de réserver une table à l'avance.",
      "catering2.eyebrow": "Traiteur",
      "catering2.title": "Nous vous apportons le repas.",
      "catering2.lede": "Événements d'entreprise, conférences en clinique, fête de famille — nous préparons un menu sur mesure et livrons le repas pile à l'heure. Nous convenons de la quantité, des plats et du style de service (buffet ou portions emballées) selon votre événement.",
      "catering2.point1": "Menu sur mesure — cuisine tchèque et asiatique",
      "catering2.point2": "De 10 à 200 portions",
      "catering2.point3": "Livraison et, si besoin, service sur place",
      "catering2.btn": "Demander un devis traiteur",
      "catering2.photoPlaceholder": "Photo d'un événement traiteur à venir",
      "oslavy2.eyebrow": "Fêtes et événements privés",
      "oslavy2.title": "Tout le restaurant, rien que pour vous.",
      "oslavy2.lede": "Anniversaires, jubilés, fête d'entreprise ou pot de départ entre collègues — vous pouvez louer tout le restaurant, en dehors des heures habituelles et même après la fermeture. Capacité 10 tables, jusqu'à 40 invités.",
      "oslavy2.point1": "Capacité jusqu'à 40 invités (10 tables)",
      "oslavy2.point2": "Menu, musique et décoration sur mesure selon accord",
      "oslavy2.point3": "Possible aussi en dehors des heures d'ouverture",
      "oslavy2.btn": "Demander un devis fête",
      "oslavy2.photoPlaceholder": "Photo de l'espace pendant une fête à venir",
      "contact2.title": "Parlons-en",
      "contact2.lede": "Nous répondons généralement aux demandes de traiteur et de fêtes sous 24h.",
      "contact2.addressLabel": "Adresse",
      "footer2.backLink": "← Retour au menu express du jour",
      "inquiry.titleCatering": "Demande de traiteur",
      "inquiry.titleEvent": "Demande de fête / événement privé",
      "inquiry.dateLabel": "Date de l'événement",
      "inquiry.countLabelCatering": "Nombre de portions",
      "inquiry.countLabelEvent": "Nombre d'invités",
      "inquiry.msgLabel": "Description / souhaits",
      "inquiry.submitBtn": "Envoyer la demande",
      "inquiry.hint": "Cela ouvre un e-mail pré-rempli avec vos informations, nous vous répondrons."
    },

    uk: {
      "nav.menu": "Меню",
      "nav.menuGo": "Меню на виніс",
      "nav.menuRestaurant": "Ресторанне меню",
      "nav.order": "Замовити",
      "nav.location": "Де нас знайти",
      "nav.contact": "Контакти",
      "lang.choose": "Виберіть мову",
      "hero.eyebrow": "Kudrnova 234 · Прага 5 – Мотол",
      "hero.title": "Ф'южн чеських і азійських смаків, за кілька кроків від лікарні Мотол",
      "hero.lede": "Готуємо свіже щодня. Замовте на обід між змінами",
      "hero.eveningLink": "або завітайте до нас вдень чи ввечері",
      "hero.btnOrder": "Замовити",
      "hero.btnMenu": "Переглянути меню",
      "menu.title": "Меню to GO",
      "menu.note": "⚠ Приклад страв — замініть остаточним меню та цінами, коли будуть готові.",
      "menu.mainsHeading": "Основні страви",
      "menu.soupsHeading": "Салати та закуски",
      "menu.dailyHeading": "Меню дня (11:00–14:00)",
      "menu.allergen": "Натисніть на страву, щоб побачити алергени. MotolMixFusion не замінює лікарняне чи дієтичне харчування — оформлюючи замовлення, ви підтверджуєте, що споживаєте їжу на власну відповідальність.",
      "order.dineInName": "Столик у закладі",
      "order.dineInDesc": "10 столиків, бронювання через календар нижче.",
      "menu.clickHint": "💡 Натисніть на страву, щоб побачити склад та алергени.",
      "dish.ingredientsLabel": "Склад",
      "dish.allergenLabel": "Алергени",
      "dish.weightLabel": "вага",
      "dish.priceLabel": "ціна:",
      "res.btn": "Забронювати столик",
      "res.title": "Бронювання столика",
      "res.date": "Дата",
      "res.time": "Час",
      "res.guests": "Кількість осіб",
      "res.name": "Ім'я",
      "res.phone": "Телефон",
      "res.note": "Коментар (необов'язково)",
      "res.submit": "Надіслати бронювання",
      "res.hint": "Відкриється лист із заповненими даними — ми підтвердимо бронювання телефоном або електронною поштою.",
      "dish.riz_pork": "Шніцель свинячий з картопляним пюре",
      "dish.riz_chicken": "Шніцель курячий з картопляним пюре",
      "dish.padthai": "Пад Тай (курка, креветки)",
      "dish.friedrice": "Смажений рис (курка, креветки)",
      "dish.noodlesoup": "Тайський суп з локшиною та яловичиною",
      "dish.greencurry": "Курячий зелений карі з рисом",
      "dish.crispypork_rice": "Хрустка свинина з рисом, солодкий соєвий соус",
      "dish.kungpao": "Курка кунг пао",
      "dish.herbchickenwing": "Курячі крильця смажені з травами",
      "dish.crispypork_norice": "Хрустка свинина, солодкий соєвий соус",
      "dish2.siomai_r": "Сіомай (свинина, креветки), 6 шт",
      "dish2.gyoza_r": "Гьоза (свинина), 6 шт",
      "dish2.beefbroth": "Яловичий бульйон з локшиною",
      "dish2.carrotsoup": "Морквяний суп",
      "dish2.stickyrice": "Липкий рис з кокосом",
      "dish2.pannacotta": "Панна-котта з фруктами",
      "dish2.cheesecake": "Чізкейк",
      "dish2.salmon": "Лосось на грилі, гриби, запечена картопля",
      "dish2.noodlesoup_r": "Тайський суп з локшиною та яловичиною",
      "dish2.chickensupreme": "Курячий супрім з брокколі",
      "dish2.pumpkinrisotto": "Гарбузове різотто",
      "dish2.herbchicken": "Курка смажена з травами",
      "dish2.grilledveg": "Гриль-овочі з грибами",
      "dish.caesar": "Салат Цезар (курка, креветки)",
      "dish.leafsalad": "Листовий салат з кленовою заправкою",
      "dish.springroll": "Спрінг-роли (курячі), 4 шт",
      "dish.gyoza": "Гьоза (свинина) із соєвим соусом, 4 шт",
      "dish.siomai": "Сіомай (свинина, креветки), 4 шт",
      "dish.tomyam": "Том Ям Кунг",
      "order.title": "Як замовити",
      "order.tagDelivery": "Доставка",
      "order.tagHere": "У закладі",
      "order.tagOwnDelivery": "Власна доставка",
      "order.ownDeliveryName": "Замовити напряму в нас",
      "order.ownDeliveryDesc": "Без комісій посередникам, доставляємо самі.",
      "order.woltDesc": "Доставимо на поверх, додому чи на прохідну.",
      "order.boltDesc": "Замовлення за кілька кліків, відстеження в додатку.",
      "order.menu55Name": "Menu55 — бронювання столика",
      "order.menu55Desc": "10 столиків, швидке обслуговування на перерві.",
      "location.title": "Де нас знайти",
      "location.metro": "Станція Nemocnice Motol (6 хв пішки)",
      "location.tram": "Зупинка Hotel Golf (3 хв пішки)",
      "location.bus": "Зупинка Nemocnice Motol (6 хв пішки)",
      "location.hoursLabel": "Години роботи:",
      "location.hours": "Вт–Нд 10:00–22:00",
      "contact.title": "Контакти",
      "contact.lede": "Питання, групове замовлення для відділення, чи просто хочете обговорити меню?",
      "contact.phone": "Телефон",
      "contact.email": "Ел. пошта",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234/6, Прага 5",
      "footer.disclaimer": "Їжа не замінює лікарняне чи дієтичне харчування. Споживання на власну відповідальність.",
      "nav2.story": "Наша історія",
      "nav2.menu": "Меню",
      "nav2.evening": "Вечір у нас",
      "nav2.catering": "Кейтеринг",
      "nav2.parties": "Свята",
      "nav2.contact": "Контакти",
      "menu2.deptLabel": "МЕНЮ",
      "menu2.title": "Ресторанне меню",
      "menu2.note": "Обслуговуємо з 16:00. 💡 Натисніть на страву, щоб побачити склад та алергени.",
      "menu2.startersHeading": "Закуски",
      "menu2.dessertsHeading": "Десерти",
      "menu2.mainsHeading": "Основні страви",
      "menu2.allergenNote": "MotolMixFusion не замінює лікарняне чи дієтичне харчування — замовляючи/споживаючи, ви підтверджуєте, що робите це на власну відповідальність.",
      "hero2.titleLine1": "Після шістнадцятої години",
      "hero2.titleLine2": "у нас час тече інакше.",
      "hero2.lede": "Вдень готуємо швидко, на обід між змінами. Увечері ми знаходимо час і для їжі, і для вас — за столиком, на святі, або там, де вам потрібно.",
      "hero2.time1Label": "Експрес-обід",
      "hero2.time2Label": "Настрій змінюється",
      "hero2.time3Label": "Зачиняємось",
      "hero2.btnEvening": "Переглянути вечірню пропозицію",
      "story.title": "Дві кухні, один стіл.",
      "story.p1": "MotolMixFusion готує Онума — рецепти виростали на двох кінцях світу і зустрілися в одній кухні в Моторі. Чеська яловичина по-чеськи поруч зі стравами вок, бульйон поруч із кнедликами. Ми не намагаємось бути екзотичними чи показними — готуємо те, що самі хотіли б отримати на тарілці після довгого дня.",
      "story.p2": "Вдень усе має бути швидко, бо ми знаємо, яка коротка перерва на зміні. А ввечері ми радо знаходимо для вас час — за келихом вина, за смачною їжею, без поспіху.",
      "story.photoPlaceholder": "Тут буде фото Онуми на кухні",
      "evening2.title": "Вечір без поспіху",
      "evening2.lede": "З 16:00 ми відкриваємо простір для спокійнішої вечері — та сама кухня, трохи повільніший темп. Радимо забронювати столик заздалегідь.",
      "catering2.eyebrow": "Кейтеринг",
      "catering2.title": "Привеземо їжу до вас.",
      "catering2.lede": "Корпоративні заходи, конференції в клініці, сімейне свято — приготуємо меню на замовлення і привеземо їжу точно вчасно. Кількість, страви та стиль подачі (фуршет чи порційно упаковано) узгодимо залежно від заходу.",
      "catering2.point1": "Меню на замовлення — чеська та азійська кухня",
      "catering2.point2": "Від 10 до 200 порцій",
      "catering2.point3": "Доставка та за потреби обслуговування на місці",
      "catering2.btn": "Замовити кейтеринг",
      "catering2.photoPlaceholder": "Тут буде фото з кейтерингового заходу",
      "oslavy2.eyebrow": "Свята та приватні заходи",
      "oslavy2.title": "Весь заклад лише для вас.",
      "oslavy2.lede": "Дні народження, ювілеї, корпоратив або прощальна вечірка з колегами — можна орендувати весь ресторан, поза звичайним графіком роботи і навіть після закриття. Місткість 10 столиків, до 40 гостей.",
      "oslavy2.point1": "Місткість до 40 гостей (10 столиків)",
      "oslavy2.point2": "Власне меню, музика та оформлення за домовленістю",
      "oslavy2.point3": "Можливо і поза графіком роботи",
      "oslavy2.btn": "Замовити свято",
      "oslavy2.photoPlaceholder": "Тут буде фото простору під час свята",
      "contact2.title": "Домовимось",
      "contact2.lede": "На запити щодо кейтерингу та свят зазвичай відповідаємо протягом наступного дня.",
      "contact2.addressLabel": "Адреса",
      "footer2.backLink": "← Назад до денного експрес-меню",
      "inquiry.titleCatering": "Запит на кейтеринг",
      "inquiry.titleEvent": "Запит на свято / приватний захід",
      "inquiry.dateLabel": "Дата заходу",
      "inquiry.countLabelCatering": "Кількість порцій",
      "inquiry.countLabelEvent": "Кількість гостей",
      "inquiry.msgLabel": "Опис / побажання",
      "inquiry.submitBtn": "Надіслати запит",
      "inquiry.hint": "Відкриється лист із заповненими даними, ми з вами зв'яжемось."
    },

    vi: {
      "nav.menu": "Thực đơn",
      "nav.menuGo": "Thực đơn mang đi",
      "nav.menuRestaurant": "Thực đơn nhà hàng",
      "nav.order": "Đặt món",
      "nav.location": "Tìm chúng tôi",
      "nav.contact": "Liên hệ",
      "lang.choose": "Chọn ngôn ngữ",
      "hero.eyebrow": "Kudrnova 234 · Praha 5 – Motol",
      "hero.title": "Sự kết hợp hương vị Séc và Á, chỉ vài bước từ bệnh viện Motol",
      "hero.lede": "Nấu tươi mỗi ngày. Đặt món cho giờ nghỉ giữa ca",
      "hero.eveningLink": "hoặc ghé thăm chúng tôi vào buổi chiều hoặc buổi tối",
      "hero.btnOrder": "Đặt món ngay",
      "hero.btnMenu": "Xem thực đơn",
      "menu.title": "Thực đơn to GO",
      "menu.note": "⚠ Món mẫu — sẽ thay bằng thực đơn và giá chính thức khi hoàn tất.",
      "menu.mainsHeading": "Món chính",
      "menu.soupsHeading": "Salad & món nhỏ",
      "menu.dailyHeading": "Suất trong ngày (11h–14h)",
      "menu.allergen": "Nhấn vào món ăn để xem chất gây dị ứng. MotolMixFusion không thay thế chế độ ăn bệnh viện hoặc theo chỉ định y tế — khi đặt món, quý khách xác nhận tự chịu trách nhiệm khi dùng.",
      "order.dineInName": "Dùng bữa tại quán",
      "order.dineInDesc": "10 bàn, đặt chỗ qua lịch bên dưới.",
      "menu.clickHint": "💡 Nhấn vào món ăn để xem thành phần và chất gây dị ứng.",
      "dish.ingredientsLabel": "Thành phần",
      "dish.allergenLabel": "Chất gây dị ứng",
      "dish.weightLabel": "trọng lượng",
      "dish.priceLabel": "giá:",
      "res.btn": "Đặt bàn",
      "res.title": "Đặt bàn",
      "res.date": "Ngày",
      "res.time": "Giờ",
      "res.guests": "Số người",
      "res.name": "Họ tên",
      "res.phone": "Số điện thoại",
      "res.note": "Ghi chú (không bắt buộc)",
      "res.submit": "Gửi yêu cầu đặt bàn",
      "res.hint": "Thao tác này sẽ mở email đã điền sẵn thông tin — chúng tôi sẽ xác nhận lại qua điện thoại hoặc email.",
      "dish.riz_pork": "Thịt cốt lết heo chiên xù, khoai tây nghiền",
      "dish.riz_chicken": "Thịt cốt lết gà chiên xù, khoai tây nghiền",
      "dish.padthai": "Pad Thái (gà, tôm)",
      "dish.friedrice": "Cơm chiên (gà, tôm)",
      "dish.noodlesoup": "Súp mì Thái với thịt bò",
      "dish.greencurry": "Cà ri xanh gà với cơm",
      "dish.crispypork_rice": "Thịt heo giòn với cơm, sốt đậu nành ngọt",
      "dish.kungpao": "Gà kung pao",
      "dish.herbchickenwing": "Cánh gà chiên thảo mộc",
      "dish.crispypork_norice": "Thịt heo giòn, sốt đậu nành ngọt",
      "dish2.siomai_r": "Siomai (heo, tôm), 6 cái",
      "dish2.gyoza_r": "Gyoza (heo), 6 cái",
      "dish2.beefbroth": "Nước dùng bò với mì",
      "dish2.carrotsoup": "Súp cà rốt",
      "dish2.stickyrice": "Xôi dừa",
      "dish2.pannacotta": "Panna cotta trái cây",
      "dish2.cheesecake": "Bánh phô mai",
      "dish2.salmon": "Cá hồi nướng, nấm, khoai tây nướng",
      "dish2.noodlesoup_r": "Súp mì Thái với thịt bò",
      "dish2.chickensupreme": "Ức gà sốt kem với bông cải xanh",
      "dish2.pumpkinrisotto": "Risotto bí đỏ",
      "dish2.herbchicken": "Gà chiên thảo mộc",
      "dish2.grilledveg": "Rau nướng với nấm",
      "dish.caesar": "Salad Caesar (gà, tôm)",
      "dish.leafsalad": "Salad rau xanh sốt maple",
      "dish.springroll": "Chả giò (gà), 4 cái",
      "dish.gyoza": "Gyoza (heo) sốt đậu nành, 4 cái",
      "dish.siomai": "Siomai (heo, tôm), 4 cái",
      "dish.tomyam": "Tom Yum Kung",
      "order.title": "Cách đặt món",
      "order.tagDelivery": "Giao hàng",
      "order.tagHere": "Tại quán",
      "order.tagOwnDelivery": "Giao hàng riêng",
      "order.ownDeliveryName": "Đặt trực tiếp với chúng tôi",
      "order.ownDeliveryDesc": "Không phí trung gian, chúng tôi tự giao.",
      "order.woltDesc": "Giao tận tầng, tận nhà hoặc tại quầy lễ tân.",
      "order.boltDesc": "Đặt chỉ vài thao tác, theo dõi trong ứng dụng.",
      "order.menu55Name": "Menu55 — đặt bàn",
      "order.menu55Desc": "10 bàn, phục vụ nhanh trong giờ nghỉ.",
      "location.title": "Tìm chúng tôi",
      "location.metro": "Ga Nemocnice Motol (đi bộ 6 phút)",
      "location.tram": "Trạm Hotel Golf (đi bộ 3 phút)",
      "location.bus": "Trạm Nemocnice Motol (đi bộ 6 phút)",
      "location.hoursLabel": "Giờ mở cửa:",
      "location.hours": "Thứ 3–Chủ nhật, 10:00–22:00",
      "contact.title": "Liên hệ",
      "contact.lede": "Có câu hỏi, muốn đặt món theo nhóm cho khoa, hay chỉ muốn hỏi về thực đơn?",
      "contact.phone": "Điện thoại",
      "contact.email": "Email",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234/6, Praha 5",
      "footer.disclaimer": "Món ăn không thay thế chế độ ăn bệnh viện hoặc theo chỉ định y tế. Tự chịu trách nhiệm khi dùng.",
      "nav2.story": "Câu chuyện của chúng tôi",
      "nav2.menu": "Thực đơn",
      "nav2.evening": "Buổi tối tại đây",
      "nav2.catering": "Dịch vụ tiệc",
      "nav2.parties": "Tiệc",
      "nav2.contact": "Liên hệ",
      "menu2.deptLabel": "THỰC ĐƠN",
      "menu2.title": "Thực đơn nhà hàng",
      "menu2.note": "Phục vụ từ 16h. 💡 Nhấn vào món ăn để xem thành phần và chất gây dị ứng.",
      "menu2.startersHeading": "Khai vị",
      "menu2.dessertsHeading": "Tráng miệng",
      "menu2.mainsHeading": "Món chính",
      "menu2.allergenNote": "MotolMixFusion không thay thế chế độ ăn bệnh viện hoặc theo chỉ định y tế — khi đặt món/dùng bữa, quý khách xác nhận tự chịu trách nhiệm.",
      "hero2.titleLine1": "Sau 16 giờ,",
      "hero2.titleLine2": "thời gian trôi khác đi ở đây.",
      "hero2.lede": "Ban ngày chúng tôi nấu nhanh, cho bữa trưa giữa ca làm. Buổi tối chúng tôi dành thời gian cho món ăn và cho quý khách — tại bàn, tại tiệc, hoặc bất cứ đâu quý khách cần.",
      "hero2.time1Label": "Bữa trưa nhanh",
      "hero2.time2Label": "Không khí thay đổi",
      "hero2.time3Label": "Đóng cửa",
      "hero2.btnEvening": "Xem thực đơn buổi tối",
      "story.title": "Hai gian bếp, một chiếc bàn.",
      "story.p1": "MotolMixFusion được nấu bởi Onuma — những công thức lớn lên ở hai phía của thế giới rồi gặp nhau trong một gian bếp tại Motol. Món bò kiểu Séc bên cạnh món wok, nước dùng bên cạnh bánh bao knedlíky. Chúng tôi không cố tỏ ra kỳ lạ hay phô trương — chúng tôi nấu những gì chính mình muốn có trên đĩa sau một ngày dài.",
      "story.p2": "Ban ngày mọi thứ phải nhanh, vì chúng tôi biết giờ nghỉ giữa ca ngắn thế nào. Nhưng buổi tối, chúng tôi vui lòng dành thời gian cho quý khách — bên ly rượu vang, bên món ăn ngon, không vội vàng.",
      "story.photoPlaceholder": "Ảnh của Onuma trong bếp sẽ ở đây",
      "evening2.title": "Buổi tối thong thả",
      "evening2.lede": "Từ 16h chúng tôi mở không gian cho bữa tối thư thái hơn — cùng gian bếp, nhịp độ chậm hơn một chút. Chúng tôi khuyên nên đặt bàn trước.",
      "catering2.eyebrow": "Dịch vụ tiệc",
      "catering2.title": "Chúng tôi mang món ăn đến tận nơi.",
      "catering2.lede": "Sự kiện công ty, hội nghị tại phòng khám, tiệc gia đình — chúng tôi chuẩn bị thực đơn riêng và giao đồ ăn đúng giờ. Số lượng, các món và phong cách phục vụ (buffet hoặc suất đóng gói) sẽ được thỏa thuận theo sự kiện.",
      "catering2.point1": "Thực đơn riêng — ẩm thực Séc và châu Á",
      "catering2.point2": "Từ 10 đến 200 suất",
      "catering2.point3": "Giao hàng và phục vụ tại chỗ nếu cần",
      "catering2.btn": "Yêu cầu báo giá tiệc",
      "catering2.photoPlaceholder": "Ảnh từ một sự kiện tiệc sẽ ở đây",
      "oslavy2.eyebrow": "Tiệc và sự kiện riêng tư",
      "oslavy2.title": "Toàn bộ nhà hàng, chỉ dành cho quý khách.",
      "oslavy2.lede": "Sinh nhật, kỷ niệm, tiệc công ty hay tiệc chia tay đồng nghiệp — quý khách có thể thuê trọn nhà hàng, kể cả ngoài giờ hoạt động thông thường và sau giờ đóng cửa. Sức chứa 10 bàn, tối đa 40 khách.",
      "oslavy2.point1": "Sức chứa tối đa 40 khách (10 bàn)",
      "oslavy2.point2": "Thực đơn, âm nhạc và trang trí riêng theo thỏa thuận",
      "oslavy2.point3": "Có thể tổ chức ngoài giờ mở cửa thông thường",
      "oslavy2.btn": "Yêu cầu báo giá tiệc riêng",
      "oslavy2.photoPlaceholder": "Ảnh không gian trong một buổi tiệc sẽ ở đây",
      "contact2.title": "Cùng trao đổi",
      "contact2.lede": "Chúng tôi thường phản hồi các yêu cầu tiệc và dịch vụ tiệc trong vòng một ngày.",
      "contact2.addressLabel": "Địa chỉ",
      "footer2.backLink": "← Quay lại thực đơn nhanh ban ngày",
      "inquiry.titleCatering": "Yêu cầu dịch vụ tiệc",
      "inquiry.titleEvent": "Yêu cầu tiệc / sự kiện riêng tư",
      "inquiry.dateLabel": "Ngày tổ chức",
      "inquiry.countLabelCatering": "Số suất ăn",
      "inquiry.countLabelEvent": "Số lượng khách",
      "inquiry.msgLabel": "Mô tả / yêu cầu",
      "inquiry.submitBtn": "Gửi yêu cầu",
      "inquiry.hint": "Thao tác này sẽ mở email đã điền sẵn thông tin, chúng tôi sẽ phản hồi lại."
    },

    th: {
      "nav.menu": "เมนู",
      "nav.menuGo": "เมนูสั่งกลับบ้าน",
      "nav.menuRestaurant": "เมนูร้านอาหาร",
      "nav.order": "สั่งอาหาร",
      "nav.location": "แผนที่ร้าน",
      "nav.contact": "ติดต่อ",
      "lang.choose": "เลือกภาษา",
      "hero.eyebrow": "Kudrnova 234 · Praha 5 – Motol",
      "hero.title": "ฟิวชันรสชาติเช็กและเอเชีย เพียงไม่กี่ก้าวจากโรงพยาบาล Motol",
      "hero.lede": "ปรุงสดใหม่ทุกวัน สั่งอาหารสำหรับช่วงพักระหว่างกะ",
      "hero.eveningLink": "หรือแวะมาหาเราตอนบ่ายหรือตอนเย็น",
      "hero.btnOrder": "สั่งอาหารเลย",
      "hero.btnMenu": "ดูเมนู",
      "menu.title": "เมนูอาหาร to GO",
      "menu.note": "⚠ รายการตัวอย่าง — จะเปลี่ยนเป็นเมนูและราคาจริงเมื่อพร้อม",
      "menu.mainsHeading": "จานหลัก",
      "menu.soupsHeading": "สลัดและจานเล็ก",
      "menu.dailyHeading": "เมนูประจำวัน (11.00–14.00 น.)",
      "menu.allergen": "แตะที่เมนูเพื่อดูสารก่อภูมิแพ้ MotolMixFusion ไม่ใช่อาหารทดแทนอาหารโรงพยาบาลหรืออาหารตามแพทย์สั่ง — การสั่งซื้อถือว่าท่านรับผิดชอบการบริโภคด้วยตนเอง",
      "order.dineInName": "นั่งทานที่ร้าน",
      "order.dineInDesc": "10 โต๊ะ จองผ่านปฏิทินด้านล่าง",
      "menu.clickHint": "💡 แตะที่จานอาหารเพื่อดูส่วนประกอบและสารก่อภูมิแพ้",
      "dish.ingredientsLabel": "ส่วนประกอบ",
      "dish.allergenLabel": "สารก่อภูมิแพ้",
      "dish.weightLabel": "น้ำหนัก",
      "dish.priceLabel": "ราคา:",
      "res.btn": "จองโต๊ะ",
      "res.title": "จองโต๊ะ",
      "res.date": "วันที่",
      "res.time": "เวลา",
      "res.guests": "จำนวนคน",
      "res.name": "ชื่อ",
      "res.phone": "โทรศัพท์",
      "res.note": "หมายเหตุ (ไม่บังคับ)",
      "res.submit": "ส่งคำขอจองโต๊ะ",
      "res.hint": "ระบบจะเปิดอีเมลพร้อมข้อมูลที่กรอกไว้ — เราจะยืนยันการจองกลับทางโทรศัพท์หรืออีเมล",
      "dish.riz_pork": "หมูชุบเกล็ดขนมปังทอด เสิร์ฟพร้อมมันฝรั่งบด",
      "dish.riz_chicken": "ไก่ชุบเกล็ดขนมปังทอด เสิร์ฟพร้อมมันฝรั่งบด",
      "dish.padthai": "ผัดไทย (ไก่ กุ้ง)",
      "dish.friedrice": "ข้าวผัด (ไก่ กุ้ง)",
      "dish.noodlesoup": "ก๋วยเตี๋ยวเนื้อสไตล์ไทย",
      "dish.greencurry": "แกงเขียวหวานไก่ กับข้าว",
      "dish.crispypork_rice": "หมูกรอบกับข้าว ซอสถั่วเหลืองหวาน",
      "dish.kungpao": "ไก่กังเปา",
      "dish.herbchickenwing": "ปีกไก่ทอดสมุนไพร",
      "dish.crispypork_norice": "หมูกรอบ ซอสถั่วเหลืองหวาน",
      "dish2.siomai_r": "ขนมจีบ (หมู กุ้ง) 6 ชิ้น",
      "dish2.gyoza_r": "เกี๊ยวซ่า (หมู) 6 ชิ้น",
      "dish2.beefbroth": "น้ำซุปเนื้อกับเส้นก๋วยเตี๋ยว",
      "dish2.carrotsoup": "ซุปแครอท",
      "dish2.stickyrice": "ข้าวเหนียวมะพร้าว",
      "dish2.pannacotta": "พานาคอตต้าผลไม้",
      "dish2.cheesecake": "ชีสเค้ก",
      "dish2.salmon": "แซลมอนย่าง เห็ด มันฝรั่งอบ",
      "dish2.noodlesoup_r": "ก๋วยเตี๋ยวเนื้อสไตล์ไทย",
      "dish2.chickensupreme": "อกไก่ซอสครีมกับบรอกโคลี",
      "dish2.pumpkinrisotto": "ริซอตโต้ฟักทอง",
      "dish2.herbchicken": "ไก่ทอดสมุนไพร",
      "dish2.grilledveg": "ผักย่างกับเห็ด",
      "dish.caesar": "สลัดซีซาร์ (ไก่ กุ้ง)",
      "dish.leafsalad": "สลัดผักใบเขียว ซอสเมเปิ้ล",
      "dish.springroll": "ปอเปี๊ยะทอด (ไก่) 4 ชิ้น",
      "dish.gyoza": "เกี๊ยวซ่า (หมู) ซอสถั่วเหลือง 4 ชิ้น",
      "dish.siomai": "ขนมจีบ (หมู กุ้ง) 4 ชิ้น",
      "dish.tomyam": "ต้มยำกุ้ง",
      "order.title": "วิธีสั่งอาหาร",
      "order.tagDelivery": "จัดส่ง",
      "order.tagHere": "ทานที่ร้าน",
      "order.tagOwnDelivery": "จัดส่งเอง",
      "order.ownDeliveryName": "สั่งโดยตรงกับเรา",
      "order.ownDeliveryDesc": "ไม่มีค่าคอมมิชชั่น เราจัดส่งเอง",
      "order.woltDesc": "จัดส่งถึงชั้น ถึงบ้าน หรือจุดรับที่ทางเข้า",
      "order.boltDesc": "สั่งง่ายเพียงไม่กี่คลิก ติดตามได้ในแอป",
      "order.menu55Name": "Menu55 — จองโต๊ะ",
      "order.menu55Desc": "10 โต๊ะ บริการรวดเร็วในช่วงพัก",
      "location.title": "แผนที่ร้าน",
      "location.metro": "สถานี Nemocnice Motol (เดิน 6 นาที)",
      "location.tram": "ป้าย Hotel Golf (เดิน 3 นาที)",
      "location.bus": "ป้าย Nemocnice Motol (เดิน 6 นาที)",
      "location.hoursLabel": "เปิดทำการ:",
      "location.hours": "อังคาร–อาทิตย์ 10:00–22:00 น.",
      "contact.title": "ติดต่อ",
      "contact.lede": "มีคำถาม ต้องการสั่งอาหารเป็นกลุ่มสำหรับแผนก หรืออยากคุยเรื่องเมนู?",
      "contact.phone": "โทรศัพท์",
      "contact.email": "อีเมล",
      "contact.instagram": "อินสตาแกรม",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234/6, Praha 5",
      "footer.disclaimer": "อาหารนี้ไม่ใช่อาหารทดแทนอาหารโรงพยาบาลหรืออาหารตามแพทย์สั่ง รับประทานโดยถือเป็นความรับผิดชอบของท่านเอง",
      "nav2.story": "เรื่องราวของเรา",
      "nav2.menu": "เมนู",
      "nav2.evening": "ค่ำคืนที่นี่",
      "nav2.catering": "จัดเลี้ยง",
      "nav2.parties": "งานปาร์ตี้",
      "nav2.contact": "ติดต่อ",
      "menu2.deptLabel": "เมนูอาหาร",
      "menu2.title": "เมนูร้านอาหาร",
      "menu2.note": "เปิดบริการตั้งแต่ 16.00 น. 💡 แตะที่จานอาหารเพื่อดูส่วนประกอบและสารก่อภูมิแพ้",
      "menu2.startersHeading": "อาหารเรียกน้ำย่อย",
      "menu2.dessertsHeading": "ของหวาน",
      "menu2.mainsHeading": "จานหลัก",
      "menu2.allergenNote": "MotolMixFusion ไม่ใช่อาหารทดแทนอาหารโรงพยาบาลหรืออาหารตามแพทย์สั่ง — การสั่งซื้อ/รับประทานถือว่าท่านรับผิดชอบด้วยตนเอง",
      "hero2.titleLine1": "หลังบ่ายสี่โมง",
      "hero2.titleLine2": "เวลาที่นี่ผ่านไปต่างออกไป",
      "hero2.lede": "ตอนกลางวันเราทำอาหารเร็ว สำหรับมื้อเที่ยงระหว่างกะทำงาน ส่วนตอนเย็นเราให้เวลากับอาหารและกับท่าน — ที่โต๊ะ ที่งานปาร์ตี้ หรือที่ใดก็ตามที่ท่านต้องการ",
      "hero2.time1Label": "มื้อเที่ยงด่วน",
      "hero2.time2Label": "บรรยากาศเปลี่ยนไป",
      "hero2.time3Label": "ปิดร้าน",
      "hero2.btnEvening": "ดูเมนูช่วงเย็น",
      "story.title": "สองครัว โต๊ะเดียว",
      "story.p1": "MotolMixFusion ปรุงโดยโอนุมะ — สูตรอาหารที่เติบโตจากสองฟากโลกมาบรรจบกันในครัวเดียวที่โมทอล เนื้อวัวสไตล์เช็กอยู่เคียงข้างอาหารผัด น้ำซุปอยู่เคียงข้างเกี๊ยว เราไม่พยายามทำให้ดูแปลกใหม่หรือหรูหรา — เราทำอาหารที่อยากได้ในจานของตัวเองหลังวันอันยาวนาน",
      "story.p2": "ตอนกลางวันต้องเร็ว เพราะเรารู้ว่าเวลาพักของกะทำงานสั้นแค่ไหน แต่ตอนเย็นเรายินดีให้เวลากับท่าน — กับไวน์สักแก้ว อาหารอร่อย ไม่เร่งรีบ",
      "story.photoPlaceholder": "ที่นี่จะมีรูปโอนุมะในครัว",
      "evening2.title": "ค่ำคืนแบบไม่เร่งรีบ",
      "evening2.lede": "ตั้งแต่ 16.00 น. เราเปิดพื้นที่สำหรับมื้อค่ำที่ผ่อนคลายกว่า — ครัวเดียวกัน จังหวะช้าลงนิดหน่อย แนะนำให้จองโต๊ะล่วงหน้า",
      "catering2.eyebrow": "จัดเลี้ยง",
      "catering2.title": "เรานำอาหารมาส่งถึงที่",
      "catering2.lede": "งานบริษัท การประชุมที่คลินิก งานเลี้ยงครอบครัว — เราจะจัดเมนูตามความต้องการและส่งอาหารตรงเวลา ปริมาณ จำนวนคอร์ส และรูปแบบการเสิร์ฟ (บุฟเฟต์หรือแบ่งเป็นชุด) จะตกลงกันตามงานของท่าน",
      "catering2.point1": "เมนูตามสั่ง — อาหารเช็กและเอเชีย",
      "catering2.point2": "ตั้งแต่ 10 ถึง 200 ที่",
      "catering2.point3": "จัดส่งและบริการที่หน้างานได้ตามต้องการ",
      "catering2.btn": "สอบถามบริการจัดเลี้ยง",
      "catering2.photoPlaceholder": "ที่นี่จะมีรูปจากงานจัดเลี้ยง",
      "oslavy2.eyebrow": "งานปาร์ตี้และงานส่วนตัว",
      "oslavy2.title": "ทั้งร้านเพื่อท่านโดยเฉพาะ",
      "oslavy2.lede": "วันเกิด วันครบรอบ งานเลี้ยงบริษัท หรืองานเลี้ยงส่งเพื่อนร่วมงาน — ท่านสามารถเช่าร้านทั้งหมด นอกเวลาทำการปกติหรือแม้แต่หลังปิดร้าน ความจุ 10 โต๊ะ สูงสุด 40 ท่าน",
      "oslavy2.point1": "ความจุสูงสุด 40 ท่าน (10 โต๊ะ)",
      "oslavy2.point2": "เมนู เพลง และการตกแต่งตามที่ตกลงกัน",
      "oslavy2.point3": "จัดได้แม้นอกเวลาทำการปกติ",
      "oslavy2.btn": "สอบถามจัดงานปาร์ตี้",
      "oslavy2.photoPlaceholder": "ที่นี่จะมีรูปพื้นที่ระหว่างงานปาร์ตี้",
      "contact2.title": "มาคุยกัน",
      "contact2.lede": "โดยทั่วไปเราจะตอบคำถามเรื่องจัดเลี้ยงและงานปาร์ตี้ภายในวันถัดไป",
      "contact2.addressLabel": "ที่อยู่",
      "footer2.backLink": "← กลับไปที่เมนูด่วนกลางวัน",
      "inquiry.titleCatering": "สอบถามบริการจัดเลี้ยง",
      "inquiry.titleEvent": "สอบถามงานปาร์ตี้ / งานส่วนตัว",
      "inquiry.dateLabel": "วันที่จัดงาน",
      "inquiry.countLabelCatering": "จำนวนที่",
      "inquiry.countLabelEvent": "จำนวนแขก",
      "inquiry.msgLabel": "รายละเอียด / ความต้องการ",
      "inquiry.submitBtn": "ส่งคำขอ",
      "inquiry.hint": "ระบบจะเปิดอีเมลพร้อมข้อมูลที่กรอกไว้ เราจะติดต่อกลับ"
    }
  };

  var dishData = {
    riz_pork: {
      ingredients: {
        cs: "Vepřové maso, strouhanka, mouka, vejce, bramborová kaše (brambory, mléko, máslo).",
        en: "Pork, breadcrumbs, flour, egg, mashed potatoes (potatoes, milk, butter)."
      },
      allergens: { cs: "Lepek, vejce, mléko", en: "Gluten, egg, milk" }
    },
    riz_chicken: {
      ingredients: {
        cs: "Kuřecí maso, strouhanka, mouka, vejce, bramborová kaše (brambory, mléko, máslo).",
        en: "Chicken, breadcrumbs, flour, egg, mashed potatoes (potatoes, milk, butter)."
      },
      allergens: { cs: "Lepek, vejce, mléko", en: "Gluten, egg, milk" }
    },
    padthai: {
      ingredients: {
        cs: "Rýžové nudle, kuřecí maso, krevety, vejce, tamarindová omáčka, arašídy, klíčky.",
        en: "Rice noodles, chicken, shrimp, egg, tamarind sauce, peanuts, bean sprouts."
      },
      allergens: { cs: "Korýši, vejce, arašídy, sója, ryby (omáčka)", en: "Crustaceans, egg, peanuts, soy, fish (sauce)" }
    },
    friedrice: {
      ingredients: {
        cs: "Rýže, kuřecí maso, krevety, vejce, zelenina, sójová omáčka.",
        en: "Rice, chicken, shrimp, egg, vegetables, soy sauce."
      },
      allergens: { cs: "Korýši, vejce, sója", en: "Crustaceans, egg, soy" }
    },
    noodlesoup: {
      ingredients: {
        cs: "Hovězí vývar, rýžové nudle, hovězí maso, jarní cibulka, koriandr, limetka, chilli.",
        en: "Beef broth, rice noodles, beef, spring onion, coriander, lime, chilli."
      },
      allergens: { cs: "Může obsahovat sóju", en: "May contain soy" }
    },
    caesar: {
      ingredients: {
        cs: "Kuřecí maso, krevety, salát, parmazán, krutony, caesar dresink (vejce, ančovičky).",
        en: "Chicken, shrimp, lettuce, parmesan, croutons, caesar dressing (egg, anchovies)."
      },
      allergens: { cs: "Korýši, ryby, vejce, mléko, lepek", en: "Crustaceans, fish, egg, milk, gluten" }
    },
    leafsalad: {
      ingredients: {
        cs: "Míchané listové saláty, javorový dresink (javorový sirup, olej, hořčice).",
        en: "Mixed leaf salads, maple dressing (maple syrup, oil, mustard)."
      },
      allergens: { cs: "Může obsahovat hořčici", en: "May contain mustard" }
    },
    springroll: {
      ingredients: {
        cs: "Pšeničné/rýžové těsto, kuřecí maso, zelenina, sójová omáčka k namáčení.",
        en: "Wheat/rice wrapper, chicken, vegetables, soy dipping sauce."
      },
      allergens: { cs: "Lepek, sója", en: "Gluten, soy" }
    },
    gyoza: {
      ingredients: {
        cs: "Pšeničné taštičky, vepřové maso, zelí, zázvor, sójová omáčka.",
        en: "Wheat dumplings, pork, cabbage, ginger, soy sauce."
      },
      allergens: { cs: "Lepek, sója", en: "Gluten, soy" }
    },
    siomai: {
      ingredients: {
        cs: "Pšeničné taštičky, vepřové maso, krevety, sójová omáčka.",
        en: "Wheat dumplings, pork, shrimp, soy sauce."
      },
      allergens: { cs: "Lepek, korýši, sója", en: "Gluten, crustaceans, soy" }
    },
    tomyam: {
      ingredients: {
        cs: "Krevety, vývar, citronová tráva, kaffir limetka, chilli, houby, rajčata, koriandr.",
        en: "Shrimp, broth, lemongrass, kaffir lime, chilli, mushrooms, tomatoes, coriander."
      },
      allergens: { cs: "Korýši, ryby (omáčka)", en: "Crustaceans, fish (sauce)" }
    },
    greencurry: {
      ingredients: {
        cs: "Kuřecí maso, zelené kari koření, kokosové mléko, lilek, bazalka, rýže.",
        en: "Chicken, green curry paste, coconut milk, eggplant, basil, rice."
      },
      allergens: { cs: "Může obsahovat stopy ořechů", en: "May contain traces of nuts" }
    },
    crispypork_rice: {
      ingredients: {
        cs: "Vepřové maso (křupavé), sladká sójová omáčka, rýže, jarní cibulka.",
        en: "Pork (crispy), sweet soy sauce, rice, spring onion."
      },
      allergens: { cs: "Sója, může obsahovat lepek", en: "Soy, may contain gluten" }
    },
    kungpao: {
      ingredients: {
        cs: "Kuřecí maso, arašídy, sušené chilli, paprika, sójová omáčka, rýže.",
        en: "Chicken, peanuts, dried chilli, bell pepper, soy sauce, rice."
      },
      allergens: { cs: "Arašídy, sója", en: "Peanuts, soy" }
    },
    herbchickenwing: {
      ingredients: {
        cs: "Kuřecí křídla marinovaná v bylinkách, česnek, olej.",
        en: "Chicken wings marinated in herbs, garlic, oil."
      },
      allergens: { cs: "Může obsahovat lepek", en: "May contain gluten" }
    },
    crispypork_norice: {
      ingredients: {
        cs: "Vepřové maso (křupavé), sladká sójová omáčka, jarní cibulka.",
        en: "Pork (crispy), sweet soy sauce, spring onion."
      },
      allergens: { cs: "Sója, může obsahovat lepek", en: "Soy, may contain gluten" }
    },
    herbchickenwings: {
      ingredients: {
        cs: "Kuřecí křídla marinovaná v bylinkách, česnek, olej.",
        en: "Chicken wings marinated in herbs, garlic, oil."
      },
      allergens: { cs: "Může obsahovat lepek", en: "May contain gluten" }
    },
    tomyam_r: {
      ingredients: {
        cs: "Krevety, vývar, citronová tráva, kaffir limetka, chilli, houby, rajčata, koriandr.",
        en: "Shrimp, broth, lemongrass, kaffir lime, chilli, mushrooms, tomatoes, coriander."
      },
      allergens: { cs: "Korýši, ryby (omáčka)", en: "Crustaceans, fish (sauce)" }
    },
    padthai_r: {
      ingredients: {
        cs: "Rýžové nudle, kuřecí maso, krevety, vejce, tamarindová omáčka, arašídy, klíčky.",
        en: "Rice noodles, chicken, shrimp, egg, tamarind sauce, peanuts, bean sprouts."
      },
      allergens: { cs: "Korýši, vejce, arašídy, sója, ryby (omáčka)", en: "Crustaceans, egg, peanuts, soy, fish (sauce)" }
    },
    riz_r_pork: {
      ingredients: {
        cs: "Vepřové maso, strouhanka, mouka, vejce, bramborová kaše (brambory, mléko, máslo).",
        en: "Pork, breadcrumbs, flour, egg, mashed potatoes (potatoes, milk, butter)."
      },
      allergens: { cs: "Lepek, vejce, mléko", en: "Gluten, egg, milk" }
    },
    riz_r_chicken: {
      ingredients: {
        cs: "Kuřecí maso, strouhanka, mouka, vejce, bramborová kaše (brambory, mléko, máslo).",
        en: "Chicken, breadcrumbs, flour, egg, mashed potatoes (potatoes, milk, butter)."
      },
      allergens: { cs: "Lepek, vejce, mléko", en: "Gluten, egg, milk" }
    },
    friedrice_r: {
      ingredients: {
        cs: "Rýže, kuřecí maso, krevety, vejce, zelenina, sójová omáčka.",
        en: "Rice, chicken, shrimp, egg, vegetables, soy sauce."
      },
      allergens: { cs: "Korýši, vejce, sója", en: "Crustaceans, egg, soy" }
    },
    siomai_r: {
      ingredients: {
        cs: "Pšeničné taštičky, vepřové maso, krevety, sójová omáčka.",
        en: "Wheat dumplings, pork, shrimp, soy sauce."
      },
      allergens: { cs: "Lepek, korýši, sója", en: "Gluten, crustaceans, soy" }
    },
    gyoza_r: {
      ingredients: {
        cs: "Pšeničné taštičky, vepřové maso, zelí, zázvor, sójová omáčka.",
        en: "Wheat dumplings, pork, cabbage, ginger, soy sauce."
      },
      allergens: { cs: "Lepek, sója", en: "Gluten, soy" }
    },
    beefbroth: {
      ingredients: {
        cs: "Hovězí vývar, hovězí maso, rýžové nudle, jarní cibulka, koriandr.",
        en: "Beef broth, beef, rice noodles, spring onion, coriander."
      },
      allergens: { cs: "Může obsahovat sóju", en: "May contain soy" }
    },
    carrotsoup: {
      ingredients: {
        cs: "Mrkev, vývar, smetana, máslo, zázvor.",
        en: "Carrot, broth, cream, butter, ginger."
      },
      allergens: { cs: "Mléko", en: "Milk" }
    },
    stickyrice: {
      ingredients: {
        cs: "Lepkavá rýže, kokosové mléko, cukr, mango/ovoce.",
        en: "Sticky rice, coconut milk, sugar, mango/fruit."
      },
      allergens: { cs: "—", en: "—" }
    },
    pannacotta: {
      ingredients: {
        cs: "Smetana, mléko, cukr, vanilka, želatina, ovocné pyré.",
        en: "Cream, milk, sugar, vanilla, gelatin, fruit purée."
      },
      allergens: { cs: "Mléko", en: "Milk" }
    },
    cheesecake: {
      ingredients: {
        cs: "Cream cheese, smetana, vejce, sušenkový korpus, máslo.",
        en: "Cream cheese, cream, egg, biscuit base, butter."
      },
      allergens: { cs: "Lepek, mléko, vejce", en: "Gluten, milk, egg" }
    },
    salmon: {
      ingredients: {
        cs: "Losos, žampiony, pečené brambory, bylinkové máslo.",
        en: "Salmon, mushrooms, roasted potatoes, herb butter."
      },
      allergens: { cs: "Ryby, mléko", en: "Fish, milk" }
    },
    noodlesoup_r: {
      ingredients: {
        cs: "Hovězí vývar, rýžové nudle, hovězí maso, jarní cibulka, koriandr, limetka, chilli.",
        en: "Beef broth, rice noodles, beef, spring onion, coriander, lime, chilli."
      },
      allergens: { cs: "Může obsahovat sóju", en: "May contain soy" }
    },
    chickensupreme: {
      ingredients: {
        cs: "Kuřecí prsa, brokolice, smetanová omáčka, bylinky.",
        en: "Chicken breast, broccoli, cream sauce, herbs."
      },
      allergens: { cs: "Mléko", en: "Milk" }
    },
    pumpkinrisotto: {
      ingredients: {
        cs: "Dýně, arborio rýže, parmazán, vývar, máslo.",
        en: "Pumpkin, arborio rice, parmesan, broth, butter."
      },
      allergens: { cs: "Mléko", en: "Milk" }
    },
    herbchicken: {
      ingredients: {
        cs: "Kuřecí maso marinované v bylinkách, česnek, olej, brambory nebo rýže.",
        en: "Chicken marinated in herbs, garlic, oil, potatoes or rice."
      },
      allergens: { cs: "Může obsahovat lepek", en: "May contain gluten" }
    },
    grilledveg: {
      ingredients: {
        cs: "Grilovaná sezónní zelenina, žampiony, bylinkový olej.",
        en: "Grilled seasonal vegetables, mushrooms, herb oil."
      },
      allergens: { cs: "—", en: "—" }
    }
  };

  var STORAGE_KEY = "mmf_lang";

  var currentLang = "cs";

  function applyLanguage(lang) {
    currentLang = lang;
    var dict = translations[lang] || translations.cs;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.documentElement.setAttribute("lang", lang);
    var label = document.getElementById("langBtnLabel");
    if (label) label.textContent = LANG_NAMES[lang] || LANG_NAMES.cs;

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function openPopup() {
    document.getElementById("langOverlay").hidden = false;
    document.getElementById("langPopup").hidden = false;
  }
  function closePopup() {
    document.getElementById("langOverlay").hidden = true;
    document.getElementById("langPopup").hidden = true;
  }

  function openDish(dishKey) {
    var data = dishData[dishKey];
    if (!data) return;
    var dict = translations[currentLang] || translations.cs;
    var titleKey = "dish." + dishKey;
    document.getElementById("dishPopupTitle").textContent = dict[titleKey] || translations.cs[titleKey] || dishKey;
    document.getElementById("dishIngredients").textContent =
      data.ingredients[currentLang] || data.ingredients.en || data.ingredients.cs;
    document.getElementById("dishAllergens").textContent =
      data.allergens[currentLang] || data.allergens.en || data.allergens.cs;

    var btn = document.querySelector('.dish-trigger[data-dish="' + dishKey + '"]');
    var li = btn ? btn.closest("li") : null;
    var weightEl = li ? li.querySelector(".g1") : null;
    var priceEl = li ? li.querySelector(".price") : null;
    var weight = weightEl ? weightEl.textContent : "";
    var price = priceEl ? priceEl.textContent : "";
    var weightPart = weight ? (dict["dish.weightLabel"] + " " + weight) : "";
    var pricePart = price ? (dict["dish.priceLabel"] + " " + price) : "";
    document.getElementById("dishMeta").textContent = [weightPart, pricePart].filter(Boolean).join(", ");

    var photo = document.getElementById("dishPhoto");
    var cacheBust = "?v=" + Date.now();
    photo.style.display = "none";
    photo.dataset.triedJpg = "";
    photo.onload = function () { photo.style.display = "block"; };
    photo.onerror = function () {
      if (photo.dataset.triedJpg !== "1") {
        photo.dataset.triedJpg = "1";
        photo.src = "images/dishes/" + dishKey + ".jpg" + cacheBust;
      } else {
        photo.style.display = "none";
      }
    };
    photo.src = "images/dishes/" + dishKey + ".gif" + cacheBust;

    document.getElementById("dishOverlay").hidden = false;
    document.getElementById("dishPopup").hidden = false;
  }
  function closeDish() {
    document.getElementById("dishOverlay").hidden = true;
    document.getElementById("dishPopup").hidden = true;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var saved = "cs";
    try { saved = localStorage.getItem(STORAGE_KEY) || "cs"; } catch (e) { /* ignore */ }
    applyLanguage(saved);

    var langBtn = document.getElementById("langBtn");
    var langClose = document.getElementById("langClose");
    var langOverlay = document.getElementById("langOverlay");
    if (langBtn) langBtn.addEventListener("click", openPopup);
    if (langClose) langClose.addEventListener("click", closePopup);
    if (langOverlay) langOverlay.addEventListener("click", closePopup);

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
        closePopup();
      });
    });

    document.querySelectorAll(".dish-trigger").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openDish(btn.getAttribute("data-dish"));
      });
    });
    var dishClose = document.getElementById("dishClose");
    var dishOrderLink = document.getElementById("dishOrderLink");
    var dishOverlay = document.getElementById("dishOverlay");
    if (dishClose) dishClose.addEventListener("click", closeDish);
    if (dishOrderLink) dishOrderLink.addEventListener("click", closeDish);
    if (dishOverlay) dishOverlay.addEventListener("click", closeDish);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closePopup();
        closeDish();
      }
    });
  });

  window.MMF_LANG = {
    translations: translations,
    dishData: dishData,
    LANG_NAMES: LANG_NAMES,
    getLang: function () { return currentLang; }
  };
})();
