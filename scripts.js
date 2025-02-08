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
        title: "Welcome to Our Holiday Apartment in France",
        galleryTitle: "Gallery",
        infoTitle: "About the Apartment",
        infoText: "Our cozy apartment is located in the heart of France, offering a perfect getaway for families and couples. It features a spacious living room, a fully equipped kitchen, and a comfortable bedroom.",
        servicesTitle: "Services",
        servicesText: "We offer a range of services to make your stay more comfortable.",
        bookingTitle: "How to Book",
        bookingText: "To book our apartment, please contact us <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Home",
        navGallery: "Gallery",
        navAbout: "About",
        navServices: "Services",
        navBooking: "Booking",
        navContact: "Contact Us",
        nextButton: "Next",
        prevButton: "Previous",
        openGalleryButton: "Open Gallery"
    },
    fr: {
        navbarBrand: "Appartement de Vacances",
        title: "Bienvenue dans notre appartement de vacances en France",
        galleryTitle: "Galerie",
        infoTitle: "À propos de l'appartement",
        infoText: "Notre appartement confortable est situé au cœur de la France, offrant une escapade parfaite pour les familles et les couples. Il dispose d'un salon spacieux, d'une cuisine entièrement équipée et d'une chambre confortable.",
        servicesTitle: "Services",
        servicesText: "Nous offrons une gamme de services pour rendre votre séjour plus confortable.",
        bookingTitle: "Comment réserver",
        bookingText: "Pour réserver notre appartement, veuillez nous contacter à <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Accueil",
        navGallery: "Galerie",
        navAbout: "À propos",
        navServices: "Services",
        navBooking: "Réservation",
        navContact: "Contactez-nous",
        nextButton: "Suivant",
        prevButton: "Précédent",
        openGalleryButton: "Ouvrir la Galerie"
    },
    it: {
        navbarBrand: "Appartamento per Vacanze",
        title: "Benvenuti nel nostro appartamento per vacanze in Francia",
        galleryTitle: "Galleria",
        infoTitle: "Informazioni sull'appartamento",
        infoText: "Il nostro accogliente appartamento si trova nel cuore della Francia, offrendo una fuga perfetta per famiglie e coppie. Dispone di un ampio soggiorno, una cucina completamente attrezzata e una camera da letto confortevole.",
        servicesTitle: "Servizi",
        servicesText: "Offriamo una gamma di servizi per rendere il vostro soggiorno più confortevole, tra cui Wi-Fi gratuito.",
        bookingTitle: "Come prenotare",
        bookingText: "Per prenotare il nostro appartamento, contattaci a <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Home",
        navGallery: "Galleria",
        navAbout: "Informazioni",
        navServices: "Servizi",
        navBooking: "Prenotazione",
        navContact: "Contattaci",
        nextButton: "Avanti",
        prevButton: "Precedente",
        openGalleryButton: "Apri Galleria"
    },
    de: {
        navbarBrand: "Ferienwohnung",
        title: "Willkommen in unserer Ferienwohnung in Frankreich",
        galleryTitle: "Galerie",
        infoTitle: "Über die Wohnung",
        infoText: "Unsere gemütliche Wohnung befindet sich im Herzen Frankreichs und bietet einen perfekten Rückzugsort für Familien und Paare. Sie verfügt über ein geräumiges Wohnzimmer, eine voll ausgestattete Küche und ein komfortables Schlafzimmer.",
        servicesTitle: "Dienstleistungen",
        servicesText: "Wir bieten eine Reihe von Dienstleistungen, um Ihren Aufenthalt angenehmer zu gestalten.",
        bookingTitle: "Wie man bucht",
        bookingText: "Um unsere Wohnung zu buchen, kontaktieren Sie uns bitte unter <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\">leboncoin</a>",
        navHome: "Startseite",
        navGallery: "Galerie",
        navAbout: "Über uns",
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
    document.getElementById('info-text').innerText = translations[language].infoText;
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
