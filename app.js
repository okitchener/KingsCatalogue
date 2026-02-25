import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      products: [
        { id: 1, name: "Crown", price: 299.99, image: "media/crownProduct.png", description: "Luxury crown.", sizes: ["S", "M", "L", "XL"], colors: ["Gold", "Silver"], bullets: ["Handcrafted", "24k Gold Plated", "Adjustable Size"], category: "Accessories" },
        { id: 2, name: "Royal Soap", price: 49.99, image: "media/soap-large.jpg", description: "Handcrafted soap.", sizes: ["S", "M", "L", "XL"], colors: ["Lavender", "Rose"], bullets: ["Organic Ingredients", "Gentle on Skin", "Eco-Friendly Packaging"], category: "Hygiene" },
        { id: 3, name: "Fancy Suit", price: 475.99, image: "media/fancySuit.webp", description: "Elegant suit.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White"], bullets: ["Tailored Fit", "Premium Fabric", "Dry Clean Only"], category: "Clothing" }
      ],
      selectedCategories: [],
      maxPrice: 1000,
      selectedProduct: null,
      cart: []
    };
  },
  mounted() {
  const saved = localStorage.getItem("kingsCart");
  if (saved) {
    try {
      this.cart = JSON.parse(saved);
    } catch {
      this.cart = [];
    }
  }
},

  watch: {
    cart: {
        deep: true,
        handler(newCart) {
            localStorage.setItem("kingsCart", JSON.stringify(newCart));
        },
    }
},
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesCategory = this.selectedCategories.length === 0 || this.selectedCategories.includes(product.category);
        const matchesPrice = product.price <= this.maxPrice;
        return matchesCategory && matchesPrice;
      });
    },
    cartCount() {
      return this.cart.reduce((totalQty, item) => totalQty + item.qty, 0);
    },
    subtotal() {
      return this.cart.reduce((subtotalAmount, item) => subtotalAmount + item.price * item.qty, 0);
    },
    tax() {
      return this.subtotal * 0.1; //  tax rate of 10%
    },
    shipping() {
      return this.cart.length > 0 ? 15 : 0; //  flat shipping rate
    }
  },
  methods: {
    openDetails(product) {
      const sizes = product.sizes ?? ["M"];
      const colors = product.colors ?? ["Default"];

      this.selectedProduct = {
        ...product,
        qty: 1,
        bullets: product.bullets ?? [],
        sizes,
        colors,
        size: sizes[0],
        color: colors[0]
      };
    },
    addToCart(product) {
      if (!product) return;
      const size = product.size ?? product.sizes?.[0] ?? "M";
      const color = product.color ?? product.colors?.[0] ?? "Default";

      const found = this.cart.find(cartItem => cartItem.id === product.id && cartItem.size === size && cartItem.color === color);
      if (found) found.qty += product.qty || 1;
      else this.cart.push({ ...product, size, color, qty: product.qty || 1 });
    },
    increaseQty(item) {
      item.qty += 1;
    },
    decreaseQty(item) {
      if (item.qty > 1) item.qty -= 1;
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(cartItem => cartItem.id !== id);
    }
  }
}).mount("#app");