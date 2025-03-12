<script setup>
import { ref } from 'vue';

// State untuk modal
const modals = ref([
  {
    id: 1,
    title: "Project 1",
    description: "Deskripsi detail mengenai Project 1.",
    image: "localhost:5273/src/assets/images/project1.png",
    isOpen: false,
  },
  {
    id: 2,
    title: "Project 2",
    description: "Deskripsi detail mengenai Project 2.",
    image: "localhost:5173/src/assets/images/project1.png",
    isOpen: false,
  },
]);

// Fungsi untuk membuka modal berdasarkan ID
const openModal = (id) => {
  modals.value = modals.value.map(modal =>
    modal.id === id ? { ...modal, isOpen: true } : modal
  );
};

// Fungsi untuk menutup modal
const closeModal = (id) => {
  modals.value = modals.value.map(modal =>
    modal.id === id ? { ...modal, isOpen: false } : modal
  );
};
</script>

<template>
  <div class="my-20">
    <div class="container mx-auto w-full">
      <div class="text-center mb-15">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">My Projects</h1>
        <p class="text-center text-slate-500">Some Collections of My Projects</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
          v-for="modal in modals" 
          :key="modal.id"
          class="w-fit h-fit group transition-all overflow-hidden relative rounded-lg mx-3 md:mx-0 bg-gradient-to-br from-blue-500/40 from-30% to-sky-100 to-70%"
        >
          <div class="scale-85 translate-y-8 transition-all group-hover:scale-100 group-hover:translate-y-0 w-fit h-fit ease-in-out duration-600">
            <img src="localhost:5273/src/assets/images/project1.png" class="rounded-lg" />
          </div>
          <div 
            @click="openModal(modal.id)" 
            class="absolute top-0 translate-y-5 cursor-pointer left-0 bg-primary text-white p-2 rounded-br-lg rounded-tl-lg group-hover:translate-y-0 transition-all ease-in-out duration-600"
          >
            Show detail
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div v-for="modal in modals" :key="modal.id">
    <div v-if="modal.isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-500/50">
      <div class="relative bg-white rounded-lg shadow-md w-full max-w-2xl">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 border-b">
          <h3 class="text-xl font-semibold text-gray-900">{{ modal.title }}</h3>
          <img :src="modal.image"/>
          <button @click="closeModal(modal.id)" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
            <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"/>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 space-y-4">
          <p class="text-base text-gray-500">{{ modal.description }}</p>
        </div>
        <!-- Modal footer -->
        <div class="flex items-center p-4 border-t">
          <button @click="closeModal(modal.id)" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
            I accept
          </button>
          <button @click="closeModal(modal.id)" class="ml-3 text-gray-900 bg-white border border-gray-200 rounded-lg text-sm px-5 py-2.5 hover:bg-gray-100 hover:text-blue-700">
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
