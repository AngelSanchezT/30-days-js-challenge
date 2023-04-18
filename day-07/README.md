# Debugging y manejo de errores

Dentro de JavaScript los errores van a ser tus mejores amigos, por lo que debes aprender a lidiar con estos mediante técnicas como el **debugging**.

> Debugging es el proceso de encontrar y corregir errores en el código. Es una parte importante del desarrollo de software y es esencial para garantizar que el código funcione correctamente. En JavaScript, hay varias herramientas y técnicas disponibles para ayudar en el debugging y manejo de errores.
> 

Una de las herramientas más comunes para manejar errores en JavaScript es el bloque try-catch. Este bloque permite ejecutar código que podría generar un error, y capturar ese error en caso de que ocurra. Por ejemplo:

```jsx
try {
  //Código que podría generar un error
}catch (error) {
  //Código que se ejecuta si ocurre un error
  console.log(error);
}
```

El bloque try-catch permite ejecutar código que podría generar un error de forma segura, y capturar el error para poder manejarlo de manera adecuada. Por ejemplo, si se está tratando de dividir un número por cero, se puede capturar el error y mostrar un mensaje de error al usuario en lugar de tener que detener el programa.

La forma más común de manejar errores es a través de la sentencia `throw new Error`.

La sentencia `throw` se utiliza para generar una excepción o error en tiempo de ejecución, y `new Error` crea un nuevo objeto de error con un mensaje personalizado. Este mensaje es útil para proporcionar información sobre el error y para facilitar la solución de problemas.

Aquí hay un ejemplo de código que muestra cómo utilizar `throw new Error` para generar un error y capturarlo con un bloque try-catch:

```jsx
try {
	const num = 100;
	if (num > 50) {
		throw new Error("El número es mayor a 50");
  }
}catch (error) {
  console.error(error.message);
}
```

En este ejemplo, si el número `num` es mayor a 50, se lanzará una excepción con el mensaje `"El número es mayor a 50"`. El bloque `catch` capturará el error y lo imprimirá en la consola.

Es importante tener en cuenta que el manejo de errores con `throw new Error` solo se recomienda para errores en tiempo de ejecución y no para errores de sintaxis.

Otra herramienta útil para el debugging en JavaScript es el comando “debugger”. Este comando se utiliza para detener la ejecución del código en un punto específico, lo que permite inspeccionar variables y entender el estado del programa en ese momento. Por ejemplo:

```jsx
let numero = 5;
debugger;
let resultado = numero / 2;

```

En este ejemplo, la ejecución del código se detiene en la línea con “debugger” y se pueden inspeccionar las variables y entender el estado del programa en ese momento (puedes ejecutar este código desde la consola del navegador y ver que pasa 👀).

La consola de JavaScript también es una herramienta útil para el debugging. La consola proporciona varios comandos para inspeccionar el código y entender el estado del programa. Por ejemplo, el comando “console.log()” permite imprimir valores en la consola para inspeccionarlos, el comando “console.table()” permite ver los valores de un objeto o array en forma de tabla, entre otros.
# Programación funcional

La programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En JavaScript, la programación funcional se basa en el uso de **funciones puras**, es decir, funciones que no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input.

Una de las características principales de la programación funcional es el uso de **first-class functions** (funciones como primer ciudadano), es decir, se consideran como valores y pueden ser asignados a variables, pasados como argumentos a otras funciones y retornadas como resultado de otras funciones. Esto permite crear funciones más pequeñas y reutilizables que se pueden combinar para crear funciones más complejas.

Por ejemplo, podemos crear una función “add” que toma dos números como argumentos y devuelve su suma:

```jsx
function add(a, b) {
	return a + b;
}
```

Luego, podemos asignar esta función a una variable y pasarla como argumento a otra función, como “makeOperation”:

```jsx
const operation = add;

function makeOperation(operation, num1, num2) {
	return operation(num1, num2);
}

console.log(makeOperation(operation, 2, 3)); // Output: 5

```

De esta forma, la función “makeOperation” se vuelve más genérica y reutilizable, ya que puede recibir cualquier función que tenga la misma estructura de argumentos.

Otra característica importante de la programación funcional es el **uso de funciones puras. Esto significa que las funciones no tienen efectos secundarios y siempre devuelven el mismo resultado dado el mismo input.** Esto hace que el código sea más fácil de probar y depurar, ya que no hay efectos secundarios ocultos que puedan afectar el comportamiento del código.

Por ejemplo, la función `map()` es una función pura ya que toma un array de números como input y devuelve un nuevo array con los números transformados, sin modificar el array original.

```jsx
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
	return numero * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

```

En resumen, la programación funcional es un enfoque de programación que se centra en el uso de funciones y evita el uso de estado y efectos secundarios. En javascript, se puede utilizar programación funcional mediante el uso de funciones como map, reduce, filter, arrow functions y librerías de programación funcional pura, lo cual permite crear código más fácil de probar y depurar.