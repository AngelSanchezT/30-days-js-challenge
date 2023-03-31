import chai, { expect } from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { searchValue } from "../exercise-13-02";

describe("🌐 Day 13-02 - Find the location of the searched value", () => {
  it("should return {row: 1, column: 1}", () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const value = 5;
    const rta = searchValue(array, value);
    expect(rta).to.eql({
      row: 1,
      column: 1,
    });
  });

  it("should throw an error", () => {
    const array = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const value = 45;
    expect(() => searchValue(array, value)).to.throw();
  });

  it("should return {row: 0, column: 0}", () => {
    const array = [
      ["bread", "fish", "milk"],
      ["eggs", "meal", "carrots"],
      ["melon", "watermelon", "sugar"],
    ];
    const value = "bread";
    const rta = searchValue(array, value);
    expect(rta).to.eql({
      row: 0,
      column: 0,
    });
  });

  it("should work with bigger arrays", () => {
    const array = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    const value = 16;
    const rta = searchValue(array, value);
    expect(rta).to.eql({
      row: 3,
      column: 0,
    });
  });
});
