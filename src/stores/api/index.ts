import type { CastMember, Episode, SearchedShow, Show, ShowDetailsTabs } from "@/types";
import { useQuery } from "@tanstack/vue-query";
import type { ComputedRef, Ref } from "vue";

// add a .env file with the base url
const baseEndpoint = "https://api.tvmaze.com/";

const fetchShowsByKeyword = async (searchKeyword: Ref<string | null>): Promise<SearchedShow[]> =>
  await fetch(`${baseEndpoint}search/shows?q=${searchKeyword.value}`).then((response) =>
    response.json(),
  );

const fetchShows = async (page: Ref<number>): Promise<Show[]> =>
  await fetch(`${baseEndpoint}shows?page=${page.value}`).then((response) => response.json());

const fetchShowById = async (showId: Ref<number | null>): Promise<Show> =>
  await fetch(`${baseEndpoint}shows/${showId.value}`).then((response) => response.json());

const fetchEpisodesByShowId = async (showId: Ref<number | null>): Promise<Episode[]> =>
  await fetch(`${baseEndpoint}shows/${showId.value}/episodes`).then((response) => response.json());

const fetchCastByShowId = async (showId: Ref<number | null>): Promise<CastMember[]> =>
  await fetch(`${baseEndpoint}shows/${showId.value}/cast`).then((response) => response.json());

// This needs proper typing inference

export const queryShows = (page: Ref<number>) =>
  useQuery({
    queryKey: ["shows", page],
    queryFn: () => fetchShows(page),
    // @ts-ignore This field is not defined in the vue-query types
    keepPreviousData: true,
  });

// This needs proper typing inference
export const queryShowsById = (routeId: string, selectedShow: Ref<number>) =>
  useQuery({
    queryKey: ["show", routeId],
    queryFn: () => {
      if (selectedShow.value) {
        return fetchShowById(selectedShow);
      }
      return null;
    },
    // @ts-ignore This field is not defined in the vue-query types
    keepPreviousData: true,
  });

// This needs proper typing inference
export const queryEpisodesByShowId = (
  selectedShow: Ref<number>,
  allowQuery: ComputedRef<boolean>,
) =>
  useQuery({
    queryKey: ["episodes", selectedShow],
    queryFn: () => {
      if (allowQuery) {
        return fetchEpisodesByShowId(selectedShow);
      }
      return [];
    },
    // @ts-ignore This field is not defined in the vue-query types
    keepPreviousData: true,
  });

export const queryShowsByKeyword = (keyword: Ref<string>, allowQuery: boolean) =>
  useQuery({
    queryKey: ["shows-by-keyword", keyword],
    queryFn: () => {
      if (allowQuery) {
        return fetchShowsByKeyword(keyword);
      }
      return [];
    },
    // @ts-ignore This field is not defined in the vue-query types
    keepPreviousData: true,
  });

export const queryCastByShowId = (
  currentDetailsTab: Ref<ShowDetailsTabs>,
  allowQuery: ComputedRef<boolean>,
  selectedShow: Ref<number>,
) =>
  useQuery({
    queryKey: ["cast", currentDetailsTab],
    queryFn: () => {
      if (allowQuery) {
        return fetchCastByShowId(selectedShow);
      }
      return [];
    },
    // @ts-ignore This field is not defined in the vue-query types
    keepPreviousData: true,
  });
