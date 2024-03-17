<template>
  <div class="input-text">
    <input v-bind="$attrs" v-model="modelValue" />
    <button
      v-if="modelValue?.length"
      aria-label="Clear input"
      title="Clear input"
      @click="clearInputHandler"
    >
      <i class="fa fa-times"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();

const clearInputHandler = () => {
  modelValue.value = "";
};
</script>

<style lang="scss" scoped>
.input-text {
  max-width: 300px;
  position: relative;
  display: inline-block;

  input {
    height: 50px;
    padding: var(--spacing-medium) var(--spacing-medium);
    padding-right: 54px;
    width: 100%;
    margin: 0 auto;
    --input-border: 1px solid rgb(11% 11% 3.14% / 0.08);
    border: var(--input-border);
    border-radius: var(--border-radius);
    transition: 0.2s;
    appearance: none;
    width: inherit;
    font-size: var(--font-size-4);
  }

  button {
    position: absolute;
    right: var(--spacing-medium);
    top: var(--spacing-xlarge);
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

    &:hover {
      background: darkgray;
    }
  }
}
</style>
