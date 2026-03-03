const CART_KEY = "kingsCart";

function toCartItem(item) {
  return {
    ...item,
    size: item.size ?? item.sizes?.[0] ?? "M",
    color: item.color ?? item.colors?.[0] ?? "Default",
    qty: Math.max(1, Number.parseInt(item.qty, 10) || 1)
  };
}

export function loadCart() {
  const saved = localStorage.getItem(CART_KEY);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => toCartItem(item));
  } catch {
    return [];
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function getTax(subtotal) {
  return subtotal * 0.1;
}

export function getShipping(cart) {
  return cart.length > 0 ? 15 : 0;
}

export function addOrUpdateCartItem(cart, product) {
  if (!product) return cart;

  const normalized = toCartItem(product);
  const found = cart.find(
    cartItem =>
      cartItem.id === normalized.id &&
      cartItem.size === normalized.size &&
      cartItem.color === normalized.color
  );

  if (found) {
    found.qty += normalized.qty;
    return cart;
  }

  cart.push(normalized);
  return cart;
}

export function increaseCartItemQty(item) {
  item.qty += 1;
}

export function decreaseCartItemQty(item) {
  if (item.qty > 1) item.qty -= 1;
}

export function removeCartItem(cart, itemToRemove) {
  return cart.filter(
    cartItem =>
      !(
        cartItem.id === itemToRemove.id &&
        cartItem.size === itemToRemove.size &&
        cartItem.color === itemToRemove.color
      )
  );
}
