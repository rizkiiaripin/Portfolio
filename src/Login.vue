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
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div class="flex flex-col items-center justify-center bg-white shadow-lg p-10 rounded-lg">
      <h1 class="text-2xl mb-4">Login</h1>
      <input
        v-model="username"
        placeholder="Username"
        class="border p-2 mb-2  rounded-lg"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2 mb-2 rounded-lg"
      />
      <button @click="handleLogin" class="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Login
      </button>
    </div>
  </div>
</template>
