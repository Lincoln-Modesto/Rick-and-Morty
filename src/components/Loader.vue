<template>
  <div class="loading-div">
    <div class="loader">
      <svg
        version="1.1"
        id="loader-1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 50 50"
        style="enable-background: new 0 0 50 50"
        xml:space="preserve"
      >
        <path
          fill="#57BB44;"
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({ })
</script>

<style scoped>
.loading-div {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: rgb(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  margin: 0 0 2em;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}

/*
  Set the color of the icon
*/
svg path,
svg rect {
  fill: #57BB44;
}
</style>
