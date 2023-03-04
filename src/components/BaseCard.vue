<template>
  <div class="container-base-card">
    <h6 class="text-white mt-3 mb-4">{{ character.name }}</h6>
    <img :src="character.image" :alt="character.name" class="rounded-img">
    <div class="mt-3 d-flex justify-content-center align-items-center">
      <div class="badge-rounded" :class="character.status"></div>
      <span>{{ character.status }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    character: { type: Object, required: true } ,
  },
})
</script>

<style scoped>
.container-base-card {
  background-image: url('https://realtimevfx.com/uploads/default/original/2X/0/07a5fed9e485bee414c4c42200f02c529b29a50d.gif');
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 150px;
  cursor: pointer;
  transition: 0.3s ease-in;
  opacity: 1;
  border: 2px solid #57BB44;
  height: 280px;
  width: 230px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.container-base-card:hover{
  opacity: 0.9;
  transform: scale(1.03);
}

.rounded-img {
  width: 130px;
  height: 130px;
  border-radius: 100%;
  border: 2px solid #57BB44;
}

.rounded-img:hover {
  background: none;
}

span{
  font-size: 14px;
  color: #fff;
}

.badge-rounded{
  width: 14px;
  height: 14px;
  border-radius: 50px;
  margin-right: 10px;
}

.Alive{
  background-color: #74f55b;
}

.Dead{
  background-color: #e42424;
}

.unknown{
  background-color: #444;
}

@media (max-width: 600px) {
  .container-base-card { 
    height: 200px;
    width: 160px;
  }

  .rounded-img { 
    width: 70px;
    height: 70px;
  }
}
</style>
