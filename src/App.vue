<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
</script>

<template>
  <body class="scroll-smooth">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />

    <Navbar />
    <Hero />

    <div class="container mx-auto ">
      <h1 class="font-semibold text-4xl md:text-4xl block text-center mb-4">About</h1>
      <div class="grid place-content-center py-5">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center">
          <div class="">
            <img src="http://localhost:5173/src/assets/images/pria.png" alt="" class="" />
          </div>
          <div class="">
            <h1 class="font-bold mb-3 text-xl ">Muhamad Rizki Aripin</h1>
            <p>
              Lorem ipsum dol or sit amet consectetur adipisicing elit. Recusandae,
              doloribus. Laborum rerum non est nam maiores aliquid molestiae libero
              explicabo vel impedit quod quis dolorum odio, quos repudiandae, doloremque
              alias!
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- start project -->
    <div class="">
      <div class="container mx-auto">
        <h1 class="text-center mb-10 text-4xl font-semibold">Recent Pojects</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div class="rounded-sm">
            <img src="http://localhost:5173/src/assets/images/project-2.png" alt="" />
          </div>
          <div class="rounded-sm">
            <img src="http://localhost:5173/src/assets/images/project-2.png" alt="" />
          </div>
          <div class="rounded-sm">
            <img src="http://localhost:5173/src/assets/images/project-2.png" alt="" />
          </div>
          <div class="rounded-sm">
            <img src="http://localhost:5173/src/assets/images/project-2.png" alt="" />
          </div>
        </div>
        <div class="flex justify-content-center mt-5">
          <button
            class="bg-green-400 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-sm mx-auto"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<style></style>
