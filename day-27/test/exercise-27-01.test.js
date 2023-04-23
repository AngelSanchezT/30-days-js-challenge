import { LinkedListRecharged } from "../exercise-27-01";
import chai, { expect } from "chai";
import sinon from "sinon";

describe("🌐 Day 27-01 - Agrega métodos a la singly linked list", () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedListRecharged();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
  });

  it("get(index) should return the element at the given index", () => {
    expect(linkedList.get(0)).to.eql(1);
    expect(linkedList.get(1)).to.eql(2);
    expect(linkedList.get(2)).to.eql(3);
  });

  it("get(index) should return null if index is out of bounds", () => {
    expect(linkedList.get(-1)).to.be.null;
    expect(linkedList.get(3)).to.be.null;
  });

  it("insertAt(index, value) should insert the given value at the given index", () => {
    linkedList.insertAt(1, 5);
    expect(linkedList.toArray()).to.eql([1, 5, 2, 3]);
  });

  it("insertAt(index, value) should return null if index is out of bounds", () => {
    expect(linkedList.insertAt(-1, 5)).to.be.null;
    expect(linkedList.insertAt(3, 5)).to.be.null;
  });

  it("toArray() should return an array representation of the linked list", () => {
    expect(linkedList.toArray()).to.eql([1, 2, 3]);
  });

  it("removeAt(index) should remove the element at the given index", () => {
    linkedList.removeAt(1);
    expect(linkedList.toArray()).to.eql([1, 3]);
  });

  it("removeAt(index) should return null if index is out of bounds", () => {
    expect(linkedList.removeAt(-1)).to.be.null;
    expect(linkedList.removeAt(3)).to.be.null;
  });
});
