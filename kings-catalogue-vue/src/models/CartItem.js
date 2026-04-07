export class CartItem {
  constructor(data = {}) {
    this.id = data.id ?? 0;
    this.name = data.name ?? "";
    this.price = Number(data.price ?? 0);
    this.image = data.image ?? "";

    this.size = data.size ?? "";
    this.color = data.color ?? "";
    this.volume = data.volume ?? "";
    this.scent = data.scent ?? "";

    this.qty = Math.max(1, Number.parseInt(data.qty, 10) || 1);
  }

  // Signature used to treat the same product with different options as different cart lines.
  get variantSignature() {
    return [this.size, this.color, this.volume, this.scent].join("|");
  }

  // Two cart items match only when id and selected options match.
  matches(other) {
    const otherItem = CartItem.from(other);
    return this.id === otherItem.id && this.variantSignature === otherItem.variantSignature;
  }

  increase(amount = 1) {
    this.qty += Math.max(1, Number.parseInt(amount, 10) || 1);
  }

  decrease() {
    if (this.qty > 1) {
      this.qty -= 1;
    }
  }

  toJSON() {
    // Keep storage payload simple and serializable.
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      image: this.image,
      size: this.size,
      color: this.color,
      volume: this.volume,
      scent: this.scent,
      qty: this.qty
    };
  }

  // Converts plain objects into CartItem instances.
  static from(data) {
    return data instanceof CartItem ? data : new CartItem(data);
  }
}
