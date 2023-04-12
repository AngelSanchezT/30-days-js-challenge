import { expect } from 'chai';
import sinon from 'sinon';

import { arrayModified } from "../exercise-17-01";

arrayModified();

describe("🌐 Day 17-01 - Modifies the prototype of the array", () => {
  it("should exist a new array method", () => {
    const type = typeof Array.prototype.myFilter;
    expect(type).to.eql("function");
  });

  it("should return [2,4,6]", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const rta = arr.myFilter((num) => num % 2 === 0);
    expect(rta).to.eql([2, 4, 6]);
  });

  it("should work with objects", () => {
    const arr = [
      {
        name: "Juan",
        age: 10,
      },
      {
        name: "Pedro",
        age: 20,
      },
      {
        name: "Maria",
        age: 30,
      },
    ];
    const rta = arr.myFilter((person) => person.age > 18);
    expect(rta).to.eql([
      {
        name: "Pedro",
        age: 20,
      },
      {
        name: "Maria",
        age: 30,
      },
    ]);
  });

  it("should work with arrays in objects", () => {
    const arr = [
      {
        name: "Juan",
        age: 10,
        hobbits: ["read", "eat", "play"],
      },
      {
        name: "Pedro",
        age: 20,
        hobbits: ["sports", "sleep", "play"],
      },
      {
        name: "Maria",
        age: 30,
        hobbits: ["read", "study", "drive"],
      },
    ];
    const rta = arr.myFilter((person) => person.hobbits.includes("read"));
    expect(rta).to.eql([
      {
        name: "Juan",
        age: 10,
        hobbits: ["read", "eat", "play"],
      },
      {
        name: "Maria",
        age: 30,
        hobbits: ["read", "study", "drive"],
      },
    ]);
  });
  it("should not use array methods", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const filterSpy = sinon.spy(Array.prototype, "filter");
    const rta = arr.myFilter((num) => num % 2 === 0);
    expect(filterSpy.notCalled).to.be.true;
  });
});