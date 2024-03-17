import type { CastMember, Episode, Show } from "@/types";

export const castMemberWithValidImageLinks: CastMember = {
  person: {
    id: 37120,
    url: "https://www.tvmaze.com/people/37120/patrick-stewart",
    name: "Patrick Stewart",
    country: { name: "United Kingdom", code: "GB", timezone: "Europe/London" },
    birthday: "1940-07-13",
    deathday: null,
    gender: "Male",
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/116/291343.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/116/291343.jpg",
    },
    updated: 1706403295,
    _links: { self: { href: "https://api.tvmaze.com/people/37120" } },
  },
  character: {
    id: 80717,
    url: "https://www.tvmaze.com/characters/80717/star-trek-the-next-generation-captain-jean-luc-picard",
    name: "Captain Jean-Luc Picard",
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/3/9466.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/3/9466.jpg",
    },
    _links: { self: { href: "https://api.tvmaze.com/characters/80717" } },
  },
  self: false,
  voice: false,
};

export const castMemberWithInValidImageLinks: CastMember = {
  person: {
    id: 37120,
    url: "https://www.tvmaze.com/people/37120/patrick-stewart",
    name: "Patrick Stewart",
    country: { name: "United Kingdom", code: "GB", timezone: "Europe/London" },
    birthday: "1940-07-13",
    deathday: null,
    gender: "Male",
    image: {
      medium: undefined,
      original: undefined,
    },
    updated: 1706403295,
    _links: { self: { href: "https://api.tvmaze.com/people/37120" } },
  },
  character: {
    id: 80717,
    url: "https://www.tvmaze.com/characters/80717/star-trek-the-next-generation-captain-jean-luc-picard",
    name: "Captain Jean-Luc Picard",
    image: {
      medium: undefined,
      original: undefined,
    },
    _links: { self: { href: "https://api.tvmaze.com/characters/80717" } },
  },
  self: false,
  voice: false,
};

export const episodeWithValidImageLinks: Episode = {
  id: 44456,
  url: "https://www.tvmaze.com/episodes/44456/star-trek-the-next-generation-1x01-encounter-at-farpoint-1",
  name: "Encounter at Farpoint (1)",
  season: 1,
  number: 1,
  type: "regular",
  airdate: "1987-09-28",
  airtime: "",
  airstamp: "1987-09-28T16:00:00+00:00",
  runtime: 60,
  rating: { average: 7.3 },
  image: {
    medium: "https://static.tvmaze.com/uploads/images/medium_landscape/496/1242168.jpg",
    original: "https://static.tvmaze.com/uploads/images/original_untouched/496/1242168.jpg",
  },
  summary:
    "<p>Captain Picard takes command of the Galaxy Class Federation starship, the ‘Enterprise. Picard not only takes over the ‘Enterprise' but has his first encounter with a extremely powerful life form known as ‘Q' who proceeds to put humanity on trial for their crimes. Q makes their first mission to the Farpoint station on Daneb IV a extreme test for the existence of humanity.</p>",
  _links: {
    self: { href: "https://api.tvmaze.com/episodes/44456" },
    show: { href: "https://api.tvmaze.com/shows/491" },
  },
};

export const episodeWithInValidImageLinks: Episode = {
  id: 44456,
  url: "https://www.tvmaze.com/episodes/44456/star-trek-the-next-generation-1x01-encounter-at-farpoint-1",
  name: "Encounter at Farpoint (1)",
  season: 1,
  number: 1,
  type: "regular",
  airdate: "1987-09-28",
  airtime: "",
  airstamp: "1987-09-28T16:00:00+00:00",
  runtime: 60,
  rating: { average: 7.3 },
  image: null,
  summary:
    "<p>Captain Picard takes command of the Galaxy Class Federation starship, the ‘Enterprise. Picard not only takes over the ‘Enterprise' but has his first encounter with a extremely powerful life form known as ‘Q' who proceeds to put humanity on trial for their crimes. Q makes their first mission to the Farpoint station on Daneb IV a extreme test for the existence of humanity.</p>",
  _links: {
    self: { href: "https://api.tvmaze.com/episodes/44456" },
    show: { href: "https://api.tvmaze.com/shows/491" },
  },
};

