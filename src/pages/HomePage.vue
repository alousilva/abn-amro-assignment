<template>
  <div class="home-page">
    <toaster-popup v-if="toasterIsVisible" :message="toasterMessage" />
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
    <main>
      <div v-if="noShowsFoundByKeyword">No shows found</div>
      <shows-grid
        v-else
        :shows="showsGridData"
        :view-all-button-is-visible="viewAllButtonIsVisible"
        @open-show-details="openShowHandler"
        @view-all-shows-by-genre="viewAllShowsByGenreHandler"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import ShowsGrid from "@/components/ShowsGrid.vue";
import { useToaster } from "@/composables/userToaster";
import { useQuery } from "@tanstack/vue-query";
import type { Show } from "@/types";
import { computed, ref, watch } from "vue";
import { fetchShows, fetchShowsByKeyword } from "@/stores/api";
import { useRouter } from "vue-router";

const router = useRouter();
const { toasterIsVisible, toasterMessage, showToaster } = useToaster();

// The initial page load will always point to page 1 to get some data for the sake of the example
const page = ref(1);
const searchKeyword = ref("");

const {
  data: showsByKeywordData,
  error: showsByKeywordError,
  status: showsByKeywordStatus,
} = useQuery({
  queryKey: ["shows-by-keyword", searchKeyword],
  queryFn: () => {
    if (!searchKeyword.value) {
      return [];
    }
    return fetchShowsByKeyword(searchKeyword);
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const noShowsFoundByKeyword = computed(() => {
  return (
    searchKeyword.value &&
    showsByKeywordStatus.value === "success" &&
    showsByKeywordData.value?.length === 0
  );
});

const { data: showsData } = useQuery({
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

const viewAllButtonIsVisible = computed(() => {
  return !searchKeyword.value;
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

watch([showsByKeywordError], (value) => {
  const errorMessage = value ? (value[0]?.message as string) : "Something went wrong";
  showToaster(errorMessage);
});
</script>

<style lang="scss" scoped>
.home-page {
  padding: var(--spacing-large);

  &__search {
    display: flex;
    width: 100%;
    margin-inline: auto;
    padding: var(--spacing-large) 0;
  }
}
</style>
