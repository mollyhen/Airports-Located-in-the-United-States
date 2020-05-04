
    // 1. Create a map object.
    var mymap = L.map('map', {
        center: [41.82, -120.58],
        zoom: 3,
        maxZoom: 10,
        minZoom: 3,
        detectRetina: true // detect whether the sceen is high resolution or not.
    });

    // 2. Add a base map.
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	     attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'}).addTo(mymap);

    // 3. Add airports GeoJson Data
    //Null variable that will hold airport data
       var airports = null;

    // 4. Add colors to the airports markers
           var colors = chroma.scale(['green', 'darkred']).mode('lch').colors(2);

    // 5. append style to this page the style will be used to colorize the markers
           for (i = 0; i < 2; i++) {
               $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 12px; text-shadow: 0 0 3px #ffffff;} </style>"));
             }

      // 6. Get GeoJson and put it on the map when it loads
      airports = L.geoJson.ajax("assets/airports.geojson", {
      // assign a function to the onEachFeature of the airports object
      // Then each marker will bind a popup window
      // The content of the popup window is the value of the feature.properties.CNTL_TWR
      onEachFeature: function (feature, layer) {
          layer.bindPopup( feature.properties.AIRPT_NAME + "<br>" + feature.properties.CITY + ", "  + feature.properties.STATE);
      },
      pointToLayer: function (feature, latlng) {
        var id = 0;
        if (feature.properties.CNTL_TWR == "Y") { id = 0; }
        else { id = 1;} // "N" no air traffic control tower at airports
        return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-plane marker-color-' + (id +1).toString() })});
      },
    attribution: 'airports Data &copy; US Government | stateBoundary Data &copy; Mike Bostock of D3 | Made by Molly Henderson'
  }).addTo(mymap);

    //7. Set function for color ramp
    colors = chroma.scale('YlOrRd').colors(6);

    function setColor(density) {
      var id = 0;
      if (density > 50) {id = 5; }
      else if (density > 40 && density <= 50) { id = 4; }
      else if (density > 30 && density <= 40) { id = 3; }
      else if (density > 20 && density <= 30) { id = 2; }
      else if (density > 10 && density <= 20) { id = 1; }
      else {id = 0; }
      return colors[id];
    }

    //8. Set style function that sets fill color.md property equal to airport density
    function style(feature) {
      return {
        fillColor: setColor(feature.properties.count),
        fillOpacity: 0.4,
        weight: 1.5,
        opacity: 1,
        color: 'black',
        dashArray: '2'
      };
    }

    //9. Add the state boundaries to the Map
    var stateBounday = null;
    stateBounday = L.geoJson.ajax("assets/us-states.geojson", {
        style: style
    }).addTo(mymap);

//10. Create Leaflet Control Object for legend
var legend = L.control({position: 'topright'});

// Function that runs when legend is added to Map
legend.onAdd = function () {

// Create Div Element and Populate it with html
var div = L.DomUtil.create('div', 'legend');
div.innerHTML += '<b>Airports</b><br />';
    div.innerHTML += '<i style="background: ' + colors[5] + '; opacity: 0.5"></i><p>51+</p>';
    div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>41-50</p>';
    div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>31-40</p>';
    div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>21-30</p>';
    div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p>11-20</p>';
    div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> 0-10</p>';
    div.innerHTML += '<hr><b>Air Traffic Control Towers<b><br />';
    div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p>Present Control Tower</p>';
    div.innerHTML += '<i class="fa fa-plane marker-color-2"></i><p>No Control Tower</p>';
    // Return the Legend div containing the HTML content
    return div;
};

// 11. Add a legend to map
legend.addTo(mymap);

// 12. Add a scale bar to map
L.control.scale({position: 'bottomleft'}).addTo(mymap);
