<template>
  <span class="tag-item">{{ props.text }}</span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ text: string }>(), {
  text: "",
});
</script>

<style lang="scss" scoped>
.tag-item {
  background: rgb(72 75 72 / 68%);
  color: var(--vt-c-white);
  font-size: var(--font-size-3);
  font-weight: bold;
  padding: 6px;
  border-radius: var(--border-radius);
}
</style>
