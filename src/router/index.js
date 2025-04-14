import { createRouter, createWebHistory } from "vue-router";
import NotFound from '@/NotFound.vue';
import { useAuthStore } from "@/stores/auth";

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../Dashboard.vue"),
    meta: { requiresAuth: true }, // Proteksi route
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
    meta: { requiresAuth: true }, // Proteksi route
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/Login.vue"),
    meta: { requiresAuth: false }, // Proteksi route

  },
  // Route fallback untuk halaman yang tidak ditemukan
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// ✅ Middleware untuk mengecek autentikasi sebelum masuk ke halaman tertentu
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const user = localStorage.getItem("user");

  // Jika route memerlukan autentikasi dan user belum login, arahkan ke /login
  if (to.meta.requiresAuth === false && user) {
    next("/dashboard")
  }else if(to.meta.requiresAuth === true && !user) {
    next('/login')
  }else{
    next()
  }
});

export default router;
