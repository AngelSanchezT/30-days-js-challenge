import { expect } from "chai";

import { hotelSystem } from "../exercise-15";

describe("🌐 Day-15 - Hotel reservation system", () => {
  let hotel;

  beforeEach(() => {
    hotel = hotelSystem(10);
  });

  it("should add a new reservation", () => {
    const reservation = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    expect(typeof hotel.addReservation(reservation)).to.eql("string");
    expect(hotel.getReservations()).to.eql([reservation]);
  });

  it("should return the reservation with the given id", () => {
    const reservation = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    hotel.addReservation(reservation);
    expect(hotel.searchReservation(1)).to.eql(reservation);
  });

  it("should throw an error if the reservation does not exist", () => {
    expect(() => hotel.searchReservation(1)).to.throw();
  });

  it("should return an array of sorted reservations", () => {
    const reservation1 = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    const reservation2 = {
      id: 2,
      name: "Jane Doe",
      checkIn: "03/01",
      checkOut: "04/01",
      roomNumber: 2,
    };
    hotel.addReservation(reservation2);
    hotel.addReservation(reservation1);
    expect(hotel.getSortReservations()).to.eql([reservation1, reservation2]);
  });

  it("should throw an error if the room is not available", () => {
    const reservation1 = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    const reservation2 = {
      id: 2,
      name: "Jane Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    hotel.addReservation(reservation1);
    expect(() => hotel.addReservation(reservation2)).to.throw();
  });

  it("should remove the reservation with the given id", () => {
    const reservation = {
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "02/01",
      roomNumber: 1,
    };
    hotel.addReservation(reservation);
    expect(hotel.removeReservation(1)).to.eql(reservation);
    expect(hotel.getReservations()).to.eql([]);
  });

  it("should throw an error if the reservation does not exist", () => {
    expect(() => hotel.removeReservation(1)).to.throw();
  });

  it("should return all rooms if there are no reservations", () => {
    expect(hotel.getAvailableRooms("01/01", "01/02")).to.eql([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it("should return only available rooms", () => {
    hotel.addReservation({
      id: 1,
      name: "John Doe",
      checkIn: "01/01",
      checkOut: "01/01",
      roomNumber: 1,
    });
    hotel.addReservation({
      id: 2,
      name: "Jane Doe",
      checkIn: "01/01",
      checkOut: "03/01",
      roomNumber: 2,
    });
    expect(hotel.getAvailableRooms("01/01", "03/01")).to.eql([
      3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
