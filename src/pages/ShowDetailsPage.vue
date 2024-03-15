<template>
  <div class="show-details-page">
    <!-- wait for data to load. show skeleton -->
    <div class="show-details-page__content">
      <img :src="showData?.image.medium" />
      <div class="show-details-page__title">{{ showData?.name }}</div>
      <div class="show-details-page__container">
        <div class="show-details-page__container-top">
          <span>{{ showData?.runtime }} min</span>
          <span>{{ showAiringDates }}</span>
        </div>
        <div class="show-details-page__container-middle">
          <div class="show-details-page__summary" v-html="showData?.summary"></div>
          <div class="show-details-page__genres">
            <tag-item v-for="genre in showData?.genres" :key="genre" :text="genre" />
          </div>
        </div>
        <div class="show-details-page__container-bottom">
          Favorite ME
          <span>{{ showData?.rating.average || "?" }} / 10</span>
          <a
            :href="`https://www.imdb.com/title/${showData?.externals.imdb}`"
            :aria-label="showData?.name"
            target="_blank"
            ><icon-imdb />
          </a>
        </div>

        <tab-view @selected-header="selectedTabHeadeHandler">
          <tab-panel :header="SERIE_DETAILS_TAB.Episodes">
            <episodes-list :episodes="episodesData" />
          </tab-panel>
          <tab-panel :header="SERIE_DETAILS_TAB.Cast">
            <cast-list :cast-members="castData" />
          </tab-panel>
        </tab-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconImdb from "@/components/icons/IconImdb.vue";
import CastList from "@/components/CastList.vue";
import EpisodesList from "@/components/EpisodesList.vue";
import TabPanel from "@/components/TabPanel.vue";
import TabView from "@/components/TabView.vue";
import TagItem from "@/components/TagItem.vue";
import { fetchCastByShowId, fetchEpisodesByShowId, fetchShowById } from "@/stores/api";
import { useQuery } from "@tanstack/vue-query";
import { SERIE_DETAILS_TAB, type SerieDetailsTab } from "@/types";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

// TODO: add functionality to go to a specific tab via router

const route = useRoute();
// const page = ref(1);

const currentDetailsTab = ref<SerieDetailsTab>(SERIE_DETAILS_TAB.Episodes);
const selectedTabHeadeHandler = (currentTab: SerieDetailsTab) => {
  currentDetailsTab.value = currentTab;
};

const selectedShow = ref<number | null>(route.params.id);
const { data: showData, error: showError } = useQuery({
  queryKey: ["show", route.params.id],
  queryFn: () => {
    if (selectedShow.value) return fetchShowById(selectedShow);
    return null;
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const { data: episodesData, error: episodesError } = useQuery({
  queryKey: ["episodes", selectedShow],
  queryFn: () => {
    if (currentDetailsTab.value === SERIE_DETAILS_TAB.Episodes)
      return fetchEpisodesByShowId(selectedShow);
    return [];
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const { data: castData, error: castError } = useQuery({
  queryKey: ["cast", currentDetailsTab],
  queryFn: () => {
    if (currentDetailsTab.value === SERIE_DETAILS_TAB.Cast) return fetchCastByShowId(selectedShow);
    return [];
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const showAiringDates = computed(() => {
  return `${showData.value?.premiered} - ${showData.value?.ended ? showData.value.ended : "now"}`;
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
