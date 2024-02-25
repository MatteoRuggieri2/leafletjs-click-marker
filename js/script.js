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

function onMapClick(e) {
    
    // Prendo le coordinate cliccate
    let clickedLat = e.latlng.lat;
    let clickedLng = e.latlng.lng;

    // Se presente rimuovo il marker precedente
    marker.remove();

    // Metto il nuovo marker
    marker = L.marker([clickedLat, clickedLng]).addTo(map);

    console.log('lat: ', clickedLat);
    console.log('lng: ', clickedLng);
    console.log(latDomElement);
    console.log(lngDomElement);

    // Scrivo LAT
    latDomElement.innerText = ` ${clickedLat}`;

    // Scrivo LNG
    lngDomElement.innerText = ` ${clickedLng}`;
}