<template>
  <div class="favorite-button">
    <input
      type="checkbox"
      :id="`${formattedName}-${itemId}`"
      v-model="modelValue"
      :aria-label="`favorite item ${formattedName}`"
    />
    <label :for="`${formattedName}-${itemId}`">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path
          d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
      {{ labelText }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{ itemId?: number; itemName?: string }>(), {
  itemId: 0,
  itemName: "",
});

const modelValue = defineModel<boolean>();
const labelText = computed(() => {
  return modelValue.value ? "Added to favorites" : "Add to favorites";
});

const formattedName = computed(() => {
  return props.itemName.replace(/ /g, "-");
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

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    font-size: var(--font-size-3);
    color: var(--color-text);
    transition: color 0.5s;
    cursor: pointer;
  }

  label svg {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: var(--color-text);
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    margin-right: 8px;
    transition: stroke 0.3s ease;
  }

  input[type="checkbox"]:checked + label svg {
    stroke: #ff4500;
    fill: #ff4500;
    animation: fadeStroke 0.3s ease;
  }
}
</style>
