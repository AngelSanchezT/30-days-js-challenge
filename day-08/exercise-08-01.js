export function createCalculator() {
  // Tu código aquí 👈
  let privateValue = 0;

  return {
    add(val) {
        privateValue += val;
        return privateValue;
    },
    subtract(val) {
        privateValue -= val;
        return privateValue;
    },
    multiply(val) {
        privateValue *= val;
        return privateValue;
    },
    divide(val) {
        privateValue /= val;
        return privateValue;
    },
    clear(val) {
        privateValue = 0;
        return privateValue;
    },
    getTotal() {
        return privateValue;
    }
  }
}