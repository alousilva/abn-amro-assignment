<template>
  <div class="favorites-page">
    <header>
      <h2>Your favorite shows</h2>
    </header>
    <main>
      <div v-if="shows.length > 0" class="favorites-page__content">
        <div class="favorites-page__controls">
          <p>
            Total shows: <strong>{{ shows.length }}</strong>
          </p>
          <button class="action-button" @click="resetFavorites">
            <i class="fa fa-trash-o" aria-hidden="true"></i>Clear all favorites
          </button>
        </div>
        <div class="favorites-page__content-items">
          <show-item
            v-for="show in shows"
            :key="show.id"
            :show="show"
            @open-show-details="openShowHandler"
          />
        </div>
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
const { resetFavorites } = store;

const openShowHandler = (showId: Show["id"]) => {
  router.push({
    path: `/details/${showId}`,
  });
};
</script>

<style lang="scss" scoped>
.favorites-page {
  padding: var(--spacing-large);

  header {
    display: flex;
    justify-content: space-between;
  }

  &__controls {
    display: flex;
    align-items: center;
    padding: var(--spacing-medium) var(--spacing-none);
    min-width: 300px;

    button {
      margin-left: auto;
    }
  }

  &__content {
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

  @media (min-width: 992px) {
    &__controls {
      p {
        font-size: var(--font-size-4);
      }
    }
  }
}
</style>
