<template>
  <div class="home-page">
    <header>
      <input-text
        v-model="searchKeyword"
        class="home-page__search"
        :debounce-delay="300"
        type="text"
        id="search-input"
        aria-label="Search shows"
        placeholder="Search shows"
      />
    </header>
    <!-- <main>
      <span v-if="showsIsPending">Loading shows...</span>
      <span v-else-if="showsIsError">Error: {{ showsError?.message }}</span>
      <shows-grid
        v-else
        :shows="showsGridData"
        @open-show-details="openShowHandler"
        @view-all-shows-by-genre="viewAllShowsByGenreHandler"
      />
    </main> -->
    <main>
      <shows-grid
        :shows="showsGridData"
        @open-show-details="openShowHandler"
        @view-all-shows-by-genre="viewAllShowsByGenreHandler"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ShowsGrid from "@/components/ShowsGrid.vue";
import { useQuery } from "@tanstack/vue-query";
import type { Show } from "@/types";
import { computed, ref } from "vue";
import { fetchShows, fetchShowsByKeyword } from "@/stores/api";
import { useRouter } from "vue-router";

const router = useRouter();

// Query
const page = ref(1);
const searchKeyword = ref("");

const {
  isError: showsByKeywordIsError,
  data: showsByKeywordData,
  error: showsByKeywordError,
  isPending: showsByKeywordIsPending,
  // isFetching,
} = useQuery({
  queryKey: ["shows-by-keyword", searchKeyword],
  queryFn: () => fetchShowsByKeyword(searchKeyword),
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const {
  isLoading: showsIsLoading,
  isError: showsIsError,
  data: showsData,
  error: showsError,
  isPending: showsIsPending,
  isFetching: showsIsFetching,
  // isFetching,
} = useQuery({
  queryKey: ["shows", page],
  queryFn: () => fetchShows(page),
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const showsGridData = computed(() => {
  if (searchKeyword.value) {
    const parsedShows = showsByKeywordData.value?.map((show) => show.show);
    return parsedShows;
  } else {
    return showsData.value;
  }
});

const openShowHandler = (showId: Show["id"]) => {
  router.push({
    path: `/details/${showId}`,
  });
};

const viewAllShowsByGenreHandler = (genreType: string) => {
  router.push({
    path: `/genre/${genreType}`,
  });
};
</script>

<style lang="scss" scoped>
.home-page {
  &__search {
    display: flex;
    width: 100%;
  }
}
</style>
