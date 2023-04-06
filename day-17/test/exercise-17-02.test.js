import { expect } from 'chai';

import { Car } from "../exercise-17-02";

const toyota = new Car("Toyota", "Corolla", 2022, 0);

describe("tests", () => {
  it("should return the car data", () => {
    expect(toyota.brand).to.eql("Toyota");
    expect(toyota.model).to.eql("Corolla");
    expect(toyota.year).to.eql(2022);
    expect(toyota.mileage).to.eql(0);
  });

  it("should turn on the car", () => {
    toyota.turnOn();
    expect(toyota.state).to.eql(true);
  });

  it("should turn off the car", () => {
    toyota.turnOff();
    expect(toyota.state).to.eql(false);
  });

  it("should increase the mileage", () => {
    toyota.turnOn();
    toyota.drive(100);
    expect(toyota.mileage).to.eql(100);
  });

  it("should not increase the mileage if the car is off", () => {
    toyota.turnOff();
    expect(() => toyota.drive(100)).to.throw("El auto está apagado");
    expect(toyota.mileage).to.eql(100);
  });

  it("should throw an error", () => {
    toyota.turnOff();
    expect(() => toyota.drive(100)).to.throw("El auto está apagado");
  });
});