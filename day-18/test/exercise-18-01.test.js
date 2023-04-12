import chai, { expect } from 'chai';
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { Article, Service, Cart } from "../exercise-18-01";
import { Product } from "../product";

describe("🌐 Day 18-01 - shopping cart system", () => {
  let book;
  let course;
  let cart;

  beforeEach(() => {
    book = new Article("Libro", 100, 2);
    course = new Service("Curso", 120, 1);
    cart = new Cart();
  });

  it("Article should be an instance of Product", () => {
    expect(book instanceof Product).to.eql(true);
  });

  it("Service should be an instance of Product", () => {
    expect(course instanceof Product).to.eql(true);
  });

  it("Cart should not be an instance of Product", () => {
    expect(cart instanceof Product).to.eql(false);
  });

  it("Should add a product to cart", () => {
    cart.addProduct(book);
    const currentProducts = cart.getProducts()
    expect(currentProducts.length).to.eql(1);
    expect(currentProducts[0]).to.eql(book);
  });

  it("should delete a product from the cart", () => {
    cart.addProduct(book);
    cart.addProduct(course);
    cart.deleteProduct(book);
    const currentProducts = cart.getProducts()
    expect(currentProducts.length).to.eql(1);
    expect(currentProducts[0]).to.eql(course);
  });

  it("should calculate the cart total", () => {
    cart.addProduct(book);
    cart.addProduct(course);
    expect(cart.calculateTotal()).to.eql(320);
  });

  it("should return a string after add an article", () => {
    expect(typeof book.addToCart()).to.eql("string");
  });

  it("should return a string after add a service", () => {
    expect(typeof course.addToCart()).to.eql("string");
  });

  it("should not modify the Product class", () => {
    const product = new Product("product", 1, 1);
    expect(() => product.addToCart()).to.throw("La lógica de este método debe ser implementada por las clases hijas");
  });
});