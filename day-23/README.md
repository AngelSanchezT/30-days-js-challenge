## 🔴 **Ejercicio 23-01 - Proxy en servicio de mensajería**

El objetivo de este ejercicio es crear un proxy que controle el acceso a un servicio de mensajería.

En el sistema de archivos encontrarás un archivo llamado `messages.js` que representa al servicio de mensajería y cuenta con dos métodos: `sendMessage(text)` y `getHistory()`. Sin embargo, actualmente, no se verifica si el usuario que hace uso de la clase está logeado, por lo que es necesario implementar un proxy.

Tu tarea es agregar la lógica necesaria de la clase `MessagesProxy` que actuará como intermediario entre los clientes y el servicio de mensajería, manteniendo los métodos de `Messages.js`, pero agregando una verificación de si el usuario está logeado antes de permitir el acceso al historial de mensajes o el envío de un mensaje. Si el usuario no está registrado, se deberá lanzar un error con el mensaje "Usuario no registrado".

> Recuerda hacer uso de throw new Error("")
> 

Además, deberás implementar la logica de la clase `User` con los métodos `login()`, `logout()` y `isLoggedIn()`, que permitirá determinar si el usuario está logeado o no.

Ejemplo 1:

```jsx
Input:
const user = new User("John")

user.login()
user.isLoggedIn()

Output: true
```

Ejemplo 2:

```jsx
Input:
const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

user.login()
messagesProxy.sendMessage("Hola")
messagesProxy.getHistory()

Output: ["Hola"]
```

Ejemplo 3:

```jsx
Input:
const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

messagesProxy.sendMessage("Hola")

Output: Error("Usuario no registrado")
```

## 🔴 ****Ejercicio 23-02 - Implementación de Observador en Newsletter****

En este desafío, debes implementar un patrón observer en un sistema de newsletter.

Tendrás que crear una clase `Newsletter` que gestione la suscripción de los usuarios a un newsletter y envíe actualizaciones cuando se publique un nuevo artículo. La clase tendrá una lista de suscriptores (`subscribers`)inicializada, y los siguientes métodos: `subscribe(subscriber)` para agregar nuevos suscriptores, `unsubscribe(email)` para eliminar a un suscriptor de la lista mediante su correo electrónico, y `post(article)` que recibirá un objeto con dos propiedades: `title` y `content`.

Además, necesitarás crear la clase `Subscriber`, la cual se inicializará con un correo electrónico y un método `receive(article)` que **imprimirá en consola** un mensaje que indica que el suscriptor ha recibido un artículo específico.

Ejemplo

```jsx

Input:

constnewsletter = new Newsletter();
constsubscriber1 = new Subscriber("pepe@mail.com");
constsubscriber2 = new Subscriber("juanito@mail.com");
constsubscriber3 = new Subscriber("pedro@mail.com");

constarticle = {
  title: "30 días de js",
  content: "Aprende js en 30 días"
}

newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);
newsletter.subscribe(subscriber3);

newsletter.post(article);

Output:
"El suscriptor pepe@mail.com ha recibido el artículo: 30 días de js"
"El suscriptor juanito@mail.com ha recibido el artículo: 30 días de js"
"El suscriptor pedro@mail.com ha recibido el artículo:
```