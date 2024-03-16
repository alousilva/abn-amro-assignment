<template>
  <div class="wrapper">
    <nav class="wrapper__navigation">
      <div>TvMaze</div>
      <div class="wrapper__navigation-links">
        <RouterLink to="/">
          <div class="wrapper__navigation-links-item">
            <icon-home />
            <span>Home</span>
          </div>
        </RouterLink>
        <RouterLink to="/favorites">
          <div class="wrapper__navigation-links-item">
            <icon-favorite />
            <span>Favorites</span>
          </div>
        </RouterLink>
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
import IconHome from "@/components/icons/IconHome.vue";
import IconFavorite from "@/components/icons/IconFavorite.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss" scoped>
.wrapper {
  // max-width: 1280px;

  &__navigation {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(203, 247, 232);
    width: 100%;
    font-size: 12px;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;

    &-links {
      width: 250px;
      height: 40px;
      display: flex;
      align-items: center;

      &-item {
        display: flex;
        width: 100px;
        align-items: center;

        span {
          display: none;
        }
      }
    }

    // background-color: rgb(194, 245, 245);

    a {
      display: inline-block;
      padding: 0 1rem;
      // border-left: 1px solid var(--color-border);

      &:first-of-type {
        border: 0;
      }

      &.router-link-exact-active {
        color: var(--color-text);
        // border-bottom: 2px solid green;
      }

      &.router-link-exact-active:hover {
        background-color: transparent;
      }
    }
  }

  &__content {
    margin-top: 5rem;

    // :deep(.home-page) {
    //   max-width: 767px;
    //   margin-inline: auto;
    // }
  }

  // Tablet
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

// Desktop
@media (min-width: 992px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  // .logo {
  //   margin: 0 2rem 0 0;
  // }

  // header .wrapper {
  //   display: flex;
  //   place-items: flex-start;
  //   flex-wrap: wrap;
  // }

  // nav {
  //   text-align: left;
  //   margin-left: -1rem;
  //   font-size: 1rem;

  //   padding: 1rem 0;
  //   margin-top: 1rem;
  // }
}
</style>
