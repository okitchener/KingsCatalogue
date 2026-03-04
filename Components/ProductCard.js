const ProductCard = {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ["view-details", "add-options"],
  template: `
    <div class="card h-100">
      <div class="card-body">
        <div class="ratio ratio-1x1 mb-3 product-card-media">
          <img :src="product.image" class="w-100 h-100 object-fit-cover" :alt="product.name">
        </div>
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
        <h3 class="card-title">{{ '$' + product.price.toFixed(2) }}</h3>
        <div class="d-grid gap-2 d-sm-flex mt-3">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#productDetailsModal"
            @click="$emit('view-details', product)"
          >View details</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addToCartModal"
            @click="$emit('add-options', product)"
          >Add to cart</button>
        </div>
      </div>
    </div>
  `
};

export default ProductCard;
