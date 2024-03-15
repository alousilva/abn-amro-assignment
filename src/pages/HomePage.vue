<template>
  <div class="home-page">
    <header>
      <div class="home-page__search">
        <input
          v-model="searchKeyword"
          type="text"
          id="search-input"
          aria-label="Search series"
          placeholder="Search series"
        />
      </div>
    </header>
    <main>
      <span v-if="showsIsPending">Loading shows...</span>
      <span v-else-if="showsIsError">Error: {{ showsError?.message }}</span>
      <shows-grid v-else :shows="showsData" @open-show="openShowHandler" />
    </main>
  </div>
</template>

<script setup lang="ts">
import ShowsGrid from "@/components/ShowsGrid.vue";
import { useQuery } from "@tanstack/vue-query";
import type { Show } from "@/types";
import { ref } from "vue";
import { fetchShowById, fetchShows, fetchShowsByKeyword } from "@/stores/api";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// Query
const page = ref(1);
const searchKeyword = ref(null);

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
  // isLoading,
  isError: showsIsError,
  data: showsData,
  error: showsError,
  isPending: showsIsPending,
  // isFetching,
} = useQuery({
  queryKey: ["shows", page],
  queryFn: () => fetchShows(page),
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const selectedShow = ref<number | null>(null);
const { data: showData, error: showError } = useQuery({
  queryKey: ["show", selectedShow],
  queryFn: () => {
    if (selectedShow.value) return fetchShowById(selectedShow);
    return null;
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

// const sidePanelIsVisible = ref(false);
const openShowHandler = (showId: Show["id"]) => {
  // sidePanelIsVisible.value = true;
  // selectedShow.value = showId;
  console.log("data :>> ", showId);
  router.push({
    path: `/details/${showId}`,
  });
};
</script>

<style lang="scss" scoped>
.home-page {
  &__search {
    display: flex;
    width: 100%;

    input {
      max-width: 300px;
      margin: 0 auto;
      --input-padding-top: 6px;
      --input-padding-bottom: 6px;
      --input-border: 1px solid rgb(11% 11% 3.14% / 0.08);
      // background-color: var(--input-bg);
      // color: var(--input-fg);
      // font: var(--input-text-typography);
      border: var(--input-border);
      border-radius: var(--border-radius);
      padding: var(--input-padding-top) var(--input-padding-right) var(--input-padding-bottom)
        var(--input-padding-left) !important;
      transition: 0.2s;
      // height: var(--sizing-input-default);
      appearance: none;
      width: inherit;
    }
  }
}
</style>
