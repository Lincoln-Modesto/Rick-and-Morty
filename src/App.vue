<template>
  <div id="nav">
    <loader v-if="state.Global.isLoading" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/hooks/useStore";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  components: {
    Loader
  },
  setup(){
    const state = useStore();

    return {
      state
    }
  }
})

</script>
