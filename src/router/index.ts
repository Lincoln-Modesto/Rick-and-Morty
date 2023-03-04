import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Character = () => import("../pages/Character.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "HomeWithPage",
    component: Home,
  },
  {
    path: '/character/:id',
    name: "Character",
    component: Character,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
