import { createApp, reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// shared state
const store = reactive({
  products: [
    {
      id: 1,
      name: "Crown",
      price: 299.99,
      image: "media/crownProduct.png",
      description: "Luxury crown for formal wear.",
      bullets: ["Shiny", "Gold-plated", "Adjustable size", "Perfect for royal events"],
      sizes: ["S", "M", "L"],
      colors: ["Silver", "Platinum", "Gold"]
    },
    {
      id: 2,
      name: "Royal Soap",
      price: 499.99,
      image: "media/soap-large.jpg",
      description: "Luxurious handcrafted soap with natural ingredients.",
      bullets: ["Luxurious", "Handcrafted", "Natural ingredients", "Eco-friendly packaging"],
      sizes: ["S", "M", "L"],
      colors: ["Lavender", "Rose", "Vanilla"]
    },
    {
      id: 3,
      name: "Fancy Suit",
      price: 475.99,
      image: "media/fancySuit.webp",
      description: "An elegant suit for special occasions.",
      bullets: ["Tailored fit", "Premium fabric", "Formal style", "Comfort lining"],
      sizes: ["S", "M", "L"],
      colors: ["Black", "Navy", "Charcoal"]
    }
  ],
  selectedProduct: null
});

// cards app
createApp({
  data() {
    return { store };
  },
  methods: { 
    openDetails(product) {
      this.store.selectedProduct = product;
    }
  }
}).mount("#app");

// details/modal app
createApp({
  data() {
    return { store };
  }
}).mount("#view-details");