<script>
export default {
  name: "AddToCartModal",
  props: {
    selectedCartProduct: {
      type: Object,
      default: null
    }
  },
  emits: ["add-to-cart"]
};
</script>

<template>
  <div class="modal fade" id="addToCartModal" tabindex="-1" aria-labelledby="addToCartModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div v-if="selectedCartProduct" class="modal-content">
        <div class="modal-header">
          <h5 id="addToCartModalLabel" class="modal-title">Add {{ selectedCartProduct.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <template v-if="selectedCartProduct.sizes.length > 1">
            <label for="cartProductSize" class="form-label fw-semibold">Size</label>
            <select id="cartProductSize" v-model="selectedCartProduct.size" class="form-select mb-3">
              <option v-for="size in selectedCartProduct.sizes" :key="size" :value="size">{{ size }}</option>
            </select>
          </template>

          <template v-if="selectedCartProduct.colors.length > 1">
            <label for="cartProductColor" class="form-label fw-semibold">Color</label>
            <select id="cartProductColor" v-model="selectedCartProduct.color" class="form-select mb-3">
              <option v-for="color in selectedCartProduct.colors" :key="color" :value="color">{{ color }}</option>
            </select>
          </template>

          <template v-if="selectedCartProduct.volumes.length > 1">
            <label for="cartProductVolume" class="form-label fw-semibold">Volume</label>
            <select id="cartProductVolume" v-model="selectedCartProduct.volume" class="form-select mb-3">
              <option v-for="volume in selectedCartProduct.volumes" :key="volume" :value="volume">{{ volume }}</option>
            </select>
          </template>

          <template v-if="selectedCartProduct.scents.length > 1">
            <label for="cartProductScent" class="form-label fw-semibold">Scent</label>
            <select id="cartProductScent" v-model="selectedCartProduct.scent" class="form-select mb-3">
              <option v-for="scent in selectedCartProduct.scents" :key="scent" :value="scent">{{ scent }}</option>
            </select>
          </template>

          <label for="cartProductQty" class="form-label fw-semibold">Quantity</label>
          <input
            id="cartProductQty"
            v-model.number="selectedCartProduct.qty"
            type="number"
            class="form-control"
            min="1"
            step="1"
          >
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary border border-2 border-secondary" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-primary border border-2 border-secondary"
            data-bs-dismiss="modal"
            @click="$emit('add-to-cart', selectedCartProduct)"
          >
            Add to Chest
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
