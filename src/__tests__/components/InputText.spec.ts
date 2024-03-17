import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputText from "@/components/InputText.vue";

describe("InputText", () => {
  it("should update input", async () => {
    const inputText = "Search text";
    const wrapper = mount(InputText);
    expect(wrapper.find("input").element.value).toBe("");

    await wrapper.find("input").setValue(inputText);
    expect(wrapper.find("input").element.value).toBe(inputText);
  });

  it("should not show the clear button when the input is empty", () => {
    const wrapper = mount(InputText);
    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("should show the clear button when the input is not empty", async () => {
    const wrapper = mount(InputText);
    await wrapper.find("input").setValue("Some text");

    expect(wrapper.find("button").exists()).toBe(true);
  });
});
