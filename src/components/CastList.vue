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
}
</style>
