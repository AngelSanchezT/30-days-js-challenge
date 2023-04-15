export class ContactList {
  constructor(size) {
    // Dentro del constructor se inicializa un array con un tamaño arbitrario
    // Para asignarlo como el tamaño total de buckets en nuestra hashTable
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(name) {
    // Esta función toma un "name"
    // Para poder calcular el índice del bucket donde el valor será almacenado
    let total = 0;
    // En este caso el algoritmo para crear un hash es muy sencillo

    // Para calcular el hash, se suman los valores ASCII de cada caracter de la key
    // y se toma el resto de la división de esta suma entre el total de buckets.

    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(name, phone) {
    // Este método toma el "name" y un value que seria el phone, y los almacena en la hash table
    // Primero se calcula el índice usando la función hash
    const index = this.hash(name);

    // si ese bucket no existe, se inicializa como un array vacío.
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Luego se agrega un arreglo con la key y el value al bucket
    this.buckets[index].push([name, phone]);
  }

  get(name) {
    // Esta función toma una key que es el atributo "name"
    // y retorna el valor almacenado en la hash table
    // Primero se calcula el índice usando la función hash
    const index = this.hash(name);

    // si ese bucket no existe, se retorna null.
    if (!this.buckets[index]) {
      return null;
    }

    // Si el bucket existe, se recorre el array en busca de un arreglo
    // que tenga la key especificada
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === name) {
        return this.buckets[index][i][1];
      }
    }

    //Si no se encuentra la key, se retorna null.
    return null;
  }

  retrieveAll() {
    // Esta función retorna un array con todos los valores almacenados
    // Se recorren todos los buckets y, si existen, se agrega cada value a un array
    const allValues = [];
    for (let i = 0; i < this.numBuckets; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          allValues.push(this.buckets[i][j]);
        }
      }
    }
    return allValues;
  }

  delete(name) {
    const index = this.hash(name);

    if (!this.buckets[index]) {
      return null;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === name) {
        this.buckets[index].splice(i, 1);
        return;
      }
    }
  }
}
