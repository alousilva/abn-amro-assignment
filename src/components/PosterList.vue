<template>
  <div class="poster-list">
    <poster-item
      v-for="show in props.shows"
      :key="show.id"
      :show="show"
      @open-poster-item="(data) => console.log(data)"
    ></poster-item>
  </div>
</template>

<script setup lang="ts">
import PosterItem from '@/components/PosterItem.vue';
import type { Show } from '@/types';
// import type { Show } from '@/types';
// import { useQuery } from '@tanstack/vue-query';

// const fetcher = async (): Promise<Show[]> =>
//   await fetch(`https://api.tvmaze.com/shows`).then((response) => response.json());

// const { isPending, isError, data, error } = useQuery({
//   queryKey: ['show'],
//   queryFn: () => fetcher(),
// });

type Props = {
  shows: Show[];
};

const props = withDefaults(defineProps<Props>(), {
  shows: () => [],
});
</script>

<style lang="scss" scoped>
.poster-list {
  display: flex;
  gap: 0 30px;
}
</style>
