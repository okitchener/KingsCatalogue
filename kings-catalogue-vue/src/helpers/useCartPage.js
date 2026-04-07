import { updateCartBadges } from "./useCartBadge.js";

export function createCartPageMixin(cartStore) {
  return {
    computed: {
      cart() {
        return cartStore.cart.value;
      },
      cartCount() {
        return this.cart.reduce((totalQty, item) => totalQty + item.qty, 0);
      },
      subtotal() {
        return cartStore.subtotal.value;
      },
      tax() {
        return cartStore.tax.value;
      },
      shipping() {
        return cartStore.shipping.value;
      }
    },
    watch: {
      cartCount: {
        handler(newCount) {
          updateCartBadges(newCount);
        },
        immediate: true
      }
    },
    methods: {
      increaseQty(item) {
        cartStore.increaseQty(item);
      },
      decreaseQty(item) {
        cartStore.decreaseQty(item);
      },
      removeFromCart(itemToRemove) {
        cartStore.removeFromCart(itemToRemove);
      }
    }
  };
}
