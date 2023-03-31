## 🔴 ****Ejercicio 13-01 - Agrupa los productos****

En este desafío, tendrás la tarea de agrupar una lista de productos según su categoría.

Para ello, debes implementar la lógica de la función `groupProducts` que recibirá dos parámetros: `products` y `category`.

El primer parámetro `products` es una lista de objetos que representan cada producto y contienen las propiedades: `name`, `category` y `price`. El segundo parámetro `category` específica a qué categoría se filtrarán los productos.

La función debe retornar un objeto con dos propiedades: `products` que contiene la cadena de texto con los nombres de los productos respetando el orden en el que llegan separados por comas, y `totalPrice` que contiene la suma total de los precios.

Ejemplo 1:

```jsx
Input:
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Electronics")

Output: {
  products: "Smartphone, Laptop",
  totalPrice: 2000,
}
```

Ejemplo 2:

```jsx
Input:
const products = [
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Pants", category: "Clothing", price: 100 },
];

groupProducts(products, "Clothing")

Output: {
  products: "Shirt, Pants",
  totalPrice: 150,
}
```