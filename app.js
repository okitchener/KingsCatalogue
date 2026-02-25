import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      products: [
        //Used Ai to generate 25 products with 3 categories (Clothing, Hygiene, Accessories) and 5 products in each category. Each product has 3 sizes and 3 colors (except hygiene which has 1 size and color). Each product also has a description and 3 bullet points.
        { id: 1, name: "Oxford Button-Down Shirt", price: 59.99, image: "media/Oxford-Button-Down-Shirt.jpg", description: "Classic cotton oxford for daily wear.", sizes: ["S", "M", "L", "XL"], colors: ["White", "Blue", "Charcoal"], bullets: ["Breathable cotton weave", "Regular fit", "Wrinkle-resistant finish"], category: "Clothing", featured: true },
        { id: 2, name: "Slim Chino Pants", price: 69.99, image: "media/Slim-Chino-Pants.avif", description: "Modern chinos for office and weekend looks.", sizes: ["30", "32", "34", "36"], colors: ["Khaki", "Navy", "Olive"], bullets: ["Stretch twill fabric", "Tapered leg", "Reinforced stitching"], category: "Clothing", featured: false },
        { id: 3, name: "Crew Neck Tee 3-Pack", price: 34.99, image: "media/Crew-Neck-Tee-3-Pack.avif", description: "Soft everyday tees in essential colors.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "White", "Gray"], bullets: ["Combed cotton", "Tagless comfort", "Easy-care fabric"], category: "Clothing", featured: true },
        { id: 4, name: "Performance Polo", price: 44.99, image: "media/Performance-Polo.webp", description: "Lightweight polo with moisture control.", sizes: ["S", "M", "L", "XL"], colors: ["Navy", "Burgundy", "Stone"], bullets: ["Moisture-wicking", "Four-way stretch", "Anti-odor treatment"], category: "Clothing", featured: false },
        { id: 5, name: "Merino Wool Sweater", price: 89.99, image: "media/Merino-Wool-Sweater.jpg", description: "Fine-knit sweater for smart layering.", sizes: ["S", "M", "L", "XL"], colors: ["Heather Gray", "Forest", "Navy"], bullets: ["100% merino wool", "Breathable warmth", "Ribbed cuffs and hem"], category: "Clothing", featured: true },
        { id: 6, name: "Denim Jacket", price: 79.99, image: "media/Denim-Jacket.webp", description: "Timeless trucker jacket in durable denim.", sizes: ["S", "M", "L", "XL"], colors: ["Indigo", "Black Wash"], bullets: ["Midweight denim", "Button front closure", "Dual chest pockets"], category: "Clothing", featured: false },
        { id: 7, name: "Athletic Joggers", price: 54.99, image: "media/Athletic-Joggers.webp", description: "Comfort joggers for gym and lounge.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Graphite", "Navy"], bullets: ["Soft brushed interior", "Zip side pockets", "Elastic ankle cuffs"], category: "Clothing", featured: false },
        { id: 8, name: "Tailored Blazer", price: 149.99, image: "media/Tailored-Blazer.avif", description: "Sharp blazer for formal occasions.", sizes: ["38", "40", "42", "44"], colors: ["Navy", "Charcoal"], bullets: ["Structured shoulders", "Two-button closure", "Fully lined interior"], category: "Clothing", featured: true },
        { id: 9, name: "Bomber Jacket", price: 99.99, image: "media/Bomber Jacket.jpg", description: "Lightweight bomber with clean silhouette.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Olive", "Sand"], bullets: ["Wind-resistant shell", "Rib-knit collar", "Secure inner pocket"], category: "Clothing", featured: false },
        { id: 10, name: "Linen Short Sleeve Shirt", price: 49.99, image: "media/Linen-Short-Sleeve-Shirt.jpg", description: "Breathable linen blend for warm weather.", sizes: ["S", "M", "L", "XL"], colors: ["Sky Blue", "White", "Sage"], bullets: ["Linen-cotton blend", "Relaxed fit", "Button-front design"], category: "Clothing", featured: false },
        { id: 11, name: "Charcoal Face Wash", price: 12.99, image: "media/Charcoal-Face-Wash.webp", description: "Daily cleanser that removes excess oil.", sizes: ["100ml"], colors: ["Default"], bullets: ["Deep-cleansing charcoal", "Non-drying formula", "Suitable for daily use"], category: "Hygiene", featured: true },
        { id: 12, name: "Hydrating Moisturizer", price: 16.99, image: "media/Hydrating-Moisturizer.jpg", description: "Lightweight hydration for all skin types.", sizes: ["75ml"], colors: ["Default"], bullets: ["Fast-absorbing texture", "Vitamin E enriched", "Non-greasy finish"], category: "Hygiene", featured: false },
        { id: 13, name: "Beard Oil - Cedarwood", price: 14.99, image: "media/Beard-oil.jpg", description: "Softens beard hair and conditions skin.", sizes: ["30ml"], colors: ["Default"], bullets: ["Natural essential oils", "Reduces itch", "Matte, non-oily feel"], category: "Hygiene", featured: true },
        { id: 14, name: "Anti-Dandruff Shampoo", price: 13.99, image: "media/Anti-Dandruff-Shampoo.avif", description: "Scalp-care shampoo for flake control.", sizes: ["250ml"], colors: ["Default"], bullets: ["Balances scalp", "Fresh mint scent", "Color-safe formula"], category: "Hygiene", featured: false },
        { id: 15, name: "Refreshing Body Wash", price: 10.99, image: "media/Refreshing-Body-Wash.jpg", description: "Clean-rinse body wash for everyday freshness.", sizes: ["400ml"], colors: ["Default"], bullets: ["Sulfate-free cleanser", "Long-lasting scent", "Quick-rinse lather"], category: "Hygiene", featured: false },
        { id: 16, name: "Deodorant Stick - Sport", price: 8.99, image: "media/Deodorant-Stick-Sport.webp", description: "All-day odor protection for active days.", sizes: ["85g"], colors: ["Default"], bullets: ["48-hour protection", "No white marks", "Aluminum-free"], category: "Hygiene", featured: true },
        { id: 17, name: "Aftershave Balm", price: 11.99, image: "media/Aftershave-Balm.webp", description: "Soothes skin after shaving.", sizes: ["100ml"], colors: ["Default"], bullets: ["Cooling sensation", "Alcohol-free", "Calms razor burn"], category: "Hygiene", featured: false },
        { id: 18, name: "Whitening Toothpaste", price: 6.99, image: "media/Whitening-Toothpaste.avif", description: "Daily toothpaste for cleaner, brighter teeth.", sizes: ["120g"], colors: ["Default"], bullets: ["Fluoride protection", "Stain-lifting formula", "Fresh mint flavor"], category: "Hygiene", featured: false },
        { id: 19, name: "Leather Belt", price: 29.99, image: "media/Leather-Belt.avif", description: "Versatile belt for formal and casual outfits.", sizes: ["S", "M", "L", "XL"], colors: ["Black", "Brown"], bullets: ["Genuine leather", "Polished buckle", "Trim-to-fit design"], category: "Accessories", featured: true },
        { id: 20, name: "Automatic Watch", price: 199.99, image: "media/Automatic-Watch.jpg", description: "Classic timepiece with stainless steel build.", sizes: ["One Size"], colors: ["Silver", "Black"], bullets: ["Self-winding movement", "Scratch-resistant glass", "Water resistant"], category: "Accessories", featured: true },
        { id: 21, name: "Polarized Sunglasses", price: 39.99, image: "media/Polarized-Sunglasses.avif", description: "Everyday shades with UV protection.", sizes: ["One Size"], colors: ["Black", "Tortoise"], bullets: ["UV400 lenses", "Lightweight frame", "Polarized glare reduction"], category: "Accessories", featured: false },
        { id: 22, name: "Canvas Backpack", price: 64.99, image: "media/Canvas-Backpack.webp", description: "Durable daypack for commute and travel.", sizes: ["One Size"], colors: ["Olive", "Black", "Tan"], bullets: ["Padded laptop sleeve", "Water-resistant canvas", "Multiple organizer pockets"], category: "Accessories", featured: false },
        { id: 23, name: "Leather Wallet", price: 34.99, image: "media/Leather-Wallet.avif", description: "Slim wallet with secure card storage.", sizes: ["One Size"], colors: ["Black", "Tan"], bullets: ["RFID-blocking layer", "Bifold design", "Premium leather finish"], category: "Accessories", featured: true },
        { id: 24, name: "Knit Beanie", price: 19.99, image: "media/Knit-Beanie.jpg", description: "Warm beanie with soft stretch knit.", sizes: ["One Size"], colors: ["Charcoal", "Navy", "Cream"], bullets: ["Soft acrylic yarn", "Stretch fit", "Fold-over cuff"], category: "Accessories", featured: false },
        { id: 25, name: "Training Duffle Bag", price: 72.99, image: "media/Training-Duffle-Bag.avif", description: "Spacious gym bag with separate shoe compartment.", sizes: ["One Size"], colors: ["Black", "Gray"], bullets: ["Ventilated shoe pocket", "Adjustable shoulder strap", "Water-resistant base"], category: "Accessories", featured: false }
      ],
      selectedCategories: [],
      maxPrice: 200,
      sortBy: "",
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
      const filtered = this.products.filter(product => {
        const matchesCategory = this.selectedCategories.length === 0 || this.selectedCategories.includes(product.category);
        const matchesPrice = product.price <= this.maxPrice;
        return matchesCategory && matchesPrice;
      });

      if (this.sortBy === "featured") {
        return filtered.filter(product => product.featured === true);
      }

      if (this.sortBy === "priceLowHigh") {
        return [...filtered].sort((first, second) => first.price - second.price);
      }

      if (this.sortBy === "priceHighLow") {
        return [...filtered].sort((first, second) => second.price - first.price);
      }

      return filtered;
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