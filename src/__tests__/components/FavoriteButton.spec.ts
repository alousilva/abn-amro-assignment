import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FavoriteButton from "@/components/FavoriteButton.vue";

describe("FavoriteButton", () => {
  it("should render 'Add to favorites' when checkbox is not checked", () => {
    const wrapper = mount(FavoriteButton, { props: { itemId: 10, itemName: "show 10" } });
    expect(wrapper.find("input").attributes("id")).toBe("show-10-10");
    expect(wrapper.find("label").text()).toBe("Add to favorites");
  });

  it("should render 'Added to favorites' when checkbox is checked", () => {
    const wrapper = mount(FavoriteButton, {
      props: { itemId: 20, itemName: "show 20", modelValue: true },
    });
    expect(wrapper.find("input").attributes("id")).toBe("show-20-20");
    expect(wrapper.find("label").text()).toBe("Added to favorites");
  });
});
