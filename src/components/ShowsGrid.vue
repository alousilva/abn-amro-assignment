<template>
  <div class="shows-grid">
    <!-- <button @click="prevPage">Previous page</button>
    <button @click="nextPage">Next page</button> -->
    <div class="shows-grid__content">
      <div class="shows-grid__lists">
        <shows-list
          :shows="actionSeries"
          :title="seriesGenres.action.name"
          @open-show="$emit('open-show', $event)"
        ></shows-list>
        <shows-list
          :shows="comedySeries"
          :title="seriesGenres.comedy.name"
          @open-show="$emit('open-show', $event)"
        ></shows-list>
        <shows-list
          :shows="fantasySeries"
          :title="seriesGenres.fantasy.name"
          @open-show="$emit('open-show', $event)"
        ></shows-list>
        <shows-list
          :shows="romanceSeries"
          :title="seriesGenres.romance.name"
          @open-show="$emit('open-show', $event)"
        ></shows-list>
        <shows-list
          :shows="sportsSeries"
          :title="seriesGenres.sports.name"
          @open-show="$emit('open-show', $event)"
        ></shows-list>
        <shows-list
          :shows="thrillerSeries"
          :title="seriesGenres.thriller.name"
          @open-show="$emit('open-show', $event)"
        ></shows-list>
      </div>
    </div>

    <!-- <shows-list v-for="(item, index) in subsetOfData" :key="index">{{ item }}</shows-list> -->
  </div>
</template>

<script setup lang="ts">
import ShowsList from "@/components/ShowsList.vue";
import type { Show } from "@/types";
import { seriesGenres } from "@/utils/constants";
import { computed } from "vue";

const props = withDefaults(defineProps<{ shows: Show[] }>(), {
  shows: () => [],
});

const actionSeries = computed(() => {
  // return props.shows.filter(show => show.genres.includes(seriesGenres))
  return props.shows.filter((show) => show.genres.includes("Action")).slice(0, 5);
});

const comedySeries = computed(() => {
  // return props.shows.filter(show => show.genres.includes(seriesGenres))
  return props.shows.filter((show) => show.genres.includes("Comedy")).slice(0, 5);
});

const fantasySeries = computed(() => {
  // return props.shows.filter(show => show.genres.includes(seriesGenres))
  return props.shows.filter((show) => show.genres.includes("Fantasy")).slice(0, 5);
});

const romanceSeries = computed(() => {
  // return props.shows.filter(show => show.genres.includes(seriesGenres))
  return props.shows.filter((show) => show.genres.includes("Romance")).slice(0, 5);
});

const sportsSeries = computed(() => {
  // return props.shows.filter(show => show.genres.includes(seriesGenres))
  return props.shows.filter((show) => show.genres.includes("Sports")).slice(0, 5);
});

const thrillerSeries = computed(() => {
  // return props.shows.filter(show => show.genres.includes(seriesGenres))
  return props.shows.filter((show) => show.genres.includes("Thriller")).slice(0, 5);
});

// const prevPage = () => {
//   page.value = Math.max(page.value - 1, 0);
// };

// const nextPage = () => {
//   // if (!isPreviousprops.shows) {
//   page.value = page.value + 1;
//   // }
// };

defineEmits(["open-show"]);
</script>

<style lang="scss" scoped>
.shows-grid {
  display: flex;

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xlarge) var(--spacing-none);
  }

  &__search {
    display: flex;
    width: 100%;

    input {
      max-width: 300px;
      margin: 0 auto;
    }
  }

  &__lists {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xlarge) var(--spacing-none);
  }

  .side-panel {
    width: 400px;
    height: 100vh;
    background-color: red;
  }
}
</style>
