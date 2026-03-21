function getSizes(product) {
  return product.sizes ?? ["M"];
}

function getColors(product) {
  return product.colors ?? ["Default"];
}

export function buildSelectedCartProduct(product) {
  const sizes = getSizes(product);
  const colors = getColors(product);

  return {
    ...product,
    sizes,
    colors,
    size: sizes[0],
    color: colors[0],
    qty: 1
  };
}

export function buildSelectedProduct(product) {
  const sizes = getSizes(product);
  const colors = getColors(product);

  return {
    ...product,
    qty: 1,
    bullets: product.bullets ?? [],
    sizes,
    colors,
    size: sizes[0],
    color: colors[0]
  };
}
