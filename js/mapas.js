/ Creación de un mapa de Leaflet
var map = L.map("mapid");

// Centro del mapa y nivel inicial de acercamiento
var catedralSJ = L.latLng([9.9326673, -84.0787633]);
var zoomLevel = 7;

// Vista del mapa
map.setView(catedralSJ, zoomLevel);
