var mymap = L.map('map', {
    center: [40, -98],
              zoom: 5
});

 var gray = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 10,
   minZoom: 4
 }).addTo(mymap);

var dark = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 10,
   minZoom: 4
 });






function getColor(value) {
    return value == 6  ? '#7a0177':
           value == 5  ? '#ae017e':
           value == 4  ? '#dd3497':
           value == 3  ? '#f768a1':
           value == 2  ? '#fa9fb5':
           value == 1  ? '#fcc5c0':
                         '#feebe2';
}



function style(feature){
    return {
        fillColor: getColor(feature.properties.SUPERBOWL_WINS),
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}



// Define a function to handle mouseover events on each feature in the GeoJSON layer
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });
}

var geojson;

// Define a function to handle mouseout events on each feature in the GeoJSON layer
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


// Define a function to add interactivity to each feature in the GeoJSON layer
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
    layer.bindPopup("<b>" + feature.properties.city + " " + feature.properties.NAME + "</b><br> Superbowl wins: " + feature.properties.SUPERBOWL_WINS);
}


// Load the GeoJSON data and add it to the map
geojson = L.geoJson(data, {
    style: style,
    onEachFeature: onEachFeature
});


var legend1 = L.control({position: 'bottomright'}); // Try the other three corners if you like.

legend1.onAdd = function (mymap) {

    var div = L.DomUtil.create('div', 'legend'),
        wins = [0, 1, 2, 3, 4, 5, 6]; // The break values to define the intervals of population, note we begin from 0 here

    div.innerHTML = '<b>Superbowl Wins<br></b>'; // The legend title (HTML-based)

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
    for (var i = 0; i < wins.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(wins[i]) + '"></i>' +
        wins[i] + '<br>';
    }

    return div;
};

legend1.addTo(mymap);




//GRADUATED CIRCLES

function getRadius(area) {
  var radius = Math.sqrt(area/Math.PI);
  return radius * 2;
}

var propcircles = new L.geoJson(point1, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p><b> Team: ' + feature.properties.NAME+ '</b></br></br>' + 'Wins: '+feature.properties.WINS+ '</br>' + 'Losses: '+feature.properties.LOSSES+'</br>'+'Ties: '+ feature.properties.TIES_+'</br>'+ '<b>Win Percentage: '+ feature.properties.WIN_PERCENTAGE+'</b>'+'</p>');
    },
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          fillColor: "#920101", 
          color: '#920101',
          weight: 2,       
          radius: (feature.properties.WIN_PERCENTAGE*50),
          fillOpacity: .35
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
    });
  }
});
//BASIC INFO MAP
function style2(feature) {
    if(feature.properties.NAME == 'RAVENS'){
        return {
            fillColor: '#241773',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'BENGALS') {
        return {
            fillColor: '#FB4F14',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'BROWNS') {
        return {
            fillColor: '#311D00',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'STEELERS') {
        return {
            fillColor: '#FFB612',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'BILLS') {
        return {
            fillColor: '#00338D',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    }else if(feature.properties.NAME == 'DOLPHINS') {
        return {
            fillColor: '#008E97',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'PATRIOTS') {
        return {
            fillColor: '#002244',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    }  else if(feature.properties.NAME == 'JETS') {
        return {
            fillColor: '#125740',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'TEXANS') {
        return {
            fillColor: '#03202F',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'COLTS') {
        return {
            fillColor: '#002C5F',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'JAGUARS') {
        return {
            fillColor: '#101820',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'TITANS') {
        return {
            fillColor: '#0C2340',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'BRONCOS') {
        return {
            fillColor: '#FB4F14',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'CHIEFS') {
        return {
            fillColor: '#E31837',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'RAIDERS') {
        return {
            fillColor: '#000000',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'CHARGERS') {
        return {
            fillColor: '#0080C6',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'BEARS') {
        return {
            fillColor: '#0B162A',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'LIONS') {
        return {
            fillColor: '#0076B6',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'PACKERS') {
        return {
            fillColor: '#203731',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'VIKINGS') {
        return {
            fillColor: '#4F2683',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'COWBOYS') {
        return {
            fillColor: '#003594',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'GIANTS') {
        return {
            fillColor: '#0B2265',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'EAGLES') {
        return {
            fillColor: '#004C54',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'COMMANDERS') {
        return {
            fillColor: '#5A1414',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'FALCONS') {
        return {
            fillColor: '#A71930',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'PANTHERS') {
        return {
            fillColor: '#0085CA',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'SAINTS') {
        return {
            fillColor: '#D3BC8D',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'BUCCANEERS') {
        return {
            fillColor: '#D50A0A',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'CARDINALS') {
        return {
            fillColor: '#97233F',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'RAMS') {
        return {
            fillColor: '#003594',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == '49ERS') {
        return {
            fillColor: '#AA0000',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    } else if(feature.properties.NAME == 'SEAHAWKS') {
        return {
            fillColor: '#002244',
            weight: 2,
            opacity: 1,
            color: 'gray',
            fillOpacity: 1
        };
    }
}

// Define a function to handle mouseover events on each feature in the GeoJSON layer
function highlightFeature2(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });
}

var basic;

// Define a function to handle mouseout events on each feature in the GeoJSON layer
function resetHighlight2(e) {
    basic.resetStyle(e.target);
}


// Define a function to add interactivity to each feature in the GeoJSON layer
function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2,
        mouseout: resetHighlight2,
    });
    layer.bindPopup("<b>" + feature.properties.city + " " +
                    feature.properties.NAME +
                    '<img src="'+feature.properties.img+'" alt="Team Logo" style="display: block;margin-left: auto;margin-right: auto; width: 150px;"></br>' +
                    "</b> Year Founded: " + feature.properties.founded + '<br>'+ 
                    "<a href="+feature.properties.url+">Additional information</a");
}


basic = L.geoJSON(data, {
    style: style2,
    onEachFeature: onEachFeature2,
}).addTo(mymap);



// Create menu items

var overlays = {
    'Basic Info': basic,
    'Superbowl Wins': geojson,
    'Win Percentage': propcircles,
};

var baselayers = {
    'Gray': gray,
    'Dark': dark,
};



//Create the menu
var layerControl2 = L.control.layers(baselayers, {}, {collapsed: false}).addTo(mymap); 

var layerControl = L.control.layers(overlays, {}, {collapsed: false}).addTo(mymap);

///// Full extent zoom button ////
L.easyButton(('<img src="globe_icon.png", height=85%>'), function(btn, map){
    map.setView([40, -98], 5);
}).addTo(mymap);