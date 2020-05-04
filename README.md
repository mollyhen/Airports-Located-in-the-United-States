# Airports Located in the United States

<img src= "img/Airports in the United States.JPG">
<br>
<br>

__Introduction:__

The goal of this project was to creaate an interactive web map of Airports in the United States. The main attribute identified from the airports was whether there was an air traffic control tower present at the airport. The states are scaled differently by color determined by the amount of airports present in their boundaries. Lastly, their are pop-ups attached to each airport marker location with the name of the airport and its location by City, State. The map can be used to
<br>

 __Primary Functions__
 <table style="width:100%">
   <tr>
     <th>Function</th>
     <th>Descripition</th>
   </tr>
   <tr>
     <td>.addTo()</td>
     <td>adds object to the map</td>

   </tr>
   <tr>
     <td>for (i = 0; i < 2; i++) {}
</td>
     <td>used to add style classes</td>
   </tr>
   <tr>
     <td>function setColor(density) {}</td>
     <td>returns the color value</td>
   </tr>
   <tr>
  <td>function style(feature)</td>
  <td>style function that sets the fillColor property with setColor function as well as an input value</td>
</tr>
<tr>
  <td>layer.bindPopup()</td>
  <td>each feature will bind a popup window</td>
</tr>

<tr>
  <td>legend.onAdd = function ()</td>
  <td>function that runs when legend is added to map</td>

</tr>
<tr>
  <td>L.geoJson.ajax ()</td>
  <td>get GeoJSON and put it on the map when it loads</td>

</tr>
<tr>
  <td>L.titleLayer ()</td>
  <td>adds a basemap</td>

</tr>
<tr>
  <td>onEachFeature: function(feature, layer)</td>
  <td>that will be called on each created feature layer. Useful for attaching events and popups to features</td>

</tr>
<tr>
  <td>pointToLayer: function(feature, latlng)</td>
  <td>that will be used for creating layers for GeoJSON points</td>
</tr>
<tr>
  <td>var colors()</td>
  <td>build up a set of colors from a (script search link) </td>
</tr>
<tr>
  <td>var mymap = L.map()</td>
  <td>hold a map object</td>
</tr>
<tr>
  <td>var legend = L.control({position})</td>
  <td>create Leaflet control object for legend</td>
</tr>
 </table>
<br>

__Libraries__

Attribute tables of geoJson files <br>
Attributes from Data File: airports.geojson
<table style="width:100%">
  <tr>
    <th>Attribute</th>
    <th>Data Type</th>
    <th>Descripition</th>
  </tr>
  <tr>
    <td>AIRPT_NAME</td>
    <td>String</td>
    <td>Name of airport</td>
    </tr>
    <tr>
      <td>CITY</td>
      <td>String</td>
      <td>Name of city where airport is located</td>
      </tr>
      <tr>
        <td>STATE</td>
        <td>String</td>
        <td>Name of state where airport is located</td>
        </tr>
    <tr>
    <td>COUNTY</td>
    <td>String</td>
    <td>Name of county where airport is located</td>
    </tr>
    <tr>
      <td>TOT_ENP</td>
      <td>Numeric</td>
      <td>Total amount of people allowed to board an airplane</td>
      </tr>
      <tr>
        <td>ACT_DATE</td>
        <td>Numeric</td>
        <td>Start of airport activity</td>
        </tr>
        <tr>
          <td>ELEV</td>
          <td>Numeric</td>
          <td>Elevation of the airport</td>
          </tr>
      <tr>
      <td>CNTL_TWR</td>
      <td>Binary</td>
      <td>Does the airport have an air traffic control tower "Y" = yes, "N" = No</td>
      </tr>
      <tr>
        <td>coordinates</td>
        <td>Numeric</td>
        <td>Coordinate location of airport</td>
        </tr>
</table>

<br>
Attributes from Data File: us-states.geojson
<table style="width:100%">
  <tr>
    <th>Attribute</th>
    <th>Data Type</th>
    <th>Descripition</th>
  </tr>
  <tr>
    <td>id</td>
    <td>Numeric</td>
    <td>Identification of each US state based on alphabetical order</td>
    </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Name of State</td>
    </tr>
    <tr>
      <td>count</td>
      <td>Numeric</td>
      <td>Number of airports in the state boundary</td>
      </tr>
      <tr>
        <td>coordinates</td>
        <td>Numeric</td>
        <td>Coordinates of the states polygon shape</td>
        </tr>
</table>

<br>

__Credit/Acknowlegment__

The information and workflow provided for this project was created by Professor Zhao of University of Washington. Other information linked to this project that Professor Zhao aquired was two geoJson files. First, from the US Government and the other was from Mike Bostock of D3. This project was created with other peoples ideas and information and I used all of it to further my skills and knowledge with creating interactive web maps.
<br>
__Data Sources__
 <table style="width:100%">
   <tr>
     <th>Data</th>
     <th>Source</th>
     <th>Address</th>
   </tr>
   <tr>
      <td>airports.geojson</td>
      <td>US Government</td>
      <td>https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile</td>
    </tr>
    <tr>
   <td>us-states.geojson</td>
   <td>Mike Bostock of D3</td>
   <td>https://d3js.org/ <br> https://bost.ocks.org/mike/</td>
 </tr>
 <tr>
   <td>Project Information</td>
   <td>Professor Zhao, University of Washington</td>
   <td>https://github.com/jakobzhao/geog458/tree/master/labs/lab03</td>
 </tr>
