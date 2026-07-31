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
      "menu.note": "⚠ Ukázkové položky — nahraďte finálním menu a cenami, jakmile budou hotové.",
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
      "dish.riz": "Řízek (vepřový/kuřecí) s bramb. kaší",
      "dish.padthai": "Pad Thai (kuře, krevety)",
      "dish.friedrice": "Fried rice (kuře, krevety)",
      "dish.noodlesoup": "Thajská nudlová polévka s hovězím",
      "dish.greencurry": "Chicken green curry s rýží",
      "dish.crispypork_rice": "Crispy pork s rýží, sladká sójová omáčka",
      "dish.kungpao": "Chicken kung pao",
      "dish.herbchickenwing": "Herb fried chicken wing",
      "dish.crispypork_norice": "Crispy pork, sladká sójová omáčka",
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
      "location.hours": "Út–Ne 10:30–22:00",
      "contact.title": "Kontakt",
      "contact.lede": "Dotaz, hromadná objednávka pro oddělení, nebo si chcete jen popovídat o menu?",
      "contact.phone": "Telefon",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234, Praha 5",
      "footer.disclaimer": "Jídlo nenahrazuje nemocniční ani dietní stravu. Konzumace na vlastní odpovědnost."
    },

    en: {
      "nav.menu": "Menu",
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
      "dish.riz": "Schnitzel (pork/chicken) with mashed potatoes",
      "dish.padthai": "Pad Thai (chicken, shrimp)",
      "dish.friedrice": "Fried rice (chicken, shrimp)",
      "dish.noodlesoup": "Thai beef noodle soup",
      "dish.greencurry": "Chicken green curry with rice",
      "dish.crispypork_rice": "Crispy pork with rice, sweet soy sauce",
      "dish.kungpao": "Chicken kung pao",
      "dish.herbchickenwing": "Herb fried chicken wing",
      "dish.crispypork_norice": "Crispy pork, sweet soy sauce",
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
      "location.hours": "Tue–Sun 10:30am–10pm",
      "contact.title": "Contact",
      "contact.lede": "Questions, a group order for your department, or just want to talk menu?",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234, Prague 5",
      "footer.disclaimer": "Food does not replace hospital or medical diets. Eat at your own responsibility."
    },

    fr: {
      "nav.menu": "Menu",
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
      "dish.riz": "Escalope (porc/poulet), purée de pommes de terre",
      "dish.padthai": "Pad Thaï (poulet, crevettes)",
      "dish.friedrice": "Riz sauté (poulet, crevettes)",
      "dish.noodlesoup": "Soupe de nouilles thaïe au bœuf",
      "dish.greencurry": "Curry vert au poulet, riz",
      "dish.crispypork_rice": "Porc croustillant au riz, sauce soja sucrée",
      "dish.kungpao": "Poulet kung pao",
      "dish.herbchickenwing": "Aile de poulet frite aux herbes",
      "dish.crispypork_norice": "Porc croustillant, sauce soja sucrée",
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
      "location.hours": "Mar–Dim 10h30–22h",
      "contact.title": "Contact",
      "contact.lede": "Une question, une commande groupée pour votre service, ou juste envie de parler menu ?",
      "contact.phone": "Téléphone",
      "contact.email": "E-mail",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234, Prague 5",
      "footer.disclaimer": "Ces plats ne remplacent pas un régime hospitalier ou médical. Consommation sous votre propre responsabilité."
    },

    uk: {
      "nav.menu": "Меню",
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
      "dish.riz": "Шніцель (свинячий/курячий) з картопляним пюре",
      "dish.padthai": "Пад Тай (курка, креветки)",
      "dish.friedrice": "Смажений рис (курка, креветки)",
      "dish.noodlesoup": "Тайський суп з локшиною та яловичиною",
      "dish.greencurry": "Курячий зелений карі з рисом",
      "dish.crispypork_rice": "Хрустка свинина з рисом, солодкий соєвий соус",
      "dish.kungpao": "Курка кунг пао",
      "dish.herbchickenwing": "Курячі крильця смажені з травами",
      "dish.crispypork_norice": "Хрустка свинина, солодкий соєвий соус",
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
      "location.hours": "Вт–Нд 10:30–22:00",
      "contact.title": "Контакти",
      "contact.lede": "Питання, групове замовлення для відділення, чи просто хочете обговорити меню?",
      "contact.phone": "Телефон",
      "contact.email": "Ел. пошта",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234, Прага 5",
      "footer.disclaimer": "Їжа не замінює лікарняне чи дієтичне харчування. Споживання на власну відповідальність."
    },

    vi: {
      "nav.menu": "Thực đơn",
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
      "dish.riz": "Thịt cốt lết (heo/gà) chiên xù, khoai tây nghiền",
      "dish.padthai": "Pad Thái (gà, tôm)",
      "dish.friedrice": "Cơm chiên (gà, tôm)",
      "dish.noodlesoup": "Súp mì Thái với thịt bò",
      "dish.greencurry": "Cà ri xanh gà với cơm",
      "dish.crispypork_rice": "Thịt heo giòn với cơm, sốt đậu nành ngọt",
      "dish.kungpao": "Gà kung pao",
      "dish.herbchickenwing": "Cánh gà chiên thảo mộc",
      "dish.crispypork_norice": "Thịt heo giòn, sốt đậu nành ngọt",
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
      "location.hours": "Thứ 3–Chủ nhật, 10:30–22:00",
      "contact.title": "Liên hệ",
      "contact.lede": "Có câu hỏi, muốn đặt món theo nhóm cho khoa, hay chỉ muốn hỏi về thực đơn?",
      "contact.phone": "Điện thoại",
      "contact.email": "Email",
      "contact.instagram": "Instagram",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234, Praha 5",
      "footer.disclaimer": "Món ăn không thay thế chế độ ăn bệnh viện hoặc theo chỉ định y tế. Tự chịu trách nhiệm khi dùng."
    },

    th: {
      "nav.menu": "เมนู",
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
      "dish.riz": "หมู/ไก่ชุบเกล็ดขนมปังทอด เสิร์ฟพร้อมมันฝรั่งบด",
      "dish.padthai": "ผัดไทย (ไก่ กุ้ง)",
      "dish.friedrice": "ข้าวผัด (ไก่ กุ้ง)",
      "dish.noodlesoup": "ก๋วยเตี๋ยวเนื้อสไตล์ไทย",
      "dish.greencurry": "แกงเขียวหวานไก่ กับข้าว",
      "dish.crispypork_rice": "หมูกรอบกับข้าว ซอสถั่วเหลืองหวาน",
      "dish.kungpao": "ไก่กังเปา",
      "dish.herbchickenwing": "ปีกไก่ทอดสมุนไพร",
      "dish.crispypork_norice": "หมูกรอบ ซอสถั่วเหลืองหวาน",
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
      "location.hours": "อังคาร–อาทิตย์ 10:30–22:00 น.",
      "contact.title": "ติดต่อ",
      "contact.lede": "มีคำถาม ต้องการสั่งอาหารเป็นกลุ่มสำหรับแผนก หรืออยากคุยเรื่องเมนู?",
      "contact.phone": "โทรศัพท์",
      "contact.email": "อีเมล",
      "contact.instagram": "อินสตาแกรม",
      "footer.rights": "© 2026 MotolMixFusion · Kudrnova 234, Praha 5",
      "footer.disclaimer": "อาหารนี้ไม่ใช่อาหารทดแทนอาหารโรงพยาบาลหรืออาหารตามแพทย์สั่ง รับประทานโดยถือเป็นความรับผิดชอบของท่านเอง"
    }
  };

  var dishData = {
    riz: {
      ingredients: {
        cs: "Vepřové nebo kuřecí maso, strouhanka, mouka, vejce, bramborová kaše (brambory, mléko, máslo).",
        en: "Pork or chicken, breadcrumbs, flour, egg, mashed potatoes (potatoes, milk, butter)."
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
    photo.style.display = "none";
    photo.onload = function () { photo.style.display = "block"; };
    photo.onerror = function () { photo.style.display = "none"; };
    photo.src = "images/dishes/" + dishKey + ".jpg";

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

    document.getElementById("langBtn").addEventListener("click", openPopup);
    document.getElementById("langClose").addEventListener("click", closePopup);
    document.getElementById("langOverlay").addEventListener("click", closePopup);

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
    document.getElementById("dishClose").addEventListener("click", closeDish);
    document.getElementById("dishOrderLink").addEventListener("click", closeDish);
    document.getElementById("dishOverlay").addEventListener("click", closeDish);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closePopup();
        closeDish();
      }
    });
  });
})();
