<template>
  <div class="d-flex flex-column flex-grow-1">
    <SiteHeader :base-url="baseUrl" :show-mobile-search="true" />

    <main class="container-fluid flex-grow-1">
      <div class="row">
        <aside class="col-12 col-md-2 pt-3 border-end"></aside>
        <section class="col-12 col-md-10 pt-3 pb-4 pb-md-5">
          <CheckoutProgress :details-verified="detailsVerified" :form-step="formStep" />
          <div class="row g-4">
            <div class="col-12 col-lg-8">
              <CheckoutForm :details="details" :details-verified="detailsVerified" @verify-details="verifyDetails" @edit-details="editDetails" @checkout="checkout" @step-change="formStep = $event" />
            </div>
            <div class="col-12 col-lg-4">
              <div class="border rounded-3 p-3 bg-white">
                <h5 class="mb-3">Order Summary</h5>
                <CartList :cart="cart" @increase="increaseQty" @decrease="decreaseQty" @remove="removeFromCart" />
                <CartSummary :cart="cart" :show-checkout-button="false" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <SiteFooter :base-url="baseUrl" :current-year="currentYear" :compact="true" />

    <CartDrawer
      :cart="cart"
      :show-checkout-button="false"
      body-class="d-flex flex-column"
      @increase="increaseQty"
      @decrease="decreaseQty"
      @remove="removeFromCart"
    />
  </div>
</template>

<script>
import CartList from "./components/CartList.vue";
import CartSummary from "./components/CartSummary.vue";
import CheckoutForm from "./components/CheckoutForm.vue";
import CheckoutProgress from "./components/CheckoutProgress.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import CartDrawer from "./components/CartDrawer.vue";
import { updateCartBadges } from "./helpers/useCartBadge.js";
import { useCartStore } from "./helpers/useCartStore.js";

const cartStore = useCartStore();

export default {
  name: "CheckoutApp",
  components: {
    SiteHeader,
    SiteFooter,
    CartDrawer,
    CartList,
    CartSummary,
    CheckoutForm,
    CheckoutProgress
  },
  data() {
    return {
      detailsVerified: false,
      formStep: 1,
      details: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        deliveryOption: "Standard Delivery",
        cardNumber: "",
        expiry: "",
        cvv: ""
      }
    };
  },
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL;
    },
    currentYear() {
      return new Date().getFullYear();
    },
    cart() {
      return cartStore.cart.value;
    },
    cartCount() {
      return this.cart.reduce((totalQty, item) => totalQty + item.qty, 0);
    }
  },
  watch: {
    cartCount: {
      handler(newCount) {
        updateCartBadges(newCount);
      },
      immediate: true
    }
  },
  mounted() {
    updateCartBadges(this.cartCount);
  },
  methods: {
    increaseQty(item) {
      cartStore.increaseQty(item);
    },
    decreaseQty(item) {
      cartStore.decreaseQty(item);
    },
    removeFromCart(itemToRemove) {
      cartStore.removeFromCart(itemToRemove);
    },
    verifyDetails() {
      this.detailsVerified = true;
    },
    editDetails() {
      this.detailsVerified = false;
      this.formStep = 1;
    },
    checkout() {
      this.detailsVerified = true;
    }
  }
};
</script>
