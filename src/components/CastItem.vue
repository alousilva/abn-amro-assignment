<template>
  <div class="cast-item" tabindex="0">
    <img :src="castMember.character.image?.medium" />
    <!-- <span class="cast-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import type { CastMember } from "@/types";

defineProps<{ castMember: CastMember }>();
</script>

<style lang="scss" scoped>
.cast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small) var(--spacing-none);
  border-radius: var(--border-radius);
  cursor: pointer;

  img {
    border-radius: inherit;
  }

  // &__name {
  //   font-weight: var(--font-weight-1);
  // }
}
</style>
