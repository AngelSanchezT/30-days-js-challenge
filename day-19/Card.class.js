import { Pay } from "./Pay.class.js";

export class Card extends Pay {
  constructor(numberCard) {
    super();
    this.numberCard = numberCard;
  }

  makePay(cantidadAPagar) {
    if (this.numberCard === undefined || this.numberCard.length !== 16) {
      throw new Error("Numero de Tarjeta invalida");
    }

    const result = super.makePay(cantidadAPagar);
    result.lastCardNumbers = this.numberCard.slice(-4);

    return result;
  }
}
