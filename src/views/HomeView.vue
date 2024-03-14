<script setup lang="ts">
import PosterGrid from '@/components/PosterGrid.vue';
</script>

<template>
  <header>
    <input type="text" id="search-input" aria-label="Search series" />
  </header>
  <main>
    <poster-grid />
  </main>
</template>
