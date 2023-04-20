var mymap = L.map("map").setView([23.673872110187137, -15.697510915389563], 3);


var baselayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}
).addTo(mymap);


// Set layers
var pnt_layer = L.layerGroup().addTo(mymap);
var gc_layer = L.layerGroup().addTo(mymap);
var mp_layer = L.layerGroup().addTo(mymap);



// Draw points
L.marker([51.50735, -0.1277583], {draggable: true}).addEventListener("drag", drawGC).addTo(pnt_layer);
L.marker([40.71278, -74.0059413],{draggable: true}).addEventListener("drag", drawGC).addTo(pnt_layer);

// Function to draw Great Circle line
function drawGC() {
    gc_layer.clearLayers();
    mp_layer.clearLayers();
    points = pnt_layer.toGeoJSON();
    var gc = turf.greatCircle(points.features[0], points.features[1]);
    var mp = turf.midpoint(points.features[0], points.features[1]);
    L.geoJSON(gc).addTo(gc_layer);
    L.geoJSON(mp).addTo(mp_layer);
}
drawGC();


