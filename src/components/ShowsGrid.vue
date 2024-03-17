<template>
  <div class="shows-grid">
    <shows-list
      v-for="[genreType, shows] in Object.entries(groupedShowsByGenre)"
      :key="genreType"
      :shows="shows"
      :genre-type="genreType"
      :view-all-button-is-visible="viewAllButtonIsVisible"
      @open-show-details="$emit('open-show-details', $event)"
      @view-all-shows-by-genre="$emit('view-all-shows-by-genre', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import ShowsList from "@/components/ShowsList.vue";
import type { GroupedShowsByGenre } from "@/types";

withDefaults(
  defineProps<{ groupedShowsByGenre: GroupedShowsByGenre; viewAllButtonIsVisible: boolean }>(),
  {
    groupedShowsByGenre: () => ({}),
    viewAllButtonIsVisible: true,
  },
);

defineEmits(["open-show-details", "view-all-shows-by-genre"]);
</script>

<style lang="scss" scoped>
.shows-grid {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: var(--spacing-normal) var(--spacing-none);
}
</style>
