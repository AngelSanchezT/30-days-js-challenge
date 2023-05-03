# 🔴 Ejercicio 27.01 - Agrega métodos a la singly linked list
30DaysJs-37

En este ejercicio práctico, crearás métodos adicionales para una singly linked list.

Para este ejercicio, deberás implementar la lógica de algunos métodos de `LinkedListRecharged` que heredará de un `LinkedList` (`SinglyLinkedList.js`) previamente creada.

Los métodos que deberás implementar son los siguientes

- get(index): este método recibirá un index y retornará el valor del nodo en la posición buscada, en caso de recibir un index invalido este retornará `null`.

- insertAt(index, value): este método inserta un valor en la posición especificada.

- toArray(): Tomará todos los valores de la singly linked list y los retornará en un array.

- removeAt(index): este método elimina el nodo en el index especificado y retorna el valor.

> Las pruebas harán uso del método toArray() para comparar resultados.

Ejemplo 1:

```jsx

Input:
const linkedList = new LinkedListRecharged();

El método append ya se encuentra implementado por lo que no debes preocuparte
linkedList.append("30");
linkedList.append("Días");
linkedList.append("De javascript");

linkedList.get(1)

Output:
"Días"
```

Ejemplo 2:

```jsx
Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.insertAt(1, 5)

linkedList.toArray()

Output:
[1, 5, 2, 3]
```

Ejemplo 3:

```jsx

Input:
const linkedList = new LinkedListRecharged();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.removeAt(1);

linkedList.toArray()

Output:
[1, 3]
```

# 🔴 Ejercicio 27.02 - Implementación de una singly linked list
30DaysJs-38
En este desafío, tu objetivo es implementar una singly linked list para almacenar información sobre pacientes de un hospital. Cada nodo de la lista representará a un paciente y tendrá los siguientes campos:

- Nombre del paciente (string)
- Edad del paciente (number)
- Número de cama asignada al paciente (number)

La lista deberá tener los siguientes métodos:

- addPatient(name, age): agrega un nuevo paciente a la lista, asignándole la próxima cama disponible. Si no hay camas disponibles, debe lanzar un error con el mensaje "No hay camas disponibles".

- removePatient(name): remueve al paciente con el nombre especificado de la lista y libera su cama. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

- getPatient(name): retorna la información del paciente con el nombre especificado en el siguiente formato `{ name, age, bedNumber }`. Si el paciente no se encuentra en la lista, debe lanzar un error con el mensaje "Paciente no encontrado".

- getPatientList(): retorna una lista con la información de todos los pacientes en la lista, cada paciente deberá tener el siguiente formato `{ name, age, bedNumber }`.

- getAvailableBeds(): retorna un número con el total de camas disponibles.

> Recuerda usar la sintaxis throw new Error() para los errores

Aquí tienes una guía paso a paso de cómo implementar la singly linked list:

Ejemplo 1:

```txt
Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatientList()
Output:

[
  { name: "Paciente 1", age: 20, bedNumber: 1 },
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]
```

Ejemplo 2:

```txt

Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.getPatient("Paciente 1")

Output:
{
  name: "Paciente 1",
  age: 20,
  bedNumber: 1,
}

```

Ejemplo 3:

```txt
Input:
const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)

list.removePatient("Paciente 1")

list.getPatientList()

Output:

[
  { name: "Paciente 2", age: 30, bedNumber: 2 },
]
```
