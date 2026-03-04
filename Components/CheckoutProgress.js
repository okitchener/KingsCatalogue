const CheckoutProgress = {
  props: {
    detailsVerified: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <nav aria-label="Checkout progress" class="mb-3">
      <ol class="list-unstyled d-flex align-items-center gap-2 mb-0">
        <li :class="detailsVerified ? 'text-body-secondary' : 'fw-semibold'" :aria-current="detailsVerified ? null : 'step'">Details</li>
        <li class="text-body-secondary">></li>
        <li :class="detailsVerified ? 'fw-semibold' : 'text-body-secondary'" :aria-current="detailsVerified ? 'step' : null">Review and Pay</li>
      </ol>
    </nav>
  `
};

export default CheckoutProgress;
