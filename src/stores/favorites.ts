import { defineStore } from "pinia";
import type { Show } from "@/types";
import { ref, watch } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const findShowIndexById = (showId: Show["id"]) => {
    return shows.value.findIndex((item) => item.id === showId);
  };

  const loadDataFromLocalStorage = (): Show[] => {
    const localStorageData = localStorage.getItem("tv-maze-shows");
    if (localStorageData) {
      return JSON.parse(localStorageData);
    }
    return [];
  };

  const shows = ref<Show[]>(loadDataFromLocalStorage());

  const addShowToFavorites = (show: Show) => {
    if (shows.value.some((item) => item.id === show.id)) return;
    shows.value.push(show);
  };

  const removeShowFromFavorites = (showId: Show["id"]) => {
    const itemIndex = findShowIndexById(showId);
    if (itemIndex !== -1) shows.value.splice(itemIndex, 1);
  };

  const isShowInFavorites = (showId: Show["id"]) => {
    const itemIndex = findShowIndexById(showId);
    return itemIndex !== -1;
  };

  const resetFavorites = () => {
    shows.value = [];
  };

  watch(shows.value, (newValue) => {
    // Persist the state in the localStorage
    localStorage.setItem("tv-maze-shows", JSON.stringify(newValue));
  });

  return {
    shows,
    addShowToFavorites,
    removeShowFromFavorites,
    isShowInFavorites,
    resetFavorites,
  };
});
