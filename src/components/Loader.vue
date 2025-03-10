<script setup>
defineProps({
  isLoading: Boolean, // Accepts prop to show/hide loader
});
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 flex bg-white flex-row gap-2 z-200 items-center justify-center"
  >
    <div class="w-4 h-4 rounded-full bg-sky-500 animate-bounce"></div>
    <div
      class="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:-.3s]"
    ></div>
    <div
      class="w-4 h-4 rounded-full bg-sky-500 animate-bounce [animation-delay:-.5s]"
    ></div>
  </div>
</template>

<style></style>
