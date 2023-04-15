## 🔴 **Ejercicio 25-01 - Crea tu propia implementación de un array**

En este desafío, tendrás la oportunidad de desarrollar tus habilidades al construir tu propio array mediante el uso de clases.

Tu objetivo es crear una clase que sea similar a un array nativo del lenguaje, pero sin utilizar métodos ya existentes.

Entre los métodos disponibles en los arrays nativos, solo deberás implementar la lógica de los siguientes: `map`, `filter`, `join`, `push`, `pop`, `shift`, y `unshift`.

No podrás usar los corchetes `[]`, aquí entenderás porque los arrays se consideran objetos ¡Buena suerte!

Ejemplo 1:

```jsx

Input:

const myArray = new MyArray()

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray.data)

Output: { 0: 1, 1: 2, 2: 3 }
```

Ejemplo 2:

```jsx

Input:

const myArray = new MyArray()

myArray.push("Platzinauta");
myArray.unshift("Hola!")

console.log(myArray.data)

Output: { 0: "Hola!", 1: "Platzinauta" }
```