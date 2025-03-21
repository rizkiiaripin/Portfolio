<script setup>
// Fungsi untuk scroll ke elemen berdasarkan ID
const scrollToSection = (id) => {
  const sections = ["home", "about", "projects", "skills", "blogs", "contact"];

  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Jarak tambahan dari atas agar tidak terlalu mepet
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    });
  }
};
  const socialMedia =[{
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/kii.76576?igsh=MTFwcXoxd24zbzI3cg==",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com/profile.php?id=100092078480105",
  },
  {
    name: "Whatsapp",
    icon: "fa-brands fa-whatsapp",
    link: "https://wa.me/6285797779967",
  },
  {
    name: "Linkedin",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/muhamad-rizki-aripin-95327b354/",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    link: "https://github.com/rizkiiaripin"
    }
  ];
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
              <li
                class="mb-2"
                v-for="section in [
                  'home',
                  'about',
                  'projects',
                  'skills',
                  'blogs',
                  'contact',
                ]"
                :key="section"
              >
                <a
                  @click.prevent="scrollToSection(section)"
                  class="hover:underline"
                >
                  {{ section.charAt(0).toUpperCase() + section.slice(1) }}
                </a>
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
                   v-for="media in socialMedia" :key="media.name" :href=" media.link"
                  class="text-gray-500 hover:text-gray-900 flex items-center dark:hover:text-white"
                >
                  <i :class="media.icon"></i>

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
          <a href="https://github.com/rizkiiaripin" class="hover:underline text-cyan-700"
            >open source</a
          >
        </span>
      </div>
    </div>
  </footer>
</template>
