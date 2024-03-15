<template>
  <div class="episodes-list">
    <div
      class="episodes-list__season"
      v-for="group in Object.entries(episodesGroupedBySeason)"
      :key="group[0]"
    >
      <div class="episodes-list__season-header">Season {{ group[0] }}</div>
      <div class="episodes-list__season-contents">
        <episode-item v-for="episode in group[1]" :key="episode.id" :episode="episode" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import EpisodeItem from "@/components/EpisodeItem.vue";
import type { Episode, EpisodesGroupedBySeason } from "@/types";
import { computed } from "vue";

const props = withDefaults(defineProps<{ episodes: Episode[] }>(), {
  episodes: () => [],
});

// check World Series of Poker. Has a funky grouping
const episodesGroupedBySeason = computed(() => {
  return props.episodes.reduce((acc: EpisodesGroupedBySeason, episode) => {
    const season = episode.season;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {});
});
</script>

<style lang="scss" scoped>
.episodes-list {
  &__season-header {
    font-size: var(--font-size-4);
  }
  &__season-contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Starts with 2 columns */
    grid-gap: var(--spacing-normal);

    @media (min-width: 768px) {
      & {
        grid-template-columns: repeat(3, 1fr); /* Switches to 3 columns */
      }
    }

    @media (min-width: 992px) {
      & {
        grid-template-columns: repeat(5, 1fr); /* Switches to 5 columns */
      }
    }
    :deep(.episode-item) {
      background-color: #992b2b;
      padding: var(--spacing-normal);
      text-align: center;
    }
  }
}
</style>
