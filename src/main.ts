import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";

import App from "./App.vue";
import ToasterPopup from "@/components/ToasterPopup.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia()).use(router).use(VueQueryPlugin);

app.component("toaster-popup", ToasterPopup);

app.mount("#app");
