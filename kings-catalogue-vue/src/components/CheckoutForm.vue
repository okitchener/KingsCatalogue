<script>
import CheckoutReview from "./CheckoutReview.vue";
import CheckoutCustomerSection from "./CheckoutCustomerSection.vue";
import CheckoutShippingSection from "./CheckoutShippingSection.vue";
import CheckoutPaymentSection from "./CheckoutPaymentSection.vue";

export default {
  name: "CheckoutForm",
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
  }
};
</script>

<template>
  <div>
    <div v-if="!detailsVerified">
      <CheckoutCustomerSection
        v-if="step === 1"
        :details="details"
        @next="goToStep(2)"
      />

      <CheckoutShippingSection
        v-if="step === 2"
        :details="details"
        @back="prevStep"
        @next="goToStep(3)"
      />

      <CheckoutPaymentSection
        v-if="step === 3"
        :details="details"
        @back="prevStep"
        @submit="$emit('verify-details')"
      />
    </div>

    <CheckoutReview
      v-else
      :details="details"
      @edit-details="$emit('edit-details')"
      @checkout="$emit('checkout')"
    />
  </div>
</template>
