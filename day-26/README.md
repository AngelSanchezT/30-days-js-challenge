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