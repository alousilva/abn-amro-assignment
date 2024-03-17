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
        <i v-else class="fa fa-file-image-o" aria-hidden="true"></i>
      </div>
      <div class="episode-item__details">
        <span
          ><strong>Episode {{ episode.number }}:</strong> {{ episode.name }}</span
        >
        <span><strong>Air date:</strong> {{ episode.airdate }}</span>
        <span><strong>Rating:</strong> {{ episode.rating.average ?? "?" }} / 10</span>
        <div class="episode-item__summary-top" v-html="episode.summary"></div>
      </div>
    </div>
    <div class="episode-item__summary-bottom" v-html="episode.summary"></div>
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
  gap: var(--spacing-small) var(--spacing-none);
  border-radius: var(--border-radius);

  &__top-container {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }

  &__image {
    i {
      font-size: 100px;
    }
  }

  &__details {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-2);
    width: 250px;
  }

  img {
    border-radius: var(--border-radius);
    max-width: 100%;
    height: auto;
  }

  &__summary-top {
    display: none;
  }

  @media (min-width: 768px) {
    &__details {
      width: 100%;
    }

    img {
      max-width: inherit;
      width: 350px;
      height: 100%;
    }

    &__summary-top {
      display: block;
    }

    &__summary-bottom {
      display: none;
    }
  }
}
</style>
