<template>
  <div class="episode-item" tabindex="0">
    <div class="episode-item__top-container">
      <div class="episode-item__image-container">
        <v-lazy-image
          v-if="episode.image?.medium"
          class="episode-item__image"
          :src="episode.image.medium || ''"
          :alt="`image for ${episode.name}`"
        />
        <i v-else class="fa fa-file-image-o" :title="`image not found for ${episode.name}`"></i>
      </div>
      <div class="episode-item__details">
        <span class="episode-item__number"
          ><strong>Episode {{ episode.number }}:</strong> {{ episode.name }}</span
        >
        <span class="episode-item__air-date"><strong>Air date:</strong> {{ episode.airdate }}</span>
        <span class="episode-item__rating"
          ><strong>Rating:</strong> {{ episode.rating.average ?? "?" }} / 10</span
        >
        <div class="episode-item__summary-top" v-html="episode.summary"></div>
      </div>
    </div>
    <div class="episode-item__summary-bottom" v-html="episode.summary"></div>
  </div>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
import type { Episode } from "@/types";

defineProps<{ episode: Episode }>();
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

  &__image-container {
    img {
      border-radius: var(--border-radius);
      max-width: 100%;
      height: auto;
    }
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

  &__summary-top {
    display: none;
  }

  @media (min-width: 768px) {
    &__details {
      width: 100%;
      font-size: var(--font-size-3);
    }

    img {
      max-width: inherit;
      width: 350px;
      height: 100%;
    }

    &__summary-top {
      padding-top: var(--spacing-small);
      display: block;
    }

    &__summary-bottom {
      display: none;
    }
  }
}
</style>
