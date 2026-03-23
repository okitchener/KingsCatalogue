import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import CartList from "./Components/CartList.js";
import CartSummary from "./Components/CartSummary.js";
import { updateCartBadges } from "./Components/useCartBadge.js";
import { useCartStore } from "./Components/useCartStore.js";

const cartStore = useCartStore();

createApp({
  components: {
    CartList,
    CartSummary
  },
  data() {
    return {
      cart: cartStore.cart
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
    }
  }
}).mount("#profileApp");
