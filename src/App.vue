<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Project from "@/components/Project.vue";
</script>

<template>
  <body class="scroll-smooth">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <Navbar />
    <Hero />
    <div class="my-10">
      <div class="container mx-auto w-full">
        <h1
          class="font-semibold text-center text-slate-700 text-2xl md:text-4xl"
        >
         About Me
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 place-content-center">
          <div>
            <h2 class="font-semibold mb-4">Muhamad Rizki Aripin</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but </p>
          </div><div class="flex gap-3 w-full h-10 items-center justify-center sm:my-4">
          <a
            class="fa-brands fa-instagram text-2xl transtion-all hover:scale-110 hover:text-pink-400 text-slate-400 duration-300 cursor-pointer"
          ></a>
          <a
            class="fa-brands fa-facebook text-2xl transtion-all hover:scale-110 hover:text-blue-600 text-slate-400 duration-300 cursor-pointer"
          ></a>
          <a
            class="fa-brands fa-whatsapp text-2xl transtion-all hover:scale-110 hover:text-green-400 text-slate-400 duration-300 cursor-pointer"
          ></a>
          <a
            class="fa-brands fa-github text-2xl transtion-all hover:text-black text-slate-400 hover:scale-110 duration-300 cursor-pointer"
          ></a>
          <a
            class="fa-brands fa-linkedin text-2xl transtion-all hover:text-blue-700 text-slate-400 hover:scale-110 duration-300 cursor-pointer"
          ></a>
        </div>
        
        </div>
      </div>
    </div>
    <Project />
    <div>
      <div>
        
      </div>
    </div>
  </body>
</template>

<style></style>
