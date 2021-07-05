# This

_this_ se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a _this_ directamente y este depende de en que scope nos encontramos:

- Cuando llamamos a _this_ en el **Global Scope o Function Scope**, se hace referencia al objeto _window_. A excepción de cuando estamos en strict mode que nos regresará undefined.
- Cuando llamamos a _this_ desde una función que está contenida en un objeto, _this_ se hace referencia a ese objeto.
- Cuando llamamos a _this_ desde una “clase”, se hace referencia a la instancia generada por el constructor.

**Examples**

```js
// this en el scope global
console.log(`this: ${this}`);

// this en el scope de una función
function whoIsThis() {
  return this;
}

console.log(`whoIsThis(): ${whoIsThis()}`);

// this en el scope de una función en strict mode
function whoIsThisStrict() {
  'use strict';
  return this;
}

console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);

// this en el contexto de un objeto
const person = {
  name: 'Gabriel',
  saludar: function () {
    console.log(`Hola soy ${this.name}`);
  },
};

person.saludar();

// this cuando sacamos a una función de un objeto
const accion = person.saludar;
accion();

// this en el contexto de una "clase"
function Person(name) {
  // this = {}
  this.name = name;
}

Person.prototype.saludar = function () {
  console.log(`Me llamo ${this.name}`);
};

const angela = new Person('Angela');
angela.saludar();
```
