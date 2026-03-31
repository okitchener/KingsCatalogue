<script>
export default {
  name: "CatalogSearch",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholderText: {
      type: String,
      default: "Search royal wares..."
    },
    ariaLabelText: {
      type: String,
      default: "Search"
    }
  },
  emits: ["update:modelValue"]
};
</script>

<template>
  <input
    type="search"
    class="form-control"
    :placeholder="placeholderText"
    :aria-label="ariaLabelText"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>
