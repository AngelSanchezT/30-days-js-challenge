## 🔴 **Ejercicio 26-01 - Remueve duplicados de una lista**

En este desafío deberás remover los elementos duplicados de un array.

La función `removeDuplicates` recibirá un array con elementos que pueden ser números o strings y que contienen elementos repetidos. Tu objetivo es implementar la lógica necesaria para quitar estos elementos repetidos y mantener el orden original de aparición de los elementos en el array.

Ejemplo 1:

```jsx
Input:

const fruits = [
  "melon",
  "melon",
  "mango",
  "banana",
  "apple",
  "banana",
  "apple",
];

console.log(removeDuplicates(fruits))

Output: ["melon", "mango", "banana", "apple"]
```

Ejemplo 2:

```jsx
Input:

const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))

Output: [1, 2, 3]
```

## 🔴 **Ejercicio 25-2 - Crea un organizador de tareas**

En este desafío tendrás que construir un organizador de tareas para planificar tus actividades diarias junto con sus correspondientes etiquetas.

Debes crear un closure que use Maps y Sets para devolver 2 funciones:

- `addTask(task, tags)`: esta función te ayudará a agregar tareas al Map. Es importante que conviertas todas las letras de la tarea en minúsculas usando toLowerCase para verificar si la tarea existe. En caso de que exista, solo se agregarán las nuevas etiquetas como un Set, en caso contrario, se crearán desde cero.
- `printTasks()`: esta función te devolverá todas las tareas creadas con sus etiquetas.

Ejemplo 1:

```jsx
Input:

const myTaskManager = taskManager()
addTask("Comprar leche", ["compras", "urgente"]);
addTask("Sacar al perro", ["mascotas"]);
addTask("Hacer ejercicio", ["salud"]);

printTasks();

Output:

Map(3) { "comprar leche" → Set(2), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }
```

Ejemplo 2:

```jsx
Input

const myTaskManager = taskManager()
addTask("Comprar leche", ["compras", "urgente"]);
addTask("Sacar al perro", ["mascotas"]);
addTask("Hacer ejercicio", ["salud"]);
addTask("Comprar leche", ["lácteos"]);

Output:

Map(3) { "comprar leche" → Set(3), "sacar al perro" → Set(1), "hacer ejercicio" → Set(1) }
```