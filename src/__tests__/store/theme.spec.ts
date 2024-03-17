import { beforeEach, describe, it, expect } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useThemeStore } from "@/stores/theme";
import { colorScheme } from "@/utils/constants";

describe("Theme store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should set the default theme to light", () => {
    const store = useThemeStore();
    expect(store.theme).toEqual(colorScheme.light);
  });

  it("should be able to switch the theme from light to dark", () => {
    const store = useThemeStore();
    store.toggleDarkMode();
    expect(store.theme).toEqual(colorScheme.dark);
  });

  it.todo("mock localStorage");
  it.todo("mock windowMatchMedia");
});
