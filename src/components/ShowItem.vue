<template>
  <div
    class="show-item"
    tabindex="0"
    :aria-label="show.name"
    @click="$emit('open-show-details', show.id)"
    @keydown.enter="$emit('open-show-details', show.id)"
  >
    <v-lazy-image
      v-if="show.image?.medium"
      class="show-item__image"
      :src="show.image.medium"
      :alt="`image for ${show.name}`"
    />
    <i
      v-else
      class="fa fa-file-image-o show-item__image"
      :title="`image not found for ${show.name}`"
    ></i>
  </div>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
import type { Show } from "@/types";

defineProps<{ show: Show }>();

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
