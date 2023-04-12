export class Pay {
  makePay(cantidadAPagar) {
    return {
      realized: true,
      quantity: cantidadAPagar,
    }
  }
}
