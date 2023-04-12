## ✅ **Ejercicio 18-01 - Sistema de carrito de compras**

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

## 🔴 **Ejercicio 18-02 - Encapsula datos de los usuarios**

En este desafío, debes implementar la lógica de la clase "Usuario" que represente un usuario en una red social y utilizar encapsulamiento para proteger sus datos privados.

La clase debe tener las siguientes variables privadas:

- `name`
- `age`
- `friends` (array de objetos Usuario)
- `messages` (array de strings)

Además, debes proporcionar los siguientes métodos públicos:

- `addFriend(friend)`: agrega un usuario a la lista de amigos del usuario actual.
- `sendMessage(message, friend)`: agrega un mensaje a la lista de mensajes del usuario actual y al amigo especificado.
- `showMessages()`: devuelve la lista de mensajes del usuario actual.

También debes tener definidos los getters y setters para acceder a los datos privados como el nombre y la edad, los cuales pueden ser modificados mediante su propio setter.

Ejemplo 1:

```jsx

Input:

const usuario1 = new Usuario("Juan", 20);
const usuario2 = new Usuario("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

usuario1.showMessages()

Output:

["Hola Maria!"]
```

Ejemplo 2:

```jsx

Input:

const usuario1 = new Usuario("Juan", 20);
usuario1.name = "Pepito"
console.log(usuario1.name)

Output:

"Pepito"
```