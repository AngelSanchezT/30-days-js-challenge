export class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  map(func) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];
      newArr.push(func(element));
    }

    return newArr;
  }

  filter(func) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      const element = this.data[i];
      if (func(element)) {
        newArr.push(element);
      }
    }

    return newArr;
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
    // Tu código aquí 👈
  }

  shift() {
    // Tu código aquí 👈
  }

  unshift(item) {
    // Tu código aquí 👈
  }
}
