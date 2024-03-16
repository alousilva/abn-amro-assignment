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
    <img v-else :src="IconNoFace" alt="face not found icon" />
    <span>Char: {{ castMember.character.name }}</span>
    <!-- <span class="cast-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import IconNoFace from "@/assets/icon-no-face.svg";
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
  border: 1px solid red;
  // background-color: teal;
  // padding: 20px;
  max-width: 150px;

  img {
    border-radius: inherit;
    max-width: inherit;
  }

  // &__name {
  //   font-weight: var(--font-weight-1);
  // }
}
</style>
