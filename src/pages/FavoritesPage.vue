<template>
  <div class="favorites-page">
    <header>
      <h2>Your favorite shows</h2>
    </header>
    <main>
      <div v-if="shows.length > 0" class="favorites-page__content">
        <show-item
          v-for="show in shows"
          :key="show.id"
          :show="show"
          @open-show-details="openShowHandler"
        />
      </div>
      <div v-else>
        <p>You don't have any favorites yet :.</p>
        Put a sad face
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ShowItem from "@/components/ShowItem.vue";
import { useFavoritesStore } from "@/stores/favorites";
import type { Show } from "@/types";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();

const store = useFavoritesStore();
const { shows } = storeToRefs(store);
const { addShowToFavorites, removeShowFromFavorites } = store;

const openShowHandler = (showId: Show["id"]) => {
  router.push({
    path: `/details/${showId}`,
  });
};
</script>

<style lang="scss" scoped>
.favorites-page {
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
