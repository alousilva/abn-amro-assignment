<template>
  <div class="genre-page">
    <header>
      <h2>{{ genreName }}</h2>
      <p>{{ showGenres[selectedGenre]?.description }}</p>
    </header>
    <main>
      <div v-if="selectedGenreIsValid" class="genre-page__content">
        <div class="genre-page__content-items">
          <show-item
            v-for="show in filteredShowsByGenre"
            :key="show.id"
            :show="show"
            @open-show-details="openShowHandler"
          />
        </div>
        <div class="genre-page__content-see-more">
          <span v-if="data?.length === 0">There are no more shows to load</span>
          <button v-else class="action-button" aria-label="Load more shows" @click="loadMoreShows">
            See more shows
          </button>
        </div>
      </div>
      <div v-else class="genre-page__genre-not-found">
        <p>
          The genre <strong>{{ selectedGenre }}</strong> does not exist.
        </p>
        <i class="fa fa-frown-o" aria-hidden="true"></i>
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
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const selectedGenre = ref<string>(route.params.genre as string);
const genreName = computed(() => {
  return showGenres[selectedGenre.value]?.name || "";
});
const selectedGenreIsValid = computed(() => {
  return Object.keys(showGenres).includes(selectedGenre.value);
});

const loadedShows = ref<Show[]>([]);
const page = ref(1);
const { data } = useQuery({
  queryKey: ["shows", page],
  queryFn: () => {
    if (!genreName.value) {
      return [];
    }
    return fetchShows(page);
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const filteredShowsByGenre = computed(() => {
  return loadedShows.value?.filter((show) => show.genres.includes(genreName.value)) || [];
});

// const showsSortedByRating = computed(() => {
//   const sortedByRating = [...filteredShowsByGenre.value].sort((showA, showB) => {
//     return Number(showB.rating.average || 0) - Number(showA.rating.average || 0);
//   });

//   return sortedByRating;
// });

const loadMoreShows = () => {
  page.value += 1;
};

const openShowHandler = (showId: Show["id"]) => {
  router.push({
    path: `/details/${showId}`,
  });
};

watch(
  () => data.value,
  (shows) => {
    if (shows && shows.length > 0) {
      loadedShows.value.push(...shows);
    }
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.genre-page {
  padding: var(--spacing-large);

  main {
    padding-top: var(--spacing-normal);
  }

  &__content {
    display: flex;
    flex-direction: column;

    &-see-more {
      margin: 20px auto;

      button {
        height: 50px;
        min-width: 300px;
      }
    }

    &-items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--spacing-normal) var(--spacing-small);
      justify-items: center;
      align-items: center;

      @media (min-width: 768px) {
        & {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (min-width: 992px) {
        & {
          grid-template-columns: repeat(4, 1fr);
        }
      }

      @media (min-width: 1280px) {
        & {
          grid-template-columns: repeat(5, 1fr);
        }
      }
    }
  }

  &__genre-not-found {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
    margin-inline: auto;

    svg {
      max-width: 100px;
    }
  }

  @media (min-width: 992px) {
    header {
      p {
        font-size: var(--font-size-4);
      }
    }
  }
}
</style>
