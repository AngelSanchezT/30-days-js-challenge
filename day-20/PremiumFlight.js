import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class PremiumFlight extends Flight {
  constructor(origin, destination, date, capacity, price, specialService) {
    super(origin, destination, date, capacity, price + specialService);
    this.specialService = specialService;
  }

  sellTicket(passenger) {
    return super.sellTicket(passenger);
  }
}
