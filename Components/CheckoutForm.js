import CheckoutReview from "./CheckoutReview.js";
import CheckoutCustomerSection from "./CheckoutCustomerSection.js";
import CheckoutShippingSection from "./CheckoutShippingSection.js";
import CheckoutPaymentSection from "./CheckoutPaymentSection.js";

const CheckoutForm = {
  components: {
    CheckoutReview,
    CheckoutCustomerSection,
    CheckoutShippingSection,
    CheckoutPaymentSection
  },
  props: {
    details: { type: Object, required: true },
    detailsVerified: { type: Boolean, required: true }
  },
  emits: ["verify-details", "edit-details", "checkout", "step-change"],
  data() {
    return { step: 1 };
  },
  methods: {
    goToStep(n) {
      this.step = n;
      this.$emit("step-change", n);
    },
    prevStep() {
      this.goToStep(this.step - 1);
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
        <checkout-customer-section
          v-if="step === 1"
          :details="details"
          @next="goToStep(2)"
        ></checkout-customer-section>

        <checkout-shipping-section
          v-if="step === 2"
          :details="details"
          @back="prevStep"
          @next="goToStep(3)"
        ></checkout-shipping-section>

        <checkout-payment-section
          v-if="step === 3"
          :details="details"
          @back="prevStep"
          @submit="$emit('verify-details')"
        ></checkout-payment-section>

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
