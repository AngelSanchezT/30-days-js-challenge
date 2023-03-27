export function myMap(array, func) {
  // Creamos el array que retornaremos
  // Inicialmente está vacío
  // Es importante recalcar que en ningún momento modificamos el array original
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    // Luego iteramos por cada elemento del array
    // Y lo vamos pasando al array vacío después de ejecutar 
    // la función sobre cada elemento del array
    newArray.push(func(array[i]));
  }

  // Al final lo retornamos
  return newArray;
}
