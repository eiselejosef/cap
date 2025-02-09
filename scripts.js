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
        servicesTitle: "l'Esterel",
        servicesText: `
            <p>
                Discover CAP ESTEREL holiday village in the heart of 210 hectares of nature and gardens with a view of the bay of Agay and the red rocks of the Esterel Massif! Pedestrian holiday village combining sport and nature in the town of Agay (2 km from the center), guarded residence.
            </p>
            <ul>
                <li>5 swimming pools including one with waves and 1 heated pool, 2 with slides</li>
                <li>Numerous sports activities: fitness, aquagym, dance, pétanque, table tennis and free entertainment (shows, cinema, etc.). Some activities require registration or are payable at the Pierre & Vacances reception.</li>
                <li>Golf courses, pétanque, tennis/padel, football and basketball</li>
                <li>Archery, mini-golf</li>
                <li>Leisure and hiking (accompanied) for all ages</li>
                <li>Market every Wednesday during the summer period</li>
                <li>Tourist train from mid-June to mid-September to get to the beach/Dramont station, mini-golf, play areas, swimming pools</li>
                <li>Supermarket, restaurants, bars, ice cream parlors and shops, laundry, bike rental, sandy beaches in the immediate vicinity.</li>
                <li>Baby, children and teen clubs, circus school (extra charge - information/registration at the P&V reception)</li>
                <li>Spa</li>
            </ul>
            <p>
                <a href="https://capesterelascape.fr/actualites-et-informations/cap-esterel-bienvenue-a-tous-les-locataires/" target="_blank">Discover the Cap Esterel holiday village</a>
            </p>
            <p>
                Nearby attractions:
                <ul>
                    <li>Anthéor 8km</li>
                    <li>Saint-Raphaël 9km</li>
                    <li>Fréjus 13km</li>
                    <li>Lac de Saint-Cassien 32km</li>
                    <li>Saint-Tropez 50km</li>
                    <li>Nice 76 km</li>
                </ul>
            </p>
            <p>
                <a href="https://www.calameo.com/read/000014214b6b8c6e8cb82" target="_blank">Tourist guide of Esterel</a><br>
                <a href="https://www.saint-raphael.com/fr/activites-de-loisirs/" target="_blank">Activities in Saint-Raphaël and its region</a><br>
                <a href="https://www.experiencecotedazur.com/activites/saint-raphael" target="_blank">Experience Côte d'Azur</a>
            </p>
        `,
        bookingTitle: "How to Book",
        bookingText: "To book our apartment or obtain additional information, please contact us via the platform <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\" target=\"_blank\">leboncoin</a>",
        routeTitle: "Location",
        routeText: `
            <ul>
                <li><strong>By car:</strong> Highway A8, exit 38: Fréjus/Saint-Raphaël</li>
                <li><strong>By train:</strong> Agay stations (small station 800 m) or Saint-Raphaël Valescure (9 km). Connections by bus or taxi.</li>
                <li><strong>By plane:</strong> Nice Airport (71 km). Connections by train, bus or taxi.</li>
            </ul>
        `,
        impressumTitle: "Legal Notice",
        impressumText: `
            <p>
                <strong>Owner: </strong>Céline Tambour<br>
                <strong>Address: </strong>Résidence Village CAP ESTEREL, rue de la Rade, AGAY – 83700 Saint-Raphael, France<br>
                <strong>Website: </strong> <a href="https://capesterel.info/" target="_blank">https://capesterel.info/</a><br>
                <strong>Content Responsible according to § 55 Abs. 2 RStV: </strong>Céline Tambour<br>
            </p>
        `,
        navHome: "Home",
        navGallery: "Gallery",
        navAbout: "Apartment",
        navServices: "l'Esterel",
        navBooking: "Booking",
        navRoute: "Route",
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
        servicesTitle: "l'Esterel",
        servicesText: `
            <p>
                Découvrez CAP ESTEREL village-vacances au coeur de 210 hectares de nature et jardins avec vue sur la baie d'Agay et les roches rouges du Massif de l'Esterel! Village vacances piétonnier alliant sport et nature sur la commune d'Agay (à 2km du centre), résidence gardée.
            </p>
            <ul>
                <li>5 piscines dont une à vagues et 1 piscine chauffée, 2 avec toboggans</li>
                <li>Nombreuses activités sportives : fitness, aquagym, danse, pétanque, tennis de table et animations gratuites (spectacles, cinéma, etc). Certaines activités sur inscription ou payantes à la réception de Pierre & Vacances.</li>
                <li>Terrains de golf, pétanque, tennis/padel, foot et basket</li>
                <li>Tir à l'arc, mini-golf</li>
                <li>Loisirs et randonnées (accompagnées) pour tout âge</li>
                <li>Marché tous les mercredis en période estivale</li>
                <li>Petit train touristique de mi-Juin à mi-Sept. pour se rendre à la plage/gare du Dramont, mini-golf, espaces de jeux, piscines</li>
                <li>Supermarché, restaurants, bars, glaciers et magasins, laverie, location vélos, plages de sable à proximité immédiate.</li>
                <li>Clubs bébés, enfants et ados, école de cirque (en supplément - renseignements/inscriptions auprès de la réception de P&V)</li>
                <li>Spa</li>
            </ul>
            <p>
                <a href="https://capesterelascape.fr/actualites-et-informations/cap-esterel-bienvenue-a-tous-les-locataires/" target="_blank">Découvrir le village-vacances de Cap Esterel</a>
            </p>
            <p>
                Attractions à proximité:
                <ul>
                    <li>Anthéor 8km
                    <li>Saint-Raphaël 9km
                    <li>Fréjus 13km
                    <li>Lac de Saint-Cassien 32km
                    <li>Saint-Tropez 50km
                    <li>Nice 76 km
                </ul>
            </p>
            <p>
                <a href="https://www.calameo.com/read/000014214b6b8c6e8cb82" target="_blank">Guide touristique de l'Esterel</a><br>
                <a href="https://www.saint-raphael.com/fr/activites-de-loisirs/" target="_blank">Les activités sur Saint-Raphaël et sa région</a><br>
                <a href="https://www.experiencecotedazur.com/activites/saint-raphael" target="_blank">Expérience Côte d'Azur</a>
            </p>
        `,
        bookingTitle: "Comment réserver",
        bookingText: "Pour réserver notre appartement ou obtenir des informations supplémentaires, veuillez nous contacter via la plateforme <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\" target=\"_blank\">leboncoin</a>",
        routeTitle: "Localisation",
        routeText: `
            <ul>
                <li><strong>En voiture :</strong> Autoroute A8, sortie 38 : Fréjus/Saint-Raphaël</li>
                <li><strong>En train :</strong> Gares d’Agay (petite gare à 800 m) ou Saint-Raphaël Valescure (9 km). Liaisons par bus ou taxi.</li>
                <li><strong>En avion :</strong> Aéroport de Nice (71 km). Liaisons par train, bus ou taxi.</li>
            </ul>
        `,
        impressumTitle: "Impressum",
        impressumText: `
            <p>
                <strong>Propriétaire: </strong>Céline Tambour<br>
                <strong>Adresse: </strong>Résidence Village CAP ESTEREL, rue de la Rade, AGAY – 83700 Saint-Raphael, France<br>
                <strong>Site Web: </strong> <a href="https://capesterel.info/" target="_blank">https://capesterel.info/</a><br>
                <strong>Responsable du contenu selon § 55 Abs. 2 RStV: </strong>Céline Tambour<br>
            </p>
        `,
        navHome: "Accueil",
        navGallery: "Galerie",
        navAbout: "Appartement",
        navServices: "l'Esterel",
        navBooking: "Réservation",
        navRoute: "Localisation",
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
        servicesTitle: "l'Esterel",
        servicesText: `
            <p>
                Scoprite il villaggio vacanze CAP ESTEREL nel cuore di 210 ettari di natura e giardini con vista sulla baia di Agay e le rocce rosse del Massiccio dell'Esterel! Villaggio vacanze pedonale che combina sport e natura nella città di Agay (2 km dal centro), residenza sorvegliata.
            </p>
            <ul>
                <li>5 piscine di cui una con onde e 1 piscina riscaldata, 2 con scivoli</li>
                <li>Numerose attività sportive: fitness, aquagym, danza, pétanque, ping pong e intrattenimento gratuito (spettacoli, cinema, ecc.). Alcune attività richiedono la registrazione o sono a pagamento presso la reception di Pierre & Vacances.</li>
                <li>Campi da golf, pétanque, tennis/padel, calcio e basket</li>
                <li>Tiro con l'arco, mini-golf</li>
                <li>Tempo libero ed escursioni (accompagnate) per tutte le età</li>
                <li>Mercato ogni mercoledì durante il periodo estivo</li>
                <li>Trenino turistico da metà giugno a metà settembre per raggiungere la spiaggia/stazione di Dramont, mini-golf, aree giochi, piscine</li>
                <li>Supermercato, ristoranti, bar, gelaterie e negozi, lavanderia, noleggio biciclette, spiagge di sabbia nelle immediate vicinanze.</li>
                <li>Club per bambini, ragazzi e adolescenti, scuola di circo (a pagamento - informazioni/registrazione presso la reception di P&V)</li>
                <li>Spa</li>
            </ul>
            <p>
                <a href="https://capesterelascape.fr/actualites-et-informations/cap-esterel-bienvenue-a-tous-les-locataires/" target="_blank">Scopri il villaggio vacanze di Cap Esterel</a>
            </p>
            <p>
                Attrazioni nelle vicinanze:
                <ul>
                    <li>Anthéor 8km</li>
                    <li>Saint-Raphaël 9km</li>
                    <li>Fréjus 13km</li>
                    <li>Lac de Saint-Cassien 32km</li>
                    <li>Saint-Tropez 50km</li>
                    <li>Nizza 76 km</li>
                </ul>
            </p>
            <p>
                <a href="https://www.calameo.com/read/000014214b6b8c6e8cb82" target="_blank">Guida turistica dell'Esterel</a><br>
                <a href="https://www.saint-raphael.com/fr/activites-de-loisirs/" target="_blank">Attività a Saint-Raphaël e nella sua regione</a><br>
                <a href="https://www.experiencecotedazur.com/activites/saint-raphael" target="_blank">Esperienza Côte d'Azur</a>
            </p>
        `,
        bookingTitle: "Come prenotare",
        bookingText: "Per prenotare il nostro appartamento o ottenere ulteriori informazioni, contattaci tramite la piattaforma <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\" target=\"_blank\">leboncoin</a>",
        routeTitle: "Localizzazione",
        routeText: `
            <ul>
                <li><strong>In auto:</strong> Autostrada A8, uscita 38: Fréjus/Saint-Raphaël</li>
                <li><strong>In treno:</strong> Stazioni di Agay (piccola stazione a 800 m) o Saint-Raphaël Valescure (9 km). Collegamenti con autobus o taxi.</li>
                <li><strong>In aereo:</strong> Aeroporto di Nizza (71 km). Collegamenti con treno, autobus o taxi.</li>
            </ul>
        `,
        impressumTitle: "Impressum",
        impressumText: `
            <p>
                <strong>Proprietario: </strong>Céline Tambour<br>
                <strong>Indirizzo: </strong>Résidence Village CAP ESTEREL, rue de la Rade, AGAY – 83700 Saint-Raphael, Francia<br>
                <strong>Sito Web: </strong> <a href="https://capesterel.info/" target="_blank">https://capesterel.info/</a><br>
                <strong>Responsabile del contenuto secondo § 55 Abs. 2 RStV: </strong>Céline Tambour<br>
            </p>
        `,
        navHome: "Home",
        navGallery: "Galleria",
        navAbout: "Appartamento",
        navServices: "l'Esterel",
        navBooking: "Percorso",
        navRoute: "Contattaci",
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
        servicesTitle: "l'Esterel",
        servicesText: `
            <p>
                Entdecken Sie das Feriendorf CAP ESTEREL im Herzen von 210 Hektar Natur und Gärten mit Blick auf die Bucht von Agay und die roten Felsen des Esterel-Massivs! Fußgänger-Feriendorf, das Sport und Natur in der Stadt Agay (2 km vom Zentrum entfernt) kombiniert, bewachte Residenz.
            </p>
            <ul>
                <li>5 Schwimmbäder, darunter eines mit Wellen und 1 beheiztes Schwimmbad, 2 mit Rutschen</li>
                <li>Zahlreiche Sportaktivitäten: Fitness, Aquagym, Tanz, Pétanque, Tischtennis und kostenlose Unterhaltung (Shows, Kino, etc.). Einige Aktivitäten erfordern eine Anmeldung oder sind an der Rezeption von Pierre & Vacances kostenpflichtig.</li>
                <li>Golfplätze, Pétanque, Tennis/Padel, Fußball und Basketball</li>
                <li>Bogenschießen, Minigolf</li>
                <li>Freizeit und Wandern (begleitet) für alle Altersgruppen</li>
                <li>Markt jeden Mittwoch während der Sommerzeit</li>
                <li>Touristenzug von Mitte Juni bis Mitte September, um zum Strand/Bahnhof Dramont zu gelangen, Minigolf, Spielbereiche, Schwimmbäder</li>
                <li>Supermarkt, Restaurants, Bars, Eisdielen und Geschäfte, Wäscherei, Fahrradverleih, Sandstrände in unmittelbarer Nähe.</li>
                <li>Baby-, Kinder- und Jugendclubs, Zirkusschule (gegen Aufpreis - Informationen/Anmeldung an der P&V-Rezeption)</li>
                <li>Spa</li>
            </ul>
            <p>
                <a href="https://capesterelascape.fr/actualites-et-informations/cap-esterel-bienvenue-a-tous-les-locataires/" target="_blank">Entdecken Sie das Feriendorf Cap Esterel</a>
            </p>
            <p>
                Sehenswürdigkeiten in der Nähe:
                <ul>
                    <li>Anthéor 8km</li>
                    <li>Saint-Raphaël 9km</li>
                    <li>Fréjus 13km</li>
                    <li>Lac de Saint-Cassien 32km</li>
                    <li>Saint-Tropez 50km</li>
                    <li>Nizza 76 km</li>
                </ul>
            </p>
            <p>
                <a href="https://www.calameo.com/read/000014214b6b8c6e8cb82" target="_blank">Touristenführer von Esterel</a><br>
                <a href="https://www.saint-raphael.com/fr/activites-de-loisirs/" target="_blank">Aktivitäten in Saint-Raphaël und Umgebung</a><br>
                <a href="https://www.experiencecotedazur.com/activites/saint-raphael" target="_blank">Erlebnis Côte d'Azur</a>
            </p>
        `,
        bookingTitle: "Wie man bucht",
        bookingText: "Um unsere Wohnung zu buchen oder weitere Informationen zu erhalten, kontaktieren Sie uns bitte über die Plattform <a href=\"https://www.leboncoin.fr/ad/locations_saisonnieres/2326754619\" target=\"_blank\">leboncoin</a>",
        routeTitle: "Anreise",
        routeText: `
            <ul>
                <li><strong>Mit dem Auto:</strong> Autobahn A8, Ausfahrt 38: Fréjus/Saint-Raphaël</li>
                <li><strong>Mit dem Zug:</strong> Bahnhöfe Agay (kleiner Bahnhof 800 m) oder Saint-Raphaël Valescure (9 km). Verbindungen mit Bus oder Taxi.</li>
                <li><strong>Mit dem Flugzeug:</strong> Flughafen Nizza (71 km). Verbindungen mit Zug, Bus oder Taxi.</li>
            </ul>
        `,
        impressumTitle: "Impressum",
        impressumText: `
            <p>
                <strong>Eigentümer: </strong>Céline Tambour<br>
                <strong>Adresse: </strong>Résidence Village CAP ESTEREL, rue de la Rade, AGAY – 83700 Saint-Raphael, Frankreich<br>
                <strong>Webseite: </strong> <a href="https://capesterel.info/" target="_blank">https://capesterel.info/</a><br>
                <strong>Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV: </strong>Céline Tambour<br>
            </p>
        `,
        navHome: "Startseite",
        navGallery: "Galerie",
        navAbout: "Ferienwohnung",
        navServices: "l'Esterel",
        navBooking: "Buchung",
        navRoute: "Anreise",
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
    document.getElementById('services-text').innerHTML = translations[language].servicesText;
    document.getElementById('booking-title').innerText = translations[language].bookingTitle;
    document.getElementById('booking-text').innerHTML = translations[language].bookingText;
    document.getElementById('route-title').innerText = translations[language].routeTitle;
    document.getElementById('route-text').innerHTML = translations[language].routeText;
    document.getElementById('impressum-title').innerText = translations[language].impressumTitle;
    document.getElementById('impressum-text').innerHTML = translations[language].impressumText;

    document.querySelector('.nav-link[href="#"]').innerText = translations[language].navHome;
    document.querySelector('.nav-link[href="#gallery"]').innerText = translations[language].navGallery;
    document.querySelector('.nav-link[href="#info"]').innerText = translations[language].navAbout;
    document.querySelector('.nav-link[href="#services"]').innerText = translations[language].navServices;
    document.querySelector('.nav-link[href="#booking"]').innerText = translations[language].navBooking;
    document.querySelector('.nav-link[href="#route"]').innerText = translations[language].navRoute;

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
