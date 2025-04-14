<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const username = ref("");
const password = ref("");

const handleLogin = () => {
  authStore.login(username.value, password.value);
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <div class="bg-gray-100 md:flex hidden">
      <img src="/guest-background.svg" alt="" />
    </div>
    <div class="grid content-center justify-center">
      <div class="grid max-w-[424px] md:min-w-[424px] margin-auto p-1.75">
        <div class="text-center mb-5 ">
          <h1 class="text-2xl mb-3 font-semibold">Sign in</h1>
          <p class="text-slate-500">Sign in to your account to start using this CMS</p>
        </div>
        <form class="" 
            @submit.prevent="handleLogin">
          <div class="mb-2">
            <label for="username" class="mb-1">Username</label>
            <input
              v-model="username"
              placeholder="Type your username"
              class="border py-2 px-3 placeholder:text-md mb-2 mt-2 w-full rounded-sm border border-slate-500" required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="mb-1">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Type your password"
              class="border py-2 px-3 placeholder:text-md mb-2 mt-2 w-full rounded-sm border border-slate-500" required
            />
          </div>
          <button
            class="bg-primary font-semibold text-white px-4 py-3 w-full rounded-sm"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
