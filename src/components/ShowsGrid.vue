<template>
  <div class="shows-grid">
    <div class="shows-grid__content">
      <div class="shows-grid__lists">
        <shows-list
          v-for="[genreType, genreDetails] in Object.entries(showGenres)"
          :key="genreType"
          :shows="shows"
          :genreType="genreType"
          :genreName="genreDetails.name"
          @open-show-details="$emit('open-show-details', $event)"
          @view-all-shows-by-genre="$emit('view-all-shows-by-genre', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShowsList from "@/components/ShowsList.vue";
import type { Show } from "@/types";
import { showGenres } from "@/utils/constants";

withDefaults(defineProps<{ shows: Show[] }>(), {
  shows: () => [],
});

defineEmits(["open-show-details", "view-all-shows-by-genre"]);
</script>

<style lang="scss" scoped>
.shows-grid {
  display: flex;

  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xlarge) var(--spacing-none);
  }

  &__search {
    display: flex;
    width: 100%;

    input {
      max-width: 300px;
      margin: 0 auto;
    }
  }

  &__lists {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xlarge) var(--spacing-none);
  }

  .side-panel {
    width: 400px;
    height: 100vh;
    background-color: red;
  }
}
</style>
