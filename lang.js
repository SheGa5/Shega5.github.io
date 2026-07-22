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
      "hero.title": "Domácí česko-asijská kuchyně, blízko FN Motol",
      "hero.lede": "Vaříme čerstvě každý den. Objednejte si na oběd mezi směnami.",
      "hero.eveningLink": "nebo se za námi zastavte večer",
      "hero.btnOrder": "Chci objednat",
      "hero.btnMenu": "Zobrazit menu",
      "menu.deptLabel": "ODDĚLENÍ 01",
      "menu.title": "Jídelníček",
      "menu.note": "⚠ Ukázkové položky — nahraďte finálním menu a cenami, jakmile budou hotové.",
      "menu.mainsHeading": "Hlavní jídla",
      "menu.soupsHeading": "Polévky & malé",
      "menu.dailyHeading": "Denní menu (11–14 h)",
      "menu.allergen": "Alergeny u jednotlivých jídel na vyžádání a v aplikaci Menu55. MotolMixFusion nenahrazuje nemocniční ani dietní stravu — objednávkou potvrzujete, že jídlo konzumujete na vlastní odpovědnost.",
      "menu.clickHint": "💡 Klikněte na jídlo pro složení a alergeny.",
      "dish.ingredientsLabel": "Složení",
      "dish.allergenLabel": "Alergeny",
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
      "dish.wok": "Kuřecí wok se zeleninou a rýží",
      "dish.pork": "Vepřové karé po asijsku, dušená rýže",
      "dish.noodles": "Smažené nudle se zeleninou (vege)",
      "dish.svickova": "Svíčková na smetaně, houskový knedlík",
      "dish.curry": "Kuřecí curry, jasmínová rýže",
      "dish.pho": "Pho vývar s kuřecím masem",
      "dish.garlic": "Česneková s krutony",
      "dish.rolls": "Jarní závitky (2 ks)",
      "dish.salad": "Zeleninový salát s arašídovým dresinkem",
      "dish.daily": "Polévka + hlavní jídlo",
      "order.deptLabel": "ODDĚLENÍ 02",
      "order.title": "Jak objednat",
      "order.tagDelivery": "Rozvoz",
      "order.tagHere": "U nás",
      "order.woltDesc": "Doručíme na patro, do bytu i před vrátnici.",
      "order.boltDesc": "Objednávka do pár kliků, sledování v appce.",
      "order.menu55Name": "Menu55 — rezervace stolu",
      "order.menu55Desc": "10 stolů, rychlá obsluha o pauze.",
      "location.deptLabel": "ODDĚLENÍ 03",
      "location.title": "Kde nás najdete",
      "location.metro": "Nemocnice Motol (6 min pěšky)",
      "location.tram": "Hotel Golf (3 min pěšky)",
      "location.bus": "Nemocnice Motol (6 min pěšky)",
      "location.hoursLabel": "Otevřeno:",
      "location.hours": "Po–Pá 10:30–19:00",
      "contact.deptLabel": "ODDĚLENÍ 04",
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
      "hero.title": "Homestyle Czech-Asian cooking, next to Motol hospital",
      "hero.lede": "Cooked fresh every day. Order for a break between shifts.",
      "hero.eveningLink": "or stop by in the evening",
      "hero.btnOrder": "Order now",
      "hero.btnMenu": "View menu",
      "menu.deptLabel": "SECTION 01",
      "menu.title": "Menu",
      "menu.note": "⚠ Sample items — replace with the final menu and prices once ready.",
      "menu.mainsHeading": "Mains",
      "menu.soupsHeading": "Soups & small plates",
      "menu.dailyHeading": "Daily menu (11am–2pm)",
      "menu.allergen": "Allergens available on request and in the Menu55 app. MotolMixFusion does not replace hospital or medical diets — by ordering you confirm you're eating at your own responsibility.",
      "menu.clickHint": "💡 Tap a dish to see ingredients and allergens.",
      "dish.ingredientsLabel": "Ingredients",
      "dish.allergenLabel": "Allergens",
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
      "dish.wok": "Chicken wok with vegetables and rice",
      "dish.pork": "Asian-style pork loin, steamed rice",
      "dish.noodles": "Fried noodles with vegetables (veg)",
      "dish.svickova": "Czech beef sirloin in cream sauce, bread dumpling",
      "dish.curry": "Chicken curry, jasmine rice",
      "dish.pho": "Pho broth with chicken",
      "dish.garlic": "Garlic soup with croutons",
      "dish.rolls": "Spring rolls (2 pcs)",
      "dish.salad": "Vegetable salad with peanut dressing",
      "dish.daily": "Soup + main course",
      "order.deptLabel": "SECTION 02",
      "order.title": "How to order",
      "order.tagDelivery": "Delivery",
      "order.tagHere": "Dine-in",
      "order.woltDesc": "We deliver to your floor, flat, or the front desk.",
      "order.boltDesc": "Order in a few taps, track it in the app.",
      "order.menu55Name": "Menu55 — table booking",
      "order.menu55Desc": "10 tables, fast service on your break.",
      "location.deptLabel": "SECTION 03",
      "location.title": "Find us",
      "location.metro": "Nemocnice Motol station (6 min walk)",
      "location.tram": "Hotel Golf stop (3 min walk)",
      "location.bus": "Nemocnice Motol stop (6 min walk)",
      "location.hoursLabel": "Open:",
      "location.hours": "Mon–Fri 10:30am–7pm",
      "contact.deptLabel": "SECTION 04",
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
      "hero.title": "Cuisine maison tchéco-asiatique, à côté de l'hôpital Motol",
      "hero.lede": "Cuisiné frais chaque jour. Commandez pour votre pause entre deux services.",
      "hero.eveningLink": "ou passez nous voir le soir",
      "hero.btnOrder": "Commander",
      "hero.btnMenu": "Voir le menu",
      "menu.deptLabel": "SECTION 01",
      "menu.title": "Le menu",
      "menu.note": "⚠ Exemples de plats — à remplacer par le menu et les prix définitifs.",
      "menu.mainsHeading": "Plats principaux",
      "menu.soupsHeading": "Soupes & petites entrées",
      "menu.dailyHeading": "Menu du jour (11h–14h)",
      "menu.allergen": "Allergènes disponibles sur demande et dans l'application Menu55. MotolMixFusion ne remplace pas un régime hospitalier ou médical — en commandant, vous confirmez consommer sous votre propre responsabilité.",
      "menu.clickHint": "💡 Cliquez sur un plat pour voir les ingrédients et allergènes.",
      "dish.ingredientsLabel": "Ingrédients",
      "dish.allergenLabel": "Allergènes",
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
      "dish.wok": "Wok de poulet, légumes et riz",
      "dish.pork": "Échine de porc à l'asiatique, riz vapeur",
      "dish.noodles": "Nouilles sautées aux légumes (végé)",
      "dish.svickova": "Bœuf mariné à la crème (svíčková), knedlík",
      "dish.curry": "Curry de poulet, riz jasmin",
      "dish.pho": "Bouillon pho au poulet",
      "dish.garlic": "Soupe à l'ail et croûtons",
      "dish.rolls": "Rouleaux de printemps (2 pcs)",
      "dish.salad": "Salade de légumes, sauce cacahuète",
      "dish.daily": "Soupe + plat principal",
      "order.deptLabel": "SECTION 02",
      "order.title": "Comment commander",
      "order.tagDelivery": "Livraison",
      "order.tagHere": "Sur place",
      "order.woltDesc": "Livré à votre étage, chez vous ou à l'accueil.",
      "order.boltDesc": "Commande en quelques clics, suivi dans l'appli.",
      "order.menu55Name": "Menu55 — réservation de table",
      "order.menu55Desc": "10 tables, service rapide pendant votre pause.",
      "location.deptLabel": "SECTION 03",
      "location.title": "Nous trouver",
      "location.metro": "Station Nemocnice Motol (6 min à pied)",
      "location.tram": "Arrêt Hotel Golf (3 min à pied)",
      "location.bus": "Arrêt Nemocnice Motol (6 min à pied)",
      "location.hoursLabel": "Ouvert :",
      "location.hours": "Lun–Ven 10h30–19h",
      "contact.deptLabel": "SECTION 04",
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
      "hero.title": "Домашня чесько-азійська кухня біля лікарні Мотол",
      "hero.lede": "Готуємо свіже щодня. Замовте на обід між змінами.",
      "hero.eveningLink": "або завітайте до нас увечері",
      "hero.btnOrder": "Замовити",
      "hero.btnMenu": "Переглянути меню",
      "menu.deptLabel": "РОЗДІЛ 01",
      "menu.title": "Меню",
      "menu.note": "⚠ Приклад страв — замініть остаточним меню та цінами, коли будуть готові.",
      "menu.mainsHeading": "Основні страви",
      "menu.soupsHeading": "Супи та закуски",
      "menu.dailyHeading": "Меню дня (11:00–14:00)",
      "menu.allergen": "Інформація про алергени доступна за запитом і в додатку Menu55. MotolMixFusion не замінює лікарняне чи дієтичне харчування — оформлюючи замовлення, ви підтверджуєте, що споживаєте їжу на власну відповідальність.",
      "menu.clickHint": "💡 Натисніть на страву, щоб побачити склад та алергени.",
      "dish.ingredientsLabel": "Склад",
      "dish.allergenLabel": "Алергени",
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
      "dish.wok": "Курка вок з овочами та рисом",
      "dish.pork": "Свиняча корейка по-азійськи, рис на пару",
      "dish.noodles": "Смажена локшина з овочами (вег.)",
      "dish.svickova": "Яловичина у вершковому соусі, кнедлик",
      "dish.curry": "Курячий карі, рис жасмин",
      "dish.pho": "Бульйон фо з куркою",
      "dish.garlic": "Часниковий суп з грінками",
      "dish.rolls": "Спрінг-роли (2 шт)",
      "dish.salad": "Овочевий салат з арахісовою заправкою",
      "dish.daily": "Суп + основна страва",
      "order.deptLabel": "РОЗДІЛ 02",
      "order.title": "Як замовити",
      "order.tagDelivery": "Доставка",
      "order.tagHere": "У закладі",
      "order.woltDesc": "Доставимо на поверх, додому чи на прохідну.",
      "order.boltDesc": "Замовлення за кілька кліків, відстеження в додатку.",
      "order.menu55Name": "Menu55 — бронювання столика",
      "order.menu55Desc": "10 столиків, швидке обслуговування на перерві.",
      "location.deptLabel": "РОЗДІЛ 03",
      "location.title": "Де нас знайти",
      "location.metro": "Станція Nemocnice Motol (6 хв пішки)",
      "location.tram": "Зупинка Hotel Golf (3 хв пішки)",
      "location.bus": "Зупинка Nemocnice Motol (6 хв пішки)",
      "location.hoursLabel": "Години роботи:",
      "location.hours": "Пн–Пт 10:30–19:00",
      "contact.deptLabel": "РОЗДІЛ 04",
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
      "hero.title": "Món ăn nhà làm phong cách Séc-Á, sát bệnh viện Motol",
      "hero.lede": "Nấu tươi mỗi ngày. Đặt món cho giờ nghỉ giữa ca.",
      "hero.eveningLink": "hoặc ghé thăm chúng tôi vào buổi tối",
      "hero.btnOrder": "Đặt món ngay",
      "hero.btnMenu": "Xem thực đơn",
      "menu.deptLabel": "MỤC 01",
      "menu.title": "Thực đơn",
      "menu.note": "⚠ Món mẫu — sẽ thay bằng thực đơn và giá chính thức khi hoàn tất.",
      "menu.mainsHeading": "Món chính",
      "menu.soupsHeading": "Súp & món nhỏ",
      "menu.dailyHeading": "Suất trong ngày (11h–14h)",
      "menu.allergen": "Thông tin dị ứng có sẵn khi yêu cầu và trong ứng dụng Menu55. MotolMixFusion không thay thế chế độ ăn bệnh viện hoặc theo chỉ định y tế — khi đặt món, quý khách xác nhận tự chịu trách nhiệm khi dùng.",
      "menu.clickHint": "💡 Nhấn vào món ăn để xem thành phần và chất gây dị ứng.",
      "dish.ingredientsLabel": "Thành phần",
      "dish.allergenLabel": "Chất gây dị ứng",
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
      "dish.wok": "Gà xào wok với rau củ và cơm",
      "dish.pork": "Sườn heo kiểu Á, cơm hấp",
      "dish.noodles": "Mì xào rau củ (chay)",
      "dish.svickova": "Bò sốt kem kiểu Séc, bánh knedlík",
      "dish.curry": "Cà ri gà, cơm thơm",
      "dish.pho": "Nước dùng phở với thịt gà",
      "dish.garlic": "Súp tỏi với bánh mì giòn",
      "dish.rolls": "Chả giò (2 cái)",
      "dish.salad": "Salad rau củ sốt đậu phộng",
      "dish.daily": "Súp + món chính",
      "order.deptLabel": "MỤC 02",
      "order.title": "Cách đặt món",
      "order.tagDelivery": "Giao hàng",
      "order.tagHere": "Tại quán",
      "order.woltDesc": "Giao tận tầng, tận nhà hoặc tại quầy lễ tân.",
      "order.boltDesc": "Đặt chỉ vài thao tác, theo dõi trong ứng dụng.",
      "order.menu55Name": "Menu55 — đặt bàn",
      "order.menu55Desc": "10 bàn, phục vụ nhanh trong giờ nghỉ.",
      "location.deptLabel": "MỤC 03",
      "location.title": "Tìm chúng tôi",
      "location.metro": "Ga Nemocnice Motol (đi bộ 6 phút)",
      "location.tram": "Trạm Hotel Golf (đi bộ 3 phút)",
      "location.bus": "Trạm Nemocnice Motol (đi bộ 6 phút)",
      "location.hoursLabel": "Giờ mở cửa:",
      "location.hours": "Thứ 2–Thứ 6, 10:30–19:00",
      "contact.deptLabel": "MỤC 04",
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
      "hero.title": "อาหารสไตล์เช็ก-เอเชียแบบโฮมเมด ใกล้โรงพยาบาล Motol",
      "hero.lede": "ปรุงสดใหม่ทุกวัน สั่งอาหารสำหรับช่วงพักระหว่างกะ",
      "hero.eveningLink": "หรือแวะมาหาเราตอนเย็น",
      "hero.btnOrder": "สั่งอาหารเลย",
      "hero.btnMenu": "ดูเมนู",
      "menu.deptLabel": "ส่วนที่ 01",
      "menu.title": "เมนูอาหาร",
      "menu.note": "⚠ รายการตัวอย่าง — จะเปลี่ยนเป็นเมนูและราคาจริงเมื่อพร้อม",
      "menu.mainsHeading": "จานหลัก",
      "menu.soupsHeading": "ซุปและจานเล็ก",
      "menu.dailyHeading": "เมนูประจำวัน (11.00–14.00 น.)",
      "menu.allergen": "ข้อมูลสารก่อภูมิแพ้แจ้งได้ตามคำขอ และดูได้ในแอป Menu55 MotolMixFusion ไม่ใช่อาหารทดแทนอาหารโรงพยาบาลหรืออาหารตามแพทย์สั่ง — การสั่งซื้อถือว่าท่านรับผิดชอบการบริโภคด้วยตนเอง",
      "menu.clickHint": "💡 แตะที่จานอาหารเพื่อดูส่วนประกอบและสารก่อภูมิแพ้",
      "dish.ingredientsLabel": "ส่วนประกอบ",
      "dish.allergenLabel": "สารก่อภูมิแพ้",
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
      "dish.wok": "ไก่ผัดผักรวมเสิร์ฟพร้อมข้าว",
      "dish.pork": "สันคอหมูสไตล์เอเชีย ข้าวนึ่ง",
      "dish.noodles": "ผัดหมี่ผัก (มังสวิรัติ)",
      "dish.svickova": "เนื้อซอสครีมสไตล์เช็ก เสิร์ฟกับขนมปังนึ่ง",
      "dish.curry": "แกงกะหรี่ไก่ ข้าวหอมมะลิ",
      "dish.pho": "ซุปเฝอไก่",
      "dish.garlic": "ซุปกระเทียมกับครูตอง",
      "dish.rolls": "ปอเปี๊ยะสด (2 ชิ้น)",
      "dish.salad": "สลัดผักซอสถั่วลิสง",
      "dish.daily": "ซุป + จานหลัก",
      "order.deptLabel": "ส่วนที่ 02",
      "order.title": "วิธีสั่งอาหาร",
      "order.tagDelivery": "จัดส่ง",
      "order.tagHere": "ทานที่ร้าน",
      "order.woltDesc": "จัดส่งถึงชั้น ถึงบ้าน หรือจุดรับที่ทางเข้า",
      "order.boltDesc": "สั่งง่ายเพียงไม่กี่คลิก ติดตามได้ในแอป",
      "order.menu55Name": "Menu55 — จองโต๊ะ",
      "order.menu55Desc": "10 โต๊ะ บริการรวดเร็วในช่วงพัก",
      "location.deptLabel": "ส่วนที่ 03",
      "location.title": "แผนที่ร้าน",
      "location.metro": "สถานี Nemocnice Motol (เดิน 6 นาที)",
      "location.tram": "ป้าย Hotel Golf (เดิน 3 นาที)",
      "location.bus": "ป้าย Nemocnice Motol (เดิน 6 นาที)",
      "location.hoursLabel": "เปิดทำการ:",
      "location.hours": "จันทร์–ศุกร์ 10:30–19:00 น.",
      "contact.deptLabel": "ส่วนที่ 04",
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
    wok: {
      ingredients: {
        cs: "Kuřecí prsa, míchaná zelenina (paprika, mrkev, brokolice), rýže, sójová omáčka, česnek, zázvor, olej.",
        en: "Chicken breast, mixed vegetables (bell pepper, carrot, broccoli), rice, soy sauce, garlic, ginger, oil."
      },
      allergens: { cs: "Sója, lepek (sójová omáčka)", en: "Soy, gluten (soy sauce)" }
    },
    pork: {
      ingredients: {
        cs: "Vepřová panenka, sójová omáčka, česnek, med, pětikoření, dušená rýže.",
        en: "Pork tenderloin, soy sauce, garlic, honey, five-spice, steamed rice."
      },
      allergens: { cs: "Sója, lepek", en: "Soy, gluten" }
    },
    noodles: {
      ingredients: {
        cs: "Pšeničné nudle, zelenina (zelí, mrkev, jarní cibulka), sójová omáčka, olej, sezam.",
        en: "Wheat noodles, vegetables (cabbage, carrot, spring onion), soy sauce, oil, sesame."
      },
      allergens: { cs: "Lepek, sója, sezam", en: "Gluten, soy, sesame" }
    },
    svickova: {
      ingredients: {
        cs: "Hovězí maso, kořenová zelenina, smetana, houskový knedlík (pšeničná mouka, vejce, mléko).",
        en: "Beef, root vegetables, cream, bread dumpling (wheat flour, egg, milk)."
      },
      allergens: { cs: "Lepek, mléko, vejce, celer", en: "Gluten, milk, egg, celery" }
    },
    curry: {
      ingredients: {
        cs: "Kuřecí maso, kari koření, kokosové mléko, zelenina, jasmínová rýže.",
        en: "Chicken, curry spices, coconut milk, vegetables, jasmine rice."
      },
      allergens: { cs: "Může obsahovat stopy ořechů", en: "May contain traces of nuts" }
    },
    pho: {
      ingredients: {
        cs: "Hovězí/kuřecí vývar, rýžové nudle, kuřecí maso, jarní cibulka, koriandr, limetka.",
        en: "Beef/chicken broth, rice noodles, chicken, spring onion, coriander, lime."
      },
      allergens: { cs: "Ryby (rybí omáčka)", en: "Fish (fish sauce)" }
    },
    garlic: {
      ingredients: {
        cs: "Vývar, česnek, brambory, krutony (pšeničný chléb), majoránka.",
        en: "Broth, garlic, potatoes, croutons (wheat bread), marjoram."
      },
      allergens: { cs: "Lepek, může obsahovat vejce", en: "Gluten, may contain egg" }
    },
    rolls: {
      ingredients: {
        cs: "Rýžový papír, zelenina, glasové nudle, sójová omáčka k namáčení.",
        en: "Rice paper, vegetables, glass noodles, soy dipping sauce."
      },
      allergens: { cs: "Sója", en: "Soy" }
    },
    salad: {
      ingredients: {
        cs: "Míchaný salát, zelenina, arašídový dresink (arašídy, sójová omáčka, limetka).",
        en: "Mixed salad, vegetables, peanut dressing (peanuts, soy sauce, lime)."
      },
      allergens: { cs: "Arašídy, sója", en: "Peanuts, soy" }
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
    document.getElementById("dishOverlay").hidden = false;
    document.getElementById("dishPopup").hidden = false;
  }
  function closeDish() {
    document.getElementById("dishOverlay").hidden = true;
    document.getElementById("dishPopup").hidden = true;
  }

  function openRes() {
    document.getElementById("resOverlay").hidden = false;
    document.getElementById("resPopup").hidden = false;
  }
  function closeRes() {
    document.getElementById("resOverlay").hidden = true;
    document.getElementById("resPopup").hidden = true;
  }

  function submitReservation(e) {
    e.preventDefault();
    var date = document.getElementById("resDate").value;
    var time = document.getElementById("resTime").value;
    var guests = document.getElementById("resGuests").value;
    var name = document.getElementById("resName").value;
    var phone = document.getElementById("resPhone").value;
    var note = document.getElementById("resNote").value;

    var subject = "Rezervace stolu — " + name + " (" + date + " " + time + ")";
    var body =
      "Datum: " + date + "\n" +
      "Čas: " + time + "\n" +
      "Počet osob: " + guests + "\n" +
      "Jméno: " + name + "\n" +
      "Telefon: " + phone + "\n" +
      "Poznámka: " + (note || "-");

    var mailto =
      "mailto:dragan.segedin@gmail.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    window.location.href = mailto;
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
    document.getElementById("dishOverlay").addEventListener("click", closeDish);

    document.getElementById("resBtn").addEventListener("click", openRes);
    document.getElementById("resClose").addEventListener("click", closeRes);
    document.getElementById("resOverlay").addEventListener("click", closeRes);
    document.getElementById("resForm").addEventListener("submit", submitReservation);

    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("res") === "1") {
      openRes();
    }

    var todayStr = new Date().toISOString().split("T")[0];
    var dateInput = document.getElementById("resDate");
    if (dateInput) dateInput.setAttribute("min", todayStr);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closePopup();
        closeDish();
        closeRes();
      }
    });
  });
})();
