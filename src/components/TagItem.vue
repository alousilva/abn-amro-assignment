<template>
  <span class="tag-item">{{ text }}</span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ text: string }>(), {
  text: "",
});
</script>

<style lang="scss" scoped>
.tag-item {
  color: var(--color-text);
  background-color: var(--color-background-mute);
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-2);
  padding: 6px;
  border-radius: var(--border-radius);
  transition:
    color 0.5s,
    background-color 0.5s;
}
</style>
