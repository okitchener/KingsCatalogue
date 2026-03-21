export function getFilteredProducts(products, selectedCategories, maxPrice, sortBy) {
  const filtered = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  if (sortBy === "featured") {
    return filtered.filter((product) => product.featured === true);
  }

  if (sortBy === "priceLowHigh") {
    return [...filtered].sort((first, second) => first.price - second.price);
  }

  if (sortBy === "priceHighLow") {
    return [...filtered].sort((first, second) => second.price - first.price);
  }

  return [...filtered].sort((first, second) => first.name.localeCompare(second.name));
}
