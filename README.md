# Curso Profesional de JavaScript

## ¿Qué significa ser un profesional de JavaScript?

El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

## ¿Qué forma a un profesional?

### Lista de cosas que lo forman:

‌- Conocimiento del lenguaje.

- Conocimiento de entornos de programación.
- Mejores prácticas.
- Versado en código.
- Herramientas.
- Ética / Profesionalismo.
- Experiencia.

**El lenguaje: JavaScript**‌

Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

‌**No fundamentos**
‌
Los no fundamentos" representan las siguientes características del lenguaje:

- _Promesas_ (nivel pro).
- _Getters_, setters: son formas de obtener valor de una variable sin tener que poner this.name.
- _Proxies:_ es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
- _Generadores:_ esto es raro, pero vamos a ver que sí es eficiente.

**¿Cómo funciona?**
‌
Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

**Entornos de programación**
‌
Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto.

‌**Versado en código**‌

Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

‌**Mejores prácticas**

No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

**Ética**‌

Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

- Es responsable.
- Entrega a tiempo sus trabajos.
- Sabe decir que no.
- No hace daño.

**Experiencia**
‌
La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

## ¿Cómo llega un script al navegador?

El **DOM** es la representación que hace el navegador de un documento HTML.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

_Todo script que carguemos en nuestra página tiene un llamado y una ejecución._

**Tanto con async como defer podemos hacer llamados asíncronos pero tiene sus diferencias:**

`*sync`, Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.

`defer`, La petición es igual asíncrona como en el async pero va a diferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

_Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible._

## Scope

El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

```js
// Variable Global
var name = "Adonys";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var users = { full_name: "Adonys", birthday: 0 };

// Variable local
let age = 17;

// Constante
const independenceDay = "February 27th";
```

### Global Scope

Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página y se declaran fuera de una función o bloque. Aquí hay mucho riesgo de sobreescritura.

### Function Scope

Variables declaradas dentro de una función utilizando var sólo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

### Block Scope

Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.

### Module Scope

Cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.

## Closures

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los **closures** nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por _default_. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

**Example**

```js
// Closures
// printColor

// IIFE (es una funcion que se declara y se lla de inmediato)
(function () {
  let color = "green";

  function printColor() {
    console.log(color);
  }

  printColor();
})();

// Funciones que regresan funciones
function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;

  return function () {
    console.log(colorMessage);
  };
}

let greenColorPrinter = makeColorPrinter("green");
console.log(greenColorPrinter());

// variables "privadas"
const counter = {
  count: 3,
};
console.log(counter.count);
counter.count = 99;
console.log(counter.count);

function makeCounter(n) {
  let count = n;

  return {
    increase: function () {
      count = count + 1;
    },
    decrease: function () {
      count = count - 1;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = makeCounter(7);

console.log("The count is:", counter.getCount());
counter.increase();
console.log("The count is:", counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log("The count is:", counter.getCount());

counter.count = 0;
console.log("The count is:", counter.getCount());
```
