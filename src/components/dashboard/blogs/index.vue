<script setup>
import { ref } from "vue";
import Sidebar from "@/components/dashboard/Sidebar.vue";
import { useBlogStore } from "@/stores/blog";

const blogStore = useBlogStore();
const title = ref("");
const description = ref("");
const date = ref("");
const image = ref(null);
const editIndex = ref(null);
const expandedIndex = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      image.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const addBlog = () => {
  if (title.value.trim() && description.value.trim()) {
    const newBlog = {
      image: image.value,
      title: title.value,
      description: description.value,
      date: date.value,
    };

    if (editIndex.value !== null) {
      blogStore.updateBlog(editIndex.value, newBlog);
      editIndex.value = null;
    } else {
      blogStore.addBlog(newBlog);
    }

    title.value = "";
    description.value = "";
    image.value = null;
  }
};

const editBlog = (index) => {
  const blog = blogStore.blogs[index];
  title.value = blog.title;
  description.value = blog.description;
  image.value = blog.image;
  date.value = blog.date;
  editIndex.value = index;
};

const deleteBlog = (index) => {
  blogStore.deleteBlog(index);
};

const toggleExpand = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};
</script>

<template>
  <Sidebar>
    <div class="grid grid-cols-1 md:grid-cols-3 m-5">
      <form class="grid" @submit.prevent="addBlog">
        <label for="image" class="mb-1">Image</label>
        <input
          type="file"
          id="image"
          @change="handleFileUpload"
          class="border border-slate-300 rounded-lg p-2 mb-2"
        />
        <label for="title" class="mb-1">Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          class="border border-slate-300 rounded-lg p-2 mb-2"
          placeholder="Please enter title.."
        />
        <label for="date" class="mb-1">Date</label>
        <input
          type="text"
          id="date"
          v-model="date"
          class="border border-slate-300 rounded-lg p-2 mb-2"
          placeholder="Please enter date.."
        />
        <label for="description" class="mb-1">Description</label>
        <textarea
          rows="3"
          v-model="description"
          class="border border-slate-300 rounded-lg p-2 mb-2"
          placeholder="Please enter description..."
        ></textarea>
        <button
          type="submit"
          class="bg-primary p-2 rounded-lg text-white cursor-pointer"
        >
          {{ editIndex !== null ? "Update" : "Add" }}
        </button>
      </form>

      <div class="md:col-start-2 md:col-end-4 m-5">
        <table class="w-full text-center border border-slate-300">
          <thead class="border-b border-b-slate-300">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(blog, index) in blogStore.blogs" :key="index" class="border-b border-b-slate-300">
              <td class="flex justify-center items-center py-2">
                <img v-if="blog.image" :src="blog.image" alt="Blog Image" class="w-16 h-16 object-cover rounded-lg" />
              </td>
              <td class="max-w-20">{{ blog.title }}</td>
              <td class="max-w-20">{{ blog.date }}</td>
              <td class="max-w-20">
                <p @click="toggleExpand(index)" class="cursor-pointer ">
                  {{ expandedIndex === index ? blog.description : blog.description.slice(0, 50) + (blog.description.length > 50 ? "..." : "") }}
                </p>
              </td>
              <td>
                <button @click="editBlog(index)" class="bg-yellow-500 mr-1 py-2 px-3 rounded-lg text-white text-xs cursor-pointer">
                 <i class="fa-classic fa-solid fa-edit fa-fw"></i>
                </button>
                <button @click="deleteBlog(index)" class="bg-red-700 py-2 px-3 rounded-lg text-white text-xs cursor-pointer">
                  <i class="fa-classic fa-solid fa-trash fa-fw"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Sidebar>
</template>