export const listOfEpisodes: Episode[] = [
  {
    id: 40286,
    url: "https://www.tvmaze.com/episodes/40286/farscape-1x01-premiere",
    name: "Premiere",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "1999-03-19",
    airtime: "20:00",
    airstamp: "1999-03-20T01:00:00+00:00",
    runtime: 60,
    rating: { average: 6.7 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499198.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499198.jpg",
    },
    summary:
      "<p>Astronaut John Crichton attempts to use the Earth's atmosphere to propel his module <i>Farscape 1</i> at high speeds but he is hit by a radiation wave and sucked through a wormhole into a distant part of the universe and straight into the middle of a space battle. After almost colliding with another ship, which explodes shortly afterwards, he is brought aboard a ship full of alien prisoners attempting to escape custody. After being partnered with a captured Peacekeeper soldier, Crichton is drawn into the prisoners' daring plan to escape the clutches of the Peacekeeper forces and their vengefully obsessed military commander.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40286" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40290,
    url: "https://www.tvmaze.com/episodes/40290/farscape-1x02-back-and-back-and-back-to-the-future",
    name: "Back and Back and Back to the Future",
    season: 1,
    number: 2,
    type: "regular",
    airdate: "1999-03-26",
    airtime: "20:00",
    airstamp: "1999-03-27T01:00:00+00:00",
    runtime: 60,
    rating: { average: 7.2 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/448/1121513.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/448/1121513.jpg",
    },
    summary:
      "<p>The crew comes across a ship that is molecularly de-stabilizing. D'Argo makes everyone bring the ship's escape pod aboard when he discovers that the ship's passengers are Ilanics -- long-time allies of the Luxans. Aboard the escape pod, Crichton gets a shock and starts experiencing strange visions of the future, first of himself and one of the Ilanics, then of <i>Moya's</i> destruction.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40290" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40308,
    url: "https://www.tvmaze.com/episodes/40308/farscape-2x01-mind-the-baby",
    name: "Mind the Baby",
    season: 2,
    number: 1,
    type: "regular",
    airdate: "2000-03-17",
    airtime: "20:00",
    airstamp: "2000-03-18T01:00:00+00:00",
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499220.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499220.jpg",
    },
    summary:
      "<p>Crichton, Aeryn and D'Argo are stranded in an asteroid field while Scorpius searches for them. Their safety depends on Crais, who is nearby in <i>Talyn</i>. Aeryn teaches Crais how to control the young Leviathan - the only thing she can offer in return for the lives of her friends. When <i>Moya</i> returns to the asteroid field to look for her offspring, and Crichton decides to remove Crais from control of <i>Talyn</i>, Scorpius finally sees his chance to strike.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40308" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40309,
    url: "https://www.tvmaze.com/episodes/40309/farscape-2x02-vitas-mortis",
    name: "Vitas Mortis",
    season: 2,
    number: 2,
    type: "regular",
    airdate: "2000-03-24",
    airtime: "20:00",
    airstamp: "2000-03-25T01:00:00+00:00",
    runtime: 60,
    rating: { average: 6.3 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499221.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499221.jpg",
    },
    summary:
      "<p>D'Argo takes part in a sacred ritual that helps an old Luxan, an Orican, to survive. During the ritual the Orican draws energy from who she thinks is D'Argo but is actually <i>Moya</i>. Consequently <i>Moya</i> starts to age rapidly.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40309" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40330,
    url: "https://www.tvmaze.com/episodes/40330/farscape-3x01-season-of-death",
    name: "Season of Death",
    season: 3,
    number: 1,
    type: "regular",
    airdate: "2001-03-16",
    airtime: "20:00",
    airstamp: "2001-03-17T01:00:00+00:00",
    runtime: 60,
    rating: { average: 8 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499242.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499242.jpg",
    },
    summary:
      "<p>The Diagnosan's assistant, Grunchlk, sets a Scarran loose. Scorpius uses a device to control Grunchlk and plots to escape from the ice planet with John's neural chip.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40330" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40331,
    url: "https://www.tvmaze.com/episodes/40331/farscape-3x02-suns-and-lovers",
    name: "Suns and Lovers",
    season: 3,
    number: 2,
    type: "regular",
    airdate: "2001-03-23",
    airtime: "20:00",
    airstamp: "2001-03-24T01:00:00+00:00",
    runtime: 60,
    rating: { average: 6.4 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499243.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499243.jpg",
    },
    summary:
      "<p><i>Moya</i> docks at a commerce station so the crew can spend some of the money they acquired from the depository. There are complications, however, when a storm strikes the station.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40331" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40352,
    url: "https://www.tvmaze.com/episodes/40352/farscape-4x01-crichton-kicks",
    name: "Crichton Kicks",
    season: 4,
    number: 1,
    type: "regular",
    airdate: "2002-06-07",
    airtime: "20:00",
    airstamp: "2002-06-08T00:00:00+00:00",
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499264.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499264.jpg",
    },
    summary:
      "<p>Crichton, who is now aboard a dying Leviathan named <i>Elack</i>, works on his theories of wormhole physics. But when a female alien named Sikozu lands on the ship, she is followed by a squad of Grudek mercenaries who want to harvest the Leviathan's neural cluster tissue. Crichton struggles to save his new home but gets some welcome help when two old friends rejoin him.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40352" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40353,
    url: "https://www.tvmaze.com/episodes/40353/farscape-4x02-what-was-lost-part-i-sacrifice",
    name: "What Was Lost Part I: Sacrifice",
    season: 4,
    number: 2,
    type: "regular",
    airdate: "2002-06-14",
    airtime: "20:00",
    airstamp: "2002-06-15T00:00:00+00:00",
    runtime: 60,
    rating: { average: 7.5 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499265.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499265.jpg",
    },
    summary:
      "<p><i>Elack</i> arrives at a planet and Crichton, Chiana and Rygel are reunited with D'Argo and Jool who are at an archaeological site run by Jool's people, the Interions. The purpose of the dig is to find a missing probe which might reverse the dangerous atmosphere of the planet. But things take a turn for the worse when Peacekeepers led by Grayza land on the planet.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40353" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
  {
    id: 40354,
    url: "https://www.tvmaze.com/episodes/40354/farscape-4x03-what-was-lost-part-ii-resurrection",
    name: "What Was Lost Part II: Resurrection",
    season: 4,
    number: 3,
    type: "regular",
    airdate: "2002-06-21",
    airtime: "20:00",
    airstamp: "2002-06-22T00:00:00+00:00",
    runtime: 60,
    rating: { average: 7.1 },
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_landscape/199/499266.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/199/499266.jpg",
    },
    summary:
      "<p>When D'Argo and Sikozu come up with a plan to crash <i>Elack</i> (the dying Leviathan) into the Peacekeeper pursuit craft, Crichton is forced to get closer with Grayza to ensure the success of the plan. But when the plan goes wrong Crichton and the rest of the crew are forced to go looking for the third probe to end the magnetic summer forever.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/40354" },
      show: { href: "https://api.tvmaze.com/shows/429" },
    },
  },
];

