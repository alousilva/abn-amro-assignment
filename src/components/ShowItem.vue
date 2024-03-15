<template>
  <div
    class="show-item"
    tabindex="0"
    @click="$emit('open-show-details', props.show?.id)"
    @keydown.enter="$emit('open-show-details', props.show?.id)"
  >
    <img :src="props.show?.image?.medium" />
    <!-- <span class="show-item__name">{{ props.show?.name }}</span> -->
  </div>
</template>

<script setup lang="ts">
import type { Show } from "@/types";

const props = withDefaults(defineProps<{ show: Show | null }>(), {
  show: null,
});

defineEmits(["open-show-details"]);
</script>

<style lang="scss" scoped>
.show-item {
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
