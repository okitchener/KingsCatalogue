<template>
  <div class="offcanvas offcanvas-end kc-cart-drawer" tabindex="-1" id="cartDrawer" aria-labelledby="cartDrawerLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartDrawerLabel">Your Royal Chest</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div :class="['offcanvas-body', bodyClass]">
      <CartList :cart="cart" @increase="$emit('increase', $event)" @decrease="$emit('decrease', $event)" @remove="$emit('remove', $event)" />
      <CartSummary :cart="cart" :show-checkout-button="showCheckoutButton" />
    </div>
  </div>
</template>

<script>
import CartList from "./CartList.vue";
import CartSummary from "./CartSummary.vue";

export default {
  name: "CartDrawer",
  components: {
    CartList,
    CartSummary
  },
  props: {
    cart: {
      type: Array,
      required: true
    },
    showCheckoutButton: {
      type: Boolean,
      default: true
    },
    bodyClass: {
      type: String,
      default: ""
    }
  },
  emits: ["increase", "decrease", "remove"]
};
</script>