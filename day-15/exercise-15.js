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

  const getReservations = () => reservations;

  const getAvailableRooms = (checkIn, checkOut) => {};

  return {
    searchReservation,
    getSortReservations,
    addReservation,
    removeReservation,
    getReservations,
    getAvailableRooms,
  };
}
