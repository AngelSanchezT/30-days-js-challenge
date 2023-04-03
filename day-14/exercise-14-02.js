export function sortByAvailabilityAndPrice(products) {
  const productsSorted = [...products];

  productsSorted.sort((productA, productB) => {
    if(productA.inStock !== productB.inStock) {
      return productA.inStock ? -1 : 1;  
    }

    // console.log(`${productA.price} - ${productB.price}: ${ productA.price - productB.price}`)
    return productA.price - productB.price;
    
  });

  return productsSorted;

}