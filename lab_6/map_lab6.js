var mymap = L.map('map', {
    center: [51.48882027639122, -0.1028811094342392],
              zoom: 11
          });

 var gray = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 5
 }).addTo(mymap);



function getColor(value) {
    return value > 139 ? '#54278f':
           value > 87  ? '#756bb1':
           value > 53  ? '#9e9ac8':
           value > 32  ? '#cbc9e2':
                         '#f2f0f7';
}

function getColor2(value) {
    return value > 35 ? '#b30000':
           value > 22  ? '#e34a33':
           value > 14  ? '#fc8d59':
           value > 8  ? '#fdcc8a':
                         '#fef0d9';
}

function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),   // pop_den is the field name for the population density data
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }

function style2(feature){
    return {
        fillColor: getColor2(feature.properties.all_dense),   // pop_den is the field name for the population density data
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
    }

  function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

function highlightFeature2(e) {
    // Get access to the feature that was hovered through e.target
    var feature2 = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature2.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature2.bringToFront();
    }
}

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
            mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
        });
    }

function onEachFeature2(feature, layer) {
        layer.on({
            mouseover: highlightFeature2, // Do what defined by the highlightFeature function on mouseover
            mouseout: resetHighlight2,    // Do what defined by the resetHighlight function on mouseout
        });
    }


    var geojson; // define a variable to make the geojson layer accessible for the funtion to use

    var geojson2;

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
    }

function resetHighlight2(e) {
        geojson2.resetStyle(e.target);
    }

    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);

 geojson2 = L.geoJson(all_dense, {
        style: style2,
        onEachFeature: onEachFeature2
    }).bindPopup(function (layer){
    return layer.feature.properties.name 
           + '<p style="color:red">' + layer.feature.properties.all_dense.toString() + ' households/hectare </p>';       
}).addTo(mymap);



  var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 32, 53, 87, 139]; // The break values to define the intervals of population, note we begin from 0 here

        div.innerHTML = '<b>Population Density <br></b>'; // The legend title (HTML-based), in this case it's Population Density 2011

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);


var legend2 = L.control({position: 'bottomright'}); // Try the other three corners if you like.

    legend2.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 8, 14, 22, 35]; // The break values to define the intervals of population, note we begin from 0 here

        div.innerHTML = '<b>Density of Households <br></b>'; // The legend title (HTML-based), in this case it's Population Density 2011

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor2(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);
    
    legend2.addTo(mymap);



// Create menu items

var baseLayers = {
    'Grayscale': gray,
    };

var overlays = {
    'Population Density': geojson,
    'Density of Households with English as Main Language (16+)' : geojson2,
};

//Create the menu
 
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap);