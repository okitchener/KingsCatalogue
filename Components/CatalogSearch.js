const CatalogSearch = {
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
  emits: ["update:modelValue"],
  template: `
    <input
      type="search"
      class="form-control"
      :placeholder="placeholderText"
      :aria-label="ariaLabelText"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  `
};

export default CatalogSearch;
