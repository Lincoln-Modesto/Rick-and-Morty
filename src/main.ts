import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import router from "./router";
import "./registerServiceWorker";
import "@/assets/styles/global.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(Toast, { position: POSITION.TOP_RIGHT });
app.mount("#app");
