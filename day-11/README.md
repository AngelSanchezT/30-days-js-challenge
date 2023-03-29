## Ejercicio 11-01 - Promesas

En este desafío debes utilizar promesas para enviar un correo electrónico.

La función `sendEmail` recibe tres parámetros: `email`, `subject` y `body`, los cuales son necesarios para enviar un correo. Deberás implementar la lógica necesaria para usar promesas y enviar el correo después de 2 segundos.

En caso de faltar algún dato, deberás lanzar un error con el mensaje indicando que faltan campos para enviar el correo. Recuerda utilizar la siguiente sintaxis:

```jsx
reject(new Error(message));
```

También recuerda que para usar `setInterval` o `setTimeout` debes usar el namespace de `window` de la siguiente manera para que las pruebas pasen correctamente.

```jsx
window.setTimeout(() => {
  // Código aquí
}, 1000);
```

Ejemplo 1:

```jsx
Input:

sendEmail(
  "test@mail.com",
  "Nuevo reto",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))

Output:

// Después de 2 segundos

{
  email: "test@mail.com"
  subject: "Nuevo reto",
  body:  "Únete a los 30 días de JS",
}
```

Ejemplo 2:

```jsx
Input:

sendEmail(
  "test@mail.com",
  "",
  "Únete a los 30 días de JS"
)
.then(result => console.log(result))
.catch(error => console.log(error))

Output:

// Después de 2 segundos

"Error: Hacen falta campos para enviar el email"
```


## Ejercicio 11-02 -  Resuelve el callback hell usando promesas

### **Evita el callback hell haciendo uso de Promises**

En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el **callback hell** y tu reto es evitarlo usando promesas.

> Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.
> 

Para solucionarlo vas a encontrar una función llamada `runCode` que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo `tasks.js` con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función `runCode` debes escribir tu solución y además pasar y deberías pasar las funciones del archivo `tasks.js` a promesas.

Código Base: 
### exercise.js
```jsx
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}
```
### task.js

```jsx
export function doTask1(callback) {
  window.setTimeout(() => callback('Task 1'), 300);
}

export function doTask2(callback) {
  window.setTimeout(() => callback('Task 2'), 300);
}

export function doTask3(callback) {
  window.setTimeout(() => callback('Task 3'), 300);
}
```

### Ejemplo:

```jsx
Input:
runCode()
.then(response => console.log(response));

Output:
["Task 1", "Task 2", "Task 3"]
```

## **Ejercicio 11-03 - Resuelve el callback hell usando async/await**

En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el **callback hell** y tu reto es evitarlo usando `async/await`.

Para solucionarlo vas a encontrar una función llamada `runCode` que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo `tasks.js` con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función `runCode` debes escribir tu solución y además pasar y deberías pasar las funciones del archivo `tasks.js` a promesas.

Ejemplo:

```
Input:
await runCode();

Output:
["Task 1", "Task 2", "Task 3"]
```

### Codigo Base:

**exercise.js**

```jsx
import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];
  return new Promise((resolve) => {
    doTask1((rta1) => {
      strings.push(rta1);
      doTask2((rta2) => {
        strings.push(rta2);
        doTask3((rta3) => {
          strings.push(rta3);
          resolve(strings);
        })
      })
    })
  })
}
```

**tasks.js**

```jsx
export function doTask1(callback) {
  window.setTimeout(() => callback('Task 1'), 300);
}

export function doTask2(callback) {
  window.setTimeout(() => callback('Task 2'), 300);
}

export function doTask3(callback) {
  window.setTimeout(() => callback('Task 3'), 300);
}
```