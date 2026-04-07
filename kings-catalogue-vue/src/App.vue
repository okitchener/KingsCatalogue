<template>
  <div class="d-flex flex-column min-vh-100">
    <SiteHeader
      :base-url="baseUrl"
      desktop-header-class="px-3"
      :show-mobile-search="true"
      :use-catalog-search="true"
      :search-term="searchTerm"
      @update:search-term="searchTerm = $event"
    />

    <main class="container-fluid flex-grow-1">
      <div class="row">
        <aside class="col-12 col-md-3 col-lg-2 pt-3 border-end">
          <button class="btn btn-outline-secondary w-100 d-md-none mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#catalogFilters" aria-expanded="false" aria-controls="catalogFilters">Toggle Filters</button>
          <div id="catalogFilters" class="collapse d-md-block">
            <h4>Filters:</h4>
            <h5>Category</h5>
            <div class="form-check flex-column">
              <div class="p-2">
                <input class="form-check-input" type="checkbox" value="Clothing" id="category1" v-model="selectedCategories">
                <label class="form-check-label" for="category1">Clothing</label>
              </div>
              <div class="p-2">
                <input class="form-check-input" type="checkbox" value="Hygiene" id="category2" v-model="selectedCategories">
                <label class="form-check-label" for="category2">Hygiene</label>
              </div>
              <div class="p-2">
                <input class="form-check-input" type="checkbox" value="Accessories" id="category3" v-model="selectedCategories">
                <label class="form-check-label" for="category3">Accessories</label>
              </div>
            </div>
            <label for="range1" class="form-label">Price range</label>
            <input type="range" class="form-range" id="range1" min="0" max="200" step="10" v-model.number="maxPrice">
            <div class="d-flex justify-content-between mb-1">
              <small class="text-body-secondary">$0</small>
              <small class="text-body-secondary">$200</small>
            </div>
            <small class="text-body-secondary d-block mb-3">Max: ${{ maxPrice }}</small>
            <label for="sortBy" class="form-label">Sort by</label>
            <select class="form-select" id="sortBy" v-model="sortBy">
              <option value="aToZ">A-Z</option>
              <option value="featured">Featured</option>
              <option value="priceLowHigh">Price: Low-High</option>
              <option value="priceHighLow">Price: High-Low</option>
            </select>
          </div>
        </aside>
        <section class="col-12 col-md-9 col-lg-10 pt-3">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
            <div class="col" v-for="product in filteredProducts" :key="product.id">
              <ProductCard :product="product" @view-details="openDetails" @add-options="openCartOptions" />
            </div>
          </div>
        </section>
      </div>

      <CartDrawer
        :cart="cart"
        :subtotal="subtotal"
        :tax="tax"
        :shipping="shipping"
        @increase="increaseQty"
        @decrease="decreaseQty"
        @remove="removeFromCart"
      />

      <AddToCartModal :selected-cart-product="selectedCartProduct" @add-to-cart="addToCart" />
      <ProductDetailsModal :selected-product="selectedProduct" @add-to-cart="addToCart" />
      <ToastMessage :visible="toast.visible" :message="toast.message" />
    </main>

    <SiteFooter :base-url="baseUrl" :current-year="currentYear" :horizontal-padding="true" />
  </div>
</template>

<script>
import AddToCartModal from "./components/AddToCartModal.vue";
import ProductDetailsModal from "./components/ProductDetailsModal.vue";
import ProductCard from "./components/ProductCard.vue";
import ToastMessage from "./components/ToastMessage.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import CartDrawer from "./components/CartDrawer.vue";
import { useCartStore } from "./helpers/useCartStore.js";
import { getFilteredProducts } from "./helpers/useCatalogQuery.js";
import { buildSelectedCartProduct, buildSelectedProduct } from "./helpers/useProductSelection.js";
import { createCartPageMixin } from "./helpers/useCartPage.js";
import { createToastController } from "./helpers/useToast.js";
import products from "./models/products.js";

const cartStore = useCartStore();
const toastController = createToastController();
const cartPageMixin = createCartPageMixin(cartStore);

export default {
  name: "App",
  mixins: [cartPageMixin],
  components: {
    SiteHeader,
    SiteFooter,
    CartDrawer,
    ProductCard,
    AddToCartModal,
    ProductDetailsModal,
    ToastMessage
  },
  data() {
    return {
      products,
      searchTerm: "",
      selectedCategories: [],
      maxPrice: 200,
      sortBy: "aToZ",
      selectedProduct: null,
      selectedCartProduct: null,
      toast: toastController.toast
    };
  },
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL;
    },
    currentYear() {
      return new Date().getFullYear();
    },
    filteredProducts() {
      const baseFiltered = getFilteredProducts(this.products, this.selectedCategories, this.maxPrice, this.sortBy);
      const normalizedSearch = this.searchTerm.trim().toLowerCase();
      if (!normalizedSearch) {
        return baseFiltered;
      }
      return baseFiltered.filter((product) => product.name.toLowerCase().includes(normalizedSearch));
    }
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
    }
  },
  beforeUnmount() {
    toastController.cleanup();
  }
};
</script>
