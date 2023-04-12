import { Pay } from "./Pay.class.js";

export class Cash extends Pay {
  constructor() {
    super();
  }

  makePay(cantidadAPagar) {
    return super.makePay(cantidadAPagar);
  }
}
