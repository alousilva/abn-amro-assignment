import { describe, it, expect, vi, afterEach } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import GenrePage from "@/pages/GenrePage.vue";
// import ShowItem from "@/components/ShowItem.vue";
import { shows } from "../mocks/data";

const routerPushMock = vi.fn();

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
  });

  // it("should render the header", () => {
  //   const wrapper = mount(GenrePage, {
  //     global: {
  //       mocks:
  //     }
  //   });
  //   expect(wrapper.find("header h2").text()).toBe("Your favorite shows");
  // });

  // describe("Without favorites", () => {
  //   it("should render the elements of the no-contents container", () => {
  //     const wrapper = mount(GenrePage);
  //     expect(wrapper.find(".favorites-page__no-contents p").text()).toBe(
  //       "You don't have any favorites yet",
  //     );
  //     expect(wrapper.find(".favorites-page__no-contents button").exists()).toBe(true);
  //   });
  // });
});
