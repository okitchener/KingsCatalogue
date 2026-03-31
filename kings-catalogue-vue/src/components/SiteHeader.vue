<template>
  <div>
    <header class="mb-0 border-bottom">
      <div class="d-flex d-md-none align-items-center justify-content-between py-2 px-3">
        <button class="btn p-0 border-0 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Open menu"><i class="bi bi-list fs-2"></i></button>
        <a href="index.html" class="link-body-emphasis text-decoration-none"><span class="fs-5 text-white text-nowrap">Kings Catalogue</span></a>
        <button type="button" class="btn p-0 border-0 bg-transparent text-white position-relative" aria-label="Open cart" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer" aria-controls="cartDrawer">
          <img :src="baseUrl + 'media/treasure_chest.png'" alt="Open cart" width="34" height="34">
          <span class="js-cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none"></span>
        </button>
      </div>
      <div :class="['d-none d-md-flex flex-wrap align-items-center justify-content-md-between py-3', desktopHeaderClass]">
        <div class="col-md-3 mb-2 mb-md-0">
          <a href="index.html" class="d-inline-flex link-body-emphasis text-decoration-none">
            <img :src="baseUrl + 'media/crown.png'" alt="Crown Icon" width="32" height="32" class="me-2">
            <span class="fs-4 text-white text-nowrap">Kings Catalogue</span>
          </a>
        </div>
        <div class="col-md-6 ps-md-3">
          <CatalogSearch
            v-if="useCatalogSearch"
            :model-value="searchTerm"
            @update:model-value="$emit('update:searchTerm', $event)"
            placeholder-text="Search royal wares..."
            aria-label-text="Search"
          />
          <input v-else type="search" class="form-control" placeholder="Search royal wares..." aria-label="Search">
        </div>
        <div class="col-md-3 text-end">
          <button type="button" class="btn p-0 border-0 bg-transparent text-white position-relative" aria-label="Open cart" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer" aria-controls="cartDrawer">
            <img :src="baseUrl + 'media/treasure_chest.png'" alt="Open cart" width="34" height="34">
            <span class="js-cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none"></span>
          </button>
          <a href="profile.html" class="btn p-0 border-0 bg-transparent text-white" aria-label="Open profile"><i class="bi bi-person-fill"></i></a>
        </div>
      </div>
    </header>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column gap-2">
        <a href="index.html" class="btn btn-secondary text-start">Home</a>
        <a href="profile.html" class="btn btn-secondary text-start">Profile</a>
        <button type="button" class="btn btn-primary text-start" data-bs-dismiss="offcanvas" data-bs-toggle="offcanvas" data-bs-target="#cartDrawer" aria-controls="cartDrawer">Cart</button>
      </div>
    </div>

    <div v-if="showMobileSearch" class="d-block d-md-none px-3 py-2 border-bottom">
      <CatalogSearch
        v-if="useCatalogSearch"
        :model-value="searchTerm"
        @update:model-value="$emit('update:searchTerm', $event)"
        placeholder-text="Search royal wares..."
        aria-label-text="Search"
      />
      <input v-else type="search" class="form-control" placeholder="Search royal wares..." aria-label="Search">
    </div>
  </div>
</template>

<script>
import CatalogSearch from "./CatalogSearch.vue";

export default {
  name: "SiteHeader",
  components: {
    CatalogSearch
  },
  props: {
    baseUrl: {
      type: String,
      required: true
    },
    desktopHeaderClass: {
      type: String,
      default: ""
    },
    showMobileSearch: {
      type: Boolean,
      default: false
    },
    useCatalogSearch: {
      type: Boolean,
      default: false
    },
    searchTerm: {
      type: String,
      default: ""
    }
  },
  emits: ["update:searchTerm"]
};
</script>