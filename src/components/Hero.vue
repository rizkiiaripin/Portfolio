<script setup></script>

<template>
  <div class="w-full h-screen">
    <div
      class="container w-full h-full mx-auto grid px-4 md:px-0 grid-cols-1 grid-rows-2 gap-5 sm:grid-rows-1 sm:grid-cols-2 place-items-center"
    >
      <div class="text-center sm:text-start">
        <p class="text-md font-medium">
          Hai I'm <span class="text-sky-600 uppercase">Rizki</span> I'm a
        </p>
        <h1 class="font-bold text-6xl mb-5 md:text-7xl text-slate-600">
          <span class="text-sky-700">Fullstac</span
          ><span class="bg-slate-200 text-slate-500 rounded-sm">k</span>
          Developer
        </h1>
        <p class="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam
          ducimus ad iste voluptatum accusamus dolore totam possimus rerum
          aliquid!
        </p>
      </div>
      <div class="w-full flex justify-center h-full items-center">
        <div
          class="w-60 shadow h-full sm:w-90 sm:h-120 hover:grayscale-0 grayscale group transition-all duration-1000 overflow-hidden bg-cover bg-center flex items-center justify-center rounded-lg"
        >
          <img
            src="localhost:5273/src/assets/images/myphoto.jpeg"
            alt=""
            class="rounded-lg w-full"
          />
        </div>
        <div
          class="w-1/2 right-0 absolute h-1/2 bottom-0 hidden pointer-events-none md:block bg-gradient-to-b from-white-500/40 from-30% to-white to-70% blur-lg"
        ></div>
      </div>
    </div>
  </div>
</template>
