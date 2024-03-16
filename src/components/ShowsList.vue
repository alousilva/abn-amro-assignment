<template>
  <div class="shows-list" v-if="contentIsVisible">
    <div class="shows-list__title">
      <span>{{ genreName }}</span>
      <button
        v-if="viewAllButtonVisibility"
        @click="$emit('view-all-shows-by-genre', props.genreType)"
      >
        View all
      </button>
    </div>
    <div class="shows-list__items">
      <!-- <show-item-skeleton v-if="props.isLoading" /> -->
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
// import ShowItemSkeleton from "@/components/ShowItemSkeleton.vue";
import type { Show } from "@/types";
import { computed } from "vue";

type Props = {
  genreType: string;
  genreName: string;
  shows: Show[];
  viewAllButtonIsVisible: boolean;
  maxVisibleItems?: number;
};

const props = withDefaults(defineProps<Props>(), {
  genreType: "",
  genreName: "",
  viewAllButtonIsVisible: false,
  maxVisibleItems: 7,
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

  if (props.viewAllButtonIsVisible) {
    return sortedByRating.slice(0, props.maxVisibleItems);
  }
  return sortedByRating;
});

const viewAllButtonVisibility = computed(() => {
  return props.viewAllButtonIsVisible && filteredShowsByGenre.value.length > props.maxVisibleItems;
});
</script>

<style lang="scss" scoped>
.shows-list {
  display: block;
  // add media queries

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
    max-width: 800px;
    overflow-y: auto;
    padding: 40px 0;
  }
}
</style>
