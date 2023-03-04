<template>
  <div class="container-main">
    <div class="content">
      <div class="header">
        <router-link :to="{ name: 'Home' }">
          <img class="logo" src="../assets/imgs/logo.png" />
        </router-link>
        <input-search
          :value="search"
          @update:value="(newValue) => (search = newValue)"
        />
      </div>
      <div class="container-list" v-if="state.characters.length">
        <div class="d-flex justify-content-between align-items-center">
          <h2 class="list-title">All Characters</h2>
          <pagination
            :nextPage="nextPage"
            :previousPage="previousPage"
            :previous="state.previousPage"
            :next="state.nextPage"
            :current="state.currentpage"
          />
        </div>
        <div class="list-characters">
          <base-card
            @click="goToDetails(character.id)"
            v-for="character in state.characters"
            :key="character.id"
            :character="character"
          />
        </div>
        <pagination
          :nextPage="nextPage"
          :previousPage="previousPage"
          :previous="state.previousPage"
          :next="state.nextPage"
          :current="state.currentpage"
        />
      </div>
      <div class="container-list" v-else>
        <h2 class="list-title">No characters to show</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, watch, ref } from "vue";
import { Character } from "@/interfaces/Characters.dto";
import { useRouter, useRoute } from "vue-router";
import BaseCard from "@/components/BaseCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import Pagination from "@/components/Pagination.vue";
import api from "@/services/";

export default defineComponent({
  components: {
    BaseCard,
    InputSearch,
    Pagination,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const search = ref("")
    const state = reactive({
      characters: [] as Character[],
      charactersBeforeSearch: [] as Character[],
      nextUrl: "",
      prevUrl: "",
      currentpage: 1,
      nextPage: 2,
      previousPage: 0,
    });

    onMounted(() => {
      verifyCurrentPage()
    });

    watch(search, () => {
      getCharacterForSearch()
    })

    function verifyCurrentPage() {
      const id = route.params.id;

      if (Number(id) > 1 && Number(id) < 43) {
        state.nextUrl = "?page=" + id;
        state.prevUrl = "?page=" + (Number(id) - 1).toString();
        state.currentpage = Number(id);
        state.previousPage = Number(id) - 1;
        state.nextPage = Number(id) + 1;

        pageForUrl();
      } else {
        getCharacters();
      }
    }

    async function getCharacters(): Promise<void> {
      const { data } = await api.character.getAllCharacters();
      state.characters = data.results;
      const url = "?" + data.info.next.split("?")[1];
      state.nextUrl = url
    }

    async function nextPage(): Promise<void> {
      if (state.nextPage === 42) {
        return;
      }

      const { data } = await api.character.getAllCharacters(state.nextUrl);
      state.characters = data.results;
      if(data.info.next){
        const nextUrl = "?" + data.info.next.split("?")[1];
        state.nextUrl = nextUrl
      } else {
        state.nextUrl = ""
      }
      const prevUrl = "?" + data.info.prev.split("?")[1];
      state.prevUrl = prevUrl
      state.currentpage = state.currentpage + 1;
      state.previousPage = state.previousPage + 1;
      state.nextPage = state.nextPage + 1;
      router.push({ path: `/${state.currentpage}` });
    }

    async function pageForUrl(): Promise<void> {
      if (state.nextPage === 42) {
        return;
      }

      const { data } = await api.character.getAllCharacters(state.nextUrl);
      state.characters = data.results;
    }

    async function previousPage(): Promise<void> {
      if (state.previousPage === 0) {
        return;
      }

      const { data } = await api.character.getAllCharacters(state.prevUrl);
      state.characters = data.results;
      const nextUrl = "?" + data.info.next.split("?")[1];
      state.nextUrl = nextUrl
      if(data.info.prev){
        const prevUrl = "?" + data.info.prev.split("?")[1];
        state.prevUrl = prevUrl
      } else {
        state.prevUrl = ""
      }
      state.currentpage = state.currentpage - 1;
      state.previousPage = state.previousPage - 1;
      state.nextPage = state.nextPage - 1;

      router.push({ path: `/${state.currentpage}` });
    }

    async function getCharacterForSearch() {

      if(search.value.length > 3){
        const { data } = await api.character.getSearchCharacter(search.value);
        if(data){
          state.characters = data.results
        } else {
          state.characters = []
        }
      }

      if(search.value.length === 0){
        verifyCurrentPage()
      }
    }

    async function goToDetails(id: number) {
      router.push({ path: `/character/${id}` });
    }

    return {
      state,
      nextPage,
      previousPage,
      goToDetails,
      search,
      getCharacterForSearch
    };
  },
});
</script>

<style scoped>
.container-list {
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container-main {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  background-image: url("../assets/imgs/background-garage.jpg") !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.list-characters {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-between;
  gap: 50px;
  max-width: 1500px;
}
</style>
