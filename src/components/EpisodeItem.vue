<template>
  <div
    class="episode-item"
    tabindex="0"
    @click="$emit('open-show-details', episode.id)"
    @keydown.enter="$emit('open-show-details', episode.id)"
  >
    <div class="episode-item__image">
      <v-lazy-image
        v-if="episode.image?.medium"
        :src="episode.image.medium || ''"
        :alt="`image for ${episode.name}`"
      />
      <div v-else>No image available</div>
    </div>
    <!-- <span class="episode-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
import type { Episode } from "@/types";

defineProps<{ episode: Episode }>();
defineEmits(["open-show-details"]);
</script>

<style lang="scss" scoped>
.episode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small) var(--spacing-none);
  border-radius: var(--border-radius);
  cursor: pointer;

  img {
    border-radius: inherit;
  }

  // &__name {
  //   font-weight: var(--font-weight-1);
  // }
}
</style>
