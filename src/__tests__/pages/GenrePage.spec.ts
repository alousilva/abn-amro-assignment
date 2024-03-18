import { describe, it, expect, vi, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import GenrePage from "@/pages/GenrePage.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { showGenres } from "@/utils/constants";
import { shows } from "../mocks/data";
import ShowItem from "@/components/ShowItem.vue";

const routerPushMock = vi.fn();

vi.mock("../../stores/api", () => ({
  queryShows: () => ({
    data: {
      value: shows,
    },
  }),
}));

vi.mock("vue-router", () => ({
  useRoute: () => ({
    params: {
      genre: "action",
    },
  }),
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

describe("GenrePage", () => {
  afterEach(() => {
    routerPushMock.mockRestore();
    vi.restoreAllMocks();
  });

  describe("Selected genre is valid", () => {
    it("should render the header", () => {
      const wrapper = mount(GenrePage, {
        global: {
          plugins: [VueQueryPlugin],
        },
      });

      const genreDescription = showGenres["action"].description;
      expect(wrapper.find("header h2").text()).toBe("Action");
      expect(wrapper.find("header p").text()).toBe(genreDescription);
    });

    it("should render the show item components", () => {
      const wrapper = mount(GenrePage, {
        global: {
          plugins: [VueQueryPlugin],
        },
      });

      // 2 action shows in the given payload
      expect(wrapper.findAllComponents(ShowItem).length).toBe(2);
    });

    it("should render the See more shows button", () => {
      const wrapper = mount(GenrePage, {
        global: {
          plugins: [VueQueryPlugin],
        },
      });

      expect(wrapper.find(".genre-page__content-see-more button").exists()).toBe(true);
    });
  });

  describe.todo("Selected genre is not valid valid", () => {
    // "vue-router" mock needs to be reset
    it("should not render content container", () => {
      const wrapper = mount(GenrePage, {
        global: {
          plugins: [VueQueryPlugin],
        },
      });

      expect(wrapper.find(".genre-page__content").exists()).toBe(false);
    });

    it.todo("should show the genre not found message", () => {
      const wrapper = mount(GenrePage, {
        global: {
          plugins: [VueQueryPlugin],
        },
      });

      const infoMessage = "The genre invalid-genre does not exist.";
      expect(wrapper.find(".genre-page__genre-not-found p").text()).toBe(infoMessage);
    });
  });
});
