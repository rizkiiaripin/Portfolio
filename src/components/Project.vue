<script setup>
import { ref } from "vue";

// Semua data proyek
const allProjects = ref([
  {
    id: 1,
    title: "Company profile LPK Tsukuba",
    description: "Deskripsi detail mengenai Project 1.",
    image: "/images/projects/project-3.png",
    icon: ["fa-brands fa-laravel", "fa-brands fa-bootstrap"],
    source: "Github",
    link: "",
    background: "bg-gradient-to-br from-blue-500/40 from-30% to-sky-100 to-70%",
    isOpen: false,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Deskripsi detail mengenai Project 2.",
    image:"/images/projects/project-3.png",
    icon: ["fa-brands fa-laravel", "fa-brands fa-bootstrap"],
    source: "Github",
    link: "",
    background: "bg-gradient-to-br from-blue-500/40 from-30% to-red-100 to-70%",
    isOpen: false,
  },
  {
    id: 3,
    title: "Project 3",
    description: "Deskripsi detail mengenai Project 3.",
    image: "/images/projects/project-3.png",
    icon: ["fa-brands fa-laravel", "fa-brands fa-bootstrap"],
    source: "Github",
    link: "",
    background: "bg-gradient-to-br from-blue-500/40 from-30% to-green-100 to-70%",
    isOpen: false,
  },
  {
    id: 4,
    title: "Project 4",
    description: "Deskripsi detail mengenai Project 4.",
    image:"/images/projects/project-3.png",
    icon: ["fa-brands fa-laravel", "fa-brands fa-bootstrap"],
    source: "Github",
    link: "",
    background: "bg-gradient-to-br from-blue-500/40 from-30% to-yellow-100 to-70%",
    isOpen: false,
  }
]);

// Jumlah proyek yang ditampilkan
const visibleCount = ref(4);
const isLoading = ref(false);

// Fungsi untuk menampilkan lebih banyak proyek
const showMore = () => {
  isLoading.value = true;
  setTimeout(() => {
    visibleCount.value += 2; // Tambahkan 2 proyek setiap klik
    isLoading.value = false;
  }, 1000); // Simulasi loading 1 detik
};

// Fungsi untuk membuka modal berdasarkan ID
const openModal = (id) => {
  allProjects.value = allProjects.value.map((modal) =>
    modal.id === id ? { ...modal, isOpen: true } : modal
  );
};

// Fungsi untuk menutup modal
const closeModal = (id) => {
  allProjects.value = allProjects.value.map((modal) =>
    modal.id === id ? { ...modal, isOpen: false } : modal
  );
};
</script>


<template>
  <div class="my-20">
    <div class="container mx-auto w-full " id="projects">
      <div class="text-center mb-15">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">My Projects</h1>
        <p class="text-center text-slate-500">Some Collections of My Projects</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="modal in allProjects.slice(0, visibleCount)"
          :key="modal.id"
          :class="'w-fit h-fit group transition-all overflow-hidden relative rounded-lg mx-3 md:mx-0 ' + modal.background"
        >
          <div class="scale-85 translate-y-8 transition-all group-hover:scale-100 group-hover:translate-y-0 w-fit h-fit ease-in-out duration-600">
            <img :src="modal.image" class="rounded-lg" />
          </div>
          <div
            @click="openModal(modal.id)"
            class="absolute top-0 translate-y-5 cursor-pointer left-0 bg-primary text-white p-2 rounded-br-lg rounded-tl-lg group-hover:translate-y-0 transition-all ease-in-out duration-600"
          >
            Show detail
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-4">
        <button
          v-if="visibleCount < allProjects.length"
          @click="showMore"
          class="bg-white cursor-pointer border border-sky-600 text-slate-700 transition duration-500 rounded-lg py-2 px-4 hover:bg-sky-600 hover:text-white flex items-center"
        >
          <span v-if="!isLoading">Show More</span>
          <span v-if="isLoading" class="flex items-center">
            <svg class="animate-spin h-5 w-5 text-sky-600 mr-2" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0H4z"></path>
            </svg>
            Loading...
          </span>
        </button>
      </div>
    </div>
  </div>

  <!-- Modal -->
   
  <div v-for="modal in allProjects" :key="modal.id">
    <div v-if="modal.isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-500/50">
      <div class="relative bg-white rounded-lg shadow-md w-full mx-2 sm:mx-0 max-w-2xl">
        <div class="flex items-center justify-between p-4 border-b border-b-slate-200">
          <h3 class="text-xl font-semibold text-slate-700">{{ modal.title }}</h3>
          <button @click="closeModal(modal.id)" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
            </svg>
          </button>
        </div>
     <!-- Modal body -->
        <div class="p-4 space-y-4  h-120 overflow-y-auto">
          <div class="w-fit h-fit">
            <img :src="modal.image" class="" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="col-start-1 col-end-3 order-2 sm:order-1">
              <p class="text-base text-gray-500">{{ modal.description }}</p>
            </div>
            <div class="grid gap-2 order-1 sm:order-2">
              <div :class="'w-full  rounded-lg py-3 px-2 text-slate-800 '+ modal.background ">
                <h2 class="font-semibold mb-1">Stack</h2>
                <div class="flex gap-1" >

                  <i v-for="icon in modal.icon" :class="icon"></i>
                </div>
              </div>
              <div :class="'w-full  rounded-lg py-3 px-2 text-slate-800 '+ modal.background ">
                <h2 class="font-semibold mb-1 ">Source</h2>
                <div class="flex gap-1">
                  <a href=""
                    ><p class="text-sm underline">{{modal.source}}</p></a>
                  
                </div>
              </div>
              <div :class="'w-full  rounded-lg py-3 px-2 text-slate-800 '+ modal.background ">
                <h2 class="font-semibold mb-1">Link</h2>
                <div class="flex gap-1">
                  <a :href="modal.link"
                    ><p class="text-sm underline">{{modal.link}}</p></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center justify-end p-4 border-t border-t-slate-200">
        
          <button
            @click="closeModal(modal.id)"
            class="ml-3 text-gray-900 bg-white border border-gray-200 rounded-lg text-sm px-5 py-2.5 hover:bg-gray-100 hover:text-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
