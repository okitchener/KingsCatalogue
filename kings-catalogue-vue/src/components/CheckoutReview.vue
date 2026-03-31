<script>
export default {
  name: "CheckoutReview",
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  emits: ["edit-details", "checkout"]
};
</script>

<template>
  <div class="border rounded-3 p-3 bg-white">
    <h5 class="mb-3">Verify Details</h5>
    <p class="mb-1"><strong>Name:</strong> {{ details.name }}</p>
    <p class="mb-1"><strong>Email:</strong> {{ details.email }}</p>
    <p class="mb-1"><strong>Phone:</strong> {{ details.phone }}</p>
    <p class="mb-1"><strong>Address:</strong> {{ details.address }}</p>
    <p class="mb-1"><strong>City:</strong> {{ details.city }}</p>
    <p class="mb-1"><strong>State/Province:</strong> {{ details.state }}</p>
    <p class="mb-1"><strong>ZIP/Postal Code:</strong> {{ details.zip }}</p>
    <p class="mb-1"><strong>Delivery Option:</strong> {{ details.deliveryOption }}</p>
    <p class="mb-1"><strong>Card Number:</strong> {{ details.cardNumber }}</p>
    <p class="mb-1"><strong>Expiry Date:</strong> {{ details.expiry }}</p>
    <p class="mb-0"><strong>CVV:</strong> {{ details.cvv }}</p>

    <div class="d-flex gap-2 mt-3">
      <button type="button" class="btn btn-secondary" @click="$emit('edit-details')">Edit details</button>
      <button type="button" class="btn btn-primary" @click="$emit('checkout')">Checkout</button>
    </div>
  </div>
</template>
