<template>
  <div class="input-text">
    <input v-bind="$attrs" :value="props.modelValue" @input="debouncedInputChange" />
    <button
      class="clear-input-button"
      :style="{
        display: props.modelValue ? 'block' : 'none',
      }"
      aria-label="Clear input"
      title="Clear input"
      @click="debouncedInputChange"
    >
      X
    </button>
  </div>
</template>

<script setup lang="ts">
import { debounce } from "@/utils/helpers";

const props = withDefaults(defineProps<{ modelValue: string; debounceDelay?: number }>(), {
  modelValue: "",
  debounceDelay: 0,
});

const emits = defineEmits(["update:model-value"]);

const handleInputChange = (data: Event) => {
  emits("update:model-value", data.target?.value || "");
};

const debouncedInputChange = debounce(handleInputChange, props.debounceDelay);
</script>

<style lang="scss" scoped>
.input-text {
  max-width: 300px;
  position: relative;
  display: inline-block;

  input {
    height: 50px;
    padding: var(--spacing-medium) var(--spacing-medium);

    width: 100%;
    margin: 0 auto;
    --input-border: 1px solid rgb(11% 11% 3.14% / 0.08);
    border: var(--input-border);
    border-radius: var(--border-radius);
    transition: 0.2s;
    // height: var(--sizing-input-default);
    appearance: none;
    width: inherit;
    font-size: var(--font-size-4);
  }

  .clear-input-button {
    position: absolute;
    right: 12px;
    top: 10px;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    appearance: none;
    border: none;
    border-radius: 50%;
    background: gray;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .clear-input-button:hover {
    background: darkgray;
  }
}
</style>
