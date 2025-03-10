<script setup></script>

<template>
  <div class="my-20">
    <div class="container mx-auto w-full">
      <div class="text-center mb-15">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">My Project</h1>
        <p class="text-center text-slate-500">
          This Some Colections My Projects
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div
          class="w-fit h-fit group transition-all overflow-hidden relative rounded-lg mx-3 md:mx-0 bg-gradient-to-br from-blue-500/40 from-30% to-sky-100 to-70%"
        >
          <div
            class="scale-85 translate-y-8 md:translate-y-17 transition-all group-hover:scale-100 group-hover:translate-y-0 w-fit h-fit ease-in-out duration-600"
          >
            <img
              src="localhost:5273/src/assets/images/project1.png"
              class="rounded-lg"
            />
          </div>
          <div class="absolute top-0 translate-y-5 cursor-pointer left-0 bg-primary text-white p-2 rounded-br-lg rounded-tl-lg group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-in-out duration-600">
          Show more
          </div>
        </div>
        <div
          class="w-fit h-fit group transition-all overflow-hidden relative rounded-lg mx-3 md:mx-0 bg-gradient-to-br from-blue-500/40 from-30% to-red-100 to-70%"
        >
          <div
            class="scale-85 translate-y-8 md:translate-y-17 transition-all group-hover:scale-100 group-hover:translate-y-0 w-fit h-fit ease-in-out duration-600"
          >
            <img
              src="localhost:5273/src/assets/images/project1.png"
              class="rounded-lg"
            />
          </div>
          <div class="absolute top-0 translate-y-5 cursor-pointer left-0 bg-primary text-white p-2 rounded-br-lg rounded-tl-lg group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-in-out duration-600">
          Show more
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style></style>
