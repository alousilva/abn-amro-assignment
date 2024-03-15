<template>
  <div class="skeleton-placeholder"></div>
</template>

<script setup lang="ts">
defineProps<{ height: string; width: string }>();
</script>

<style lang="scss" scoped>
@keyframes skeletonAnimate {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

.skeleton-placeholder {
  height: v-bind(height);
  width: v-bind(width);
  border: var(--border-radius);
  background-image: linear-gradient(to right, #d6d7d8 0%, #e2e3e4 10%, #d6d7d8 20%, #d6d7d8 100%);
  background-size: 200% 100%;
  animation: skeletonAnimate 1.2s linear infinite;
}
</style>
