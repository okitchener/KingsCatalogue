const CheckoutCustomerSection = {
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
  },
  template: `
    <form ref="form" novalidate :class="{ 'was-validated': attempted }">
      <h5 class="mb-4">Customer Information</h5>
      <div class="mb-3">
        <label for="textInput" class="form-label">Name</label>
        <input type="text" class="form-control" id="textInput" placeholder="Name" v-model="details.name" required>
        <div class="invalid-feedback">Name is required.</div>
      </div>
      <div class="mb-3">
        <label for="emailInput" class="form-label">Email</label>
        <input type="email" class="form-control" id="emailInput" placeholder="Email" v-model="details.email" required>
        <div class="invalid-feedback">A valid email is required.</div>
      </div>
      <div class="mb-4">
        <label for="phoneInput" class="form-label">Phone</label>
        <input type="tel" class="form-control" id="phoneInput" placeholder="Phone" v-model="details.phone" required pattern="[0-9]+" inputmode="numeric">
        <div class="invalid-feedback">Phone is required and must contain only numbers.</div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <a href="index.html" class="btn btn-link ps-0">Return to shop</a>
        <button type="button" class="btn btn-primary" @click="submitStep">Continue to Shipping</button>
      </div>
    </form>
  `
};

export default CheckoutCustomerSection;
