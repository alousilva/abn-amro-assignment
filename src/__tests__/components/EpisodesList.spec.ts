import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import EpisodesList from "@/components/EpisodesList.vue";
import EpisodeItem from "@/components/EpisodeItem.vue";
import { listOfEpisodes } from "../mocks/data";
import { groupEpisodesBySeason } from "@/utils/helpers";

describe("EpisodesList", () => {
  it("should render the select season element", () => {
    const wrapper = shallowMount(EpisodesList, {
      props: {
        episodes: listOfEpisodes,
      },
    });

    expect(wrapper.find("select").exists()).toBe(true);
  });

  it("should render all the episodes of the selected season and its amount of episodes", () => {
    const wrapper = shallowMount(EpisodesList, {
      props: {
        episodes: listOfEpisodes,
      },
    });

    const episodesOfSelectedSeason = groupEpisodesBySeason(listOfEpisodes);
    const selectedSeason = listOfEpisodes[0].season || 1;

    expect(wrapper.findAllComponents(EpisodeItem).length).toBe(
      episodesOfSelectedSeason[selectedSeason].length,
    );
    expect(wrapper.find(".episodes-list__header span").text()).toBe(
      `${episodesOfSelectedSeason[selectedSeason].length} episodes`,
    );
  });

  it("should change the selected season from the select season element", async () => {
    const wrapper = shallowMount(EpisodesList, {
      props: {
        episodes: listOfEpisodes,
      },
    });

    // Default selection
    const episodesOfSelectedSeason = groupEpisodesBySeason(listOfEpisodes);
    const selectedSeason = listOfEpisodes[0].season || 1;

    expect(wrapper.findAllComponents(EpisodeItem).length).toBe(
      episodesOfSelectedSeason[selectedSeason].length,
    );
    expect(wrapper.find(".episodes-list__header span").text()).toBe(
      `${episodesOfSelectedSeason[selectedSeason].length} episodes`,
    );

    // Select season 4, which contains 3 episodes
    await wrapper.find("select").setValue("4");
    expect(wrapper.find(".episodes-list__header span").text()).toBe(
      `${episodesOfSelectedSeason["4"].length} episodes`,
    );
    expect(wrapper.findAllComponents(EpisodeItem).length).toBe(
      episodesOfSelectedSeason["4"].length,
    );
  });
});
