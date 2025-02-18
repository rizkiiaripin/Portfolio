<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scroll = ref(false);
const handleScroll = () => {
  scroll.value = window.scrollY > 50; // Change navbar to fixed after scrolling 50px
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
console.log(scroll);
</script>

<template>
  <nav
    :class="[
      'w-full transition-all duration-300',
      scroll
        ? 'fixed top-0 left-0 bg-white shadow-lg z-50'
        : 'fixed top-0 bg-transparent',
    ]"
  >
    <div class="container mx-auto flex w-full justify-between py-5">
      <div class="font-bold text-slate-700 text-xl">PortFolio</div>
      <ul class="gap-3 flex text-slate-800">
        <li><a href="#" class="hover:text-blue-700">Work</a></li>
        <li><a href="" class="hover:text-blue-700">About </a></li>
        <li><a href="" class="hover:text-blue-700">Blog</a></li>
        <li><a href="" class="hover:text-blue-700">Contact</a></li>
      </ul>
      <div class="">
        <a href=""> Project Request</a>
      </div>
    </div>
  </nav>
</template>

<style></style>
