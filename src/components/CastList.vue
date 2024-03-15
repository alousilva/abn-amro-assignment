<template>
  <div class="cast-list">
    <cast-item
      v-for="castMember in castMembers"
      :key="castMember.character.id"
      :cast-member="castMember"
    />
  </div>
</template>
<script setup lang="ts">
import CastItem from "@/components/CastItem.vue";
import type { CastMember } from "@/types";

withDefaults(defineProps<{ castMembers: CastMember[] }>(), {
  castMembers: () => [],
});
</script>

<style lang="scss" scoped>
.cast-list {
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
      grid-template-columns: repeat(5, 1fr); /* Switches to 5 columns */
    }
  }
  :deep(.episode-item) {
    background-color: #f2f2f2;
    padding: var(--spacing-normal);
    text-align: center;
  }
}
</style>
