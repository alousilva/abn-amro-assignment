import { beforeEach, describe, it, expect } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useFavoritesStore } from "@/stores/favorites";
import { shows } from "../mocks/data";

describe("Favorites store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("addShowToFavorites", () => {
    it("should add a new show to the list of shows", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);

      expect(store.shows.length).toBe(1);
      expect(store.shows).toEqual([shows[0]]);
    });

    it("should not add a show that already exists in the list of shows", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);
      store.addShowToFavorites(shows[0]);

      expect(store.shows.length).toBe(1);
      expect(store.shows).toEqual([shows[0]]);
    });
  });

  describe("removeShowFromFavorites", () => {
    it("should remove a show from the list of shows if the show exists in the list", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);
      expect(store.shows.length).toBe(1);
      store.removeShowFromFavorites(shows[0].id);
      expect(store.shows.length).toBe(0);
    });

    it("should not be able to remove shows when a non-existing id is used", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);
      store.addShowToFavorites(shows[1]);
      store.addShowToFavorites(shows[2]);

      expect(store.shows.length).toBe(3);
      store.removeShowFromFavorites(9999);
      expect(store.shows.length).toBe(3);
    });
  });

  describe("resetFavorites", () => {
    it("should reset the list of shows", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);
      store.addShowToFavorites(shows[1]);
      store.addShowToFavorites(shows[2]);

      expect(store.shows.length).toBe(3);
      store.resetFavorites();
      expect(store.shows.length).toBe(0);
    });
  });

  describe("isShowInFavorites", () => {
    it("should return true if a show was found in the list of shows", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);
      store.addShowToFavorites(shows[1]);
      store.addShowToFavorites(shows[2]);

      expect(store.isShowInFavorites(shows[0].id)).toBe(true);
    });

    it("should return false if a show was not found in the list of shows", () => {
      const store = useFavoritesStore();
      store.addShowToFavorites(shows[0]);
      store.addShowToFavorites(shows[1]);
      store.addShowToFavorites(shows[2]);

      expect(store.isShowInFavorites(9999)).toBe(false);
    });
  });

  it.todo("mock localStorage");
});
