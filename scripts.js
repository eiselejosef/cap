document.addEventListener('DOMContentLoaded', function() {
    setLanguage('fr');

    // Call displayImages to show the initial set of images
    displayImages();

    // Add event listener to open the gallery modal when the "Gallery" link is clicked
    document.getElementById('open-gallery-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        $('#galleryModal').modal('show'); // Open the gallery modal
    });
});

const translations = {
    en: {
        navbarBrand: "Holiday Apartment",
        title: "Welcome to Cap Esterel",
        galleryTitle: "Gallery",
        infoTitle: "About the Apartment",
        infoText: `
            Spend an unforgettable holiday on the French Riviera in this lovely 2-room apartment of 28m2 with 4 beds, on the 2nd and top floor with an 8m2 terrace. Enjoy the southeast exposure and the magnificent sea view!<br><br>
            <strong>Layout:</strong><br>
            - a bedroom with a double bed (140 x 190 cm) + television, access to the terrace<br>
            - a living room with a sofa bed for 2 people (80 x 190 cm) + television, access to the terrace<br>
            - equipped kitchen: microwave, dishwasher, coffee machine<br>
            - bathroom<br>
            - separate toilet<br>
            - accommodation for max. 4 people<br><br>
            <strong>Weekly rental in high season.</strong><br>
            <strong>INCLUDED IN THE RENTAL PRICE:</strong><br>
            * CLEANING<br>
            * ACCESS TO THE POOLS<br>
            * COVERED PARKING<br><br>
            <strong>FOR AN ADDITIONAL FEE:</strong><br>
            BED LINEN AND TOWELS on request.<br>
            INTERNET/WIFI, personalized welcome package and check-in/check-out.<br>
            <strong>Deposit:</strong> 600 € per stay<br><br>
            <em>Please note:</em> Apartment access without elevator. No pets allowed, non-smoking apartment.
        `,
        servicesTitle: "Services",
        servicesText: "We offer a range of services to make your stay more comfortable.",
        bookingTitle: "How to Book",
        bookingText: "To book our apartment or obtain additional information, please contact us via the platform <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Home",
        navGallery: "Gallery",
        navAbout: "Apartment",
        navServices: "Services",
        navBooking: "Booking",
        navContact: "Contact Us",
        nextButton: "Next",
        prevButton: "Previous",
        openGalleryButton: "Open Gallery"
    },
    fr: {
        navbarBrand: "Appartement de vacances",
        title: "Bienvenue à Cap Esterel",
        galleryTitle: "Galerie",
        infoTitle: "À propos de l'appartement",
        infoText: `
            Venez passer des vacances inoubliables sur la Côte d'Azur dans ce joli 2 pièces de 28m2 avec 4 couchages, au 2ème et dernier étage et terrasse de 8m2. Profitez de l'exposition sud-est et de la magnifique vue mer!<br><br>
            <strong>Aménagement :</strong><br>
            - une chambre avec lit double (140 x 190 cm) + télévision, accès terrasse<br>
            - un séjour avec canapé-lit 2 couchages (80 x 190 cm) + télévision, accès terrasse<br>
            - cuisine équipée : micro-ondes, lave-vaisselle, cafetière<br>
            - salle-de-bains<br>
            - toilettes séparées<br>
            - logement pour 4 pers. max.<br><br>
            <strong>Location à la semaine en haute saison.</strong><br>
            <strong>INCLU DANS LE PRIX DE LA LOCATION :</strong><br>
            * MENAGE<br>
            * ACCES AUX PISCINES<br>
            * PARKING COUVERT<br><br>
            <strong>EN SUPPLEMENT :</strong><br>
            LINGE DE LITS ET SERVIETTES sur demande.<br>
            INTERNET/WIFI, forfait Accueil personnalisé et états des lieux d'entrée et de sortie.<br>
            <strong>Caution :</strong> 600 € par séjour<br><br>
            <em>Veuillez noter:</em> Accès appartement sans ascenseur. Animaux non admis, appartement non-fumeur.
        `,
        servicesTitle: "Services",
        servicesText: "Nous offrons une gamme de services pour rendre votre séjour plus confortable.",
        bookingTitle: "Comment réserver",
        bookingText: "Pour réserver notre appartement ou obtenir des informations supplémentaires, veuillez nous contacter via la plateforme <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Accueil",
        navGallery: "Galerie",
        navAbout: "Appartement",
        navServices: "Services",
        navBooking: "Réservation",
        navContact: "Contactez-nous",
        nextButton: "Suivant",
        prevButton: "Précédent",
        openGalleryButton: "Ouvrir la Galerie"
    },
    it: {
        navbarBrand: "Appartamento per Vacanze",
        title: "Benvenuti a Cap Esterel",
        galleryTitle: "Galleria",
        infoTitle: "Informazioni sull'appartamento",
        infoText: `
            Venite a trascorrere una vacanza indimenticabile sulla Costa Azzurra in questo grazioso bilocale di 28m2 con 4 posti letto, al 2° e ultimo piano e terrazza di 8m2. Godetevi l'esposizione a sud-est e la magnifica vista mare!<br><br>
            <strong>Aménagement :</strong><br>
            - una camera con letto matrimoniale (140 x 190 cm) + televisione, accesso alla terrazza<br>
            - un soggiorno con divano letto per 2 persone (80 x 190 cm) + televisione, accesso alla terrazza<br>
            - cucina attrezzata: microonde, lavastoviglie, macchina da caffè<br>
            - bagno<br>
            - WC separato<br>
            - Alloggio per max. 4 persone<br><br>
            <strong>Affitto settimanale in alta stagione.</strong><br>
            <strong>INCLUSO NEL PREZZO DELL'AFFITTO:</strong><br>
            * PULIZIA<br>
            * ACCESSO ALLE PISCINE<br>
            * PARCHEGGIO COPERTO<br><br>
            <strong>A PAGAMENTO:</strong><br>
            BIANCHERIA DA LETTO E ASCIUGAMANI su richiesta.<br>
            INTERNET/WIFI, forfait Accoglienza personalizzata e stato dei luoghi all'entrata e all'uscita.<br>
            <strong>Cauzione:</strong> 600 € per soggiorno<br><br>
            <em>Si prega di notare:</em> Accesso all'appartamento senza ascensore. Animali non ammessi, appartamento non fumatori.
        `,
        servicesTitle: "Servizi",
        servicesText: "Offriamo una gamma di servizi per rendere il vostro soggiorno più confortevole, tra cui Wi-Fi gratuito.",
        bookingTitle: "Come prenotare",
        bookingText: "Per prenotare il nostro appartamento o ottenere ulteriori informazioni, contattaci tramite la piattaforma <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Home",
        navGallery: "Galleria",
        navAbout: "Appartamento",
        navServices: "Servizi",
        navBooking: "Prenotazione",
        navContact: "Contattaci",
        nextButton: "Avanti",
        prevButton: "Precedente",
        openGalleryButton: "Apri Galleria"
    },
    de: {
        navbarBrand: "Ferienwohnung",
        title: "Willkommen in Cap Esterel",
        galleryTitle: "Galerie",
        infoTitle: "Über die Wohnung",
        infoText: `
            Verbringen Sie einen unvergesslichen Urlaub an der Côte d'Azur in dieser hübschen 2-Zimmer-Wohnung mit 28m2 und 4 Schlafplätzen, im 2. und letzten Stockwerk und einer 8m2 großen Terrasse. Genießen Sie die südöstliche Ausrichtung und den herrlichen Meerblick!<br><br>
            <strong>Ausstattung:</strong><br>
            - ein Schlafzimmer mit Doppelbett (140 x 190 cm) + Fernseher, Zugang zur Terrasse<br>
            - ein Wohnzimmer mit Schlafsofa für 2 Personen (80 x 190 cm) + Fernseher, Zugang zur Terrasse<br>
            - ausgestattete Küche: Mikrowelle, Geschirrspüler, Kaffeemaschine<br>
            - Badezimmer<br>
            - separates WC<br>
            - Unterkunft für max. 4 Personen<br><br>
            <strong>Wochenweise Vermietung in der Hochsaison.</strong><br>
            <strong>IM MIETPREIS ENTHALTEN:</strong><br>
            * REINIGUNG<br>
            * ZUGANG ZU DEN SCHWIMMBÄDERN<br>
            * ÜBERDACHTER PARKPLATZ<br><br>
            <strong>GEGEN AUFPREIS:</strong><br>
            BETTWÄSCHE UND HANDTÜCHER auf Anfrage.<br>
            INTERNET/WLAN, Pauschale für persönlichen Empfang und Abnahme bei An- und Abreise.<br>
            <strong>Kaution:</strong> 600 € pro Aufenthalt<br><br>
            <em>Bitte beachten:</em> Zugang zur Wohnung ohne Aufzug. Haustiere nicht erlaubt, Nichtraucherwohnung.
        `,
        servicesTitle: "Dienstleistungen",
        servicesText: "Wir bieten eine Reihe von Dienstleistungen, um Ihren Aufenthalt angenehmer zu gestalten.",
        bookingTitle: "Wie man bucht",
        bookingText: "Um unsere Wohnung zu buchen oder weitere Informationen zu erhalten, kontaktieren Sie uns bitte über die Plattform <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Startseite",
        navGallery: "Galerie",
        navAbout: "Ferienwohnung",
        navServices: "Dienstleistungen",
        navBooking: "Buchung",
        navContact: "Kontaktieren Sie uns",
        nextButton: "Weiter",
        prevButton: "Zurück",
        openGalleryButton: "Galerie öffnen"
    }
};

