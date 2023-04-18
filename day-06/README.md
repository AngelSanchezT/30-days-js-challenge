# Reasignación y redeclaración
En JavaScript, **la reasignación y la redeclaración** son dos conceptos diferentes relacionados con las variables.

Reasignación se refiere al proceso de darle un nuevo valor a una variable existente. Por ejemplo:

```jsx
let numero = 5;
numero = 10;
```

En este ejemplo, la variable ``numero`` se ha reasignado con un nuevo valor de 10. Es importante notar solo su valor.

Además, es importante mencionar que las variables declaradas con la palabra clave ``const`` no pueden ser reasignadas, ya que su valor es constante. Si se intenta reasignar una variable declarada con ``const``, se generará un error en el código. Por ejemplo:

```jsx
const numero = 5;
numero = 10; // Uncaught TypeError: invalid assignment to const
```

Por otro lado, **redeclaración** se refiere al proceso de crear una nueva variable con el mismo nombre de una variable existente. Por ejemplo:

```jsx
let numero = 5;
let numero = 10;

// Uncaught SyntaxError: redeclaration of let numero

```

En este ejemplo, se está intentando crear una nueva variable ``numero`` con un valor de 10, pero esto generará un error ya que no se puede redeclarar una variable con el mismo nombre en el mismo ámbito. Sin embargo, es posible redeclarar una variable utilizando la palabra clave ``var`` en lugar de ``let`` o ``const``.

```jsx
var numero = 5;
var numero = 10;

// Esto funciona sin problema ✅

```

Ten en cuenta que la reasignación y la redeclaración tienen implicaciones diferentes en el código y deben utilizarse con cuidado para evitar errores y confusiones en el código. Es recomendable utilizar ``let`` o ``const`` en lugar de ``var`` para evitar la redeclaración accidental de variables.

# Modo estricto
JavaScript cuenta con un **modo estricto** que es un conjunto de reglas y características que proporcionan una mayor seguridad y control en el código. El modo estricto se activa mediante la palabra clave “use strict” al comienzo de un archivo o al principio de una función.

Una de las principales ventajas de utilizar el modo estricto es que ayuda a evitar errores comunes en el código. Por ejemplo, en modo estricto, no se puede redeclarar una variable con el mismo nombre en el mismo ámbito, lo que evita confusiones y errores en el código.

```jsx
"use strict";
let numero = 5;
let numero = 10;
// ❌ Generará un error en modo estricto, ya que no se puede redeclarar
// una variable con el mismo nombre en el mismo ámbito
```

Además, en modo estricto, no se puede cambiar el tipo de dato de una variable al momento de hacer la reasignación.

```jsx
function miFuncion() {
  "use strict";
	let numero = 5;
  numero = "10"; // Generará un error en modo estricto, ya que no se puede cambiar el tipo de dato de una variable
}
```

El modo estricto también proporciona mejoras en la performance del código. Por ejemplo, en modo estricto, el código se ejecuta más rápido ya que no se realizan algunas comprobaciones y conversiones que se realizan en modo no estricto.

En resumen, el modo estricto es una herramienta útil en la programación en JavaScript que proporciona una mayor seguridad, control y performance en el código. Es recomendable utilizar el modo estricto en todos los proyectos de JavaScript para evitar errores comunes y problemas de seguridad. Sin embargo, es importante tener en cuenta que el modo estricto puede generar algunos problemas al trabajar con código existente que no está escrito en modo estricto, por lo que se debe utilizar con precaución.