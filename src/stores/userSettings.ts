import { defineStore } from "pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDarkMode = () => {
    if (!localStorage.getItem("theme-appearance")) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    if (localStorage.getItem("theme-appearance") === "dark") {
      return true;
    }

    return false;
  };

  const loadTheme = () => {
    const darkModeIsOn = isDarkMode();
    document.documentElement.classList.toggle("dark", darkModeIsOn);
    return darkModeIsOn ? "dark" : "light";
  };

  const toggleDarkMode = () => {
    if (theme.value === "light") {
      theme.value = "dark";
      localStorage.setItem("theme-appearance", "dark");
    } else {
      theme.value = "light";
      localStorage.setItem("theme-appearance", "light");
    }
    document.documentElement.classList.toggle("dark", isDarkMode());
  };

  const theme = ref<string>(loadTheme());

  return {
    theme,
    toggleDarkMode,
  };
});
