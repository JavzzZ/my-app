import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Mila from '../pages/Mila.vue';
import Malena from '../pages/Malena.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/mila',
    component: Mila
  },
  {
    path: '/malena',
    component: Malena
  }
];
const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/micro-vue3-app3" : "/"
  ),
  routes
});
export default router;
