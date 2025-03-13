<script setup></script>

<template>
  <div class="my-20 mx-5 md:mx-0" >
    <div class="container mx-auto w-full">
      <div class="text-center mb-5">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">Contact Me</h1>
        <p class="text-center text-slate-500">
          Please fill out the form below to contact me
        </p>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class=" mb-5">
            <label class="text-slate-800">Name</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Name"
              class="border rounded-lg p-3 border-slate-500 w-full mb-3 focus:outline-slate-400"
            />
            <label class="text-slate-800">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              class="border rounded-lg p-3 border-slate-500 w-full mb-3 focus:outline-slate-400"
            />
            <label class="text-slate-800">Phone Number</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Your Phone Number"
              class="border rounded-lg p-3 border-slate-500 w-full focus:outline-slate-400"
            />
          </div>
          <div>
            <label class="mb-2 text-slate-800">Message</label>
            <textarea
              placeholder="Enter Your Message"
              class="border rounded-lg p-3 border-slate-500 w-full h-55 focus:outline-slate-400 mb-4"></textarea>
          </div>
        </div>
        <div class="flex justify-center ">
          <button class="w-300 bg-primary rounded-lg text-white py-3">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
