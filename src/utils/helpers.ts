import type { Episode, EpisodesGroupedBySeason, GroupedShowsByGenre, Show } from "@/types";
import { showGenres } from "./constants";

// In a normal prod project I would use a package, such as:
// - https://github.com/antfu/vueuse/tree/main/packages/shared/useDebounce
// - https://github.com/sreejith-ms/lodash.debounce
export const debounce = (callBack: Function, delay = 300) => {
  // @ts-ignore Ignores "Cannot find namespace 'NodeJS'"
  let timer: number | NodeJS.Timeout;

  return function (...args: Parameters<any>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
};

export const getGenreDetails = (genre: string) => {
  return Object.values(showGenres).find((item) => item.name === genre);
};

export const groupShowsByGenre = (shows: Show[] | undefined) => {
  const unsortedGroupedShowsByGenre: GroupedShowsByGenre = {};
  if (!shows) return unsortedGroupedShowsByGenre;

  shows.forEach((show) => {
    show.genres.forEach((genre) => {
      const foundGenre = getGenreDetails(genre);
      const genreCode = foundGenre?.code || genre;

      if (!unsortedGroupedShowsByGenre[genreCode]) {
        unsortedGroupedShowsByGenre[genreCode] = [];
      }
      unsortedGroupedShowsByGenre[genreCode].push(show);
    });
  });

  const sortedKeys = Object.keys(unsortedGroupedShowsByGenre).sort();
  const sortedGroupedShowsByGenre: GroupedShowsByGenre = {};
  sortedKeys.forEach((key) => {
    sortedGroupedShowsByGenre[key] = unsortedGroupedShowsByGenre[key];
  });
  return sortedGroupedShowsByGenre;
};

export const groupEpisodesBySeason = (episodes: Episode[]) => {
  return episodes.reduce((acc: EpisodesGroupedBySeason, episode) => {
    const season = episode.season;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {});
};
