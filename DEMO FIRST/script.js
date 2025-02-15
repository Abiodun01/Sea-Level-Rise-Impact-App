// Map Initialization
var map = L.map("map").setView([6.4, 3.1], 13);

// OSM Layer
var OSM = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});
OSM.addTo(map);

// Satellite Layer
var satelliteBaseMap = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles &copy; Esri &mdash; Source: Esri & GIS Community",
  }
);
satelliteBaseMap.addTo(map);


// Layer Control
var baseMaps = {
  OSM: OSM,
  "Satellite": satelliteBaseMap,
};
L.control.layers(baseMaps).addTo(map);

// GeoSearch Control
const provider = new GeoSearch.OpenStreetMapProvider();
const searchControl = new GeoSearch.GeoSearchControl({
  provider: provider,
  style: "bar",
  showMarker: true,
  showPopup: true,
});
map.addControl(searchControl);

// Toggle Sections
// Toggle Menu Function
// Function to toggle individual sections (Login, Signup, Help)
// Check if the script is loaded
console.log("Script loaded successfully");

// Check if the toggler button is found
var toggler = document.getElementById("toggler");
console.log("Toggler:", toggler);

// Dropdown Menu Toggle
toggler.addEventListener("click", function () {
  console.log("Toggler clicked");
  var dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});




// GEOJSON Layer
L.geoJSON(seaLevel2150, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.NAME);
  },
}).addTo(map);

// Add custom styles for GeoSearch via JavaScript
const style = document.createElement('style');
style.innerHTML = `
  .leaflet-control-geosearch form {
    background-color: #007bff !important;
    border-radius: 8px !important;
  }
  .leaflet-control-geosearch input {
    font-size: 14px !important;
    padding: 6px 10px !important;
    border-radius: 5px !important;
    border: 2px solid #007bff !important;
  }
  .leaflet-control-geosearch .results li:hover {
    background-color: #007bff !important;
    color: white !important;
  }
`;
document.head.appendChild(style);

L.geoJSON(pointJson).addTo(map)

// ADDING GEOJSON TO MAP
L.geoJSON(seaLevel2150, {
  onEachFeature: function(feature, layer) {
    layer.bindPopup(feature.properties.NAME);
  }
}).addTo(map);