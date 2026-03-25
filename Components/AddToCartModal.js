const AddToCartModal = {
  props: {
    selectedCartProduct: {
      type: Object,
      default: null
    }
  },
  emits: ["add-to-cart"],
  template: `
    <div class="modal fade" id="addToCartModal" tabindex="-1" aria-labelledby="addToCartModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" v-if="selectedCartProduct">
          <div class="modal-header">
            <h5 class="modal-title" id="addToCartModalLabel">Add {{ selectedCartProduct.name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label for="cartProductSize" class="form-label fw-semibold">Size</label>
            <select id="cartProductSize" class="form-select mb-3" v-model="selectedCartProduct.size">
              <option v-for="size in selectedCartProduct.sizes" :key="size" :value="size">{{ size }}</option>
            </select>

            <label for="cartProductColor" class="form-label fw-semibold">Color</label>
            <select id="cartProductColor" class="form-select mb-3" v-model="selectedCartProduct.color">
              <option v-for="color in selectedCartProduct.colors" :key="color" :value="color">{{ color }}</option>
            </select>

            <label for="cartProductQty" class="form-label fw-semibold">Quantity</label>
            <input
              id="cartProductQty"
              type="number"
              class="form-control"
              min="1"
              step="1"
              v-model.number="selectedCartProduct.qty"
            >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary border border-2 border-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary border border-2 border-secondary" data-bs-dismiss="modal" @click="$emit('add-to-cart', selectedCartProduct)">Add to Chest</button>
          </div>
        </div>
      </div>
    </div>
  `
};

export default AddToCartModal;
