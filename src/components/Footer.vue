<script setup>
// Fungsi untuk scroll ke elemen berdasarkan ID
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Jarak tambahan dari atas agar tidak terlalu mepet
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  }
};
</script>
<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-300">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 justify-self-center">
          <h1
            class="text-5xl sm:text-6xl tracking-wide font-semibold text-gray-900 dark:text-white"
          >
            <span>Code smarter,</span><br />
            not harder.
          </h1>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div>
            <h2
              class="mb-6 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Quick Links
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-2">
                <a
                  @click.prevent="scrollToSection('home')"
                  class="hover:underline"
                  >Home</a
                >
              </li>
              <li class="mb-2">
                <a
                  @click.prevent="scrollToSection('about')"
                  class="hover:underline"
                  >About</a
                >
              </li>
              <li class="mb-2">
                <a
                  @click.prevent="scrollToSection('projects')"
                  class="hover:underline"
                  >Projects</a
                >
              </li>
              <li class="mb-2">
                <a
                  @click.prevent="scrollToSection('skills')"
                  class="hover:underline"
                  >Skills</a
                >
              </li>
              <li class="mb-2">
                <a
                  @click.prevent="scrollToSection('blogs')"
                  class="hover:underline"
                  >Blogs</a
                >
              </li>
              <li class="mb-2">
                <a
                  @click.prevent="scrollToSection('contact')"
                  class="hover:underline"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h2
              class="mb-6 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Social Media
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <div class="flex mt-4 sm:justify-center sm:mt-0 gap-2 text-lg">
                <a
                  href="#"
                  class="text-gray-500  hover:text-gray-900 flex items-center dark:hover:text-white"
                >
                
                 <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 flex items-center dark:hover:text-white"
                >
                
                 <i class="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 flex items-center dark:hover:text-white"
                >
                
                 <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 flex items-center dark:hover:text-white"
                >
                
                 <i class="fa-brands fa-linkedin"></i>
                </a>
               
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div
        class="sm:flex sm:items-center sm:justify-between font-semibold text-md"
      >
        <span class="text-gray-500 sm:text-center dark:text-gray-400"
          >© 2025 . It's
          <a href="https://flowbite.com/" class="hover:underline text-cyan-700"
            >open source</a
          >
        </span>
      </div>
    </div>
  </footer>
</template>
