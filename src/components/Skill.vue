<script setup>
import { ref } from "vue";

// Fungsi untuk mendapatkan path gambar secara dinamis
const containerRef = ref(null);
const activeSection = ref("frameworks");

// Data untuk skills
const skills = ref({
  frameworks: [
    { image: "/images/skills/laravel.png" },
    { image: "/images/skills/bootstrap.png" },
    { image: "/images/skills/tailwindcss.png" },
    { image: "/images/skills/vue.png" }
  ],
  tools: [
    { image: "/images/skills/tools/git.png" },
    { image: "/images/skills/tools/postman.png" },
    { image: "/images/skills/tools/figma.png" },
    
  ],
});

// Fungsi scroll ke section yang diklik
const scrollToSection = (sectionId) => {
  if (containerRef.value) {
    const section = document.getElementById(sectionId);
    if (section) {
      containerRef.value.scrollTo({
        left: section.offsetLeft - containerRef.value.offsetLeft
      });
      activeSection.value = sectionId;
    }
  }
};
</script>

<template>
  <div class="my-20 mx-5 md:mx-0">
    <div class="container mx-auto w-full">
      <div class="text-center mb-3">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">My Skills</h1>
        <p class="text-center text-slate-500">
          How proficient am I in the tools used?
        </p>
      </div>

      <div class="flex justify-center gap-5 mb-10">
        <a
          @click="scrollToSection('frameworks')"
          :class="
            activeSection === 'frameworks' ? 'text-blue-700' : 'text-slate-900'
          "
          class="group cursor-pointer font-semibold"
        >
          Frameworks
          <hr
            :class="
              activeSection === 'frameworks'
                ? 'bg-blue-700'
                : 'hidden group-hover:flex transition-all duration-1000'
            "
          />
        </a>
        <a
          @click="scrollToSection('tools')"
          :class="
            activeSection === 'tools' ? 'text-blue-700' : 'text-slate-900'
          "
          class="group cursor-pointer font-semibold"
        >
          Tools
          <hr
            :class="
              activeSection === 'tools'
                ? 'bg-blue-700'
                : 'hidden group-hover:flex transition-all duration-1000'
            "
          />
        </a>
      </div>

      <div
        ref="containerRef"
        class="flex overflow-x-auto scrollbar-hide gap-10 w-full"
      >
        <div id="frameworks" class="min-w-full flex-shrink-0">
          <div
            class="md:flex justify-center items-center grid grid-cols-3 place-items-center gap-5  " 
          >
            <div class="" v-for="framework in skills.frameworks" :key="framework.name"  data-aos="fade-in">
              <div class="flex items-center gap-10">
                <img
                  :src="framework.image"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="tools" class="min-w-full flex-shrink-0">
          <div
            class="md:flex justify-center items-center grid grid-cols-3 place-items-center gap-5"
          >
            <div class="" v-for="tool in skills.tools" :key="tool.name"  data-aos="fade-in">
              <div class="flex items-center gap-10" >
                <img
                  :src="tool.image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
