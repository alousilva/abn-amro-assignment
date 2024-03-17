import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TagItem from "@/components/TagItem.vue";

describe("TagItem", () => {
  it("should render with the given text", () => {
    const wrapper = mount(TagItem, { props: { text: "Tag text" } });
    expect(wrapper.text()).toContain("Tag text");
  });
});
