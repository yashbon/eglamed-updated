const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Клініка EglaMed",
    image: "https://eglamed.com.ua/images/EglaMed_Logo.png",
    logo: "https://eglamed.com.ua/images/EglaMed_Logo.png",
    url: "https://eglamed.com.ua",
    telephone: "+380674123050",
    description: "Гінекологія в Житомирі. Повний комплекс гінекологічних послуг: УЗД, відеокольпоскопія, лікування безпліддя, клімактеричних розладів, ендокринних порушень, естетична гінекологія та інші.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "вул. Лесі-Українки, 13-а",
        addressLocality: "Житомир",
        addressCountry: "UA",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 50.253,
        longitude: 28.659,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
        },
    ],
    sameAs: ["https://www.instagram.com/eglamed/"],
};

export default schemaData;
