import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import CartList from "./Components/CartList.js";
import CartSummary from "./Components/CartSummary.js";
import AddToCartModal from "./Components/AddToCartModal.js";
import ProductDetailsModal from "./Components/ProductDetailsModal.js";
import ProductCard from "./Components/ProductCard.js";
import CatalogSearch from "./Components/CatalogSearch.js";
import ToastMessage from "./Components/ToastMessage.js";
import { useCartStore } from "./Components/useCartStore.js";
import { getFilteredProducts } from "./Components/useCatalogQuery.js";
import { buildSelectedCartProduct, buildSelectedProduct } from "./Components/useProductSelection.js";
import { updateCartBadges } from "./Components/useCartBadge.js";
import { createToastController } from "./Components/useToast.js";
import products from "./products.js";

const cartStore = useCartStore();
const toastController = createToastController();

createApp({
  components: {
    ProductCard,
    CatalogSearch,
    CartList,
    CartSummary,
    AddToCartModal,
    ProductDetailsModal,
    ToastMessage
  },
  data() {
    return {
      products: products,
      searchTerm: "",
      selectedCategories: [],
      maxPrice: 200,
      sortBy: "aToZ",
      selectedProduct: null,
      selectedCartProduct: null,
      cart: cartStore.cart,
      toast: toastController.toast
    };
  },
  computed: {
    filteredProducts() {
      const baseFiltered = getFilteredProducts(this.products, this.selectedCategories, this.maxPrice, this.sortBy);
      const normalizedSearch = this.searchTerm.trim().toLowerCase();

      if (!normalizedSearch) {
        return baseFiltered;
      }

      return baseFiltered.filter((product) => product.name.toLowerCase().includes(normalizedSearch));
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
    openCartOptions(product) {
      this.selectedCartProduct = buildSelectedCartProduct(product);
    },
    openDetails(product) {
      this.selectedProduct = buildSelectedProduct(product);
    },
    addToCart(product) {
      cartStore.addToCart(product);

      const productName = product?.name ?? "Item";
      this.showAddedToCartToast(productName);
    },
    showAddedToCartToast(productName) {
      toastController.show(`${productName} was added to the cart`);
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
    toastController.cleanup();
  }
}).mount("#app");