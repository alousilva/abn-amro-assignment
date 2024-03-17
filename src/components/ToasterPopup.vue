<!-- Toaster.vue -->
<template>
  <div class="toaster-popup">
    <span>{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ message?: string }>(), {
  message: "",
});
</script>

<style lang="scss">
.toaster-popup {
  display: flex;
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 80px;
  right: -250px;
  width: 250px;
  height: 80px;
  transform: translateX(-280px);
  background-color: rgb(215, 74, 74);
  color: var(--vt-c-black-mute);
  padding: 10px 20px;
  border-radius: var(--border-radius);
  z-index: 200;
  transition: transform 0.3s ease-in-out;
}
</style>
