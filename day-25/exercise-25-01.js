export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    const copyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const item = this.data[i];
      copyArray.push(func(item));
    }

    return copyArray;
  }

  filter(func) {
    const copyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const item = this.data[i];
      if (func(item)) {
        copyArray.push(item);
      }
    }

    return copyArray;
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    this.length--;
    const deletedItem = this.data[this.length];

    delete this.data[this.length];

    return deletedItem;
  }

  join(character = ",") {
    const copyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const item = this.data[i];
      if (func(item)) {
        copyArray.push(item);
      }
    }

    return copyArray;
  }

  shift() {
    // Tu código aquí 👈
  }

  unshift(item) {
    // Tu código aquí 👈
  }
}
