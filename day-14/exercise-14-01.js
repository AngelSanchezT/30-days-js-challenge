export function processShoppingList(list) {
  const OFERTA = "oferta";
  let total = 0;
  list.forEach((product) => {
    product.price *= product.quantity;
    delete product.quantity;

    const nameProduct = product.name.toLowerCase();
    if (nameProduct.search(OFERTA) > -1) {
      product.price *= 0.8;
    }
    total += product.price;
  });

  return total;
}
