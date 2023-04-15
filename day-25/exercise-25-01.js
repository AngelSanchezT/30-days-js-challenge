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
    let result = this.data[0];

    for (let i = 1; i < this.length; i++) {
      result = `${result}${character}${this.data[i]}`;
    }

    return result;
  }

  shift() {
    const deletedItem = this.data[0];

    delete this.data[0];

    this.length--;
    for (let i = 0; i < this.length; i++) {
      const nextItem = this.data[i + 1];
      this.data[i] = nextItem;
    }

    delete this.data[this.length];

    return deletedItem;
  }

  unshift(item) {
    if (!item && item !== 0) {
      return this.length;
    }

    if (this.length === 0) {
      this.data[0] = item;
      this.length++;
      return this.length;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;
    return this.length;
  }
}
