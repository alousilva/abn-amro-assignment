import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShowItem from "../ShowItem.vue";
import { showWithInValidImageLinks, showWithValidImageLinks } from "./mocks/data";

describe("ShowItem", () => {
  describe("With valid image links", () => {
    it("should render the show item with the given data", () => {
      const wrapper = mount(ShowItem, { props: { show: showWithValidImageLinks } });

      expect(wrapper.find(".show-item").attributes("aria-label")).toBe(
        showWithValidImageLinks.name,
      );
      expect(wrapper.find(".show-item__image").attributes("alt")).toBe(
        `image for ${showWithValidImageLinks.name}`,
      );
      expect(wrapper.find("i").exists()).toBe(false);
    });
  });

  describe("With invalid image links", () => {
    it("should render the show item with the given data", () => {
      const wrapper = mount(ShowItem, { props: { show: showWithInValidImageLinks } });

      expect(wrapper.find(".show-item").attributes("aria-label")).toBe(
        showWithInValidImageLinks.name,
      );
      expect(wrapper.find(".show-item__image").attributes("title")).toBe(
        `image not found for ${showWithInValidImageLinks.name}`,
      );
      expect(wrapper.find("img").exists()).toBe(false);
    });
  });

  describe("Interaction", () => {
    it("Clicking on the root element emits the 'open-show-details' event with the id of the show", async () => {
      const wrapper = mount(ShowItem, { props: { show: showWithValidImageLinks } });

      await wrapper.find(".show-item").trigger("click");
      expect(wrapper.emitted()["open-show-details"][0]).toEqual([showWithValidImageLinks.id]);
    });

    it("Pressing down ENTER on the root element emits the 'open-show-details' event with the id of the show", async () => {
      const wrapper = mount(ShowItem, { props: { show: showWithValidImageLinks } });

      await wrapper.find(".show-item").trigger("keydown.enter");
      expect(wrapper.emitted()["open-show-details"][0]).toEqual([showWithValidImageLinks.id]);
    });
  });
});
