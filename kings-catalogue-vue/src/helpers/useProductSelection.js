function getOptions(product, key) {
  if (!Array.isArray(product[key])) {
    return [];
  }
  return product[key];
}

export function buildSelectedCartProduct(product) {
  const sizes = getOptions(product, "sizes");
  const colors = getOptions(product, "colors");
  const volumes = getOptions(product, "volumes");
  const scents = getOptions(product, "scents");

  return {
    ...product,
    sizes,
    colors,
    volumes,
    scents,
    size: sizes[0] ?? "",
    color: colors[0] ?? "",
    volume: volumes[0] ?? "",
    scent: scents[0] ?? "",
    qty: 1
  };
}

export function buildSelectedProduct(product) {
  const sizes = getOptions(product, "sizes");
  const colors = getOptions(product, "colors");
  const volumes = getOptions(product, "volumes");
  const scents = getOptions(product, "scents");

  return {
    ...product,
    qty: 1,
    bullets: product.bullets ?? [],
    sizes,
    colors,
    volumes,
    scents,
    size: sizes[0] ?? "",
    color: colors[0] ?? "",
    volume: volumes[0] ?? "",
    scent: scents[0] ?? ""
  };
}
