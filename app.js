import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import CartList from "./components/CartList.js";
import CartSummary from "./components/CartSummary.js";
import AddToCartModal from "./components/AddToCartModal.js";
import ProductDetailsModal from "./components/ProductDetailsModal.js";
import ProductCard from "./components/ProductCard.js";
import ToastMessage from "./components/ToastMessage.js";
import { useCartStore } from "./components/useCartStore.js";
import products from "./products.js";

const cartStore = useCartStore();

createApp({
  components: {
    ProductCard,
    CartList,
    CartSummary,
    AddToCartModal,
    ProductDetailsModal,
    ToastMessage
  },
  data() {
    return {
      products,
      selectedCategories: [],
      maxPrice: 200,
      sortBy: "",
      selectedProduct: null,
      selectedCartProduct: null,
      cart: cartStore.cart,
      toast: {
        visible: false,
        message: ""
      },
      toastTimer: null
    };
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
      return cartStore.subtotal.value;
    },
    tax() {
      return cartStore.tax.value;
    },
    shipping() {
      return cartStore.shipping.value;
    }
  },
  methods: {
    openCartOptions(product) {
      const sizes = product.sizes ?? ["M"];
      const colors = product.colors ?? ["Default"];

      this.selectedCartProduct = {
        ...product,
        sizes,
        colors,
        size: sizes[0],
        color: colors[0],
        qty: 1
      };
    },
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
      cartStore.addToCart(product);

      const productName = product?.name ?? "Item";
      this.showAddedToCartToast(productName);
    },
    showAddedToCartToast(productName) {
      this.toast.message = `${productName} was added to the cart`;
      this.toast.visible = true;

      if (this.toastTimer) {
        clearTimeout(this.toastTimer);
      }

      this.toastTimer = setTimeout(() => {
        this.toast.visible = false;
        this.toastTimer = null;
      }, 2200);
    },
    increaseQty(item) {
      cartStore.increaseQty(item);
    },
    decreaseQty(item) {
      cartStore.decreaseQty(item);
    },
    removeFromCart(itemToRemove) {
      cartStore.removeFromCart(itemToRemove);
    }
  },
  beforeUnmount() {
    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }
  }
}).mount("#app");