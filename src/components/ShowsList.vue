<template>
  <div class="shows-list">
    <div class="shows-list__title">
      <span>{{ genreName }}</span>
      <button
        v-if="viewAllButtonIsVisible"
        class="action-button"
        :aria-label="`View all ${genreName} shows`"
        @click="$emit('view-all-shows-by-genre', props.genreType)"
      >
        <i class="fa fa-eye" aria-hidden="true"></i>
        Explore
      </button>
    </div>
    <div class="shows-list__items scrollbox">
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
import { showGenres } from "@/utils/constants";
import { sortedShowsByRating } from "@/utils/helpers";
import { computed } from "vue";

type Props = {
  genreType: string;
  shows: Show[];
  viewAllButtonIsVisible: boolean;
  maxVisibleItems?: number;
};

const props = withDefaults(defineProps<Props>(), {
  genreType: "",
  viewAllButtonIsVisible: true,
  maxVisibleItems: 9,
  shows: () => [],
});

defineEmits(["open-show-details", "view-all-shows-by-genre"]);

const showsSortedByRating = computed(() => {
  const sortedByRating = sortedShowsByRating(props.shows);

  if (props.viewAllButtonIsVisible) {
    return sortedByRating.slice(0, props.maxVisibleItems);
  }
  return sortedByRating;
});

const genreName = computed(() => {
  return showGenres[props.genreType].name;
});
</script>

<style lang="scss" scoped>
.shows-list {
  &__title {
    display: flex;
    justify-content: space-between;
    margin: var(--spacing-small) var(--spacing-none);
    font-size: var(--font-size-5);
    color: var(--color-text);
  }

  &__items {
    display: flex;
    gap: var(--spacing-none) var(--spacing-large);
    overflow-y: auto;
    padding: var(--spacing-normal) 6px;
  }
}
</style>
