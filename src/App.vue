<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <nav class="wrapper__navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
      <RouterLink to="/surprise">Surprise me</RouterLink>
    </nav>
    <div class="wrapper__content">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1280px;

  &__navigation {
    position: fixed;
    top: 0;
    width: 100%;
    font-size: 12px;
    text-align: center;
    height: 40px;

    // background-color: rgb(194, 245, 245);

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      &:first-of-type {
        border: 0;
      }

      &.router-link-exact-active {
        color: var(--color-text);
      }

      &.router-link-exact-active:hover {
        background-color: transparent;
      }
    }
  }

  &__content {
    margin-top: 2rem;
    :deep(.home-page) {
      max-width: 767px;
      margin-inline: auto;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Tablet
@media (min-width: 768px) {
}

// Desktop
@media (min-width: 992px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
