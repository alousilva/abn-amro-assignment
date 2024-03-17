import type { colorScheme, showDetailsTab } from "../utils/constants";

export type ShowGenres = {
  [key: string]: {
    name: string;
    description: string;
    code: string;
  };
};

export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: null | string;
  officialSite: null | string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: null | string;
  };
  webChannel: null | { id?: number; name?: string; country?: string | null; officialSite?: string };
  dvdCountry: null | string;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: Image | null;
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
    };
    nextepisode?: {
      href: string;
    };
  };
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type Image = {
  medium?: string;
  original?: string;
};

export type Links = {
  self: {
    href: string;
  };
};

export type Episode = {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: {
    average: number;
  };
  image: Image | null;
  summary: string;
  _links: {
    self: {
      href: string;
    };
    show: {
      href: string;
    };
  };
};

export type SearchedShow = {
  score: number;
  show: Show;
};

export type Person = {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: string;
  deathday: string | null;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
};

export type Character = {
  id: number;
  url: string;
  name: string;
  image: Image | null;
  _links: Links;
};

export type CastMember = {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
};

type ShowDetailsTabKeys = keyof typeof showDetailsTab;
export type ShowDetailsTabs = (typeof showDetailsTab)[ShowDetailsTabKeys];

export type EpisodesGroupedBySeason = {
  [season: number]: Episode[];
};

export type GroupedShowsByGenre = {
  [key: string]: Show[];
};

export type ColorSchemeKeys = keyof typeof colorScheme;
