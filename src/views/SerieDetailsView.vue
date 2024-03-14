<template>
  <div class="detail">
    <h1>This is the details page {{ route.params.id }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// const props = defineProps({
//   id: {
//     type: Number,
//     required: true,
//   },
// });

// I need to hook the query key here for that particular movie
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
