import chai, { expect } from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { groupProducts } from "../exercise-13-01";

describe("🌐 Day 13-01 - Group the products", () => {
  let products;

  beforeEach(() => {
    products = [
      { name: "Smartphone", category: "Electronics", price: 800 },
      { name: "Laptop", category: "Electronics", price: 1200 },
      { name: "Shirt", category: "Clothing", price: 50 },
      { name: "Pants", category: "Clothing", price: 100 },
      { name: "Chicken", category: "Food", price: 80 },
      { name: "Beef", category: "Food", price: 50 },
      { name: "PS5", category: "Gaming", price: 600 },
      { name: "Xbox One", category: "Gaming", price: 450 },
    ];
  });

  it("should return Clothing products", () => {
    const rta = groupProducts(products, "Clothing");
    expect(rta).to.eql({
      products: "Shirt, Pants",
      totalPrice: 150,
    });
  });

  it("should return Electronic products", () => {
    const rta = groupProducts(products, "Electronics");
    expect(rta).to.eql({
      products: "Smartphone, Laptop",
      totalPrice: 2000,
    });
  });

  it("should return Food products", () => {
    const rta = groupProducts(products, "Food");
    expect(rta).to.eql({
      products: "Chicken, Beef",
      totalPrice: 130,
    });
  });

  it("should return Gaming products", () => {
    const rta = groupProducts(products, "Gaming");
    expect(rta).to.eql({
      products: "PS5, Xbox One",
      totalPrice: 1050,
    });
  });
});
