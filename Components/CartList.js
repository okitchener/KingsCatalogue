import CartListItem from "./CartListItem.js";

const CartList = {
  components: {
    CartListItem
  },
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  emits: ["increase", "decrease", "remove"],
  template: `
    <div>
      <div v-if="cart.length === 0" class="text-body-secondary">Your cart is empty.</div>

      <div v-else class="d-flex flex-column gap-3">
        <cart-list-item
          v-for="item in cart"
          :key="item.id + '-' + item.size + '-' + item.color"
          :item="item"
          @increase="$emit('increase', $event)"
          @decrease="$emit('decrease', $event)"
          @remove="$emit('remove', $event)"
        ></cart-list-item>
      </div>
    </div>
  `
};

export default CartList;
