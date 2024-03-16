<template>
  <div
    class="episode-item"
    tabindex="0"
    @click="$emit('open-show-details', episode.id)"
    @keydown.enter="$emit('open-show-details', episode.id)"
  >
    <div class="episode-item__top-container">
      <div class="episode-item__image">
        <v-lazy-image
          v-if="episode.image"
          :src="episode.image.medium || ''"
          :alt="`image for ${episode.name}`"
        />
        <img v-else :src="IconNoImage" alt="no image to display icon" />
      </div>
      <div>
        <span>Episode {{ episode.number }}: {{ episode.name }}</span>
        <div class="episode-item__summary-top" v-html="episode.summary"></div>
      </div>
    </div>
    <div class="episode-item__summary-bottom" v-html="episode.summary"></div>
    <!-- <span class="episode-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import IconNoImage from "@/assets/icon-no-image.svg?url";
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
  // cursor: pointer;

  &__top-container {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0 20px;
  }

  &__image {
    border-radius: inherit;
    width: 250px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--border-radius);
  }

  img {
    border-radius: inherit;
  }

  &__summary-top {
    display: none;
  }

  @media (min-width: 768px) {
    &__top-container {
    }

    &__summary-top {
      display: block;
    }

    &__summary-bottom {
      display: none;
    }
  }

  @media (min-width: 992px) {
    &__top-container {
    }
  }
}
</style>
