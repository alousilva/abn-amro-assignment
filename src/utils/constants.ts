import type { ShowGenres } from "@/types";

// This simulates a 200 OK response from an API to retrieve show genres
export const showGenres: ShowGenres = {
  action: {
    name: "Action",
    description: "Series with high energy and plenty of physical stunts/activities.",
    code: "action",
  },
  adult: {
    name: "Adult",
    description:
      "Series with a high level of sexuality, and/or violence and is only meant for aged 18+ viewers.",
    code: "adult",
  },
  adventure: {
    name: "Adventure",
    description: "Series with characters who embark on a long journey or treasure hunt.",
    code: "adventure",
  },
  anime: {
    name: "Anime",
    description:
      "A Japanese-disseminated animation style often characterized by colorful graphics, vibrant characters and fantastical themes.",
    code: "anime",
  },
  children: {
    name: "Children",
    description: "Series created for younger viewers for entertainment or education.",
    code: "children",
  },
  comedy: {
    name: "Comedy",
    description: "Series is humorous in nature.",
    code: "comedy",
  },
  crime: {
    name: "Crime",
    description: "Series with criminal activities and police investigations.",
    code: "crime",
  },
  diy: {
    name: "DIY",
    description: "Series is project-based and/or promotes do it yourself.",
    code: "diy",
  },
  drama: {
    name: "Drama",
    description:
      "Series deals with a slow, but realistic development of character(s) and situation(s).",
    code: "drama",
  },
  espionage: {
    name: "Espionage",
    description: "Series about spies and/or covert operations.",
    code: "espionage",
  },
  family: {
    name: "Family",
    description: "Series focus is mostly on a family unit.",
    code: "family",
  },
  fantasy: {
    name: "Fantasy",
    description: "Series about magical worlds, beings, or spell magic.",
    code: "fantasy",
  },
  food: {
    name: "Food",
    description: "Series focuses on cookery.",
    code: "food",
  },
  history: {
    name: "History",
    description: "Series is either about an historical event or has an historical setting.",
    code: "history",
  },
  horror: {
    name: "Horror",
    description: "Series with a high level of scary events or shocking content.",
    code: "horror",
  },
  legal: {
    name: "Legal",
    description: "Series set in an attorney office or courtroom.",
    code: "legal",
  },
  medical: {
    name: "Medical",
    description: "Series set in a clinic or hospital.",
    code: "medical",
  },
  music: {
    name: "Music",
    description: "Series set around music or the music industry.",
    code: "music",
  },
  mystery: {
    name: "Mystery",
    description: "Series with strange events raising questions and/or puzzles to solve.",
    code: "mystery",
  },
  nature: {
    name: "Nature",
    description: "Series focus is on animals and/or the natural world.",
    code: "nature",
  },
  romance: {
    name: "Romance",
    description: "Series about love and/or relationships.",
    code: "romance",
  },
  scifi: {
    name: "Science-Fiction",
    description: "Series about otherworlds, futuristic settings, or fictional space exploration.",
    code: "scifi",
  },
  sports: {
    name: "Sports",
    description: "Series set around any sport or the sports world.",
    code: "sports",
  },
  supernatural: {
    name: "Supernatural",
    description:
      "Series about events, beings, or situations outside the natural world and/or defies scientific explanation.",
    code: "supernatural",
  },
  thriller: {
    name: "Thriller",
    description: "Series with a high level of tension and/or suspense.",
    code: "thriller",
  },
  travel: {
    name: "Travel",
    description: "Series about vacation destinations, tourism, exotic locales.",
    code: "travel",
  },
  war: {
    name: "War",
    description: "Series set during or around a battle or conflict.",
    code: "war",
  },
  western: {
    name: "Western",
    description:
      "Series set primarily in the latter half of the 19th century in the American Old West.",
    code: "western",
  },
};

export const showDetailsTab = {
  episodes: "Episodes",
  cast: "Cast",
} as const;

export const colorScheme = {
  dark: "dark",
  light: "light",
} as const;
