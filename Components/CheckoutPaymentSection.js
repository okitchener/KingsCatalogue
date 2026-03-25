const CheckoutPaymentSection = {
  props: {
    details: { type: Object, required: true }
  },
  emits: ["back", "submit"],
  data() {
    return { attempted: false };
  },
  methods: {
    formatCardNumber(e) {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 12);
      this.details.cardNumber = digits.replace(/(.{4})(?=.)/g, "$1 ");
    },
    formatExpiry(e) {
      let raw = e.target.value.replace(/\D/g, "").slice(0, 4);
      if (raw.length >= 3) raw = raw.slice(0, 2) + "/" + raw.slice(2);
      this.details.expiry = raw;
    },
    submitStep() {
      this.attempted = true;
      if (this.$refs.form.checkValidity()) this.$emit("submit");
    }
  },
  template: `
    <form ref="form" novalidate :class="{ 'was-validated': attempted }">
      <h5 class="mb-4">Payment</h5>
      <div class="mb-3">
        <label for="cardNumberInput" class="form-label">Card Number</label>
        <input type="text" class="form-control" id="cardNumberInput" placeholder="1234 5678 9012" :value="details.cardNumber" @input="formatCardNumber" required pattern="[0-9]{4} [0-9]{4} [0-9]{4}" inputmode="numeric" maxlength="14">
        <div class="invalid-feedback">Card number must be exactly 12 digits.</div>
      </div>
      <div class="d-flex gap-3 mb-4">
        <div class="flex-fill">
          <label for="expiryInput" class="form-label">Expiry Date</label>
          <input type="text" class="form-control" id="expiryInput" placeholder="MM/DD" :value="details.expiry" @input="formatExpiry" required pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])" maxlength="5">
          <div class="invalid-feedback">Use MM/DD with a valid month (01-12) and day (01-31).</div>
        </div>
        <div class="flex-fill">
          <label for="cvvInput" class="form-label">CVV</label>
          <input type="text" class="form-control" id="cvvInput" placeholder="CVV" v-model="details.cvv" required pattern="[0-9]{3}" inputmode="numeric" maxlength="3">
          <div class="invalid-feedback">CVV must be exactly 3 digits.</div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-outline-secondary" @click="$emit('back')">Back</button>
        <button type="button" class="btn btn-primary" @click="submitStep">Review and Pay</button>
      </div>
    </form>
  `
};

export default CheckoutPaymentSection;
