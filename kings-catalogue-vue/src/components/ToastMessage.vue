<script>
export default {
  name: "ToastMessage",
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      default: ""
    }
  }
};
</script>

<template>
  <div
    class="kc-toast"
    :class="{ 'is-visible': visible }"
    role="status"
    aria-live="polite"
  >
    <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
    <span>{{ message }}</span>
  </div>
</template>
