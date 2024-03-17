import { ref } from "vue";
const toasterIsVisible = ref(false);
const toasterMessage = ref("");

export const useToaster = () => {
  const showToaster = (msg: string) => {
    toasterMessage.value = msg;
    toasterIsVisible.value = true;

    setTimeout(() => {
      hideToaster();
    }, 2500);
  };

  const hideToaster = () => {
    toasterIsVisible.value = false;
  };

  return { toasterIsVisible, toasterMessage, showToaster, hideToaster };
};
