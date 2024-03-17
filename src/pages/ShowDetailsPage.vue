<template>
  <div class="show-details-page">
    <!-- wait for data to load. show skeleton -->
    <main v-if="showData" class="show-details-page__content">
      <div class="show-details-page__poster">
        <img v-if="showData.image?.medium" :src="showData.image.medium" />
        <i v-else class="fa fa-file-image-o" aria-hidden="true"></i>
      </div>
      <h2 class="show-details-page__title">{{ showData.name }}</h2>
      <div class="show-details-page__container">
        <div class="show-details-page__container-top">
          <div>{{ runTime }} min</div>
          <div>{{ showData.language }}</div>
          <div>{{ showAiringDates }}</div>
        </div>
        <div class="show-details-page__container-middle">
          <div class="show-details-page__summary" v-html="showData?.summary"></div>
          <div class="show-details-page__genres">
            <tag-item
              v-for="genre in showData.genres"
              :key="genre"
              :text="genre"
              tabindex="0"
              role="button"
              @click="goToGenre(genre)"
              @keydown.enter="goToGenre(genre)"
            />
          </div>
        </div>
        <div class="show-details-page__container-bottom">
          <favorite-button
            v-model="showIsFavorited"
            @click="favoriteToggleHandler(showData)"
            :item-id="showData.id"
            :item-name="showData.name"
          />
          <div class="show-details-page__ratings">
            <span>{{ showData?.rating.average || "?" }} / 10</span>
            <a
              v-if="showData?.externals?.imdb"
              :href="`https://www.imdb.com/title/${showData.externals.imdb}`"
              :aria-label="showData?.name"
              target="_blank"
              ><img :src="IconImdb" alt="imdb icon" />
            </a>
          </div>
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

const route = useRoute();
const router = useRouter();
const store = useFavoritesStore();
const { addShowToFavorites, removeShowFromFavorites, isShowInFavorites } = store;

const currentDetailsTab = ref<ShowDetailsTabs>(showDetailsTab.episodes);
const selectedTabHeadeHandler = (currentTab: ShowDetailsTabs) => {
  currentDetailsTab.value = currentTab;
};

const selectedShow = ref<number>(Number(route.params.id));
const { data: showData, error: showError } = useQuery({
  queryKey: ["show", route.params.id],
  queryFn: () => {
    if (selectedShow.value) {
      return fetchShowById(selectedShow);
    }
    return null;
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const { data: episodesData, error: episodesError } = useQuery({
  queryKey: ["episodes", selectedShow],
  queryFn: () => {
    if (currentDetailsTab.value === showDetailsTab.episodes) {
      return fetchEpisodesByShowId(selectedShow);
    }
    return [];
  },
  // @ts-ignore This field is not defined in the vue-query types
  keepPreviousData: true,
});

const { data: castData, error: castError } = useQuery({
  queryKey: ["cast", currentDetailsTab],
  queryFn: () => {
    if (currentDetailsTab.value === showDetailsTab.cast) {
      return fetchCastByShowId(selectedShow);
    }
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

const runTime = computed(() => {
  return showData.value?.runtime || showData.value?.averageRuntime || "?";
});
</script>

<style lang="scss" scoped>
.show-details-page {
  padding: var(--spacing-large);

  &__poster {
    margin-inline: auto;
    text-align: center;
    display: block;

    img {
      border-radius: var(--border-radius);
    }

    i {
      font-size: 150px;
    }
  }

  &__title {
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-2);
    text-align: initial;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-normal) var(--spacing-none);
  }

  &__container-top {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-none) var(--spacing-normal);
    font-size: var(--font-size-2);
  }

  &__container-middle {
    font-size: var(--font-size-3);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-large) 0;
  }

  &__genres {
    display: flex;
    gap: var(--spacing-small) var(--spacing-normal);
    flex-wrap: wrap;

    :deep(.tag-item) {
      cursor: pointer;
    }
  }

  &__container-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-small) var(--spacing-normal);
    flex-wrap: wrap;
  }

  &__ratings {
    display: flex;
    align-items: center;
    gap: var(--spacing-none) var(--spacing-normal);

    a {
      height: 32px;
    }
  }
}
</style>
