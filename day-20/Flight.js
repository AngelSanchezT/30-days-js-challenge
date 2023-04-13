import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this._capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  get capacity() {
    return this._capacity - this.passengers.length;
  }

  set capacity(capacity) {
    this._capacity = capacity;
  }

  sellTicket(passenger) {
    if (this.capacity > 0) {
      passenger.flights.push(
        {
          origin : this.origin,
          destination : this.destination,
          date : this.date,
          price : this.price
        }
      );
      
      this.passengers.push({
        fullName : passenger.name + ' ' + passenger.lastName,
        age: passenger.age
      });
      
      return new Reservation(this, passenger);
    }
  }
}
