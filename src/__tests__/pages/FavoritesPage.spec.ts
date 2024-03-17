import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import FavoritesPage from "@/pages/FavoritesPage.vue";
import ShowItem from "@/components/ShowItem.vue";
import { shows } from "../mocks/data";
import { useFavoritesStore } from "@/stores/favorites";

const routerPushMock = vi.fn();

vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: routerPushMock,
  }),
}));

describe("FavoritesPage", () => {
  const createWrapper = (storeData = {}) => {
    return mount(FavoritesPage, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              favorites: {
                ...storeData,
              },
            },
            createSpy: vi.fn(),
          }),
        ],
      },
    });
  };

  afterEach(() => {
    routerPushMock.mockRestore();
  });

  it("should render the header", () => {
    const wrapper = createWrapper({ shows: [] });
    expect(wrapper.find("header h2").text()).toBe("Your favorite shows");
  });

  describe("Without favorites", () => {
    it("should render the elements of the no-contents container", () => {
      const wrapper = createWrapper({ shows: [] });
      expect(wrapper.find(".favorites-page__no-contents p").text()).toBe(
        "You don't have any favorites yet",
      );
      expect(wrapper.find(".favorites-page__no-contents button").exists()).toBe(true);
    });
  });

  describe("With favorites", () => {
    let wrapper: any = undefined;

    beforeEach(() => {
      wrapper = createWrapper({ shows: shows.slice(0, 2) });
    });

    it("should not render the the no-contents container", () => {
      expect(wrapper.find(".favorites-page__no-contents button").exists()).toBe(false);
    });

    it("should display the total shows paragraph", () => {
      expect(wrapper.find(".favorites-page__controls p").text()).toBe("Total shows: 2");
    });

    it("should display the reset favorites button", () => {
      expect(wrapper.find(".favorites-page__controls button").exists()).toBe(true);
    });

    it("should render the show items", () => {
      expect(wrapper.findAllComponents(ShowItem).length).toBe(2);
    });
  });

  describe("Interaction", () => {
    it("Clicking on a show item calls the router", async () => {
      const wrapper = createWrapper({ shows: shows.slice(0, 2) });

      await wrapper.find(".show-item").trigger("click");
      expect(routerPushMock).toBeCalledWith({ path: `/details/${shows[0].id}` });
    });

    it.todo("Clicking on the reset favorites button calls the store action", async () => {
      const wrapper = mount(FavoritesPage, {
        global: {
          plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn() })],
        },
      });

      await wrapper.find(".favorites-page__controls button").trigger("click");
      // store.resetFavorites();
      // expect(store.resetFavorites).toHaveBeenCalled();
    });

    it("Clicking on the go home button calls the router", async () => {
      const wrapper = createWrapper({ shows: [] });

      await wrapper.find(".favorites-page__no-contents button").trigger("click");
      expect(routerPushMock).toBeCalledWith({ path: "/" });
    });
  });
});
