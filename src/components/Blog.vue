<script setup>
const baseImagePath = import.meta.env.BASE_URL + "src/assets/images/";
const blogs = [{
  'image': baseImagePath + 'blogs/Blog1.jpg',
  'title': 'intership in company Astacode',
  'description' :'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s,',
  'date': '2 moths ago'
}]
</script>

<template>
  <div class="my-20" >
    <div class="text-center mb-4 flex justify-center items-center gap-4">
      <span class="h-0.5 w-full bg-slate-300"></span>
      <p
        class="text-center text-lg text-slate-500 font-semibold whitespace-nowrap uppercase"
      >
        Some of my latest work
      </p>
      <span class="h-0.5 w-full bg-slate-300"></span>
    </div>
    <div class="container mx-auto">
      <div class="grid max-w-5xl place-content-center mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 md:mx-0">
          <div class="bg-white shadow-lg grid place-content-center p-2 rounded-lg" v-for="blog in blogs" :key="blog.title"> 
            <!-- header for blog -->
            <div class="w-full ">
              <img :src="blog.image" class="rounded-t-lg" />
            </div>
            <h1 class="text-lg mb-0.5 text-slate-800 font-semibold">
              {{blog.title}}
            </h1>
            <div class="grid">
              <p class="text-sm text-slate-700 mb-1">
               {{blog.description}}
              </p>
              <p class="text-sm justify-self-end text-slate-500">{{blog.date}}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
