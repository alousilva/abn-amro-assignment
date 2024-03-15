<template>
  <div class="genre-page">
    <header>
      <h2>{{ genreName }}</h2>
    </header>
    <main>
      <div v-if="selectedGenreIsValid" class="genre-page__content">
        <show-item
          v-for="show in showsSortedByRating"
          :key="show.id"
          :show="show"
          @open-show-details="openShowHandler"
        />
      </div>
      <div v-else>
        <p>The genre {{ selectedGenre }} does not exist.</p>
        Put a sad face
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ShowItem from "@/components/ShowItem.vue";
import { fetchShows } from "@/stores/api";
import type { Show } from "@/types";
import { showGenres } from "@/utils/constants";
import { useQuery } from "@tanstack/vue-query";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const selectedGenre = ref<string>(route.params.genre);
const genreName = computed(() => {
  return showGenres[selectedGenre.value]?.name || "";
});
const selectedGenreIsValid = computed(() => {
  return Object.keys(showGenres).includes(selectedGenre.value);
});

const page = ref(1);

const {
  // isLoading,
  isError: showsIsError,
  data: showsData,
  error: showsError,
  isPending: showsIsPending,
  // isFetching,
} = useQuery({
  queryKey: ["shows", page],
  queryFn: () => {
    if (!genreName.value) return [];
    return fetchShows(page);
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const filteredShowsByGenre = computed(() => {
  return showsData.value?.filter((show) => show.genres.includes(genreName.value)) || [];
});

const showsSortedByRating = computed(() => {
  const sortedByRating = [...filteredShowsByGenre.value].sort((showA, showB) => {
    return Number(showB.rating.average || 0) - Number(showA.rating.average || 0);
  });

  return sortedByRating;
});

const openShowHandler = (showId: Show["id"]) => {
  router.push({
    path: `/details/${showId}`,
  });
};
</script>

<style lang="scss" scoped>
.genre-page {
  header {
    h2 {
      font-size: 3rem;
    }
  }

  &__content {
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
        grid-template-columns: repeat(4, 1fr); /* Switches to 5 columns */
      }
    }

    @media (min-width: 1280px) {
      & {
        grid-template-columns: repeat(5, 1fr); /* Switches to 5 columns */
      }
    }
  }
}
</style>
