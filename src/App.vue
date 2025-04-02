<script setup>
import { ref, onMounted } from "vue";
import Loader from "@/components/Loader.vue";
const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 700); // Simulasi waktu loading
});
</script>

<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <Loader :isLoading="loading" />
  <router-view></router-view>
</template>
