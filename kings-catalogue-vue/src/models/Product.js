export class Product {
  constructor(data = {}) {
    this.id = data.id ?? 0;
    this.name = data.name ?? "";
    this.price = Number(data.price ?? 0);
    this.image = data.image ?? "";
    this.description = data.description ?? "";
    this.category = data.category ?? "";
    this.featured = data.featured === true;

    this.bullets = Array.isArray(data.bullets) ? data.bullets : [];
    this.sizes = Array.isArray(data.sizes) ? data.sizes : [];
    this.colors = Array.isArray(data.colors) ? data.colors : [];
    this.volumes = Array.isArray(data.volumes) ? data.volumes : [];
    this.scents = Array.isArray(data.scents) ? data.scents : [];
  }

  // Returns a safe options array for dynamic product fields (sizes, colors, etc.).
  getOptions(key) {
    const value = this[key];
    return Array.isArray(value) ? value : [];
  }

  // Converts plain objects into Product instances.
  static from(data) {
    return data instanceof Product ? data : new Product(data);
  }

  // Converts a product array into Product instances in one step.
  static fromList(list = []) {
    return list.map((item) => Product.from(item));
  }
}
