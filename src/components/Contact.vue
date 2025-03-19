<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

// Data form
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});
let error = ref(false);
const message = ref("");
// Untuk menampilkan popup sukses
const isSubmitted = ref(false);
const close_popup = () => {
  isSubmitted.value = false;
};
const sendEmail = () => {
  // Validasi sederhana
  if (!form.value.name || !form.value.email || !form.value.message) {
  
    isSubmitted.value = true;
    error.value = true;
    message.value = "Please fill out the form completely";
    return;
  }

  // Kirim email via EmailJS
  emailjs
    .send(
      "service_igpg8dm", // Ganti dengan Service ID
      "template_vp9hp0t", // Ganti dengan Template ID
      form.value,
      "Onn6ALF0HWawutrsS" // Ganti dengan User ID dari EmailJS
    )
    .then(() => {
      isSubmitted.value = true; // Tampilkan popup sukses
      error.value = false;
      message.value = "Your message has been sent successfully!";
      form.value = { name: "", email: "", phone: "", message: "" }; // Reset form
    })
    .catch((error) => {
      error_popup.value = true;
    });
};
</script>

<template>
  <div
    tabindex="-1" 
    :class="[isSubmitted ?  'fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full overflow-y-auto overflow-x-hidden bg-slate-500/50' : 'hidden']"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
        <button @click="close_popup"
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center" >
          <svg
            :class="['mx-auto mb-4 w-12 h-12 dark:text-gray-200', error ? 'text-red-500 dark:text-red-400' : 'text-green-500 dark:text-green-400']"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {{message}}
          </h3>
          <button  @click="close_popup"
            data-modal-hide="popup-modal" 
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
          >
          Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="my-20 mx-5 md:mx-0" id="contact">
    <div class="container mx-auto w-full">
      <div class="text-center mb-5">
        <h1 class="font-semibold mb-3 text-slate-700 text-3xl">Contact Me</h1>
        <p class="text-center text-slate-500">
          Please fill out the form below to contact me
        </p>
      </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div class="mb-5">
            <label class="text-slate-800">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter Your Name"
              class="border rounded-lg p-3 border-slate-500 w-full mb-3 focus:outline-slate-400"
              required
            />
            <label class="text-slate-800">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="Enter Your Email"
              class="border rounded-lg p-3 border-slate-500 w-full mb-3 focus:outline-slate-400"
              required
            />
            <label class="text-slate-800">Phone Number</label>
            <input
              v-model="form.phone"
              type="text"
              placeholder="Enter Your Phone Number"
              class="border rounded-lg p-3 border-slate-500 w-full focus:outline-slate-400"
              required
            />
          </div>
          <div>
            <label class="mb-2 text-slate-800">Message</label>
            <textarea
              v-model="form.message"
              placeholder="Enter Your Message"
              class="border rounded-lg p-3 border-slate-500 w-full h-55 focus:outline-slate-400 mb-4"
              required
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            @click="sendEmail"
            type="submit"
            class="cursor-pointer w-300 bg-primary rounded-lg text-white py-3"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Popup sukses -->
  
</template>
