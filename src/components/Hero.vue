<script setup>
</script>

<template>
  <div class="w-full h-screen">
    <div
      class="w-full h-full mx-auto grid px-4 md:px-0 grid-cols-1 grid-rows-2  sm:grid-rows-1 sm:grid-cols-2 items-center" 
    >
      <div class="text-center sm:text-start grid place-content-center" data-aos="fade-right"  >
        <p class="text-lg font-medium">
          Hai I'm <span class="text-sky-600 uppercase">Rizki</span> I'm a
        </p>
        <h1 class="font-bold text-6xl mb-5 md:text-7xl text-slate-600">
          <span class="text-sky-700">Softwar</span
          ><span class="bg-slate-200 text-slate-500 rounded-sm">e</span><br />
          Developer
        </h1>
        <p class="text-slate-500 text-md">
          So, surely with hardship comes ease. <br> Surely with ˹that˺ hardship comes ˹more˺ ease
        </p>
        <div class=" ">
          <a
            href="https://wa.me/6285797779967"
            target="_blank"
            class="py-2 px-3 mx-auto sm:mx-0 w-30 rounded-lg transition  duration-500 my-4 flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            <i class="fa-brands fa-whatsapp text-xl"></i> WhatsApp
          </a>
        </div>
      </div>
      <div class="w-full flex justify-center h-full items-center" >
        <div
          class="w-60 shadow h-full sm:w-90 sm:h-120 hover:grayscale-0 grayscale group transition-all duration-1000 overflow-hidden bg-cover bg-center flex items-center justify-center rounded-lg" data-aos="fade-in"
        >
          <img src="/images/myphoto.jpeg"
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
