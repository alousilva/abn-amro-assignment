<template>
  <div class="favorite-button">
    <input type="checkbox" id="favorite" v-model="modelValue" />
    <label for="favorite">
      <icon-heart />
      <span class="text">{{ labelText }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import IconHeart from "@/components/icons/IconHeart.vue";
import { computed } from "vue";

const modelValue = defineModel<boolean>();
const labelText = computed(() => {
  return modelValue.value ? "Added to favorites" : "Add to favorites";
});
</script>

<style lang="scss" scoped>
.favorite-button {
  /* Animation for stroke fade in and out */
  @keyframes fadeStroke {
    0% {
      stroke-opacity: 0;
    }
    50% {
      stroke-opacity: 1;
    }
    100% {
      stroke-opacity: 0;
    }
  }

  display: inline-block;
  cursor: pointer;

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    color: #333;
    cursor: pointer;
  }

  label svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #333;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    margin-right: 8px;
    transition: stroke 0.3s ease;
  }

  label .text {
    display: inline-block;
  }

  input[type="checkbox"]:checked + label svg {
    stroke: #ff4500;
    animation: fadeStroke 0.3s ease;
    fill: #ff4500;
  }
}
</style>
