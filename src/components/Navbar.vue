<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scroll = ref(false);
const isMobileMenuOpen = ref(false);
const activeSection = ref("home"); // Default section

const handleScroll = () => {
  scroll.value = window.scrollY > 10;

  // Menentukan section aktif berdasarkan posisi scroll
  const sections = ["home", "about", "projects","skills", "blogs", "contact"];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
        break;
      }
    }
  }
};

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    activeSection.value = id; // Update active section
    isMobileMenuOpen.value = false; // Tutup menu di mobile setelah klik
  }
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
      scroll ? 'fixed top-0 left-0 bg-white shadow-lg z-50' : 'sticky md:fixed top-0 bg-transparent',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between px-5 py-4">
      <div class="font-bold text-slate-700 text-xl">PortFolio</div>
      
      <!-- Hamburger Menu for Mobile -->
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-slate-800 text-2xl">
        <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>

      <!-- Navigation Links -->
      <ul
        :class="[
          'gap-2 flex text-slate-800 md:flex',
          isMobileMenuOpen ? 'flex md:block  justify-center items-center absolute h-15 md:h-px md:static top-16 left-0 bg-white w-full md:py-5 shadow-md md:shadow-none' : 'hidden md:flex'
        ]"
      >
        <li v-for="section in ['home', 'about', 'projects','skills', 'blogs', 'contact']" :key="section">
          <a
            @click.prevent="scrollTo(section)"
            :class="[
              'cursor-pointer block p-1 transition duration-100 rounded-sm',
              activeSection === section ? '  text-sky-600 ' : 'hover:text-blue-700'
            ]"
          >
            {{ section.charAt(0).toUpperCase() + section.slice(1) }}
          </a>
        </li>
      </ul>

      <!-- WhatsApp Button -->
      <div class="hidden md:block">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          :class="[
            'py-2 px-3 rounded-lg transition duration-500 flex items-center gap-2',
            scroll ? 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white' :
                     'border border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white',
            isMobileMenuOpen ? 'white-space-nowrap' : 'text-slate-600'
          ]"
        >
          WhatsApp me <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </nav>
</template>
