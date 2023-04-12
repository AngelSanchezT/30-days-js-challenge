export class Animal {
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;

  }

  getInfo() {
    return this;
  }
}

export class Mammal extends Animal{
  constructor(name, age, specie, hasFur) {
    super(name, age, specie);
    this.hasFur = hasFur;
  }

  getInfo() {
    return this;
  }
}

export class Dog extends Mammal {
  constructor(name, age, breed, hasFur) {
    super(name, age, "dog", hasFur);
    this.breed = breed;
  }

  getInfo() {
    return this;
  }

  bark() {
    return "woof!";
  }
}
