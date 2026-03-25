const CheckoutShippingSection = {
  props: {
    details: { type: Object, required: true }
  },
  emits: ["next", "back"],
  data() {
    return { attempted: false };
  },
  methods: {
    submitStep() {
      this.attempted = true;
      if (this.$refs.form.checkValidity()) this.$emit("next");
    }
  },
  template: `
    <form ref="form" novalidate :class="{ 'was-validated': attempted }">
      <h5 class="mb-4">Shipping Address</h5>
      <div class="mb-3">
        <label for="addressInput" class="form-label">Address</label>
        <input type="text" class="form-control" id="addressInput" placeholder="Address" v-model="details.address" required>
        <div class="invalid-feedback">Address is required.</div>
      </div>
      <div class="mb-3">
        <label for="cityInput" class="form-label">City</label>
        <input type="text" class="form-control" id="cityInput" placeholder="City" v-model="details.city" required>
        <div class="invalid-feedback">City is required.</div>
      </div>
      <div class="d-flex gap-3 mb-4">
        <div class="flex-fill">
          <label for="stateInput" class="form-label">State/Province</label>
          <input type="text" class="form-control" id="stateInput" placeholder="State/Province" v-model="details.state" required>
          <div class="invalid-feedback">State/Province is required.</div>
        </div>
        <div class="flex-fill">
          <label for="zipInput" class="form-label">ZIP/Postal Code</label>
          <input type="text" class="form-control" id="zipInput" placeholder="ZIP/Postal Code" v-model="details.zip" required pattern="[0-9]+" inputmode="numeric">
          <div class="invalid-feedback">ZIP is required and must contain only numbers.</div>
        </div>
      </div>
      <div class="mb-4">
        <label class="form-label">Delivery Option</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="deliveryOptions" id="standardDelivery" value="Standard Delivery" v-model="details.deliveryOption">
          <label class="form-check-label" for="standardDelivery">Standard Delivery</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="deliveryOptions" id="expressDelivery" value="Express Delivery" v-model="details.deliveryOption">
          <label class="form-check-label" for="expressDelivery">Express Delivery</label>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-outline-secondary" @click="$emit('back')">Back</button>
        <button type="button" class="btn btn-primary" @click="submitStep">Continue to Payment</button>
      </div>
    </form>
  `
};

export default CheckoutShippingSection;
