<script>
export default {
  name: "CartListItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["increase", "decrease", "remove"]
};
</script>

<template>
  <div class="border rounded p-2">
    <div class="d-flex align-items-start gap-3 w-100">
      <img :src="item.image" :alt="item.name" width="72" height="72" class="border rounded object-fit-cover">

      <div class="flex-grow-1">
        <p class="mb-1 fw-semibold">{{ item.name }}</p>
        <p class="mb-1 text-body-secondary">Size: {{ item.size }}, Color: {{ item.color }}</p>
        <p class="mb-0 fw-bold">{{ "$" + item.price.toFixed(2) }}</p>
      </div>

      <div class="d-flex align-items-center gap-2 ms-2">
        <button class="btn btn-outline-secondary btn-sm" @click="$emit('decrease', item)">-</button>
        <span class="fw-semibold">{{ item.qty }}</span>
        <button class="btn btn-outline-secondary btn-sm" @click="$emit('increase', item)">+</button>
      </div>

      <button class="btn btn-link text-danger text-decoration-none ms-3 p-0" @click="$emit('remove', item)">
        Remove
      </button>
    </div>
  </div>
</template>
