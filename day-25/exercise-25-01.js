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
    // Tu código aquí 👈
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    // Tu código aquí 👈
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
