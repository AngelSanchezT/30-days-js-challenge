import { MyArray } from "../exercise-25-01";

import { expect } from 'chai';
import sinon from 'sinon';

describe("🌐 Day 25-01 - Create your own implementation of an array", () => {
  let myArray;

  beforeEach(() => {
    myArray = new MyArray();
    myArray.push(1);
    myArray.push(2);
    myArray.push(3);
  });

  it("should work the map method", () => {
    const newArray = myArray.map((element) => element * 2);
    expect(newArray.data).to.eql({ 0: 2, 1: 4, 2: 6 });
    expect(newArray.length).to.eql(3);
  });

  it("should work the filter method", () => {
    const newArray = myArray.filter((element) => element % 2 === 0);
    expect(newArray.data).to.eql({ 0: 2 });
    expect(newArray.length).to.eql(1);
  });

  it("should work the push method", () => {
    myArray.push(4);
    expect(myArray.data).to.eql({ 0: 1, 1: 2, 2: 3, 3: 4 });
    expect(myArray.length).to.eql(4);
  });

  it("should work the pop method", () => {
    const poppedItem = myArray.pop();
    expect(poppedItem).to.eql(3);
    expect(myArray.data).to.eql({ 0: 1, 1: 2 });
    expect(myArray.length).to.eql(2);
  });

  it("should work the join method with default character", () => {
    const joinedString = myArray.join();
    expect(joinedString).to.eql("1,2,3");
  });

  it("should work the join method with custom character", () => {
    const joinedString = myArray.join("|");
    expect(joinedString).to.eql("1|2|3");
  });

  it("should work the shift method", () => {
    const shiftedItem = myArray.shift();
    expect(shiftedItem).to.eql(1);
    expect(myArray.data).to.eql({ 0: 2, 1: 3 });
    expect(myArray.length).to.eql(2);
  });

  it("should returns the new length of the array (unshift)", () => {
    const result = myArray.unshift(0);

    expect(result).to.eql(4);
    expect(myArray.length).to.eql(4);
  });

  it("should not add an item if no item is provided (unshift)", () => {
    myArray.unshift();

    expect(myArray.length).to.eql(3);
  });
});