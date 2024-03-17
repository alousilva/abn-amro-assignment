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
      component: NotFoundPage,
    },
  ],
});

export default router;
