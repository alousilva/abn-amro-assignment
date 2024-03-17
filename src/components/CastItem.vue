<template>
  <div class="cast-item" tabindex="0">
    <v-lazy-image
      v-if="castMember.person.image?.medium"
      class="cast-item__person-image"
      :src="castMember.person.image.medium || ''"
      :alt="`image for ${castMember.person.name}`"
    />
    <i
      v-else
      class="fa fa-user cast-item__person-image"
      :title="`image not found for ${castMember.person.name}`"
    ></i>
    <span class="cast-item__person"><strong>Person:</strong> {{ castMember.person.name }}</span>
    <v-lazy-image
      v-if="castMember.character.image?.medium"
      class="cast-item__char-image"
      :src="castMember.character.image.medium || ''"
      :alt="`image for ${castMember.character.name}`"
    />
    <i
      v-else
      class="fa fa-user cast-item__char-image"
      :title="`image not found for ${castMember.character.name}`"
    ></i>
    <span class="cast-item__char"><strong>Char:</strong> {{ castMember.character.name }}</span>
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

  span {
    text-align: center;
    font-size: var(--font-size-1);
  }

  img {
    border-radius: var(--border-radius);
    max-width: 100%;
    width: 250px;
    object-fit: cover;
    height: 250px;
  }

  i {
    font-size: 200px;
  }

  @media (min-width: 768px) {
    span {
      font-size: var(--font-size-2);
    }

    img {
      max-width: 200px;
      height: 300px;
    }
  }

  @media (min-width: 1280px) {
    img {
      max-width: inherit;
    }
  }
}
</style>
