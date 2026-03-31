<template>
  <div class="d-flex flex-column flex-grow-1 profile-page-bg">
    <SiteHeader :base-url="baseUrl" desktop-header-class="px-3 px-md-4" :show-mobile-search="true" />

    <main class="container-fluid flex-grow-1 py-4 px-3 px-md-4">
      <section class="profile-hero p-3 p-md-4 rounded-4 mb-4">
        <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 gap-md-4">
          <div class="profile-avatar flex-shrink-0"></div>
          <div class="w-100">
            <h1 class="h3 mb-2 text-warning profile-heading">UserName - CurrentRank of the Realm</h1>
            <p class="mb-2 text-light fw-semibold">Current Points: <span class="text-info">CurrentPoints</span> / <span class="text-info">PointsToNextRank</span> points until <span class="text-info">NextRank</span></p>
            <div class="progress profile-progress-track" role="progressbar" aria-label="Profile progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar profile-progress-fill" style="width: 50%"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="row g-4">
        <aside class="col-12 col-lg-2">
          <div class="profile-nav p-3 rounded-4 h-100">
            <button class="btn btn-primary w-100 mb-3">Overview</button>
            <a href="#" class="btn btn-secondary w-100 mb-3 profile-nav-link">Order History</a>
            <a href="#" class="btn btn-secondary w-100 mb-3 profile-nav-link">Wishlist</a>
            <a href="#" class="btn btn-secondary w-100 profile-nav-link">Settings</a>
          </div>
        </aside>
        <div class="col-12 col-lg-10">
          <div class="profile-content p-3 p-md-4 rounded-4">
            <div class="row g-4">
              <div class="col-12 col-xl-6">
                <div class="profile-card p-3 rounded-4 mb-3">
                  <h2 class="h5 mb-2">Basic Info</h2>
                  <p class="mb-2"><strong>Full Name:</strong> <a href="#">UserFullName</a> <a href="#" class="ms-3">Edit</a></p>
                  <p class="mb-0"><strong>Email:</strong> <a href="#">UserEmail</a> <a href="#" class="ms-3">Edit</a></p>
                </div>
                <div class="profile-card p-3 rounded-4">
                  <h2 class="h5 mb-2">Shipping Address</h2>
                  <p class="mb-0"><a href="#">ShippingAddressSummary</a> <a href="#" class="ms-3">Edit</a></p>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="profile-card p-3 rounded-4 h-100">
                  <p class="h5 mb-2">Kingdom Rank: <a href="#">CurrentRank</a> <i class="bi bi-crown-fill text-warning ms-1"></i></p>
                  <p class="mb-2">Points: <a href="#">CurrentPoints</a> / <a href="#">PointsToNextRank</a></p>
                  <div class="progress profile-progress-track mb-3" role="progressbar" aria-label="Rank progress" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar profile-progress-fill" style="width: 45%"></div>
                  </div>
                  <p class="mb-4">Reach <a href="#">PointsToNextRank</a> points to become a <a href="#">NextRank</a> and unlock exclusive royal deals.</p>
                  <h3 class="h5 mb-2">Rank Tiers:</h3>
                  <ul class="list-unstyled mb-3">
                    <li>Squire: 0-499 points</li>
                    <li>Knight: 500-1,999 points</li>
                    <li>Lord: 2,000-4,999 points</li>
                    <li>King: 5,000+ points</li>
                  </ul>
                  <h3 class="h5 mb-2">How to earn points:</h3>
                  <ul class="list-unstyled mb-0">
                    <li>10 points per dollar spent</li>
                    <li>+15 points per review</li>
                    <li>+5 points for daily login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter :base-url="baseUrl" :current-year="currentYear" :with-brand-link="true" />

    <CartDrawer
      :cart="cart"
      body-class="d-flex flex-column"
      @increase="increaseQty"
      @decrease="decreaseQty"
      @remove="removeFromCart"
    />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import CartDrawer from "./components/CartDrawer.vue";
import { useCartStore } from "./helpers/useCartStore.js";
import { updateCartBadges } from "./helpers/useCartBadge.js";

const cartStore = useCartStore();

export default {
  name: "ProfileApp",
  components: {
    SiteHeader,
    SiteFooter,
    CartDrawer
  },
  computed: {
    baseUrl() {
      return import.meta.env.BASE_URL;
    },
    currentYear() {
      return new Date().getFullYear();
    },
    cart() {
      return cartStore.cart.value;
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
};
</script>
