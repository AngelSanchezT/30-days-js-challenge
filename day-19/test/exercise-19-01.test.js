import { expect } from 'chai';

import { Animal, Mammal, Dog } from "../exercise-19-01";

describe("🌐 Day 19-01 - animal hierarchy", () => {
  it("should return a correct object from Animal", () => {
    const bird = new Animal("pepe", 1, "bird");
    const rta = bird.getInfo();
    expect(rta).to.eql({
      name: "pepe",
      age: 1,
      specie: "bird",
    });
  });

  it("should return a correct object from Mammal", () => {
    const hippo = new Mammal("bartolo", 3, "hippo", false);
    const rta = hippo.getInfo();
    expect(rta).to.eql({
      name: "bartolo",
      age: 3,
      specie: "hippo",
      hasFur: false,
    });
  });

  it("should return a correct object from dog", () => {
    const dog = new Dog("fido", 4, "pastor aleman", true);
    const rta = dog.getInfo();
    expect(rta).to.eql({
      name: "fido",
      age: 4,
      specie: "dog",
      hasFur: true,
      breed: "pastor aleman",
    });
  });

  it("Mammals should extends from Animal", () => {
    const mammal = new Mammal("test", 1, "test", false);
    const rta = mammal instanceof Animal;
    expect(rta).to.eql(true);
  });

  it("dog should extends from Mammals", () => {
    const dog = new Dog("Firulais", 3, "pitbull", true);
    const rta = dog instanceof Mammal;
    expect(rta).to.eql(true);
  });

  it("dogs should bark", () => {
    const dog = new Dog("Firulais", 3, "pitbull", true);
    const rta = dog.bark();
    expect(rta).to.eql("woof!");
  });
});