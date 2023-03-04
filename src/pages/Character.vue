<template>
  <div class="container-main">
    <div class="content-character">
      <div class="header">
        <div class="container-comeback" @click="goback()">
          <img
            src="../assets/svgs/arrow_down.svg"
            alt="comeback"
            class="img-comeback"
          />
          <h5>Go Back</h5>
        </div>
        <img class="logo" src="../assets/imgs/logo.png" alt="logo" />
      </div>
      <div class="container-details">
        <div class="content-details">
          <div class="header-details">
            <img
              :src="state.character.image"
              :alt="state.character.name"
              class="rounded-img"
            />
            <h2 class="list-title">{{ state.character.name }}</h2>
          </div>
          <div class="content-main-details">
            <div class="content-item">
              <h6 class="text-white">Status:</h6>
              <div
                class="ms-3 d-flex justify-content-center align-items-center"
              >
                <div
                  class="badge-rounded"
                  :class="state.character.status"
                ></div>
                <span class="value-text">{{ state.character.status }}</span>
              </div>
            </div>
            <div class="content-item">
              <h6 class="text-white">Gender:</h6>
              <span class="value-text ms-3">{{ state.character.gender }}</span>
            </div> 
            <div class="content-item">
              <h6 class="text-white">Species:</h6>
              <span class="value-text ms-3">{{ state.character.species }}</span>
            </div>
            <div class="content-item">
              <h6 class="text-white">Type:</h6>
              <span class="value-text ms-3">{{ state.character?.type }}</span>
            </div>
            <div class="content-item">
              <h6 class="text-white">Origin:</h6>
              <span class="value-text ms-3">{{ state.character.origin?.name }}</span>
            </div>
            <div class="content-item">
              <h6 class="text-white">Location:</h6>
              <span class="value-text ms-3">{{ state.character.location?.name }}</span>
            </div>
            <div class="content-item mt-5 ep">
              <h6 class="text-white">Episodes:</h6>
              <span class="value-text ms-3">{{ state.episodes }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/services/";
import { Character } from "@/interfaces/Characters.dto";


export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      character: {} as Character,
      episodes: [] as string[]
    });

    onMounted(() => {
      const idCharacter = route.params.id as string;
      getCharacter(idCharacter);
    });

    async function getCharacter(id: string) {
      const { data } = await api.character.getSingleCharacter(id);
      state.character = data;
      state.episodes = filterEpisodes(data.episode)
    }

    function filterEpisodes(episodes: string[]) {
      let eps = episodes.map((ep) => {
        return ep.split('episode/')[1]
      })
      return eps
    }

    function goback() {
      router.back()
    }

    return {
      state,
      goback
    };
  },
});
</script>

<style scoped>
.container-main {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-image: url("../assets/imgs/background-rick.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
 
}

.container-details {
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}

.content-details {
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start 
}

.content-item{
  display: flex;
  margin-right: 10px;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  margin-top: 20px;
}

.content-item h6 {
  font-size: 16px;
  margin: 0;
}

.value-text {
  text-shadow:  -1px 0 #22a2bd, 0 1px #22a2bd, 1px 0 #22a2bd, 0 -1px #22a2bd;
  font-size: 16px;
  color: #57BB44;
}

.header-details {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-comeback {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  margin: 0;
  transition: 0.3s ease-in;
  opacity: 1;
}

.container-comeback:hover {
  opacity: 0.9;
  transform: scale(1.03);
}

.container-comeback h5 {
  margin: 0;
}

.rounded-img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 2px solid #57bb44;
  margin-right: 1rem;
}

.img-comeback {
  rotate: 90deg;
  width: 50px;
  height: 50px;
}

.badge-rounded {
  width: 14px;
  height: 14px;
  border-radius: 50px;
  margin-right: 10px;
}

.Alive {
  background-color: #74f55b;
}

.Dead {
  background-color: #e42424;
}

.unknown {
  background-color: #444;
}

@media (max-width: 575.98px) { 
  .container-main{
    padding: 10px;
  }
}

@media (max-width: 735.98px) {
  .container-main {
    background-image: none;
    background-color: #262c3a;
    min-height: 800px;
    
  }

  .ep{
    margin-top: 20px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start;
  }

  .rounded-img {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 1200px) and (min-width: 735.98px) {
  .container-main {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 750px;
  }

  .rounded-img {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 1500px) and (min-width: 1300px){ 
  .container-main {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 900px;
  }
}
</style>