function setLanguage(language) {
    document.querySelector('.navbar-brand').innerText = translations[language].navbarBrand;
    document.getElementById('title').innerText = translations[language].title;
    document.getElementById('gallery-title').innerText = translations[language].galleryTitle;
    document.getElementById('info-title').innerText = translations[language].infoTitle;
    document.getElementById('info-text').innerHTML = translations[language].infoText;
    document.getElementById('services-title').innerText = translations[language].servicesTitle;
    document.getElementById('services-text').innerText = translations[language].servicesText;
    document.getElementById('booking-title').innerText = translations[language].bookingTitle;
    document.getElementById('booking-text').innerHTML = translations[language].bookingText;

    document.querySelector('.nav-link[href="#"]').innerText = translations[language].navHome;
    document.querySelector('.nav-link[href="#gallery"]').innerText = translations[language].navGallery;
    document.querySelector('.nav-link[href="#info"]').innerText = translations[language].navAbout;
    document.querySelector('.nav-link[href="#services"]').innerText = translations[language].navServices;
    document.querySelector('.nav-link[href="#booking"]').innerText = translations[language].navBooking;

    // Gallery
    document.getElementById('next-btn').innerText = translations[language].nextButton;
    document.getElementById('prev-btn').innerText = translations[language].prevButton;
    document.querySelector('button[data-target="#galleryModal"]').innerText = translations[language].openGalleryButton;
    document.getElementById('galleryModalLabel').innerText = translations[language].galleryTitle;
}

