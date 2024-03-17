import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShowsGrid from "../ShowsGrid.vue";
import ShowsList from "../ShowsList.vue";
import { groupedShowsByGenre } from "./mocks/data";

describe("ShowsGrid", () => {
  it("should render the shows list components based on the given data", () => {
    const wrapper = mount(ShowsGrid, {
      props: {
        groupedShowsByGenre,
        viewAllButtonIsVisible: true,
      },
    });

    const numberOfGroupedShowsByGenre = Object.keys(groupedShowsByGenre).length;
    expect(wrapper.findAllComponents(ShowsList).length).toBe(numberOfGroupedShowsByGenre);
  });
});
