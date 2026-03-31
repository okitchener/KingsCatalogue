<script>
export default {
  name: "CheckoutCustomerSection",
  props: {
    details: { type: Object, required: true }
  },
  emits: ["next"],
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
    <h5 class="mb-4">Customer Information</h5>
    <div class="mb-3">
      <label for="textInput" class="form-label">Name</label>
      <input id="textInput" v-model="details.name" type="text" class="form-control" placeholder="Name" required>
      <div class="invalid-feedback">Name is required.</div>
    </div>
    <div class="mb-3">
      <label for="emailInput" class="form-label">Email</label>
      <input id="emailInput" v-model="details.email" type="email" class="form-control" placeholder="Email" required>
      <div class="invalid-feedback">A valid email is required.</div>
    </div>
    <div class="mb-4">
      <label for="phoneInput" class="form-label">Phone</label>
      <input id="phoneInput" v-model="details.phone" type="tel" class="form-control" placeholder="Phone" required pattern="[0-9]+" inputmode="numeric">
      <div class="invalid-feedback">Phone is required and must contain only numbers.</div>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <a href="index.html" class="btn btn-link ps-0">Return to shop</a>
      <button type="button" class="btn btn-primary" @click="submitStep">Continue to Shipping</button>
    </div>
  </form>
</template>
