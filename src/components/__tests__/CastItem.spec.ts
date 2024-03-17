import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CastItem from "../CastItem.vue";
import { castMemberWithInValidImageLinks, castMemberWithValidImageLinks } from "./mocks/data";

describe("CastItem", () => {
  describe("With valid image links", () => {
    it("should render the cast item with the given data", () => {
      const wrapper = mount(CastItem, { props: { castMember: castMemberWithValidImageLinks } });

      expect(wrapper.find(".cast-item__person-image").attributes("alt")).toBe(
        `image for ${castMemberWithValidImageLinks.person.name}`,
      );
      expect(wrapper.find(".cast-item__person").text()).toContain(
        `Person: ${castMemberWithValidImageLinks.person.name}`,
      );
      expect(wrapper.find(".cast-item__char-image").attributes("alt")).toBe(
        `image for ${castMemberWithValidImageLinks.character.name}`,
      );
      expect(wrapper.find(".cast-item__char").text()).toContain(
        `Char: ${castMemberWithValidImageLinks.character.name}`,
      );
      expect(wrapper.findAll("i").length).toBe(0);
    });
  });

  describe("With invalid image links", () => {
    it("should render the cast item with the given data", () => {
      const wrapper = mount(CastItem, { props: { castMember: castMemberWithInValidImageLinks } });

      expect(wrapper.find(".cast-item__person-image").attributes("title")).toBe(
        `image not found for ${castMemberWithInValidImageLinks.person.name}`,
      );
      expect(wrapper.find(".cast-item__person").text()).toContain(
        `Person: ${castMemberWithInValidImageLinks.person.name}`,
      );
      expect(wrapper.find(".cast-item__char-image").attributes("title")).toBe(
        `image not found for ${castMemberWithInValidImageLinks.character.name}`,
      );
      expect(wrapper.find(".cast-item__char").text()).toContain(
        `Char: ${castMemberWithInValidImageLinks.character.name}`,
      );
      expect(wrapper.findAll("img").length).toBe(0);
    });
  });
});
