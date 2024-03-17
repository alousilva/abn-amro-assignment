<template>
  <div class="episodes-list">
    <div class="episodes-list__header">
      <!-- <drop-down :options="Object.keys(episodesGroupedBySeason)" v-model="selectedSeason"
        >Season</drop-down
      > -->
      <select name="season-select" id="season-select" v-model="selectedSeason">
        <option
          v-for="season in Object.keys(episodesGroupedBySeason)"
          :key="season"
          :value="season"
        >
          Season {{ season }}
        </option>
      </select>
      <span>{{ episodesOfSelectedSeason?.length }} episodes</span>
    </div>
    <div class="episodes-list__season">
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
// import DropDown from "@/components/DropDown.vue";
import type { Episode, EpisodesGroupedBySeason } from "@/types";
import { computed, ref, watch } from "vue";

const props = withDefaults(defineProps<{ episodes: Episode[] }>(), {
  episodes: () => [],
});

const selectedSeason = ref<number>(1);

watch(
  () => props.episodes,
  () => {
    selectedSeason.value = props.episodes[0]?.season || 1;
  },
  { immediate: true },
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

const episodesOfSelectedSeason = computed(() => {
  return episodesGroupedBySeason.value[selectedSeason.value];
});
</script>

<style lang="scss" scoped>
.episodes-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-normal) 0;
  padding-top: var(--spacing-normal);

  &__header {
    display: flex;
    gap: 0 var(--spacing-normal);
    font-size: var(--font-size-4);
  }

  &__season-contents {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-normal) 0;
  }
}
</style>
