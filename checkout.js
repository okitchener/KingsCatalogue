import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import CartList from "./Components/CartList.js";
import CartSummary from "./Components/CartSummary.js";
import CheckoutForm from "./components/CheckoutForm.js";
import CheckoutProgress from "./components/CheckoutProgress.js";
import { updateCartBadges } from "./Components/useCartBadge.js";
import { useCartStore } from "./Components/useCartStore.js";

const cartStore = useCartStore();

createApp({
  components: {
    CartList,
    CartSummary,
    CheckoutForm,
    CheckoutProgress
  },
  data() {
    return {
      cart: cartStore.cart,
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
      // Placeholder for future validation and submission flow.
      this.detailsVerified = true;
    }
  }
}).mount("#checkoutApp");
