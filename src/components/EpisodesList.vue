<template>
  <div class="episodes-list">
    <select name="pets" id="pet-select" v-model="selectedSeason">
      <option v-for="season in Object.keys(episodesGroupedBySeason)" :key="season" :value="season">
        Season {{ season }}
      </option>
    </select>
    <div class="episodes-list__season">
      <div class="episodes-list__season-header">
        Episodes {{ episodesOfSelectedSeason?.length }}
      </div>
      <div class="episodes-list__season-contents">
        <episode-item
          v-for="episode in episodesOfSelectedSeason"
          :key="episode.id"
          :episode="episode"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import EpisodeItem from "@/components/EpisodeItem.vue";
import type { Episode, EpisodesGroupedBySeason } from "@/types";
import { computed, ref, watch } from "vue";

const props = withDefaults(defineProps<{ episodes: Episode[] }>(), {
  episodes: () => [],
});

const selectedSeason = ref<null | number>(null);

watch(
  () => props.episodes,
  () => {
    selectedSeason.value = props.episodes[0]?.season || 1;
  },
);
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

// console.log(Object.keys(episodesGroupedBySeason.value)[0]);

const episodesOfSelectedSeason = computed(() => {
  return episodesGroupedBySeason.value[selectedSeason.value];
});
</script>

<style lang="scss" scoped>
.episodes-list {
  &__season-header {
    font-size: var(--font-size-4);
  }
  &__season-contents {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    // display: grid;
    // grid-template-columns: repeat(1, 1fr); /* Starts with 1 column */
    // grid-gap: var(--spacing-normal);

    // @media (min-width: 768px) {
    //   & {
    //     grid-template-columns: repeat(3, 1fr); /* Switches to 3 columns */
    //   }
    // }

    // @media (min-width: 992px) {
    //   & {
    //     grid-template-columns: repeat(5, 1fr); /* Switches to 5 columns */
    //   }
    // }
  }
}
</style>
