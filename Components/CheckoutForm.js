import CheckoutReview from "./CheckoutReview.js";

const CheckoutForm = {
  components: { CheckoutReview },
  props: {
    details: { type: Object, required: true },
    detailsVerified: { type: Boolean, required: true }
  },
  emits: ["verify-details", "edit-details", "checkout", "step-change"],
  data() {
    return { step: 1, attempted: false };
  },
  methods: {
    goToStep(n) {
      this.step = n;
      this.attempted = false;
      this.$emit("step-change", n);
    },
    tryNext() {
      this.attempted = true;
      if (this.$refs.stepForm.checkValidity()) this.goToStep(this.step + 1);
    },
    prevStep() {
      this.goToStep(this.step - 1);
    },
    trySubmit() {
      this.attempted = true;
      if (this.$refs.stepForm.checkValidity()) this.$emit("verify-details");
    },
    formatCardNumber(e) {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 12);
      this.details.cardNumber = digits.replace(/(.{4})(?=.)/g, "$1 ");
    },
    formatExpiry(e) {
      let raw = e.target.value.replace(/\D/g, "").slice(0, 4);
      if (raw.length >= 3) raw = raw.slice(0, 2) + "/" + raw.slice(2);
      this.details.expiry = raw;
    }
  },
  watch: {
    detailsVerified(val) {
      if (!val) this.goToStep(1);
    }
  },
  template: `
    <div>
      <div v-if="!detailsVerified">

        <!-- Step 1: Customer Information -->
        <form v-if="step === 1" ref="stepForm" novalidate :class="{ 'was-validated': attempted }">
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
            <input
              type="tel"
              class="form-control"
              id="phoneInput"
              placeholder="Phone"
              v-model="details.phone"
              required
              pattern="[0-9]+"
              inputmode="numeric"
            >
            <div class="invalid-feedback">Phone is required and must contain only numbers.</div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <a href="index.html" class="btn btn-link ps-0">Return to shop</a>
            <button type="button" class="btn btn-primary" @click="tryNext">Continue to Shipping</button>
          </div>
        </form>

        <!-- Step 2: Shipping Address -->
        <form v-if="step === 2" ref="stepForm" novalidate :class="{ 'was-validated': attempted }">
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
              <input
                type="text"
                class="form-control"
                id="zipInput"
                placeholder="ZIP/Postal Code"
                v-model="details.zip"
                required
                pattern="[0-9]+"
                inputmode="numeric"
              >
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
            <button type="button" class="btn btn-outline-secondary" @click="prevStep">Back</button>
            <button type="button" class="btn btn-primary" @click="tryNext">Continue to Payment</button>
          </div>
        </form>

        <!-- Step 3: Payment -->
        <form v-if="step === 3" ref="stepForm" novalidate :class="{ 'was-validated': attempted }">
          <h5 class="mb-4">Payment</h5>
          <div class="mb-3">
            <label for="cardNumberInput" class="form-label">Card Number</label>
            <input
              type="text"
              class="form-control"
              id="cardNumberInput"
              placeholder="1234 5678 9012 3456"
              :value="details.cardNumber"
              @input="formatCardNumber"
              required
              pattern="[0-9]{4} [0-9]{4} [0-9]{4}"
              inputmode="numeric"
              maxlength="14"
            >
            <div class="invalid-feedback">Card number must be exactly 12 digits.</div>
          </div>
          <div class="d-flex gap-3 mb-4">
            <div class="flex-fill">
              <label for="expiryInput" class="form-label">Expiry Date</label>
              <input
                type="text"
                class="form-control"
                id="expiryInput"
                placeholder="MM/DD"
                :value="details.expiry"
                @input="formatExpiry"
                required
                pattern="(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])"
                maxlength="5"
              >
              <div class="invalid-feedback">Use MM/DD with a valid month (01-12) and day (01-31).</div>
            </div>
            <div class="flex-fill">
              <label for="cvvInput" class="form-label">CVV</label>
              <input
                type="text"
                class="form-control"
                id="cvvInput"
                placeholder="CVV"
                v-model="details.cvv"
                required
                pattern="[0-9]{3}"
                inputmode="numeric"
                maxlength="3"
              >
              <div class="invalid-feedback">CVV must be exactly 3 digits.</div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-outline-secondary" @click="prevStep">Back</button>
            <button type="button" class="btn btn-primary" @click="trySubmit">Review and Pay</button>
          </div>
        </form>

      </div>

      <checkout-review
        v-else
        :details="details"
        @edit-details="$emit('edit-details')"
        @checkout="$emit('checkout')"
      ></checkout-review>
    </div>
  `
};

export default CheckoutForm;
