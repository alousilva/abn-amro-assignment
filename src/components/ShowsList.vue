<template>
  <div class="shows-list">
    <div class="shows-list__title">{{ title }}</div>
    <div class="shows-list__items">
      <show-item
        v-for="show in props.shows"
        :key="show.id"
        :show="show"
        @open-show="$emit('open-show', $event)"
      ></show-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowItem from "@/components/ShowItem.vue";
import type { Show } from "@/types";
// import type { Show } from '@/types';
// import { useQuery } from '@tanstack/vue-query';

// const fetcher = async (): Promise<Show[]> =>
//   await fetch(`https://api.tvmaze.com/shows`).then((response) => response.json());

// const { isPending, isError, data, error } = useQuery({
//   queryKey: ['show'],
//   queryFn: () => fetcher(),
// });

type Props = {
  title?: string;
  shows: Show[];
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
  shows: () => [],
});

defineEmits(["open-show"]);
</script>

<style lang="scss" scoped>
.shows-list {
  display: block;
  // flex-direction: column;
  // gap: 0 30px;

  &__title {
    margin: 8px 0;
    font-size: 24px;
  }

  &__items {
    display: flex;
    // flex-direction: column;
    gap: 0 30px;
  }
}
</style>
