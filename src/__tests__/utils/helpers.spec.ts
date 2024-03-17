import { describe, it, expect } from "vitest";

import {
  getGenreDetails,
  groupEpisodesBySeason,
  groupShowsByGenre,
  sortedShowsByRating,
} from "@/utils/helpers";
import {
  episodes,
  episodesGroupedBySeason,
  groupedShowsByGenre,
  sortedShows,
  ungroupedShowsByGenre,
  unsortedShows,
} from "./data";
import { showGenres } from "@/utils/constants";

describe("helpers", () => {
  describe("getGenreDetails", () => {
    it("should get the details of a genre", () => {
      const result = getGenreDetails("Action");
      expect(result).toEqual(showGenres["action"]);
    });
  });

  describe("groupShowsByGenre", () => {
    it("should get the shows grouped by genre", () => {
      const result = groupShowsByGenre(ungroupedShowsByGenre);
      expect(result).toEqual(groupedShowsByGenre);
    });
  });

  describe("groupEpisodesBySeason", () => {
    it("should get the episodes grouped by season", () => {
      const result = groupEpisodesBySeason(episodes);
      expect(result).toEqual(episodesGroupedBySeason);
    });
  });

  describe("sortedShowsByRating", () => {
    it("should sort shows by rating in descending order", () => {
      const result = sortedShowsByRating(unsortedShows);
      expect(result).toEqual(sortedShows);
    });
  });
});
