import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/genre/:genre",
      name: "genre",
      component: () => import("../pages/GenrePage.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../pages/ShowDetailsPage.vue"),
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("../pages/FavoritesPage.vue"),
    },
    {
      path: "/:pathName(.*)",
      name: "not-found",
      // TODO: fix transition warning
      // check https://stackoverflow.com/questions/65553121/vue-3-transition-renders-non-element-root-node-that-cannot-be-animated
      component: NotFoundPage,
    },
  ],
});

export default router;
