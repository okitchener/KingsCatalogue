const ProductDetailsModal = {
  props: {
    selectedProduct: {
      type: Object,
      default: null
    }
  },
  emits: ["add-to-cart"],
  template: `
    <div class="modal fade" id="productDetailsModal" tabindex="-1" aria-labelledby="productDetailsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content" v-if="selectedProduct">
          <div class="modal-header">
            <h5 class="modal-title" id="productDetailsModalLabel">{{ selectedProduct.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="row g-4">
              <div class="col-12 col-lg-6">
                <div class="ratio ratio-1x1 product-card-media">
                  <img :src="selectedProduct.image" :alt="selectedProduct.name" class="w-100 h-100 object-fit-cover">
                </div>
              </div>

              <div class="col-12 col-lg-6">
                <h3 class="mb-1">{{ selectedProduct.name }}</h3>
                <h4 class="mb-3">{{ '$' + selectedProduct.price }}</h4>

                <ul class="mb-4 ps-3">
                  <li v-for="bullet in selectedProduct.bullets" :key="bullet">{{ bullet }}</li>
                </ul>
                <label for="productSize" class="form-label fw-semibold">Size:</label>
                <select id="productSize" class="form-select mb-3" v-model="selectedProduct.size">
                  <option v-for="size in selectedProduct.sizes" :key="size" :value="size">{{ size }}</option>
                </select>

                <label for="productColor" class="form-label fw-semibold">Color:</label>
                <select id="productColor" class="form-select mb-3" v-model="selectedProduct.color">
                  <option v-for="color in selectedProduct.colors" :key="color" :value="color">{{ color }}</option>
                </select>

                <p class="fw-semibold mb-2">Quantity: {{ selectedProduct.qty }}</p>
                <div class="d-flex align-items-center gap-2 mb-4">
                  <button type="button" class="btn btn-outline-secondary border border-2 border-secondary" @click="selectedProduct.qty > 1 ? selectedProduct.qty-- : 1">-</button>
                  <span>{{ selectedProduct.qty }}</span>
                  <button type="button" class="btn btn-outline-secondary border border-2 border-secondary" @click="selectedProduct.qty++">+</button>
                </div>

                <button type="button" class="btn btn-primary border border-2 border-secondary" data-bs-dismiss="modal" @click="$emit('add-to-cart', selectedProduct)">Add to Chest</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

export default ProductDetailsModal;
