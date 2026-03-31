<script>
export default {
  name: "CheckoutPaymentSection",
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
  }
};
</script>

<template>
  <form ref="form" novalidate :class="{ 'was-validated': attempted }">
    <h5 class="mb-4">Payment</h5>
    <div class="mb-3">
      <label for="cardNumberInput" class="form-label">Card Number</label>
      <input
        id="cardNumberInput"
        type="text"
        class="form-control"
        placeholder="1234 5678 9012"
        :value="details.cardNumber"
        required
        pattern="[0-9]{4} [0-9]{4} [0-9]{4}"
        inputmode="numeric"
        maxlength="14"
        @input="formatCardNumber"
      >
      <div class="invalid-feedback">Card number must be exactly 12 digits.</div>
    </div>
    <div class="d-flex gap-3 mb-4">
      <div class="flex-fill">
        <label for="expiryInput" class="form-label">Expiry Date</label>
        <input
          id="expiryInput"
          type="text"
          class="form-control"
          placeholder="MM/DD"
          :value="details.expiry"
          required
          pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])"
          maxlength="5"
          @input="formatExpiry"
        >
        <div class="invalid-feedback">Use MM/DD with a valid month (01-12) and day (01-31).</div>
      </div>
      <div class="flex-fill">
        <label for="cvvInput" class="form-label">CVV</label>
        <input id="cvvInput" v-model="details.cvv" type="text" class="form-control" placeholder="CVV" required pattern="[0-9]{3}" inputmode="numeric" maxlength="3">
        <div class="invalid-feedback">CVV must be exactly 3 digits.</div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <button type="button" class="btn btn-outline-secondary" @click="$emit('back')">Back</button>
      <button type="button" class="btn btn-primary" @click="submitStep">Review and Pay</button>
    </div>
  </form>
</template>
