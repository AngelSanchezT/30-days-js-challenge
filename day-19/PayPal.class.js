import { Pay } from "./Pay.class.js";

export class PayPal extends Pay {
  constructor(email) {
    super();
    this.email = email;
  }

  makePay(cantidadAPagar) {
    return {
      realized: true,
      quantity: cantidadAPagar,
      platform: "PayPal",
      email: this.email
    }
  }
}
