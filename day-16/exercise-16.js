export function protectDog(dog) {
  const newDog = Object.assign({}, dog);
  for (let prop in newDog) {
    if (typeof newDog[prop] === "object") {
      Object.freeze(newDog[prop]);
    }
  }
  Object.freeze(newDog);
  return newDog;
}
