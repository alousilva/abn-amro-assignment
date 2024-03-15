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

So to circumvent this problem I extracted the list of genres from https://www.tvmaze.com/faq/32/genre-definitions and stored them in an array of objects

TODO:
code optimizations
handle errors
remove inactive queries, maybe
improve CSS
unit tests

Features:

- [X] List shows
- [X] Detailed show view
- [X] List show episodes
- [X] List show for a given genre
- [X] List show cast
- [X] Search for shows
- [ ] View all shows on results from search
      - only list all the shows for a given category based on the results of the search
- [ ] Save favorites
- [ ] Randomize show ("Surprise me")
- [ ] Dark / light mode

```js
const genres = [
  {
    name: 'Action',
    description: 'Series with high energy and plenty of physical stunts/activities.'
  },
  {
    name: 'Adult',
    description:
      'Series with a high level of sexuality, and/or violence and is only meant for aged 18+ viewers.'
  }
  // etc...
]
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

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
