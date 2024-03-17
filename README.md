# tvmaze

used npm create vue@latest to init the project

## Limitations of the api

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

TODO:
  Testar
  - genre page
  - show details page
  - home page

Documentacao
Design miro

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
- [X] add nice horizontal scroll bars to the shows list
- [X] add styles for bigger screens

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

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
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