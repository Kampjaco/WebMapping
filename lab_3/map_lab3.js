var mymap = L.map("map").setView([46.65515269578446, 8.708739314558096], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var zurich = L.marker([47.37707, 8.53956], {icon: myIcon1}).bindPopup("<b>Zurich").addTo(mymap);
var laus = L.marker([46.5196000064, 6.63221997099], {icon: myIcon2}).bindPopup("<b>Lausanne").addTo(mymap);
var gene = L.marker([46.2083299867, 6.1427499814], {icon: myIcon3}).bindPopup("<b>Geneva").addTo(mymap);
var mont = L.marker([46.4316900126, 6.91043998242], {icon: myIcon4}).bindPopup("<b>Montreux").addTo(mymap);
var chat = L.marker([46.4141400104, 6.92752998154], {icon: myIcon5}).bindPopup("<b>Chateau de Chillon").addTo(mymap);
var vev = L.marker([46.462279985, 6.84297003671], {icon: myIcon6}).bindPopup("<b>Vevey").addTo(mymap);
var bern = L.marker([46.9484299729, 7.44046001376], {icon: myIcon7}).bindPopup("<b>Bern").addTo(mymap);
var luc = L.marker([47.0495399788, 8.30437000217], {icon: myIcon8}).bindPopup("<b>Lucerne").addTo(mymap);
var inter = L.marker([46.6845000305, 7.85349002021], {icon: myIcon9}).bindPopup("<b>Interlaken").addTo(mymap);
var jung = L.marker([46.5367800005, 7.96223000738], {icon: myIcon10}).bindPopup("<b>Jungfrau").addTo(mymap);
var zerm = L.marker([46.0241599823, 7.74841003901], {icon: myIcon11}).bindPopup("<b>Zermatt").addTo(mymap);
var moritz = L.marker([46.4970499748, 9.83815998614], {icon: myIcon12}).bindPopup("<b>St. Moritz").addTo(mymap);