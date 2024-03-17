import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShowsList from "@/components/ShowsList.vue";
import ShowItem from "@/components/ShowItem.vue";
import { groupedShowsByGenre } from "../mocks/data";
import { showGenres } from "@/utils/constants";
import { sortedShowsByRating } from "@/utils/helpers";

describe("ShowsGrid", () => {
  it("should render the genre name", () => {
    const genreType = "action";
    const wrapper = mount(ShowsList, {
      props: {
        shows: groupedShowsByGenre["action"],
        genreType,
        viewAllButtonIsVisible: true,
        maxVisibleItems: 9,
      },
    });

    expect(wrapper.find(".shows-list__title span").text()).toBe(showGenres[genreType].name);
  });

  it("should render the button view all shows for that genre when viewAllButtonIsVisible is true", () => {
    const genreType = "action";
    const wrapper = mount(ShowsList, {
      props: {
        shows: groupedShowsByGenre["action"],
        genreType,
        viewAllButtonIsVisible: true,
        maxVisibleItems: 9,
      },
    });

    expect(wrapper.find(".shows-list__title button").exists()).toBe(true);
  });

  it("should render the button view all shows for that genre when viewAllButtonIsVisible is false", () => {
    const genreType = "action";
    const wrapper = mount(ShowsList, {
      props: {
        shows: groupedShowsByGenre["action"],
        genreType,
        viewAllButtonIsVisible: false,
        maxVisibleItems: 9,
      },
    });

    expect(wrapper.find(".shows-list__title button").exists()).toBe(false);
  });

  const showsByGenre = Object.entries(groupedShowsByGenre).map((item) => {
    return {
      genreType: item[0],
      size: item[1].length,
      shows: item[1],
    };
  });

  it.each(showsByGenre)(
    "should not render show list components above the max visible number of items. Attempting $genreType shows with a size of $size",
    ({ genreType, shows, size }) => {
      const maxVisibleItems = 9;
      const wrapper = mount(ShowsList, {
        props: {
          shows,
          genreType,
          viewAllButtonIsVisible: true,
          maxVisibleItems,
        },
      });

      if (size > maxVisibleItems) {
        expect(wrapper.findAllComponents(ShowItem).length).toBe(maxVisibleItems);
      } else {
        expect(wrapper.findAllComponents(ShowItem).length).toBe(size);
      }
    },
  );

  describe("Interaction", () => {
    it("Clicking on view all button emits the view-all-shows-by-genre", async () => {
      const genreType = "action";
      const wrapper = mount(ShowsList, {
        props: {
          shows: groupedShowsByGenre["action"],
          genreType,
          viewAllButtonIsVisible: true,
          maxVisibleItems: 9,
        },
      });

      await wrapper.find(".shows-list__title button").trigger("click");
      expect(wrapper.emitted()["view-all-shows-by-genre"][0]).toEqual([genreType]);
    });

    it("Clicking on a show item emits the open-show-details", async () => {
      const genreType = "action";
      const wrapper = mount(ShowsList, {
        props: {
          shows: groupedShowsByGenre["action"],
          genreType,
          viewAllButtonIsVisible: true,
          maxVisibleItems: 9,
        },
      });
      const showsSortedByRating = sortedShowsByRating(groupedShowsByGenre["action"]);
      await wrapper.find(".shows-list__items .show-item").trigger("click");

      expect(wrapper.emitted()["open-show-details"][0]).toEqual([showsSortedByRating[0].id]);
    });
  });
});
