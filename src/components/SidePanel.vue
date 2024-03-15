<template>
  <div :class="rootCssClasses">
    <div v-if="props.showError">Something went wrong</div>
    <div v-else class="side-panel__content">
      <!-- <div class="side-panel__image" :style="imageContainerStyles"></div> -->
      <button class="side-panel__close" @click="$emit('close')">back</button>
      <div class="side-panel__title">{{ showData?.name }}</div>
      <div class="side-panel__container">
        <div class="side-panel__container-top">
          <span>{{ showData?.runtime }} min</span>
          <span>{{ showAiringDates }}</span>
        </div>
        <div class="side-panel__container-middle">
          <div class="side-panel__summary" v-html="showData?.summary"></div>
          <div class="side-panel__genres">
            <tag-item v-for="genre in showData?.genres" :key="genre" :text="genre" />
          </div>
        </div>
        <div class="side-panel__container-bottom">
          <span>{{ showData?.rating.average || "?" }} / 10</span>
          <a
            :href="`https://www.imdb.com/title/${showData?.externals.imdb}`"
            :aria-label="showData?.name"
            target="_blank"
            ><icon-imdb
          /></a>
        </div>
        <button>Show more</button>
      </div>
    </div>
    <!-- {{ show }} -->
  </div>
</template>

<script setup lang="ts">
// import IconBack from '@/components/icons/IconBack.vue';
import IconImdb from "@/components/icons/IconImdb.vue";
import TagItem from "@/components/TagItem.vue";
import type { Show } from "@/types";
import { computed } from "vue";

type Props = {
  visible: boolean;
  showData: Show | null;
  showError: any;
};

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  showData: null,
  showError: null,
});

const imageContainerStyles = computed(() => {
  return {
    backgroundImage: `url('${props.showData?.image.medium}')`,
  };
});

const rootCssClasses = computed(() => {
  return {
    "side-panel": true,
    "side-panel--visible": props.visible,
  };
});

const showAiringDates = computed(() => {
  return `${props.showData?.premiered} - ${props.showData?.ended ? props.showData.ended : "now"}`;
});

defineEmits(["close"]);
</script>
<style lang="scss" scoped>
.side-panel {
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(0px);
  // opacity: 1;
  visibility: visible;
  width: 600px;
  height: 100%;
  // background-color: $color-surface-1;
  // color: $color-dark;
  // border-right: 3px solid $color-surface-outline;
  // transition: $transition-sidebar;
  z-index: 99;
  // padding: 20px;
  // position: absolute;
  // top: 0;
  // right: 0;
  // width: 50%;
  // height: 100%;
  // visibility: hidden;
  transform: translateX(600px);
  // opacity: 0;

  &--visible {
    transform: translateX(0px);
  }

  // &__overlay {
  //   position: fixed;
  //   height: 100%;
  //   width: 100%;
  //   left: 0;
  //   top: 0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   pointer-events: auto;
  //   background: #ebedeb;
  //   opacity: 0.3;
  // }

  &__close {
    height: 35px;
    border-radius: 50%;
    position: absolute;
  }

  &__content {
    position: relative;
    background-color: #b1d4a9;
    height: 100%;
    overflow-y: auto;
  }

  &__title {
    width: 100%;
    min-height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    padding: 20px;
  }

  &__image {
    background-repeat: no-repeat, no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0.3;
    filter: blur(8px);
  }

  &__container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px 0;
  }

  &__container-top {
    display: flex;
    justify-content: space-between;

    span {
      font-size: var(--font-size-4);
    }
    // span {
    //   background: green;
    //   padding: 6px;
    //   border-radius: var(--border-radius);
    // }
  }

  &__container-middle {
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  }

  &__genres {
    display: flex;
    // flex-direction: column;
    gap: var(--spacing-none) var(--spacing-small);

    // &-list {
    //   display: flex;
    // }
  }

  &__container-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-none) var(--spacing-small);
    height: var(--spacing-xlarge);

    a {
      height: 100%;
    }
  }
}
</style>
