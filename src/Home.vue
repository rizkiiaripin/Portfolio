<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Project from "@/components/Project.vue";
import Skill from "@/components/Skill.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
import Blog from "@/components/Blog.vue";

// State untuk loader
const loading = ref(false);

// Hide loader setelah halaman selesai dimuat
onMounted(() => {
  AOS.init({
    duration: 1000, // Durasi animasi dalam milidetik
    once: false, // Animasi hanya terjadi sekali
  });
});
</script>
<template>
  <Navbar />
  <Hero id="home" />
  <About id="about" />
  <Project />
  <Skill id="skills" />
  <Blog id="blogs" />
  <Contact id="contact" />
  <Footer />
</template>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
