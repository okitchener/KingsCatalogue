<script>
export default {
  name: "CheckoutProgress",
  props: {
    detailsVerified: {
      type: Boolean,
      required: true
    },
    formStep: {
      type: Number,
      default: 1
    }
  },
  computed: {
    activeStep() {
      return this.detailsVerified ? 4 : this.formStep;
    }
  }
};
</script>

<template>
  <nav aria-label="Checkout progress" class="mb-4">
    <ol class="checkout-stepper list-unstyled d-flex align-items-center mb-0">
      <template v-for="(label, index) in ['Customer Info', 'Shipping', 'Payment', 'Review & Pay']" :key="index">
        <li class="stepper-step d-flex flex-column align-items-center">
          <div
            class="stepper-circle rounded-circle d-flex align-items-center justify-content-center fw-semibold mb-1"
            :class="{
              'is-active': activeStep === index + 1,
              'is-complete': activeStep > index + 1,
              'is-upcoming': activeStep < index + 1
            }"
          >
            <i v-if="activeStep > index + 1" class="bi bi-check-lg"></i>
            <span v-else>{{ index + 1 }}</span>
          </div>
          <span
            class="stepper-label text-center"
            :class="{
              'is-active': activeStep === index + 1,
              'is-complete': activeStep > index + 1,
              'is-upcoming': activeStep < index + 1
            }"
          >
            {{ label }}
          </span>
        </li>
        <li v-if="index < 3" class="stepper-connector flex-grow-1" :class="{ 'is-complete': activeStep > index + 1 }"></li>
      </template>
    </ol>
  </nav>
</template>
