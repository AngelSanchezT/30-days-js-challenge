import { Product } from "./product";

export class Article extends Product {
  addToCart() {
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  addToCart() {
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

export class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    product.addToCart();
    this.products.push(product);
  }

  deleteProduct(product) {
    const index = this.products.findIndex(
      (itemCart) => itemCart.name === product.name
    );
    if (index < 0) {
      throw new Error("El producto no existe en el carrito de compras");
    }
    this.products.splice(index, 1);
  }

  calculateTotal() {
    let initialValue = 0
    return this.products.reduce(function (totalCart, itemCart) {
      const subtotal = itemCart.quantity * itemCart.price;
      totalCart += subtotal ;
      return totalCart;
    }, initialValue);
  }

  getProducts() {
    return this.products;
  }
}
