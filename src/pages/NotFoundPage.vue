<template>
  <header>
    <h2>The page you are trying to access does not exist</h2>
  </header>
  <main>
    <img :src="IconPageNotFound" alt="page not found icon" />
  </main>
</template>

<script setup lang="ts">
import IconPageNotFound from "@/assets/icon-page-not-found.svg";
</script>
