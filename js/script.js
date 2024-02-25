// DOM Elements
const latDomElement = document.getElementById('lat-value');
const lngDomElement = document.getElementById('lng-value');

// Italy Center
const itaCenterLat = 42.6824;
const itaCenterLng = 12.7880;

// Genero la mappa (Italy Center)
var map = L.map('map', {
    center: [itaCenterLat, itaCenterLng],
    zoom: 5
});

// Tile Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Inizializzo il marker
var marker = L.marker([0, 0]);



/* ----------------------
        EVENTS
---------------------- */

map.on('click', onMapClick);





/* ----------------------
        FUNCTIONS
---------------------- */

/* 
Questa funzione viene eseguita al click sulla mappa.

Arguments:
e -> [Object]: Oggetto dell'evento scatenato

Actions:
- Aggiunge un marker dove è avvenuto il click
- Chiama la funzione "writeCoordinatesOnPage()"
*/
function onMapClick(e) {
    
    // Prendo le coordinate cliccate
    let clickedLat = e.latlng.lat;
    let clickedLng = e.latlng.lng;

    // Se presente rimuovo il marker precedente
    marker.remove();

    // Metto il nuovo marker
    marker = L.marker([clickedLat, clickedLng]).addTo(map);

    // Scrivo le coordinate in pagina
    writeCoordinatesOnPage(latDomElement, clickedLat, lngDomElement, clickedLng);
}


/*
Questa funzione viene eseguita al richiamo.

Argumets:
latElement -> [DOM Element]: Elemento del DOM
lat -> [Int/Float]: Coordinata (latitudine)
lngElement -> [DOM Element]: Elemento del DOM
lng -> [Int/Float]: Coordinata (longitudine)

Actions:
- Scrive dentro i DOM Elements forniti le coordinate
*/
function writeCoordinatesOnPage(latElement, lat, lngElement, lng) {
    // Scrivo LAT
    latElement.innerText = ` ${lat}`;

    // Scrivo LNG
    lngElement.innerText = ` ${lng}`;
}