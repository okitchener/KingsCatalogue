import { Product } from "../models/Product.js";

// Normalize incoming data and safely fetch options from the Product model.
function getOptions(product, key) {
  return Product.from(product).getOptions(key);
}

export function buildSelectedCartProduct(product) {
  // Build the add-to-cart payload with default option selections.
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
  // Build product-details object with defaults for options and qty.
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
