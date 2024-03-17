<template>
  <div class="wrapper">
    <nav class="wrapper__navigation">
      <div><strong>TvMaze</strong></div>
      <div class="wrapper__navigation-links">
        <RouterLink to="/">
          <div class="wrapper__navigation-links-item">
            <i class="fa fa-home"></i>
            <span>Home</span>
          </div>
        </RouterLink>
        <RouterLink to="/favorites">
          <div class="wrapper__navigation-links-item">
            <i class="fa fa-star"></i>
            <span>Favorites</span>
          </div>
        </RouterLink>
      </div>
      <div class="wrapper__theme">
        <button
          @click="toggleDarkMode"
          aria-label="Toggle dark/light theme"
          class="wrapper__theme-button"
        >
          <i v-if="theme === 'light'" class="fa fa-moon-o" aria-hidden="true"></i>
          <i v-else class="fa fa-sun-o" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
    <div class="wrapper__content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";

const store = useThemeStore();
const { toggleDarkMode } = store;
const { theme } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.wrapper {
  &__navigation {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--color-background-mute);
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    padding: var(--spacing-large);

    &-links {
      height: 40px;
      display: flex;
      align-items: center;
      gap: var(--spacing-none) var(--spacing-large);

      &-item {
        display: flex;
        align-items: center;
        padding: 6px;
        gap: var(--spacing-none) var(--spacing-medium);

        i {
          font-size: 36px;
        }

        span {
          display: none;
        }
      }
    }

    a {
      display: inline-block;
      text-decoration: none;
      color: var(--bg-color-button);
      transition: 0.4s;

      &:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
        border-radius: 4px;
      }

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

  &__theme-button {
    width: 40px;
    height: 40px;
    text-decoration: none;
    border: none;
    transition: background-color 0.3s;
    color: var(--color-text);
    background-color: var(--color-background-soft);

    i {
      font-size: 24px;
    }
  }

  &__content {
    margin-top: 4rem;
  }

  @media (min-width: 768px) {
    &__navigation {
      &-links {
        &-item {
          span {
            display: block;
          }
        }
      }
    }
  }
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

@media (min-width: 992px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
