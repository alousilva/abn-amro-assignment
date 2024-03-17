import type { Episode, EpisodesGroupedBySeason } from "@/types";

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
