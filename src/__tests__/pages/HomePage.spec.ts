import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomePage from "@/pages/HomePage.vue";
import InputText from "@/components/InputText.vue";
import ShowsGrid from "@/components/ShowsGrid.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

describe("HomePage", () => {
  it("should render search input and show grid components", () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [VueQueryPlugin],
      },
    });

    expect(wrapper.findComponent(InputText).exists()).toBe(true);
    expect(wrapper.findComponent(ShowsGrid).exists()).toBe(true);
  });

  it.todo("Test events coming from the ShowGrid");
  it.todo("Test the interaction with the ToasterPopup");
  it.todo("Test debounced search");
});
