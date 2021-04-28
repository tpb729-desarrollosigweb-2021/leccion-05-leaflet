# Leaflet
[Leaflet](https://leafletjs.com/) es una biblioteca de programación en JavaScript para hacer mapas en la Web. Es de código abierto y fue diseñada para funcionar en una gran variedad de dispositivos, incluyendo móviles (ej. celulares, tabletas). Su funcionalidad puede ser extendida a través de [complementos](https://leafletjs.com/plugins.html). Su primera versión fue publicada en 2011 por Vladimir Agafonkin. Junto con [OpenLayers](https://openlayers.org/) y [Google Maps](https://developers.google.com/maps/documentation), es una de las más bibliotecas más populares para programar mapas en la Web.

El código JavaScript de Leaflet se invoca desde documentos en [Lenguaje de Marcas de hipertexto (HTML)](https://html.spec.whatwg.org/). Su código fuente se distribuye junto con un conjunto de [Hojas de Estilo en Cascada (CSS)](https://www.w3.org/Style/CSS/#specs).

## Documentación
La referencia de la interfaz de programación de aplicaciones [(API) de Leaflet](https://leafletjs.com/reference-1.7.1.html) contiene la documentación de las clases, métodos, eventos y demás componentes para la programación en JavaScript. El sitio oficial contiene también un conjunto de [tutoriales y ejemplos](https://leafletjs.com/examples.html).

## Preparativos para el uso
De acuerdo con la [Guía de inicio rápido](https://leafletjs.com/examples/quick-start/), para utilizar Leaflet en un sitio web, primero debe incluirse en el código HTML:

- Un enlace a la hoja CSS de Leaflet.
- Un enlace a la biblioteca JavaScript con el código de Leaflet.
- Un elemento [div](https://developer.mozilla.org/es/docs/Web/HTML/Element/div) para contener el mapa.

Los archivos JavaScript y CSS de Leaflet pueden descargarse del [repositorio de código fuente](https://github.com/Leaflet/Leaflet) o referenciarse a través de enlaces a una [red de distribución de contenidos (CDN)](https://leafletjs.com/download.html).

## Ejemplo de mapa generado con Leaflet
Haga clic en la imagen para acceder al mapa interactivo.  
[![](img/ejemplo-mapa-leaflet.png)](https://tpb729-desarrollosigweb-2021.github.io/leccion-05-leaflet/ejemplo-leaflet-basico.html)

Código HTML, CSS y JavaScript

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de mapa desarrollado con Leaflet</title>     
    
    <!-- Enlace a hoja CSS de Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    
    <!-- Enlace a biblioteca JavaScript de Leaflet -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>    
</head>
<body>
    <h1>Ejemplo de mapa desarrollado con Leaflet</h1>     
    
    <!-- Elemento div para contener el mapa -->
    <div id="mapid" style="height: 500px; width: 500px;"></div>

    <!-- Código principal de Leaflet -->
    <script>
	// Mapa Leaflet
	var mapa = L.map('mapid').setView([10, -84], 7);

	// Capa base
	var osm = L.tileLayer(
	  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?', 
	  {
	    maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	  }
	).addTo(mapa);		
	    
	// Otra capa base
        var esri = L.tileLayer(
	  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
	  {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	  }
	).addTo(mapa);	    
	    
	// Marcadores
	liberia = L.marker([10.633333, -85.433333]);
	liberia.bindTooltip("Liberia").openTooltip();
	liberia.addTo(mapa);
	    
	limon = L.marker([10.002216, -83.084037]);
	limon.bindTooltip("Limón").openTooltip();
	limon.addTo(mapa);	   
	    
	puntarenas = L.marker([9.966667, -84.833333]);
	puntarenas.bindTooltip("Puntarenas").openTooltip();
	puntarenas.addTo(mapa);	    	    
	        
	// Conjunto de capas base
	var mapasBase = {
	    "ESRI": esri,		
	    "OSM": osm
	};	    
	    
	// Control de capas
        L.control.layers(mapasBase).addTo(mapa);	    
    </script>									    
</body>
</html>
```
