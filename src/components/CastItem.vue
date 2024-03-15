<template>
  <div class="cast-item" tabindex="0">
    <span>Person: {{ castMember.person.name }}</span>
    <span>Char: {{ castMember.character.name }}</span>
    <v-lazy-image
      :src="castMember.character.image?.medium || ''"
      :alt="`image for ${castMember.person.name}`"
    />
    <!-- <span class="cast-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import VLazyImage from "v-lazy-image";
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
