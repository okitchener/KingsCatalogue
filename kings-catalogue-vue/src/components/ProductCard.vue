<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ["view-details", "add-options"]
};
</script>

<template>
  <div class="card h-100">
    <div class="card-body d-flex flex-column">
      <div class="ratio ratio-1x1 mb-3 product-card-media">
        <img :src="product.image" class="w-100 h-100 object-fit-cover" :alt="product.name">
      </div>
      <h5 class="card-title mb-2 text-truncate">{{ product.name }}</h5>
      <p class="card-text small text-body-secondary d-block w-100 text-truncate flex-grow-1 mb-3">{{ product.description }}</p>
      <h3 class="card-title">{{ "$" + product.price.toFixed(2) }}</h3>
      <div class="d-grid gap-2 mt-3">
        <button
          type="button"
          class="btn btn-secondary border border-2 border-secondary"
          data-bs-toggle="modal"
          data-bs-target="#productDetailsModal"
          @click="$emit('view-details', product)"
        >
          View Details
        </button>
        <button
          type="button"
          class="btn btn-primary border border-2 border-secondary"
          data-bs-toggle="modal"
          data-bs-target="#addToCartModal"
          @click="$emit('add-options', product)"
        >
          Add to Chest
        </button>
      </div>
    </div>
  </div>
</template>
