## ✅ **Ejercicio 19-01 - Jerarquía de animales**

En este desafío, debes crear una jerarquía de clases mediante el uso de la herencia.

La clase base será `Animal` con las propiedades `name`, `age` y `species` y un método `getInfo` que devuelve un objeto con la información del animal.

Luego, debes crear una clase `Mammal` que herede de `Animal` y tenga una propiedad adicional `hasFur` y un método `getInfo` que sobreescriba al del padre y incluya la información de `hasFur`.

Finalmente, debes crear una clase `Dog` que herede de `Mammal` y tenga una propiedad adicional `breed` y un método `getInfo` que sobreescriba al del padre y incluya la información de `breed`, al igual que el método `bark` que devuelva el string "woof!".

Ejemplo 1

```jsx

Input:
const bird = new Animal("pepe", 1, "bird")
bird.getInfo()

Output:

{
  name: "pepe",
  age: 1,
  specie: "bird",
}
```

Ejemplo 2

```jsx

Input:
const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()

Output:

{
  name: "bartolo",
  age: 3,
  specie: "hippo",
  hasFur: false,
}
```

Ejemplo 3

```jsx

Input:
const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()

Output:
"woof!"
```

## 🔴 **Ejercicio 19-02 - Sistema de pagos**

**Implementa un sistema de pagos usando polimorfismo**

En este desafío, tendrás que implementar un sistema de pagos utilizando polimorfismo en JavaScript.

Se debe crear una clase base llamada Pay que contenga un único método llamado `makePay`. Este método recibirá la cantidad a pagar y devolverá un objeto con dos propiedades

- realized: true
- quantity: $cantidadAPagar

Además, se deben crear también las clases `PayPal`, `Card` y `Cash`, donde cada una debe heredar de la clase `Pay`.

La clase PayPal debe recibir un email en el constructor y el método makePay debe agregar las propiedades:

- `platform: "PayPal"`
- `email: $EmailRecibido`.

La clase Card recibirá un número de tarjeta de 16 dígitos. Al momento de acceder al método makePay, se validará si la tarjeta en cuestión tiene esa longitud. En caso de no tener los 16 dígitos, se debe retornar un error. En caso contrario, al método que proviene de Pay, se le agregará la propiedad de lastCardNumber: donde se devolverán los últimos 4 dígitos de la tarjeta.

La clase `Cash` simplemente nos devolverá lo mismo que la clase base.

Por último se debe implementar la lógica de la función processPay la cual recibirá un método de pago y la cantidad, para poder devolver el objeto llamando al `método` makePay de cada entidad recibida.

> Cada clase tiene su propio archivo dentro del sistema de archvios del playground
> 

Ejemplo 1:

```jsx

Input:
const card = new Card("4913478952471122")

processPay(card, 100)

Output:

{
  realized: true,
  quantity: 100,
  lastCardNumbers: "1122",
}
```

Ejemplo 2:

```jsx

Input:
const paypal = new PayPal("test@mail.com")

processPay(paypal, 240)

Output:

{
  realized: true,
  quantity: 240,
  platform: "PayPal",
  email: "test@mail.com",
}
```

Ejemplo 3:

```jsx

Input:
const cash = new Cash()

processPay(cash, 400)

Output:

{
  realized: true,
  quantity: 400,
}
```