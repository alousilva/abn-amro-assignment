import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TabPanel from "@/components/TabPanel.vue";

describe("TabPanel", () => {
  it("should make the root element visible when the header and the selectedHeader are the same", () => {
    const headerProp = "Header text";
    const wrapper = mount(TabPanel, {
      props: { header: headerProp },
      global: {
        provide: {
          selectedHeader: headerProp,
        },
      },
    });

    expect(wrapper.find(".tab-panel").isVisible()).toBe(true);
  });

  it("should hide the root element when the header and the selectedHeader are different", () => {
    const headerText = "Header text";
    const selectedHeaderText = "Another text";

    const wrapper = mount(TabPanel, {
      props: { header: headerText },
      global: {
        provide: {
          selectedHeaderText,
        },
      },
    });

    expect(wrapper.find(".tab-panel").isVisible()).toBe(false);
  });
});
