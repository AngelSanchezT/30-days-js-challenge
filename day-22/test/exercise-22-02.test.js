import { CarBuilder } from "../exercise-22-02";
import { expect } from 'chai';

describe("🌐 Day 22-02 - Improve the code using builder pattern", () => {
  let car;

  beforeEach(() => {
    car = new CarBuilder();
  });

  it("should correctly set the year", () => {
    car.setYear(2021);
    expect(car.year).to.eql(2021);
  });

  it("should correctly set the model", () => {
    car.setModel("Model X");
    expect(car.model).to.eql("Model X");
  });

  it("should correctly set the brand", () => {
    car.setBrand("Tesla");
    expect(car.brand).to.eql("Tesla");
  });

  it("should correctly set the color", () => {
    car.setColor("Red");
    expect(car.color).to.eql("Red");
  });

  it("should correctly set the price", () => {
    car.setPrice(50000);
    expect(car.price).to.eql(50000);
  });

  it("should correctly set the isAvailable flag", () => {
    car.setIsAvailable(false);
    expect(car.isAvailable).to.eql(false);
  });

  it("should build the car object correctly", () => {
    car
      .setYear(2021)
      .setModel("Model X")
      .setBrand("Tesla")
      .setColor("Red")
      .setPrice(50000)
      .setIsAvailable(false)
      .build();
    expect(car.year).to.eql(2021);
    expect(car.model).to.eql("Model X");
    expect(car.brand).to.eql("Tesla");
    expect(car.color).to.eql("Red");
    expect(car.price).to.eql(50000);
    expect(car.isAvailable).to.eql(false);
  });
});