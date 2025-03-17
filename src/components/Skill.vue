<script setup>
import { ref } from "vue";

const containerRef = ref(null);
const activeSection = ref("frameworks");

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

      <div class="flex justify-center gap-5 mb-10 ">
        <a
          @click="scrollToSection('frameworks')"
          :class="
            activeSection === 'frameworks' ? 'text-blue-700' : 'text-slate-900'
          "
          class="group cursor-pointer font-semibold"
        >
          Frameworks
          <hr :class="activeSection === 'frameworks' ? 'bg-blue-700' : 'hidden group-hover:flex transition-all duration-1000'" />
        </a>
        <a
          @click="scrollToSection('tools')"
          :class="
            activeSection === 'tools' ? 'text-blue-700' : 'text-slate-900'
          "
          class="group cursor-pointer font-semibold"
        >
          Tools
          <hr :class="activeSection === 'tools' ? 'bg-blue-700' : 'hidden group-hover:flex transition-all duration-1000'" />
        </a>
      </div>

      <div
        ref="containerRef"
        class="flex overflow-x-auto scrollbar-hide gap-10 w-full"
      >
        <div id="frameworks" class="min-w-full flex-shrink-0">
          <div class="flex justify-center items-center  place-items-center gap-10">
            <div class="">
              <div class="flex items-center gap-10">
                <img
                  src="http://localhost:5173/src/assets/images/skills/laravel.png"
                />
                <!-- <div class="w-full">
                  <h2 class="text-slate-600 text-lg font-semibold">Laravel</h2>
                  <hr class="w-full text-slate-400" />
                </div> -->
              </div>
            </div>
            <div class="">
              <div class="flex items-center gap-10">
                <img
                  src="http://localhost:5173/src/assets/images/skills/bootstrap.png"
                />
                <!-- <div class="w-full">
                  <h2 class="text-slate-600 text-lg font-semibold">
                    Bootstrap
                  </h2>
                  <hr class="w-full text-slate-400" />
                </div> -->
              </div>
            </div>
            <div class="">
              <div class="flex items-center gap-10">
                <img
                  src="http://localhost:5173/src/assets/images/skills/tailwindcss.png"
                />
                <!-- <div class="w-full">
                  <h2 class="text-slate-600 text-lg font-semibold">
                    Tailwind CSS
                  </h2>
                  <hr class="w-full text-slate-400" />
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div id="tools" class="min-w-full flex-shrink-0">
          <h2 class="text-2xl font-bold text-slate-700 mb-5">Tools</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="">
              <div class="flex items-center gap-10">
               <img
                  src="http://localhost:5173/src/assets/images/skills/tools/git.png"
                />
                <div class="w-full">
                  <h2 class="text-slate-600 text-lg font-semibold">Git</h2>
                  <hr class="w-full text-slate-400" />
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex items-center gap-10">
                <img
                  src="http://localhost:5273/src/assets/images/skills/vscode.png"
                  class="w-16 h-16"
                />
                <div class="w-full">
                  <h2 class="text-slate-600 text-lg font-semibold">VS Code</h2>
                  <hr class="w-full text-slate-400" />
                </div>
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
