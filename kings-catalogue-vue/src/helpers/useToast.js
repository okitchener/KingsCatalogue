import { reactive } from "vue";

export function createToastController(durationMs = 2200) {
  const toast = reactive({
    visible: false,
    message: ""
  });

  let timerId = null;

  function show(message) {
    toast.message = message;
    toast.visible = true;

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      toast.visible = false;
      timerId = null;
    }, durationMs);
  }

  function cleanup() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  return {
    toast,
    show,
    cleanup
  };
}
