# tvmaze

## Technical solution

- `npm create vue@latest` to init the project
- The project uses Vue.js 3.4 and TypeScript. The choice of Vue.js is because not only I am familiar with it but also because it is a fast and easy lib to work with. The choice of TypeScript was to drastic reduce the amount of bugs and get proper intelissence
- Installed the following packages:
  - `@tanstack/vue-query` because it provides nice hooks out-of-the-box to fetch and cache data (and many more) the ease the development experience
  - `pinia` for unit testing
  - `sass`
  - `v-lazy-image` - creating a image component with proper lazy loading behavior would be very time consuming so I opted to install an existing solution. The lazy loading is important to achieve given the fact that there are hundreds of images to load at a given time, This way I reduced the amount of assets downloaded
- created my own UI lib (to prevent me from using UI libraries and show some more custom work):
  - InputText
  - TabView
  - TabPanel
  - Tag
  - A rudimentary ToasterPopup just to show some errors on the homepage and demonstrate the usage of composables
- There are some utility functions, including a debouncer created from scratch
- I used node v20.11.1 and npm v9.6.7


### Limitations of the api

- There is no query by genre since they would have to cache large data sets of shows by genre and this is not normally available on a free and public api
  ideally we would be able to query the shows by genres.

Example of a possible handy endpoint:

```text
https://api.tvmaze.com/shows?genre=action
```

Or for multiple genres (comma separated values):

```text
https://api.tvmaze.com/shows?genre=action,sci-fi,mystery
```

So to circumvent this problem I extracted the list of genres from https://www.tvmaze.com/faq/32/genre-definitions and stored them in a ShowGenres object:

```js
const genres = {
  history: {
    name: "History",
    description: "Series is either about an historical event or has an historical setting.",
  },
  horror: {
    name: "Horror",
    description: "Series with a high level of scary events or shocking content.",
  },
  // etc...
}
```

And then and query the /shows?page=<pageNumber> to get more results per page and filter them by genre via utility functions.

## Additional info

[Design sketch](https://miro.com/app/board/uXjVNgnQVSY=/?share_link_id=556408622827): In this miro board you can check the general design choices.

I also deployed the app via my netlify account to simulate a sort of a staging enviroment to check how the app behaves, without the need of running the project locally.

[Link to the app](https://staging-tvmaze.netlify.app/)

**Note1**: Since this is a SPA, routing will obviously not work on the server side. Meaning that it is useless to do a refresh while visiting a page other than the root. For that I would need to handle server side routing and for the sake of this deployed project it is not needed.

**Note2**: However this routing limitation does not occur while running the project locally, since the localhost is the server and can handle the routing.

Features:

- [X] List shows
- [X] List shows for a given genre
- [X] Search for shows
- [X] Detailed show view
  - [X] List show episodes
  - [X] List show cast
- [X] Lazy load images
- [X] Save favorites
- [X] Dark / light mode

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

In order to get the code coverage:, run:

```sh
npm run test:unit:c
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Future features

- Virtualization
- Add sorting filters
- Use the toaster component across the app
- Enhance the search functionality:
  - Single search with embed episodes
  - Show alternate lists
  - Show streaming schedule
- Improve the UI/UX:
  - Allow the user to favorite/unfavorite a show from its cover (outside the ShowDetailsPage)
  - Better responsiveness
  - Increase a11y
  