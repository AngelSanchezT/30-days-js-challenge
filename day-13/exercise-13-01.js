export function groupProducts(products, category) {
  const findProducts = [];
  let totalPrice = 0;

  products.forEach((product) => {
    if (product.category === category) {
      findProducts.push(product.name);
      totalPrice += product.price;
    }
  });

  return {
    products: findProducts.join(", "),
    totalPrice: totalPrice,
  };
}
