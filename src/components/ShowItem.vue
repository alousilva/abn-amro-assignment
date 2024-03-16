<template>
  <div
    class="show-item"
    tabindex="0"
    @click="$emit('open-show-details', props.show?.id)"
    @keydown.enter="$emit('open-show-details', props.show?.id)"
  >
    <v-lazy-image :src="props.show?.image?.medium || ''" :alt="`image for ${props.show?.name}`" />
  </div>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
import type { Show } from "@/types";

const props = withDefaults(defineProps<{ show: Show | null }>(), {
  show: null,
});

defineEmits(["open-show-details"]);
</script>

<style lang="scss" scoped>
.show-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small) var(--spacing-none);
  border-radius: var(--border-radius);
  cursor: pointer;
  z-index: 0;
  max-height: 300px;

  img {
    border-radius: inherit;
  }

  &:hover,
  &:focus {
    transform: scale(1.05, 1.05);
    // box-shadow: 0 12px 32px var(--color-box-shadow);
    transition-duration: 300ms;
    transition-property: transform, box-shadow;
    transition-timing-function: ease-out;
  }
}
</style>
