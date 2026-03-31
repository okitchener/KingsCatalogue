<script>
export default {
  name: "CheckoutShippingSection",
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
  }
};
</script>

<template>
  <form ref="form" novalidate :class="{ 'was-validated': attempted }">
    <h5 class="mb-4">Shipping Address</h5>
    <div class="mb-3">
      <label for="addressInput" class="form-label">Address</label>
      <input id="addressInput" v-model="details.address" type="text" class="form-control" placeholder="Address" required>
      <div class="invalid-feedback">Address is required.</div>
    </div>
    <div class="mb-3">
      <label for="cityInput" class="form-label">City</label>
      <input id="cityInput" v-model="details.city" type="text" class="form-control" placeholder="City" required>
      <div class="invalid-feedback">City is required.</div>
    </div>
    <div class="d-flex gap-3 mb-4">
      <div class="flex-fill">
        <label for="stateInput" class="form-label">State/Province</label>
        <input id="stateInput" v-model="details.state" type="text" class="form-control" placeholder="State/Province" required>
        <div class="invalid-feedback">State/Province is required.</div>
      </div>
      <div class="flex-fill">
        <label for="zipInput" class="form-label">ZIP/Postal Code</label>
        <input id="zipInput" v-model="details.zip" type="text" class="form-control" placeholder="ZIP/Postal Code" required pattern="[0-9]+" inputmode="numeric">
        <div class="invalid-feedback">ZIP is required and must contain only numbers.</div>
      </div>
    </div>
    <div class="mb-4">
      <label class="form-label">Delivery Option</label>
      <div class="form-check">
        <input id="standardDelivery" v-model="details.deliveryOption" class="form-check-input" type="radio" name="deliveryOptions" value="Standard Delivery">
        <label class="form-check-label" for="standardDelivery">Standard Delivery</label>
      </div>
      <div class="form-check">
        <input id="expressDelivery" v-model="details.deliveryOption" class="form-check-input" type="radio" name="deliveryOptions" value="Express Delivery">
        <label class="form-check-label" for="expressDelivery">Express Delivery</label>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-outline-secondary" @click="$emit('back')">Back</button>
      <button type="button" class="btn btn-primary" @click="submitStep">Continue to Payment</button>
    </div>
  </form>
</template>
