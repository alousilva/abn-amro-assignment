import { defineStore } from "pinia";
import type { Show } from "@/types";
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
  const loadDataFromLocalStorage = (): Show[] => {
    const localStorageData = localStorage.getItem("tv-maze-shows");
    if (localStorageData) {
      const { shows } = JSON.parse(localStorageData);
      return shows;
    }
    return [];
  };

  const shows = ref<Show[]>(loadDataFromLocalStorage());
  loadDataFromLocalStorage();
  const addShowToFavorites = (show: Show) => {
    if (shows.value.some((item) => item.id === show.id)) return;
    shows.value.push(show);
  };
  const removeShowFromFavorites = (showId: Show["id"]) => {
    console.log("removeShowFromFavorites", showId);
    const itemIndex = shows.value.findIndex((item) => item.id === showId);
    if (itemIndex !== -1) shows.value.splice(itemIndex, 1);
  };

  return {
    shows,
    addShowToFavorites,
    removeShowFromFavorites,
  };
});

const store = useFavoritesStore();
store.$subscribe((_, state) => {
  // Persist the state in the localStorage
  localStorage.setItem("tv-maze-shows", JSON.stringify(state));
});
