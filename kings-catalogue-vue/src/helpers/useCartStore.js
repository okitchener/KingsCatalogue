import { computed, ref, watch } from "vue";

const CART_KEY = "kingsCart";

function toCartItem(item) {
  return {
    ...item,
    size: item.size ?? "M",
    color: item.color ?? "Default",
    qty: Math.max(1, Number.parseInt(item.qty, 10) || 1)
  };
}

function loadCartFromStorage() {
  const saved = localStorage.getItem(CART_KEY);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((item) => toCartItem(item));
  } catch {
    return [];
  }
}

function saveCartToStorage(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function useCartStore() {
  const cart = ref(loadCartFromStorage());

  const subtotal = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.qty, 0));
  const tax = computed(() => subtotal.value * 0.1);
  const shipping = computed(() => (cart.value.length > 0 ? 15 : 0));

  function addToCart(product) {
    if (!product) return;

    const normalized = toCartItem(product);
    const found = cart.value.find(
      (cartItem) =>
        cartItem.id === normalized.id &&
        cartItem.size === normalized.size &&
        cartItem.color === normalized.color
    );

    if (found) {
      found.qty += normalized.qty;
      return;
    }

    cart.value.push(normalized);
  }

  function increaseQty(item) {
    item.qty += 1;
  }

  function decreaseQty(item) {
    if (item.qty > 1) item.qty -= 1;
  }

  function removeFromCart(itemToRemove) {
    cart.value = cart.value.filter(
      (cartItem) =>
        !(
          cartItem.id === itemToRemove.id &&
          cartItem.size === itemToRemove.size &&
          cartItem.color === itemToRemove.color
        )
    );
  }

  watch(
    cart,
    (newCart) => {
      saveCartToStorage(newCart);
    },
    { deep: true }
  );

  return {
    cart,
    subtotal,
    tax,
    shipping,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart
  };
}
