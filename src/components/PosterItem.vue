<template>
  <div class="poster-item" @click="$emit('open-poster-item', props.show?.id)">
    <img :src="props.show?.image.medium" />
    <span>{{ props.show?.name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Show } from '@/types';

type Props = {
  show: Show | null;
};

const props = withDefaults(defineProps<Props>(), {
  show: null,
});

defineEmits(['open-poster-item']);
</script>

<style lang="scss" scoped>
.poster-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
}
</style>
