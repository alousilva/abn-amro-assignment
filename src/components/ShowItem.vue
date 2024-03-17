<template>
  <div
    class="show-item"
    tabindex="0"
    :aria-label="props.show?.name"
    @click="$emit('open-show-details', props.show?.id)"
    @keydown.enter="$emit('open-show-details', props.show?.id)"
  >
    <v-lazy-image
      v-if="props.show?.image?.medium"
      :src="props.show.image.medium"
      :alt="`image for ${props.show?.name}`"
    />
    <i v-else class="fa fa-file-image-o" aria-hidden="true"></i>
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
  width: 160px;

  img {
    border-radius: inherit;
    width: inherit;
  }
  i {
    font-size: 190px;
    line-height: 220px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05, 1.05);
    transition: transform 300ms ease-in-out;
  }
}
</style>
