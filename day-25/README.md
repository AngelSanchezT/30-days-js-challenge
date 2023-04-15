## ✅ **Ejercicio 25-01 - Crea tu propia implementación de un array**

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

## 🔴 **Playground - Implementación de una HashTable para Contactos**

En este desafío, debes construir una lista de contactos mediante una hashTable.

Tu objetivo será el de implementar la lógica de la clase `ContactList` para agregar contactos y realizar las operaciones correspondientes.

La hashTable (`ContactList`) deberá tener los siguientes métodos:

- `insert(name, phone)`: este método recibirá el nombre y el número de teléfono de un contacto, y agregará este último a la hashTable.
- `get(name)`: este método recibirá el nombre de un contacto y devolverá su número de teléfono. Si el contacto no existe, retornará null.
- `retrieveAll()`: este método devolverá un array con todos los buckets utilizados en la hashTable.
- `delete(name)`: este método recibirá el nombre de un contacto y eliminará dicho contacto de la hashTable, en caso de no encontrar el name debe retornar null.

> El código original ya tiene una implementación del método hash por lo que no te tienes que preocuparte por ello.
> 

Ejemplo 1:

```jsx
Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.retrieveAll()

Output: [["Mr michi", "123-456-7890"]]
```

Ejemplo 2:

```jsx
Input:

const contactList = new ContactList(10)
contactList.insert("Mr michi", "123-456-7890")

contactList.get("Mr Michi")

Output: "123-456-7890"
```