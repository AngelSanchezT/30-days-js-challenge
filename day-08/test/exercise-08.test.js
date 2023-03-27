import assert from "assert";
import { expect } from 'chai';
import sinon from 'sinon';

import { createCalculator } from "../exercise-08-01";
import { myMap } from "../exercise-08-02";

describe("🌐 Day 08-01 - Create a calculator with closures", () => {
  const calculator = createCalculator();

  it("should return 10 after sum", () => {
    const rta = calculator.add(10);
    assert.equal(rta, 10);
  });

  it("should return 120 using more operations", () => {
    calculator.multiply(20);
    const rta = calculator.subtract(80);
    assert.equal(rta, 120);
  });

  it("should return 10 after subtract", () => {
    const newCalc = createCalculator();
    const rta = newCalc.subtract(-10);
    assert.equal(rta, 10);
  });

  it("should return the total", () => {
    const rta = calculator.getTotal();
    assert.equal(rta, 120);
  });

  it("should return 0", () => {
    const rta = calculator.clear();
    assert.equal(rta, 0);
  });
});

describe("🌐 Day 08-02 - Map Create your own method", () => {
  it("should return [2,4,6,8]", () => {
    const array = [1, 2, 3, 4];
    const double = (el) => el * 2;
    const rta = myMap(array, double);
    assert.deepEqual(rta, [2, 4, 6, 8]);
  });

  it("should return the properties of objects", () => {
    const pets = [
      { name: "michi", age: 3 },
      { name: "firulais", age: 5 },
    ];
    const names = myMap(pets, (pet) => pet.name);
    assert.deepEqual(names, ["michi", "firulais"]);
  });

  it("should work on a two-dimensional array", () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const double = (el) => el * 2;
    const rta = myMap(array, (innerArray) => myMap(innerArray, double));
    const expected = [
      [2, 4, 6],
      [8, 10, 12],
      [14, 16, 18],
    ];
    assert.deepEqual(rta, expected);
  });

  it("should return an empty array", () => {
    const array = [];
    const double = (el) => el * 2;
    const rta = myMap(array, double);
    assert.deepEqual(rta, []);
  });

  it("should not use array methods", () => {
    const originalArray = [1, 2, 3];
    const double = (el) => el * 2;
    
    const mapSpy = sinon.spy(Array.prototype, "map");
    const doubledArray = myMap(originalArray, double);
    expect(mapSpy.notCalled).to.be.true;

  });
});
