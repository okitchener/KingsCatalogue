<script>
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  emits: ["increase", "decrease", "remove"]
};
</script>

<template>
  <div>
    <div v-if="cart.length === 0" class="text-body-secondary">Your cart is empty.</div>

    <div v-else class="d-flex flex-column gap-3">
      <CartListItem
        v-for="item in cart"
        :key="item.id + '-' + item.size + '-' + item.color"
        :item="item"
        @increase="$emit('increase', $event)"
        @decrease="$emit('decrease', $event)"
        @remove="$emit('remove', $event)"
      />
    </div>
  </div>
</template>
