<template>
  <div class="poster-grid">
    <!-- <button @click="prevPage">Previous page</button>
    <button @click="nextPage">Next page</button> -->
    <span v-if="isPending">Loading shows...</span>
    <span v-else-if="isError">Error: {{ error?.message }}</span>
    <div v-else class="poster-grid__content">
      <poster-list :shows="actionSeries"></poster-list>
      <poster-list :shows="comedySeries"></poster-list>
      <poster-list :shows="fantasySeries"></poster-list>
      <poster-list :shows="romanceSeries"></poster-list>
      <poster-list :shows="sportsSeries"></poster-list>
      <poster-list :shows="thrillerSeries"></poster-list>
      <!-- <div class="side-panel">Side panel</div> -->
    </div>

    <!-- <poster-list v-for="(item, index) in subsetOfData" :key="index">{{ item }}</poster-list> -->
  </div>
</template>

<script setup lang="ts">
import PosterList from '@/components/PosterList.vue';
import type { Show } from '@/types';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref, type Ref } from 'vue';

const page = ref(1);
const fetcher = async (page: Ref<number>): Promise<Show[]> =>
  await fetch(`https://api.tvmaze.com/shows?page=${page.value}`).then((response) =>
    response.json(),
  );

// Query
const { isLoading, isError, data, error, isPending, isFetching } = useQuery({
  queryKey: ['show', page],
  queryFn: () => fetcher(page),
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const subsetOfData = computed(() => {
  console.log('data :>> ', data.value?.length);
  return data.value?.slice(0, 10);
});

const actionSeries = computed(() => {
  // return data.value.filter(show => show.genres.includes(seriesGenres))
  return data.value?.filter((show) => show.genres.includes('Action')).slice(0, 10);
});

const comedySeries = computed(() => {
  // return data.value.filter(show => show.genres.includes(seriesGenres))
  return data.value?.filter((show) => show.genres.includes('Comedy')).slice(0, 10);
});

const fantasySeries = computed(() => {
  // return data.value.filter(show => show.genres.includes(seriesGenres))
  return data.value?.filter((show) => show.genres.includes('Fantasy')).slice(0, 10);
});

const romanceSeries = computed(() => {
  // return data.value.filter(show => show.genres.includes(seriesGenres))
  return data.value?.filter((show) => show.genres.includes('Romance')).slice(0, 10);
});

const sportsSeries = computed(() => {
  // return data.value.filter(show => show.genres.includes(seriesGenres))
  return data.value?.filter((show) => show.genres.includes('Sports')).slice(0, 10);
});

const thrillerSeries = computed(() => {
  // return data.value.filter(show => show.genres.includes(seriesGenres))
  return data.value?.filter((show) => show.genres.includes('Thriller')).slice(0, 10);
});

const prevPage = () => {
  page.value = Math.max(page.value - 1, 0);
};

const nextPage = () => {
  // if (!isPreviousData.value) {
  page.value = page.value + 1;
  // }
};
</script>

<style lang="scss" scoped>
.poster-grid {
  display: flex;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
  }

  .side-panel {
    width: 400px;
    height: 100vh;
    background-color: red;
  }
}
</style>
