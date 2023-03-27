import assert from "assert";
import { createCalculator } from "../exercise-08-01";

describe("🌐 Day 08 - Create a calculator with closures", () => {
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
