import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
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
    const saved = localStorage.getItem("kingsCart");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.cart = Array.isArray(parsed)
          ? parsed.map(item => this.normalizeCartItem(item))
          : [];
      } catch {
        this.cart = [];
      }
    }
  },
  computed: {
    subtotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    },
    tax() {
      return this.subtotal * 0.1;
    },
    shipping() {
      return this.cart.length > 0 ? 15 : 0;
    },
    total() {
      return this.subtotal + this.tax + this.shipping;
    }
  },
  methods: {
    money(value) {
      return `$${Number(value).toFixed(2)}`;
    },
    normalizeCartItem(item) {
      const size = item.size ?? item.sizes?.[0] ?? "M";
      const color = item.color ?? item.colors?.[0] ?? "Default";
      return {
        ...item,
        size,
        color,
        qty: item.qty ?? 1
      };
    },
    verifyDetails() {
      this.detailsVerified = true;
    }
  }
}).mount("#checkoutApp");
