<template>
  <div v-show="header === selectedHeader" class="tab-panel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

const selectedHeader = inject("selectedHeader");

withDefaults(defineProps<{ header: string }>(), {
  header: "",
});
</script>
