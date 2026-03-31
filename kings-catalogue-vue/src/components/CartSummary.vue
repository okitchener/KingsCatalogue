<script>
export default {
  name: "CartSummary",
  props: {
    cart: {
      type: Array,
      required: true
    },
    showCheckoutButton: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    subtotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    },
    tax() {
      return this.subtotal * 0.1;
    },
    shipping() {
      return this.cart.length > 0 ? 15 : 0;
    },
    grandTotal() {
      return this.subtotal + this.tax + this.shipping;
    }
  }
};
</script>

<template>
  <div class="cart-summary mt-auto border-top pt-3">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <p>Subtotal</p>
      <h3>{{ "$" + subtotal.toFixed(2) }}</h3>
    </div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <p>Est. Tax</p>
      <h3>{{ "$" + tax.toFixed(2) }}</h3>
    </div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <p>Est. Shipping</p>
      <h3>{{ "$" + shipping.toFixed(2) }}</h3>
    </div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <p class="fw-bold">Grand Total</p>
      <h2 class="fw-bold">{{ "$" + grandTotal.toFixed(2) }}</h2>
    </div>
    <a v-if="showCheckoutButton" href="checkout.html" class="btn btn-primary w-100">Proceed to Checkout</a>
  </div>
</template>
