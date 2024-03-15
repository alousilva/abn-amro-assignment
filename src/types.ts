import type { SHOW_DETAILS_TAB } from "./utils/constants";

export type ShowGenres = {
  [key: string]: {
    name: string;
    description: string;
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
  ended: string;
  officialSite: string;
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
    officialSite: string;
  };
  webChannel: null | string;
  dvdCountry: null | string;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
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
  image: {
    medium: string;
    original: string;
  };
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

// export type Rating = {
//   average: number;
// };

// export type Image = {
//   medium: string;
//   original: string;
// };

// export type Links = {
//   self: {
//       href: string;
//   };
//   show: {
//       href: string;
//   };
// };

// export type Episode = {
//   id: number;
//   url: string;
//   name: string;
//   season: number;
//   number: number;
//   type: string;
//   airdate: string;
//   airtime: string;
//   airstamp: string;
//   runtime: number;
//   rating: Rating;
//   image: Image;
//   summary: string;
//   _links: Links;
// };

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type Image = {
  medium: string;
  original: string;
};

export type Links = {
  self: {
    href: string;
  };
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

export type ShowDetailsTab = keyof typeof SHOW_DETAILS_TAB;

export type EpisodesGroupedBySeason = {
  [season: number]: Episode[];
};
