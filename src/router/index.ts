import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
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
      path: "/surprise",
      name: "surprise",
      component: () => import("../pages/SurpriseMePage.vue"),
    },
  ],
});

export default router;
