import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import EpisodeItem from "../EpisodeItem.vue";
import { episodeWithValidImageLinks, episodeWithInValidImageLinks } from "./mocks/data";

describe("EpisodeItem", () => {
  describe("With valid image links", () => {
    it("should render the cast item with the given data", () => {
      const wrapper = mount(EpisodeItem, { props: { episode: episodeWithValidImageLinks } });

      expect(wrapper.find(".episode-item__image").attributes("alt")).toBe(
        `image for ${episodeWithValidImageLinks.name}`,
      );
      expect(wrapper.find(".episode-item__air-date").text()).toBe(
        `Air date: ${episodeWithValidImageLinks.airdate}`,
      );
      expect(wrapper.find(".episode-item__rating").text()).toBe(
        `Rating: ${episodeWithValidImageLinks.rating.average} / 10`,
      );
      expect(wrapper.find(".episode-item__summary-top").element.innerHTML).toBe(
        episodeWithValidImageLinks.summary,
      );
      expect(wrapper.find("i").exists()).toBe(false);
    });
  });

  describe("With invalid image links", () => {
    it("should render the cast item with the given data", () => {
      const wrapper = mount(EpisodeItem, { props: { episode: episodeWithInValidImageLinks } });

      expect(wrapper.find("i").attributes("title")).toBe(
        `image not found for ${episodeWithInValidImageLinks.name}`,
      );
      expect(wrapper.find("img").exists()).toBe(false);
    });
  });
});
