export function arrayModified() {
  Array.prototype.myFilter = function (callbackFn) {
    const arrayFilter = [];

    this.forEach((element) => {
      if (callbackFn(element)) {
        arrayFilter.push(element);
      }
    });

    return arrayFilter;
  };
}