export const showWithValidImageLinks: Show = {
  id: 409,
  url: "https://www.tvmaze.com/shows/409/invader-zim",
  name: "Invader ZIM",
  type: "Animation",
  language: "English",
  genres: ["Children"],
  status: "Ended",
  runtime: 30,
  averageRuntime: 30,
  premiered: "2001-03-30",
  ended: "2006-08-19",
  officialSite: null,
  schedule: { time: "14:30", days: ["Sunday"] },
  rating: { average: 8.4 },
  weight: 85,
  network: {
    id: 27,
    name: "Nickelodeon",
    country: { name: "United States", code: "US", timezone: "America/New_York" },
    officialSite: "https://www.nick.com/",
  },
  webChannel: null,
  dvdCountry: null,
  externals: { tvrage: 3985, thetvdb: 75545, imdb: "tt0235923" },
  image: {
    medium: "https://static.tvmaze.com/uploads/images/medium_portrait/2/6242.jpg",
    original: "https://static.tvmaze.com/uploads/images/original_untouched/2/6242.jpg",
  },
  summary:
    '<p><b>Invader ZIM</b> is an eccentric alien soldier from the planet Irk. He was banished from the Irken Empire after nearly destroying his home planet on an early mission. After begging his superiors, the Almighty Tallest Red and Purple, for another chance, they decide to get rid of him once and for all. They trick him into going on a "secret mission" to an obscure planet at the edge of the universe, a planet with the unlikely name of Earth, in hopes that he\'ll die along the way. But their trick backfires when ZIM safely reaches Earth and begins his ever-so-subtle conquest of it. He disguises himself as a schoolboy, and now the only person who can stop him is one kid - Dib, a somewhat insane paranormal researcher, who sees straight through ZIM\'s disguise and is intent on stopping his reign of "terror". The only problem is that neither of them is very good at stopping the other.</p>',
  updated: 1704794433,
  _links: {
    self: { href: "https://api.tvmaze.com/shows/409" },
    previousepisode: { href: "https://api.tvmaze.com/episodes/39511" },
  },
};

export const showWithInValidImageLinks: Show = {
  id: 409,
  url: "https://www.tvmaze.com/shows/409/invader-zim",
  name: "Invader ZIM",
  type: "Animation",
  language: "English",
  genres: ["Children"],
  status: "Ended",
  runtime: 30,
  averageRuntime: 30,
  premiered: "2001-03-30",
  ended: "2006-08-19",
  officialSite: null,
  schedule: { time: "14:30", days: ["Sunday"] },
  rating: { average: 8.4 },
  weight: 85,
  network: {
    id: 27,
    name: "Nickelodeon",
    country: { name: "United States", code: "US", timezone: "America/New_York" },
    officialSite: "https://www.nick.com/",
  },
  webChannel: null,
  dvdCountry: null,
  externals: { tvrage: 3985, thetvdb: 75545, imdb: "tt0235923" },
  image: null,
  summary:
    '<p><b>Invader ZIM</b> is an eccentric alien soldier from the planet Irk. He was banished from the Irken Empire after nearly destroying his home planet on an early mission. After begging his superiors, the Almighty Tallest Red and Purple, for another chance, they decide to get rid of him once and for all. They trick him into going on a "secret mission" to an obscure planet at the edge of the universe, a planet with the unlikely name of Earth, in hopes that he\'ll die along the way. But their trick backfires when ZIM safely reaches Earth and begins his ever-so-subtle conquest of it. He disguises himself as a schoolboy, and now the only person who can stop him is one kid - Dib, a somewhat insane paranormal researcher, who sees straight through ZIM\'s disguise and is intent on stopping his reign of "terror". The only problem is that neither of them is very good at stopping the other.</p>',
  updated: 1704794433,
  _links: {
    self: { href: "https://api.tvmaze.com/shows/409" },
    previousepisode: { href: "https://api.tvmaze.com/episodes/39511" },
  },
};
