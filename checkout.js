import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import CartList from "./components/CartList.js";
import CartSummary from "./components/CartSummary.js";
import {
  decreaseCartItemQty,
  getShipping,
  getSubtotal,
  getTax,
  increaseCartItemQty,
  loadCart,
  removeCartItem,
  saveCart
} from "./components/cartStore.js";

createApp({
  components: {
    CartList,
    CartSummary
  },
  data() {
    return {
      cart: [],
      detailsVerified: false,
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
  mounted() {
    this.cart = loadCart();
  },
  watch: {
    cart: {
      deep: true,
      handler(newCart) {
        saveCart(newCart);
      }
    }
  },
  computed: {
    subtotal() {
      return getSubtotal(this.cart);
    },
    tax() {
      return getTax(this.subtotal);
    },
    shipping() {
      return getShipping(this.cart);
    },
    total() {
      return this.subtotal + this.tax + this.shipping;
    }
  },
  methods: {
    increaseQty(item) {
      increaseCartItemQty(item);
    },
    decreaseQty(item) {
      decreaseCartItemQty(item);
    },
    removeFromCart(itemToRemove) {
      this.cart = removeCartItem(this.cart, itemToRemove);
    },
    verifyDetails() {
      this.detailsVerified = true;
    }
  }
}).mount("#checkoutApp");
