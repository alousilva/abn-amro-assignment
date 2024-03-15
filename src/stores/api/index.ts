import type { CastMember, Episode, Show } from "@/types";
import type { Ref } from "vue";

// add a .env file with the base url
const baseEndpoint = "https://api.tvmaze.com/";

export const fetchShowsByKeyword = async (searchKeyword: Ref<string | null>): Promise<Show[]> =>
  await fetch(`${baseEndpoint}search/shows?q=${searchKeyword.value}`).then((response) =>
    response.json(),
  );

export const fetchShows = async (page: Ref<number>): Promise<Show[]> =>
  await fetch(`${baseEndpoint}shows?page=${page.value}`).then((response) => response.json());

export const fetchShowById = async (showId: Ref<number | null>): Promise<Show> =>
  await fetch(`${baseEndpoint}shows/${showId.value}`).then((response) => response.json());

export const fetchEpisodesByShowId = async (showId: Ref<number | null>): Promise<Episode[]> =>
  await fetch(`${baseEndpoint}shows/${showId.value}/episodes`).then((response) => response.json());

export const fetchCastByShowId = async (showId: Ref<number | null>): Promise<CastMember[]> =>
  await fetch(`${baseEndpoint}shows/${showId.value}/cast`).then((response) => response.json());