const imagesPerPage = 1;
let currentPage = 1;
let images = [
    'images/10_IMG_2921.JPG',
    'images/11_DSC_0478.JPG',
    'images/12_DSC_0088.JPG',
    'images/12_DSC_0114.JPG',
    'images/12_DSC_0500.JPG',
    'images/12_DSC_0512.JPG',
    'images/12_DSC_0573.JPG',
    'images/12_DSC_0575.JPG',
    'images/13_DSC_0033.JPG',
    'images/14_DSC_0076.JPG',
    'images/15_DSC_0077.JPG',
    'images/16_DSC_0078.JPG',
    'images/17_DSC_0082.JPG',
    'images/18_DSC_0048.JPG',
    'images/18_DSC_0083.JPG',
    'images/18_DSC_0085.JPG',
    'images/18_DSC_0089.JPG',
    'images/18_DSC_0100.JPG',
    'images/18_DSC_0485.JPG',
    'images/18_DSC_0515.JPG',
    'images/18_DSC_90.JPG',
    'images/19_DSC_0527.JPG',
    'images/19_DSC_0546.JPG',
    'images/1_DSC_01.JPG',
    'images/20_DSC_0528.JPG',
    'images/20_DSC_0529.JPG',
    'images/21_DSC_0528.JPG',
    'images/22_DSC_0530B.JPG',
    'images/23_DSC_0110.JPG',
    'images/24_DSC_0481.JPG',
    'images/24_DSC_0537.JPG',
    'images/25_DSC_0480.JPG',
    'images/25_DSC_0541.JPG',
    'images/27_IMG_2901.JPG',
    'images/28_IMG_2899.JPG',
    'images/29_IMG_2903.JPG',
    'images/2_DSC_0485.JPG',
    'images/30_DSC_0167.JPG',
    'images/31_DSC_0023.JPG',
    'images/3_DSC_0431.JPG',
    'images/4_DSC_0532.JPG',
    'images/5_DSC_0081.JPG',
    'images/6_DSC_0437.JPG',
    'images/7_IMG_5057.jpg',
    'images/8_IMG_5093.jpg',
    'images/9_DSC_02.JPG',
    'images/DSC_0059.JPG',
    'images/DSC_0060.JPG',
    'images/DSC_0075.JPG',
    'images/DSC_0118.JPG',
    'images/DSC_0119.JPG',
    'images/DSC_0124.JPG',
    'images/DSC_0125.JPG',
    'images/DSC_0126.JPG',
    'images/DSC_0153.JPG',
    'images/DSC_0158.JPG',
    'images/DSC_0489.JPG',
    'images/DSC_0490.JPG',
    'images/DSC_0490B.JPG',
    'images/DSC_0491.JPG',
    'images/DSC_0495.JPG',
    'images/DSC_0497B.JPG',
    'images/DSC_0498.JPG',
    'images/DSC_0503.JPG',
    'images/DSC_0542B.JPG',
    'images/Entrée D4-334.jpg',
    'images/IMG_5591.jpg'
];

function displayImages() {
    const galleryImages = document.getElementById('gallery-images');
    galleryImages.innerHTML = '';

    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const currentImages = images.slice(start, end);

    currentImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.className = 'img-fluid rounded';
        imgElement.addEventListener('click', nextPage); // Add event listener to each image

        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        imgContainer.appendChild(imgElement);

        const imgIndex = document.createElement('div');
        imgIndex.className = 'img-index';
        imgIndex.innerText = `${start + index + 1} / ${images.length}`;
        imgContainer.appendChild(imgIndex);

        galleryImages.appendChild(imgContainer);
    });

    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = end >= images.length;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayImages();
    }
}

function nextPage() {
    if ((currentPage * imagesPerPage) < images.length) {
        currentPage++;
        displayImages();
    }
}
