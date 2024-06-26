const countries = [
      { name: "Афганистан", translation: "Afghanistan" },
      { name: "Аландские острова", translation: "Aland Islands" },
      { name: "Албания", translation: "Albania" },
      { name: "Алжир", translation: "Algeria" },
      { name: "Американское Самоа", translation: "American Samoa" },
      { name: "Андорра", translation: "Andorra" },
      { name: "Ангола", translation: "Angola" },
      { name: "Ангилья", translation: "Anguilla" },
      { name: "Антарктида", translation: "Antarctica" },
      { name: "Антигуа и Барбуда", translation: "Antigua and Barbuda" },
      { name: "Аргентина", translation: "Argentina" },
      { name: "Армения", translation: "Armenia" },
      { name: "Аруба", translation: "Aruba" },
      { name: "Австралия", translation: "Australia" },
      { name: "Австрия", translation: "Austria" },
      { name: "Азербайджан", translation: "Azerbaijan" },
      { name: "Багамы", translation: "Bahamas" },
      { name: "Бахрейн", translation: "Bahrain" },
      { name: "Бангладеш", translation: "Bangladesh" },
      { name: "Барбадос", translation: "Barbados" },
      { name: "Беларусь", translation: "Belarus" },
      { name: "Бельгия", translation: "Belgium" },
      { name: "Белиз", translation: "Belize" },
      { name: "Бенин", translation: "Benin" },
      { name: "Бермуды", translation: "Bermuda" },
      { name: "Бутан", translation: "Bhutan" },
      { name: "Боливия", translation: "Bolivia" },
      { name: "Бонайре, Синт-Эстатиус и Саба", translation: "Bonaire, Sint Eustatius and Saba" },
      { name: "Босния и Герцеговина", translation: "Bosnia and Herzegovina" },
      { name: "Ботсвана", translation: "Botswana" },
      { name: "Остров Буве", translation: "Bouvet Island" },
      { name: "Бразилия", translation: "Brazil" },
      { name: "Британская территория в Индийском океане", translation: "British Indian Ocean Territory" },
      { name: "Бруней", translation: "Brunei" },
      { name: "Болгария", translation: "Bulgaria" },
      { name: "Буркина-Фасо", translation: "Burkina Faso" },
      { name: "Бурунди", translation: "Burundi" },
      { name: "Кабо-Верде", translation: "Cabo Verde" },
      { name: "Камбоджа", translation: "Cambodia" },
      { name: "Камерун", translation: "Cameroon" },
      { name: "Канада", translation: "Canada" },
      { name: "Каймановы острова", translation: "Cayman Islands" },
      { name: "Центральноафриканская Республика", translation: "Central African Republic" },
      { name: "Чад", translation: "Chad" },
      { name: "Чили", translation: "Chile" },
      { name: "Китай", translation: "China" },
      { name: "Остров Рождества", translation: "Christmas Island" },
      { name: "Кокосовые (Килинг) острова", translation: "Cocos (Keeling) Islands" },
      { name: "Колумбия", translation: "Colombia" },
      { name: "Коморы", translation: "Comoros" },
      { name: "Конго", translation: "Congo" },
      { name: "Демократическая Республика Конго", translation: "Democratic Republic of the Congo" },
      { name: "Острова Кука", translation: "Cook Islands" },
      { name: "Коста-Рика", translation: "Costa Rica" },
      { name: "Хорватия", translation: "Croatia" },
      { name: "Куба", translation: "Cuba" },
      { name: "Кюрасао", translation: "Curacao" },
      { name: "Кипр", translation: "Cyprus" },
      { name: "Чехия", translation: "Czech Republic" },
      { name: "Дания", translation: "Denmark" },
      { name: "Джибути", translation: "Djibouti" },
      { name: "Доминика", translation: "Dominica" },
      { name: "Доминиканская Республика", translation: "Dominican Republic" },
      { name: "Эквадор", translation: "Ecuador" },
      { name: "Египет", translation: "Egypt" },
      { name: "Сальвадор", translation: "El Salvador" },
      { name: "Экваториальная Гвинея", translation: "Equatorial Guinea" },
      { name: "Эритрея", translation: "Eritrea" },
      { name: "Эстония", translation: "Estonia" },
      { name: "Эфиопия", translation: "Ethiopia" },
      { name: "Фолклендские острова (Мальвинские)", translation: "Falkland Islands (Malvinas)" },
      { name: "Фарерские острова", translation: "Faroe Islands" },
      { name: "Фиджи", translation: "Fiji" },
      { name: "Финляндия", translation: "Finland" },
      { name: "Франция", translation: "France" },
      { name: "Французская Гвиана", translation: "French Guiana" },
      { name: "Французская Полинезия", translation: "French Polynesia" },
      { name: "Французские Южные и Антарктические территории", translation: "French Southern Territories" },
      { name: "Габон", translation: "Gabon" },
      { name: "Гамбия", translation: "Gambia" },
      { name: "Грузия", translation: "Georgia" },
      { name: "Германия", translation: "Germany" },
      { name: "Гана", translation: "Ghana" },
      { name: "Гибралтар", translation: "Gibraltar" },
      { name: "Греция", translation: "Greece" },
      { name: "Гренландия", translation: "Greenland" },
      { name: "Гренада", translation: "Grenada" },
      { name: "Гваделупа", translation: "Guadeloupe" },
      { name: "Гуам", translation: "Guam" },
      { name: "Гватемала", translation: "Guatemala" },
      { name: "Гернси", translation: "Guernsey" },
      { name: "Гвинея", translation: "Guinea" },
      { name: "Гвинея-Бисау", translation: "Guinea-Bissau" },
      { name: "Гайана", translation: "Guyana" },
      { name: "Гаити", translation: "Haiti" },
      { name: "Остров Херд и острова Макдональд", translation: "Heard Island and McDonald Islands" },
      { name: "Святая Елена, Остров Вознесения и Тристан-да-Кунья", translation: "Saint Helena, Ascension and Tristan da Cunha" },
      { name: "Ватикан", translation: "Vatican City" },
      { name: "Гондурас", translation: "Honduras" },
      { name: "Гонконг", translation: "Hong Kong" },
      { name: "Венгрия", translation: "Hungary" },
      { name: "Исландия", translation: "Iceland" },
      { name: "Индия", translation: "India" },
      { name: "Индонезия", translation: "Indonesia" },
      { name: "Иран", translation: "Iran" },
      { name: "Ирак", translation: "Iraq" },
      { name: "Ирландия", translation: "Ireland" },
      { name: "Остров Мэн", translation: "Isle of Man" },
      { name: "Израиль", translation: "Israel" },
      { name: "Италия", translation: "Italy" },
      { name: "Кот-д'Ивуар", translation: "Ivory Coast" },
      { name: "Ямайка", translation: "Jamaica" },
      { name: "Япония", translation: "Japan" },
      { name: "Джерси", translation: "Jersey" },
      { name: "Иордания", translation: "Jordan" },
      { name: "Казахстан", translation: "Kazakhstan" },
      { name: "Кения", translation: "Kenya" },
      { name: "Кирибати", translation: "Kiribati" },
      { name: "Северная Корея", translation: "North Korea" },
      { name: "Южная Корея", translation: "South Korea" },
      { name: "Косово", translation: "Kosovo" },
      { name: "Кувейт", translation: "Kuwait" },
      { name: "Киргизия", translation: "Kyrgyzstan" },
      { name: "Лаос", translation: "Laos" },
      { name: "Латвия", translation: "Latvia" },
      { name: "Ливан", translation: "Lebanon" },
      { name: "Лесото", translation: "Lesotho" },
      { name: "Либерия", translation: "Liberia" },
      { name: "Ливия", translation: "Libya" },
      { name: "Лихтенштейн", translation: "Liechtenstein" },
      { name: "Литва", translation: "Lithuania" },
      { name: "Люксембург", translation: "Luxembourg" },
      { name: "Макао", translation: "Macao" },
      { name: "Македония", translation: "Macedonia" },
      { name: "Мадагаскар", translation: "Madagascar" },
      { name: "Малави", translation: "Malawi" },
      { name: "Малайзия", translation: "Malaysia" },
      { name: "Мальдивы", translation: "Maldives" },
      { name: "Мали", translation: "Mali" },
      { name: "Мальта", translation: "Malta" },
      { name: "Маршалловы острова", translation: "Marshall Islands" },
      { name: "Мартиника", translation: "Martinique" },
      { name: "Мавритания", translation: "Mauritania" },
      { name: "Маврикий", translation: "Mauritius" },
      { name: "Майотта", translation: "Mayotte" },
      { name: "Мексика", translation: "Mexico" },
      { name: "Микронезия", translation: "Micronesia" },
      { name: "Молдова", translation: "Moldova" },
      { name: "Монако", translation: "Monaco" },
      { name: "Монголия", translation: "Mongolia" },
      { name: "Черногория", translation: "Montenegro" },
      { name: "Монтсеррат", translation: "Montserrat" },
      { name: "Марокко", translation: "Morocco" },
      { name: "Мозамбик", translation: "Mozambique" },
      { name: "Мьянма", translation: "Myanmar" },
      { name: "Намибия", translation: "Namibia" },
      { name: "Науру", translation: "Nauru" },
      { name: "Непал", translation: "Nepal" },
      { name: "Нидерланды", translation: "Netherlands" },
      { name: "Новая Каледония", translation: "New Caledonia" },
      { name: "Новая Зеландия", translation: "New Zealand" },
      { name: "Никарагуа", translation: "Nicaragua" },
      { name: "Нигер", translation: "Niger" },
      { name: "Нигерия", translation: "Nigeria" },
      { name: "Ниуэ", translation: "Niue" },
      { name: "Норфолк", translation: "Norfolk Island" },
      { name: "Северные Марианские острова", translation: "Northern Mariana Islands" },
      { name: "Норвегия", translation: "Norway" },
      { name: "Оман", translation: "Oman" },
      { name: "Пакистан", translation: "Pakistan" },
      { name: "Палау", translation: "Palau" },
      { name: "Палестинская территория", translation: "Palestinian Territory" },
      { name: "Панама", translation: "Panama" },
      { name: "Папуа — Новая Гвинея", translation: "Papua New Guinea" },
      { name: "Парагвай", translation: "Paraguay" },
      { name: "Перу", translation: "Peru" },
      { name: "Филиппины", translation: "Philippines" },
      { name: "Питкерн", translation: "Pitcairn" },
      { name: "Польша", translation: "Poland" },
      { name: "Португалия", translation: "Portugal" },
      { name: "Пуэрто-Рико", translation: "Puerto Rico" },
      { name: "Катар", translation: "Qatar" },
      { name: "Реюньон", translation: "Réunion" },
      { name: "Румыния", translation: "Romania" },
      { name: "Россия", translation: "Russia" },
      { name: "Руанда", translation: "Rwanda" },
      { name: "Сен-Бартелеми", translation: "Saint Barthélemy" },
      { name: "Святой Елены", translation: "Saint Helena" },
      { name: "Сент-Китс и Невис", translation: "Saint Kitts and Nevis" },
      { name: "Сент-Люсия", translation: "Saint Lucia" },
      { name: "Сент-Мартин", translation: "Saint Martin" },
      { name: "Сен-Пьер и Микелон", translation: "Saint Pierre and Miquelon" },
      { name: "Сен-Винсент и Гренадины", translation: "Saint Vincent and the Grenadines" },
      { name: "Самоа", translation: "Samoa" },
      { name: "Сан-Марино", translation: "San Marino" },
      { name: "Сан-Томе и Принсипи", translation: "Sao Tome and Principe" },
      { name: "Саудовская Аравия", translation: "Saudi Arabia" },
      { name: "Сенегал", translation: "Senegal" },
      { name: "Сербия", translation: "Serbia" },
      { name: "Сейшелы", translation: "Seychelles" },
      { name: "Сьерра-Леоне", translation: "Sierra Leone" },
      { name: "Сингапур", translation: "Singapore" },
      { name: "Синт-Мартен", translation: "Sint Maarten" },
      { name: "Словакия", translation: "Slovakia" },
      { name: "Словения", translation: "Slovenia" },
      { name: "Соломоновы острова", translation: "Solomon Islands" },
      { name: "Сомали", translation: "Somalia" },
      { name: "Южная Африка", translation: "South Africa" },
      { name: "Южная Джорджия и Южные Сандвичевы острова", translation: "South Georgia and the South Sandwich Islands" },
      { name: "Южный Судан", translation: "South Sudan" },
      { name: "Испания", translation: "Spain" },
      { name: "Шри-Ланка", translation: "Sri Lanka" },
      { name: "Судан", translation: "Sudan" },
      { name: "Суринам", translation: "Suriname" },
      { name: "Свалбард и Ян-Майен", translation: "Svalbard and Jan Mayen" },
      { name: "Свазиленд", translation: "Eswatini" },
      { name: "Швеция", translation: "Sweden" },
      { name: "Швейцария", translation: "Switzerland" },
      { name: "Сирия", translation: "Syria" },
      { name: "Тайвань", translation: "Taiwan" },
      { name: "Таджикистан", translation: "Tajikistan" },
      { name: "Танзания", translation: "Tanzania" },
      { name: "Таиланд", translation: "Thailand" },
      { name: "Восточный Тимор", translation: "Timor-Leste" },
      { name: "Того", translation: "Togo" },
      { name: "Токелау", translation: "Tokelau" },
      { name: "Тонга", translation: "Tonga" },
      { name: "Тринидад и Тобаго", translation: "Trinidad and Tobago" },
      { name: "Тунис", translation: "Tunisia" },
      { name: "Турция", translation: "Turkey" },
      { name: "Туркмения", translation: "Turkmenistan" },
      { name: "Теркс и Кайкос", translation: "Turks and Caicos Islands" },
      { name: "Тувалу", translation: "Tuvalu" },
      { name: "Уганда", translation: "Uganda" },
      { name: "Украина", translation: "Ukraine" },
      { name: "Объединенные Арабские Эмираты", translation: "United Arab Emirates" },
      { name: "Великобритания", translation: "United Kingdom" },
      { name: "Соединенные Штаты Америки", translation: "United States" },
      { name: "США (заморские территории)", translation: "United States Minor Outlying Islands" },
      { name: "Уругвай", translation: "Uruguay" },
      { name: "Узбекистан", translation: "Uzbekistan" },
      { name: "Вануату", translation: "Vanuatu" },
      { name: "Венесуэла", translation: "Venezuela" },
      { name: "Вьетнам", translation: "Vietnam" },
      { name: "Британские Виргинские острова", translation: "British Virgin Islands" },
      { name: "Виргинские острова США", translation: "U.S. Virgin Islands" },
      { name: "Уоллис и Футуна", translation: "Wallis and Futuna" },
      { name: "Западная Сахара", translation: "Western Sahara" },
      { name: "Йемен", translation: "Yemen" },
      { name: "Замбия", translation: "Zambia" },
      { name: "Зимбабве", translation: "Zimbabwe" },
    ];

    const countryInput = document.getElementById('country-input');
    const countryList = document.getElementById('country-list');

    countryInput.addEventListener('input', function () {
      const inputText = countryInput.value;
      const isLatinAlphabet = /^[A-Za-z]+$/.test(inputText);

      const filteredCountries = countries.filter(country => {
        const countryName = isLatinAlphabet ? country.translation.toLowerCase() : country.name.toLowerCase();
        return countryName.includes(inputText.toLowerCase());
      });

      if (inputText.length === 0) {
        countryList.style.display = 'none';
      } else {
        countryList.style.display = 'block';
      }

      countryList.innerHTML = '';
      filteredCountries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = isLatinAlphabet ? country.translation : country.name;
        listItem.addEventListener('click', function () {
          countryInput.value = isLatinAlphabet ? country.translation : country.name;
          countryList.style.display = 'none';
        });
        countryList.appendChild(listItem);
      });
    });

    document.addEventListener('click', function (event) {
      if (!countryInput.contains(event.target) && !countryList.contains(event.target)) {
        countryList.style.display = 'none';
      }
    });
