export function hotelSystem(rooms) {
  const reservations = [];

  const searchReservation = (id) => {
    const reservation = reservations.find((room) => room.id === id);

    if (reservation === undefined) {
      throw new Error("La reservación no fue encontrada");
    }

    return reservation;
  };

  const getSortReservations = () => {
    const reservationsSorted = [...reservations];

    reservationsSorted.sort((roomA, roomB) => {
      return roomA.checkIn.localeCompare(roomB.checkIn, "en", {
        numeric: true,
      });
    });

    return reservationsSorted;
  };

  const addReservation = (reservation) => {
    reservations.forEach((room) => {
      if (room.roomNumber === reservation.roomNumber) {
        if (
          room.checkIn === reservation.checkIn ||
          room.checkOut === reservation.checkOut
        ) {
          throw new Error("La habitación no está disponible");
        }
      }
    });

    reservations.push(reservation);

    return "La habitación se reservo correctamente";
  };

  const removeReservation = (id) => {
    const reservationIndex = reservations.findIndex((room) => room.id === id);

    if (reservationIndex < 0) {
      throw new Error("La reservación que se busca remover no existe");
    }
    const reservationRemoved = reservations[reservationIndex];
    reservations.splice(reservationIndex, 1);

    return reservationRemoved;
  };

  function isAvailable(reservation) {
    const checkIn = reservation.checkIn;
    const checkOut = reservation.checkOut;

    for (const currentReservation of reservations) {
      const currentCheckIn = currentReservation.checkIn;
      const currentCheckOut = currentReservation.checkOut;

      if (
        (checkIn >= currentCheckIn && checkIn < currentCheckOut) ||
        (checkOut > currentCheckIn && checkOut <= currentCheckOut) ||
        (checkIn <= currentCheckIn && checkOut >= currentCheckOut)
      ) {
        if (currentReservation.roomNumber === reservation.roomNumber) {
          return false;
        }
      }
    }

    return true;
  }

  const getReservations = () => reservations;

  const getAvailableRooms = (checkIn, checkOut) => {
    const availableRooms = [];

    for (let i = 1; i <= rooms; i++) {
      const reservation = { checkIn, checkOut, roomNumber: i };

      if (isAvailable(reservation)) {
        availableRooms.push(i);
      }
    }
    return availableRooms;
  };

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}
