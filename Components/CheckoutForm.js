const CheckoutForm = {
  props: {
    details: {
      type: Object,
      required: true
    },
    detailsVerified: {
      type: Boolean,
      required: true
    }
  },
  emits: ["verify-details"],
  template: `
    <div>
      <div v-if="!detailsVerified">
        <h5>Customer Information</h5>
        <label for="textInput" class="form-label">Name</label>
        <input type="text" class="form-control mb-3" id="textInput" placeholder="Name" aria-label="Name" v-model="details.name">

        <label for="emailInput" class="form-label">Email</label>
        <input type="email" class="form-control mb-3" id="emailInput" placeholder="Email" aria-label="Email" v-model="details.email">

        <label for="phoneInput" class="form-label">Phone</label>
        <input type="tel" class="form-control mb-3" id="phoneInput" placeholder="Phone" aria-label="Phone" v-model="details.phone">

        <h5>Shipping Address</h5>
        <label for="addressInput" class="form-label">Address</label>
        <input type="text" class="form-control mb-3" id="addressInput" placeholder="Address" aria-label="Address" v-model="details.address">

        <label for="cityInput" class="form-label">City</label>
        <input type="text" class="form-control mb-3" id="cityInput" placeholder="City" aria-label="City" v-model="details.city">

        <div class="d-flex gap-3">
          <div class="flex-fill">
            <label for="stateInput" class="form-label">State/Province</label>
            <input type="text" class="form-control mb-3" id="stateInput" placeholder="State/Province" aria-label="State/Province" v-model="details.state">
          </div>
          <div class="flex-fill">
            <label for="zipInput" class="form-label">ZIP/Postal Code</label>
            <input type="text" class="form-control mb-3" id="zipInput" placeholder="ZIP/Postal Code" aria-label="ZIP/Postal Code" v-model="details.zip">
          </div>
        </div>

        <h5>Delivery Options</h5>
        <input class="form-check-input" type="radio" name="deliveryOptions" id="standardDelivery" value="Standard Delivery" v-model="details.deliveryOption">
        <label class="form-check-label mb-2" for="standardDelivery">Standard Delivery</label><br>
        <input class="form-check-input" type="radio" name="deliveryOptions" id="expressDelivery" value="Express Delivery" v-model="details.deliveryOption">
        <label class="form-check-label mb-2" for="expressDelivery">Express Delivery</label><br>

        <h5>Payment</h5>
        <label for="cardNumberInput" class="form-label">Card Number</label>
        <input type="text" class="form-control mb-3" id="cardNumberInput" placeholder="Card Number" aria-label="Card Number" v-model="details.cardNumber">

        <div class="d-flex gap-3">
          <div class="flex-fill">
            <label for="expiryInput" class="form-label">Expiry Date</label>
            <input type="text" class="form-control mb-3" id="expiryInput" placeholder="MM/YY" aria-label="Expiry Date" v-model="details.expiry">
          </div>
          <div class="flex-fill">
            <label for="cvvInput" class="form-label">CVV</label>
            <input type="text" class="form-control mb-3" id="cvvInput" placeholder="CVV" aria-label="CVV" v-model="details.cvv">
          </div>
        </div>

        <button class="btn btn-primary" @click="$emit('verify-details')">Review and Pay</button>
        <a href="index.html" class="btn btn-link">Return to main menu</a>
      </div>

      <div v-else class="border rounded-3 p-3 bg-white">
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
        <button type="button" class="btn btn-primary mt-3">Checkout</button>
      </div>
    </div>
  `
};

export default CheckoutForm;
