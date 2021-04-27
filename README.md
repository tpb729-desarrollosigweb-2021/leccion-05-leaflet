# Leaflet
[Leaflet](https://leafletjs.com/) es una biblioteca de programación en JavaScript para hacer mapas en la Web. Es de código abierto y fue diseñada para funcionar en una gran variedad de dispositivos, incluyendo móviles (ej. celulares, tabletas). Su funcionalidad puede ser extendida a través de [complementos](https://leafletjs.com/plugins.html). Su primera versión fue publicada en 2011 por Vladimir Agafonkin. Junto con [OpenLayers](https://openlayers.org/) y [Google Maps](https://developers.google.com/maps/documentation), es una de las más bibliotecas más populares para programar mapas en la Web.




JavaScript (JS) es un lenguaje de programación utilizado para añadir interactividad a las páginas web. Junto con HTML y CSS, es una de las tres principales tecnologías para la producción de contenido en la Web. Fue creado en 1995 por Brendan Eich, con el fin de dar interactividad a las páginas web leídas con el navegador Netscape. En la actualidad, es utilizado por todos los [principales navegadores web](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers) y en la mayoría de los sitios web.

## Principales características
* Se ejecuta en el cliente (i.e. navegador web).
* Es interpretado.
* Permite el uso de varios paradigmas de programación, incluyendo la [programación orientada a objetos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS).

## ¿Qué puede hacerse con JavaScript?
* Controlar multimedia.
* Reaccionar a "eventos" (ej. presionar un botón).
* Modificar dinámicamente el contenido de una página web.
* Manejar mapas interactivos.
* Y muchas otras cosas más...

## El programa "Hola mundo" en JavaScript
```html
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Hola mundo</title>
        <meta charset="UTF-8"> 
        <script>
            /* Función que imprime "Hola mundo" */
            function holaMundo () {
                alert("Hola mundo");
            }        
        </script>
    </head>
    <body>
        <button type="button" onclick="holaMundo()">
            Presióneme
        </button>        
    </body>
</html>
```
# Conceptos básicos
## El elemento script de HTML
El elemento [```script```](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) se utiliza para incluir código de algún lenguaje de programación, típicamente JavaScript, aunque también usarse con otros lenguajes y sintaxis (ej. [JSON](https://www.json.org/json-en.html)).

```html
<script>
    /* Función que imprime la hilera "Hola mundo" */
    function holaMundo () {
        alert("¡Hola mundo!");
    }        
</script>

<script src="js/misfunciones.js"></script>

<script src="https://maps.googleapis.com/maps/api/js"></script> 

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
```

## Sintaxis de JavaScript
### Comentarios
Para varias líneas:
```javascript
/* Este es un
   comentario de
   varias líneas 
*/
```

Para una línea:
```javascript
var i = 1; // contador inicializado en 1       
var j = 2; // contador inicializado en 2 
```

### Declaración e inicialización de variables
Se declaran con la palabra reservada ```var``` y se inicializar con el operador ```=```.

```javascript
var lenguaje;
var numeroAureo, pi;
var esBisiesto = false;                                

lenguaje = "JavaScript";
numeroAureo = 1.61803, pi = 3.14;
```

El operador ```=``` se usa también para actualizar los valores de las variables, después de inicializarlas.

### Tipos de datos
#### Numéricos
Incluye números tanto enteros como decimales.

```javascript
var cantidadEstudiantes = 12;
var pi = 3.14;

x1 = 1, x2 = 2, x3 = 4, x3 = 8, x4 = 16;

suma = 10 + 20; resta = 20 - 2;
multiplicacion = 2 * 3; divison = 2.4 * 4.7;

i = 10; j = 20;
i++; // Resultado: 11
j--; // Resultado: 19
```

#### Textuales
Son hileras de texto escritas entre comillas simples o dobles.

```javascript
var continente = "América";
var pais = "Costa Rica", provincia = 'Heredia';

cita = "'Solo sé que no sé nada...', Sócrates";

nombreCompleto = "John" + " " + "Doe"; // resultado: "John Doe"   
```

#### Booleanos
Tienen dos posibles valores: verdadero (```true```) o falso (```false```).

```javascript
var esBisiesto = true;
var esLunes = false;

// "Y" lógico (AND)
2 > 1 && 2 == (1 + 1); // Resultado: true;

// "O" lógico (OR)
1 > 2 || 4 < 3; // Resultado: false;

// "No" lógico (NOT)
!(2 > 1); // Resultado: false;
```

#### Arreglos (*arrays*)
Sus elementos se separan con comas y se encierran entre paréntesis cuadrados (```[]```). Sus índices (i.e. posiciones) comienzan en 0.

```javascript
var nombres = ['Carlos', 'Lucía', 'Jorge'];
var numeros = [20, 9, 10.3];

nombres[0]; // Resultado: 'Carlos'
numeros[2]; // Resultado: 10.3
```

#### Objetos
Son estructuras compuestas por listas de tuplas de la forma ```propiedad:valor```.

```javascript
var perro = {nombre:'Lassie', raza:'Collie', sexo:'Femenino', edad:7 };       

perro.nombre; // Resultado: 'Lassie'
perro.edad; // Resultado: 7
```

### Funciones
Declaración
```javascript
function [nombre-función] ([arg1], [arg2], ..., [argn]) {       
  [cuerpo-función]
  
  return [valor-retorno]
}
```

Ejemplo
```javascript
function cuadrado (numero) {
  c = numero * numero;
  
  return c;
}

cantidad = cuadrado(8);
```

### Condicionales
#### if
Sintaxis
```javascript
if ([condición]) {
  [código a ejecutarse si la condición es verdadera];       
}
```

Ejemplo
```javascript
var x = 2, y = 4;
if (x < y) {
  alert("x es menor o igual que y");
}
```

#### if-else
Sintaxis
```javascript
if ([condición]) {
  [código a ejecutarse si la condición es verdadera];       
} else {
  [código a ejecutarse si la condición es falsa];       
}
```

Ejemplo
```javascript
var x = 2, y = 4;
if (x < y) {
  alert("x es menor o igual que y");
} else {
  alert("x es mayor o igual que y");
}
```

#### if - else if - else
Sintaxis
```javascript
if ([condición-1]) {
  [código a ejecutarse si la condición-1 es verdadera];
} else if [condición-n]{
  [código a ejecutarse si la condición-n es verdadera];
} else {
  [código a ejecutarse si todas las condiciones son falsas];        
}
```

Ejemplo
```javascript
var x = 2, y = 4;
if (x < y) {
  alert("x es menor o igual que y");
} else if (x > y) {
  alert("x es mayor que y");
} else {
  alert("x es igual a y");
}
```

#### switch
Sintaxis
```javascript
switch ([expresión]) {
  case [opción-1]:
    [código a ejecutarse para la opción-1]
    break;
  case [opción-n]:
    [código a ejecutarse para la opción-n]
    break;
  default:
    [código a ejecutarse si no se cumple ninguna opción]
}
```
```break``` detiene la ejecución e impide que las otras opciones sean evaluadas.

Ejemplo
```javascript
codigoMes = 1;
switch (codigoMes) {
  case 1:
    nombreMes = "Enero";
    break;
  case 2:
    nombreMes = "Febrero";
    break;
  case 3:
    nombreMes = "Marzo";
    break;                        
  default:
    nombreMes = "Otro";
}
alert(nombreMes);
```

### Ciclos
#### for
Sintaxis
```javascript
for ([expresión-inicial];[condición]; [expresión-incremento]) {          
  [cuerpo-ciclo]
}
```

Ejemplo
```javascript
// Imprime los cuadrados de i, para i en [1..3]
for (i = 1; i <= 3; i++) {          
  alert(i * i);
}
```

#### while
Sintaxis
```javascript
while ([condición]) {          
  [cuerpo-ciclo]
}
```

Ejemplo
```javascript
// Imprime los cuadrados de i, para i en [1..3]           
var i = 1;
while (i <= 3) {          
  alert(i * i);
}
```

#### for..in
Sintaxis
```javascript
for ([variable] in [objeto]) {          
  [cuerpo-ciclo]
}
```

Ejemplo
```javascript
// Imprime los valores de las propiedades de un objeto
var perro = {nombre:'Lassie', raza:'Collie', sexo:'Femenino', edad:7 };           
for (i in perro) {          
  alert(perro[i]);
  i++;
}
```

#### do..while
Sintaxis
```javascript
do {          
  [cuerpo-ciclo]
} while ([condición]);
```

Ejemplo
```javascript
// Imprime los cuadrados de i, para i en [1..3]           
var i = 1;
do {          
  alert(i * i);
  i++;
} while (i <= 3);
```

Ejercicios
Implemente las siguientes funciones el JavaScript. En el código HTML, implemente para cada una un botón que realice llamados de prueba e imprima los resultados con ```alert()```.

1. Una función que reciba una hilera con un nombre y retorne "Hola"+nombre (ej. "Hola Manuel").
2. Una función que reciba un número y retorne su cuadrado.
3. Una función que reciba un número, correspondiente a la edad de una persona, y retorne una hilera indicando si la persona es menor de edad (< 18), adulto (>= 18 y < 65) o adulto mayor (>= 65).
4. Una función que reciba un arreglo de números y retorne el promedio de esos números.
5. Una función que reciba un arreglo de números y retorne la suma de los cuadrados de esos números.
