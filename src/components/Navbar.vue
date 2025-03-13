<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const scroll = ref(false);
const handleScroll = () => {
  scroll.value = window.scrollY > 10; // Change navbar to fixed after scrolling 50px
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'w-full transition-all duration-300',
      scroll
        ? 'fixed top-0 left-0 bg-white shadow-lg z-50'
        : ' sticky sm:fixed  top-0 bg-transparent',
    ]"
    class="md:hidden" 
  >
    <div class="container mx-auto flex w-full justify-between px-5 py-3">
      <div class="font-bold text-slate-700 text-xl">PortFolio</div>

      <!-- Collapse Button -->
      <div class="md:hidden">
        <button
          type="button"
          id="collapseButton"
          class="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none p-1"
        >
          <svg
            class="hs-collapse-open:hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg
            class="hs-collapse-open:block shrink-0 hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6  12 12" />
          </svg>
          <span class="sr-only">Toggle navigation</span>
        </button>
      </div>
      <!-- End Collapse Button -->
    </div>
  </nav>
  <nav
    :class="[
      'w-full hidden  md:block transition-all duration-300',
      scroll
        ? 'fixed top-0 left-0 bg-white shadow-lg z-50'
        : ' sticky sm:fixed  top-0 bg-transparent',
    ]"
    class=""
  >
    <div class="container mx-auto flex w-full items-center justify-between py-5">
      <div class="font-bold text-slate-700 text-xl">PortFolio</div>
      <ul class="gap-3 flex text-slate-800">
        <li><a @click.prevent="scrollTo('home')" class="hover:text-blue-700 cursor-pointer">Home</a></li>
        <li><a  @click.prevent="scrollTo('about')" class="hover:text-blue-700 cursor-pointer">About</a></li>
        <li><a  @click.prevent="scrollTo('projects')" class="hover:text-blue-700 cursor-pointer">Projects </a></li>
        <li><a  @click.prevent="scrollTo('blogs')" class="hover:text-blue-700 cursor-pointer">Blogs</a></li>
        <li><a  @click.prevent="scrollTo('contact')" class="hover:text-blue-700 cursor-pointer">Contact</a></li>
      </ul>
      <div class="">
        <a href="" :class="[' py-2 px-3 rounded-lg  transition duration-500 hover:text-white flex items-center gap-2 ', scroll ? 'border border-green-600 text-green-600 hover:bg-green-600':'border border-slate-600 text-slate-600 hover:bg-slate-600' ]">WhatsApp me  <i class="fa-solid fa-arrow-right"></i></a>
       
      </div>
    </div>
  </nav>
</template>
