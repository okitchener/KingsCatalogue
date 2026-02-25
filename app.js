import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      products: [
        { id: 1, name: "Crown", price: 299.99, image: "media/crownProduct.png", description: "Luxury crown.", size: ["S","M","L","XL"], color: ["Gold", "Silver"] },
        { id: 2, name: "Royal Soap", price: 49.99, image: "media/soap-large.jpg", description: "Handcrafted soap.", size: ["S","M","L","XL"], color: ["Lavender", "Rose"] },
        { id: 3, name: "Fancy Suit", price: 475.99, image: "media/fancySuit.webp", description: "Elegant suit.", size: ["S","M","L","XL"], color: ["Black", "White"] }
      ],
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
    cartCount() {
      return this.cart.reduce((n, i) => n + i.qty, 0);
    },
    subtotal() {
      return this.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    }
  },
  methods: {
    openDetails(product) {
      const sizes = product.sizes ?? (Array.isArray(product.size) ? product.size : [product.size ?? "M"]);
      const colors = product.colors ?? (Array.isArray(product.color) ? product.color : [product.color ?? "Default"]);

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
      const size = Array.isArray(product.size) ? product.size[0] : (product.size ?? "M");
      const color = Array.isArray(product.color) ? product.color[0] : (product.color ?? "Default");

      const found = this.cart.find(i => i.id === product.id && i.size === size && i.color === color);
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
      this.cart = this.cart.filter(i => i.id !== id);
    }
  }
}).mount("#app");