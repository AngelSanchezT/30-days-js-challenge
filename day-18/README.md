## 🔴 **Ejercicio 18-01 - Sistema de carrito de compras**

En este desafío debes crear un sistema de carrito de compras.

Dentro del playground tendrás un archivo `product.js` que será la clase base y será abstracta. Deberás crear las clases hijas `Article` y `Service` que extenderán de Product.

La clase `Article` deberá implementar el método `addToCart()` de manera que retorne el string "Agregando x unidades del artículo x al carrito", donde x es el nombre y la cantidad del producto. Por otro lado, la clase `Service` deberá implementar el método `addToCart()` de manera que retorne el string "Agregando el servicio x al carrito", donde x es el nombre del servicio.

Además, debes crear la clase Cart que será el carrito de compras y tendrá los siguientes métodos:

- `addProduct(product)` este método agregará un producto al final de la lista de compras y deberá llamar al método addToCart() de cada producto o servicio.
- `deleteProduct(product)` este método recibirá un producto y lo eliminará de la lista de productos
- `calculateTotal()` este método calculará el total de los productos agregados y lo devolverá.
- `getProducts()` este método devolerá el array de los productos que contiene el carrito.

Ejemplo 1

```jsx

Input:

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.calculateTotal();

Output:

Agregando 2 unidades del artículo Libro al carrito
Agregando el servicio Curso al carrito
320
```

Ejemplo 2

```jsx

Input:

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);
cart.deleteProduct(book);
cart.calculateTotal();

Output:

Agregando 2 unidades del artículo Libro al carrito
Agregando el servicio Curso al carrito
120
```