const CartSummary = {
  props: {
    subtotal: {
      type: Number,
      required: true
    },
    tax: {
      type: Number,
      required: true
    },
    shipping: {
      type: Number,
      required: true
    }
  },
  computed: {
    grandTotal() {
      return this.subtotal + this.tax + this.shipping;
    }
  },
  template: `
    <div class="cart-summary mt-auto border-top pt-3">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <p>Subtotal</p>
        <h3>{{ '$' + subtotal.toFixed(2) }}</h3>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <p>Est. Tax</p>
        <h3>{{ '$' + tax.toFixed(2) }}</h3>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <p>Est. Shipping</p>
        <h3>{{ '$' + shipping.toFixed(2) }}</h3>
      </div>
      <div class="d-flex justify-content-between align-items-center mb-4">
        <p class="fw-bold">Grand Total</p>
        <h2 class="fw-bold">{{ '$' + grandTotal.toFixed(2) }}</h2>
      </div>
      <a href="checkout.html" class="btn btn-primary w-100">Proceed to Checkout</a>
    </div>
  `
};

export default CartSummary;
