<template>
  <div class="show-details-page">
    <!-- wait for data to load. show skeleton -->
    <main v-if="showData" class="show-details-page__content">
      <img :src="showData.image?.medium" />
      <div class="show-details-page__title">{{ showData.name }}</div>
      <div class="show-details-page__container">
        <div class="show-details-page__container-top">
          <span>{{ showData.runtime }} min</span>
          <span>{{ showAiringDates }}</span>
        </div>
        <div class="show-details-page__container-middle">
          <div class="show-details-page__summary" v-html="showData?.summary"></div>
          <div class="show-details-page__genres">
            <tag-item
              v-for="genre in showData.genres"
              :key="genre"
              :text="genre"
              tabindex="0"
              @click="goToGenre(genre)"
              @keydown.enter="goToGenre(genre)"
            />
          </div>
        </div>
        <div class="show-details-page__container-bottom">
          <favorite-button @click="favoriteToggleHandler(showData)" v-model="showIsFavorited" />
          <span>{{ showData?.rating.average || "?" }} / 10</span>
          <a
            v-if="showData?.externals?.imdb"
            :href="`https://www.imdb.com/title/${showData.externals.imdb}`"
            :aria-label="showData?.name"
            target="_blank"
            ><img :src="IconImdb" alt="imdb icon" />
          </a>
        </div>

        <tab-view @selected-header="selectedTabHeadeHandler">
          <tab-panel :header="showDetailsTab.episodes">
            <episodes-list :episodes="episodesData" />
          </tab-panel>
          <tab-panel :header="showDetailsTab.cast">
            <cast-list :cast-members="castData" />
          </tab-panel>
        </tab-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import IconImdb from "@/assets/icon-imdb.svg?url";
import CastList from "@/components/CastList.vue";
import FavoriteButton from "@/components/FavoriteButton.vue";
import EpisodesList from "@/components/EpisodesList.vue";
import TabPanel from "@/components/TabPanel.vue";
import TabView from "@/components/TabView.vue";
import TagItem from "@/components/TagItem.vue";
import { showDetailsTab, showGenresMap } from "@/utils/constants";
import { fetchCastByShowId, fetchEpisodesByShowId, fetchShowById } from "@/stores/api";
import { useQuery } from "@tanstack/vue-query";
import { type Show, type ShowDetailsTabs } from "@/types";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFavoritesStore } from "@/stores/favorites";

// TODO: add functionality to go to a specific tab via router

const route = useRoute();
const router = useRouter();
const store = useFavoritesStore();
const { addShowToFavorites, removeShowFromFavorites, isShowInFavorites } = store;
// const page = ref(1);

const currentDetailsTab = ref<ShowDetailsTabs>(showDetailsTab.episodes);
const selectedTabHeadeHandler = (currentTab: ShowDetailsTabs) => {
  currentDetailsTab.value = currentTab;
};

const selectedShow = ref<number>(Number(route.params.id));
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
    if (currentDetailsTab.value === showDetailsTab.episodes)
      return fetchEpisodesByShowId(selectedShow);
    return [];
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const { data: castData, error: castError } = useQuery({
  queryKey: ["cast", currentDetailsTab],
  queryFn: () => {
    if (currentDetailsTab.value === showDetailsTab.cast) return fetchCastByShowId(selectedShow);
    return [];
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const showIsFavorited = ref(false);
watch(
  () => showData.value,
  (show) => {
    if (show?.id) {
      showIsFavorited.value = isShowInFavorites(show.id);
    }
  },
  { immediate: true },
);

const favoriteToggleHandler = (show: Show) => {
  if (showIsFavorited.value) {
    removeShowFromFavorites(show.id);
  } else {
    addShowToFavorites(show);
  }
};

const goToGenre = (genre: string) => {
  const selectedGenre = showGenresMap.get(genre);
  if (selectedGenre) {
    router.push({
      path: `/genre/${selectedGenre.code}`,
    });
  }
};

const showAiringDates = computed(() => {
  return `${showData.value?.premiered} - ${showData.value?.ended ? showData.value.ended : "now"}`;
});
</script>

<style lang="scss" scoped>
.show-details-page {
  &__genres {
    display: flex;
    gap: 0 20px;

    :deep(.tag-item) {
      cursor: pointer;
    }
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
