## 🔴 **Ejercicio 19-01 - Jerarquía de animales**

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