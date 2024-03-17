<template>
  <div class="episodes-list">
    <div class="episodes-list__header">
      <select name="season-select" id="season-select" v-model="selectedSeason">
        <option
          v-for="season in Object.keys(episodesGroupedBySeason)"
          :key="season"
          :value="season"
        >
          Season {{ season }}
        </option>
      </select>
      <span>{{ episodesOfSelectedSeason.length }} episodes</span>
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
import type { Episode } from "@/types";
import { groupEpisodesBySeason } from "@/utils/helpers";
import { computed, ref, watch } from "vue";

const props = withDefaults(defineProps<{ episodes: Episode[] }>(), {
  episodes: () => [],
});

const selectedSeason = ref<number>(1);

watch(
  () => props.episodes,
  () => {
    // Set the selectedSeason with the season value of the first episode
    selectedSeason.value = props.episodes[0]?.season || 1;
  },
  { immediate: true },
);

const episodesGroupedBySeason = computed(() => {
  return groupEpisodesBySeason(props.episodes);
});

const episodesOfSelectedSeason = computed(() => {
  return episodesGroupedBySeason.value[selectedSeason.value] || [];
});
</script>

<style lang="scss" scoped>
.episodes-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-normal) var(--spacing-none);
  padding-top: var(--spacing-normal);

  &__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-none) var(--spacing-normal);
    font-size: var(--font-size-4);

    select {
      height: 32px;
    }
  }

  &__season-contents {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-normal) var(--spacing-none);
  }
}
</style>
