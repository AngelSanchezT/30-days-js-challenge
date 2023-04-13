import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }

  sellTicket(passenger) {
    let priceNew = this.price;
    if (passenger.age < 18 || passenger.age > 65) {
      priceNew -= this.price * 0.2;
    }

    if (this.capacity > 0) {
      passenger.flights.push({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: priceNew,
      });

      this.passengers.push({
        fullName: passenger.name + " " + passenger.lastName,
        age: passenger.age,
      });

      return new Reservation({
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: priceNew,
      }, passenger);
    }
  }
}
