<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Project from "@/components/Project.vue";
import Skill from "@/components/Skill.vue";
import About from "@/components/About.vue";
import Loader from "@/components/Loader.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import { ref, onMounted } from "vue";

const loading = ref(true);

// Hide loader after page is loaded
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000); // Simulates loading time (adjust as needed)
});
</script>

<template>
  <body class="scroll-smooth">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
     <Loader :isLoading="loading" />
    <Navbar />
    <Hero />
    <About />
    <Project />
    <Skill />
    <Contact /> 
    <Footer />
  </body>
</template>

<style></style>
