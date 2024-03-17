import type { ColorSchemeKeys } from "@/types";
import { colorScheme } from "@/utils/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const loadTheme = () => {
    const storedTheme = localStorage.getItem("theme-appearance");
    const prefersDarkColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkModeIsOn =
      storedTheme === colorScheme.dark || (!storedTheme && prefersDarkColorScheme);
    document.documentElement.classList.toggle(colorScheme.dark, darkModeIsOn);
    return darkModeIsOn ? colorScheme.dark : colorScheme.light;
  };

  const toggleDarkMode = () => {
    const newTheme: ColorSchemeKeys =
      theme.value === colorScheme.light ? colorScheme.dark : colorScheme.light;
    localStorage.setItem("theme-appearance", newTheme);
    document.documentElement.classList.toggle(colorScheme.dark, newTheme === colorScheme.dark);
    theme.value = newTheme;
  };

  const theme = ref<ColorSchemeKeys>(loadTheme());

  return {
    theme,
    toggleDarkMode,
  };
});
