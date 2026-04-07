import { computed, ref } from "vue";
import { CartCollection } from "../models/CartCollection.js";

const CART_KEY = "kingsCart";

/*
function loadCartFromStorage() {
  const saved = localStorage.getItem(CART_KEY);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    // Rehydrate plain storage objects into CartItem instances.
    return parsed.map((item) => CartItem.from(item));
  } catch {
    return [];
  }
}

function saveCartToStorage(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
*/

export function useCartStore() {
  // const cart = ref(loadCartFromStorage());
  const cart = ref([]);
  const cartCollection = new CartCollection(cart);

  const subtotal = computed(() => cartCollection.subtotal);
  const tax = computed(() => cartCollection.tax);
  const shipping = computed(() => cartCollection.shipping);

  function addToCart(product) {
    if (!product) return;
    cartCollection.add(product);
  }

  function increaseQty(item) {
    cartCollection.increase(item);
  }

  function decreaseQty(item) {
    cartCollection.decrease(item);
  }

  function removeFromCart(itemToRemove) {
    cartCollection.remove(itemToRemove);
  }

  // watch(
  //   cart,
  //   (newCart) => {
  //     // Persist cart whenever quantities/options change.
  //     saveCartToStorage(newCart);
  //   },
  //   { deep: true }
  // );

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
