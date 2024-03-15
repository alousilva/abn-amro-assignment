<template>
  <div class="cast-item" tabindex="0">
    <v-lazy-image
      v-if="castMember.person.image"
      :src="castMember.person.image.medium || ''"
      :alt="`image for ${castMember.person.name}`"
    />
    <icon-no-face v-else />
    <span>Person: {{ castMember.person.name }}</span>
    <v-lazy-image
      v-if="castMember.character.image"
      :src="castMember.character.image.medium || ''"
      :alt="`image for ${castMember.character.name}`"
    />
    <icon-no-face v-else />
    <span>Char: {{ castMember.character.name }}</span>
    <!-- <span class="cast-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import IconNoFace from "@/components/icons/IconNoFace.vue";
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

  img {
    border-radius: inherit;
  }

  // &__name {
  //   font-weight: var(--font-weight-1);
  // }
}
</style>
