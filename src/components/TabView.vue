<template>
  <div class="tab-view">
    <ul class="tab-view__header">
      <li
        v-for="header in tabHeaders"
        :key="header"
        class="tab-view__header-item"
        :class="{ 'tab-view__header-item--active': header === selectedHeader }"
      >
        <button
          :aria-label="`${header} tab`"
          class="action-button"
          @click="tabSelectionHandler(header)"
        >
          {{ header }}
        </button>
      </li>
    </ul>
    <div class="tab-view__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, useSlots, watch } from "vue";

const slots = useSlots();
const slotItems = slots.default() || [];
const tabHeaders = ref(slotItems.map((tab) => tab.props?.header));
const selectedHeader = ref<string>(tabHeaders.value[0]);

provide("selectedHeader", selectedHeader);

const emits = defineEmits(["selected-header"]);

const tabSelectionHandler = (header: string) => {
  selectedHeader.value = header;
};

watch(selectedHeader, () => {
  emits("selected-header", selectedHeader.value);
});
</script>

<style lang="scss" scoped>
.tab-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-none) var(--spacing-small);

  &__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-none) var(--spacing-medium);
    padding: var(--spacing-medium) var(--spacing-none);

    &-item--active {
      button {
        background-color: #39903c;
      }
    }
  }
}
</style>
