<template>
  <div class="shows-list" v-if="contentIsVisible">
    <div class="shows-list__title">
      <span>{{ genreName }}</span>
      <button
        v-if="filteredShowsByGenre.length > 5"
        @click="$emit('view-all-shows-by-genre', props.genreType)"
      >
        View all
      </button>
    </div>
    <div class="shows-list__items">
      <show-item
        v-for="show in showsSortedByRating"
        :key="show.id"
        :show="show"
        @open-show-details="$emit('open-show-details', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowItem from "@/components/ShowItem.vue";
import type { Show } from "@/types";
import { computed } from "vue";

type Props = {
  genreType: string;
  genreName: string;
  shows: Show[];
};

const props = withDefaults(defineProps<Props>(), {
  genreType: "",
  genreName: "",
  shows: () => [],
});

defineEmits(["open-show-details", "view-all-shows-by-genre"]);

const contentIsVisible = computed(() => {
  return filteredShowsByGenre.value.length > 0;
});

const filteredShowsByGenre = computed(() => {
  return props.shows.filter((show) => show.genres.includes(props.genreName));
});

const showsSortedByRating = computed(() => {
  const sortedByRating = [...filteredShowsByGenre.value].sort((showA, showB) => {
    return Number(showB.rating.average || 0) - Number(showA.rating.average || 0);
  });

  return sortedByRating.slice(0, 5);
});
</script>

<style lang="scss" scoped>
.shows-list {
  display: block;
  // flex-direction: column;
  // gap: 0 30px;

  &__title {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    font-size: 30px;
    color: var(--color-heading);
  }

  &__items {
    display: flex;
    // flex-direction: column;
    gap: 0 30px;
  }
}
</style>
