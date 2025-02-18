<script setup></script>

<template>
  
  <div class="w-full h-screen py-20">
    <div
      class="container w-full h-full mx-auto grid px-4 md:px-0 grid-cols-1 sm:grid-cols-2 place-items-center"
    >
      <div class="">
        <p class="text-md font-medium">
          Hai I'm <span class="text-blue-400  uppercase">Rizki</span> I'm a
        </p>
        <h1 class="font-bold text-5xl mb-5 md:text-7xl text-slate-700">
          <span class="text-slate-700">Backen</span><span class="bg-slate-200 text-slate-500 rounded-sm">d</span> Developer
        </h1>
        <p class="text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam
          ducimus ad iste voluptatum accusamus dolore totam possimus rerum
          aliquid!
        </p>
        <div class="flex gap-3 w-50 h-10 items-center justify-start my-4">
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
        </div>
        <div class="flex gap-2 ">
          <a
            class="bg-slate-400 shadow-lg hover:bg-slate-500 group cursor-pointer text-white transition-all duration-700 px-3 py-2 rounded-lg"
            >More About Me <i class="fa-solid fa-arrow-right transition-all group-hover:ml-5"></i></a
          >
          
        </div>  
      </div>
      <div class="relative w-full flex  items-center justify-center ">
        <img
          src="http://localhost:5173/src/assets/images/myphoto.png"
          alt=""
          class="w-80 md:w-100 "
        />
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute -z-2"
        >
          <path
            fill="#7886C7"
            d="M67.9,-16.5C77.6,7.9,68,44.1,46,59C24.1,74,-10.2,67.6,-32.8,50.1C-55.3,32.5,-66.1,3.7,-58.7,-17.4C-51.3,-38.6,-25.7,-52.2,1.7,-52.7C29.1,-53.3,58.2,-40.8,67.9,-16.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>

</style>
