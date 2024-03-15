<template>
  <div class="tab-view">
    <ul class="tab-view__header">
      <li
        v-for="header in tabHeaders"
        :key="header"
        tabindex="0"
        @click="tabSelectionHandler(header)"
        @keydown.enter="tabSelectionHandler(header)"
      >
        {{ header }}
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
  // padding: var(--spacing-medium) var(--spacing-medium);

  &__header {
    display: flex;
    gap: var(--spacing-none) var(--spacing-small);
    height: 50px;
    background-color: #b1d4a9;

    li {
      cursor: pointer;
    }
  }

  &__content {
    display: flex;
  }
}
</style>
