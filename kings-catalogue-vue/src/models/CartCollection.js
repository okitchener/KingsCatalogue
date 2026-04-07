import { CartItem } from "./CartItem.js";

export class CartCollection {
  constructor(itemsRef) {
    this.itemsRef = itemsRef;
  }

  get items() {
    return this.itemsRef.value;
  }

  // Add items by matching product + selected options.
  add(itemData) {
    const normalized = CartItem.from(itemData);
    const existing = this.findMatch(normalized);

    if (existing) {
      existing.increase(normalized.qty);
      return;
    }

    this.items.push(normalized);
  }

  increase(itemData) {
    const existing = this.findMatch(itemData);
    if (existing) {
      existing.increase();
    }
  }

  decrease(itemData) {
    const existing = this.findMatch(itemData);
    if (existing) {
      existing.decrease();
    }
  }

  remove(itemData) {
    const normalized = CartItem.from(itemData);
    this.itemsRef.value = this.items.filter((item) => !item.matches(normalized));
  }

  get subtotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  get tax() {
    return this.subtotal * 0.1;
  }

  get shipping() {
    return this.items.length > 0 ? 15 : 0;
  }

  findMatch(itemData) {
    const normalized = CartItem.from(itemData);
    return this.items.find((item) => item.matches(normalized));
  }
}
