const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": "https://eglamed.com.ua/#clinic", // Унікальний ID для зв'язку з іншими схемами
    "medicalSpecialty": "Gynecologic", // Спеціалізація клініки
    name: "Клініка EglaMed",
    image: "https://eglamed.com.ua/images/EglaMed_Logo.png",
    logo: "https://eglamed.com.ua/images/EglaMed_Logo.png",
    priceRange: "300UAH - 5500UAH", // діапазон цін на послуги клініки
    url: "https://eglamed.com.ua",
    telephone: "+380674123050",
    // description: "Гінекологія в Житомирі. Повний комплекс гінекологічних послуг: УЗД, відеокольпоскопія, лікування безпліддя, клімактеричних розладів, ендокринних порушень, естетична гінекологія та інші.",
    "description": "Професійна гінекологія в Житомирі: повний спектр медичних послуг від експертної діагностики (УЗД, кольпоскопія) до лікування безпліддя та естетичної гінекології в клініці EglaMed.",
    "knowsAbout": [
        "Гінекологічне УЗД",
        "Відеокольпоскопія",
        "Лікування безпліддя",
        "Естетична гінекологія",
        "Ендокринологія",
        "Лазерна епіляція",
    ],
    address: {
        "@type": "PostalAddress",
        streetAddress: "вул. Лесі Українки, 13-а",
        addressLocality: "Житомир",
        postalCode: "10011",
        addressCountry: "UA",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 50.253,
        longitude: 28.659,
    },
    "areaServed": {
        "@type": "City",
        "name": "Житомир"
    },
    // Контактна точка для запису
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+380674123050",
        "contactType": "emergency services",
        "availableLanguage": ["Ukrainian"]
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
    ],
    sameAs: [
        "https://www.instagram.com/eglamed/",
        "https://www.facebook.com/100082448462101/"
    ],
};

export default schemaData;
