<template>
  <div class="tab-panel" v-show="header === selectedHeader">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

// import type { Show } from '@/types';

const selectedHeader = inject("selectedHeader");

withDefaults(defineProps<{ header: string }>(), {
  header: "",
});
</script>
