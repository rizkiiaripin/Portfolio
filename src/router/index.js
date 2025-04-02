import { createRouter, createWebHistory } from "vue-router";
import NotFound from '@/NotFound.vue';

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../Dashboard.vue"),
  },
  {
    path: "",
    name: "home",
    component: () => import("../Home.vue"),
  },
  {
    path: "/dashboard/blogs",
    name: "blog",
    component: () => import("@/components/dashboard/blogs/index.vue"),
  },
  
  // Route fallback untuk halaman yang tidak ditemukan
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
