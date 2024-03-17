import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import NotFoundPage from "@/pages/NotFoundPage.vue";

describe("NotFoundPage", () => {
  it("should render the not found page", async () => {
    const wrapper = mount(NotFoundPage);
    expect(wrapper.find(".not-found-page").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
