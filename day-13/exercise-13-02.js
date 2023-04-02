export function searchValue(array, value) {
  // Tu código aquí 👈
  let result;
  array.forEach((element, index) => {
    const valueIndex = element.indexOf(value);

    if (valueIndex > -1) {
      result = { row: index, column: valueIndex };
    }
  });

  if (result === undefined) {
    throw new Error("Valor no encontrado");
  }

  return result;
}
