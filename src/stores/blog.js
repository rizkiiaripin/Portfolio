import { defineStore } from "pinia";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    blogs: JSON.parse(localStorage.getItem("blogs")) || [],
  }),
  actions: {
    addBlog(newBlog) {
      this.blogs.push(newBlog);
      this.saveToLocalStorage();
    },
    updateBlog(index, updatedBlog) {
      if (index >= 0 && index < this.blogs.length) {
        this.blogs[index] = updatedBlog;
        this.saveToLocalStorage();
      }
    },
    deleteBlog(index) {
      if (index >= 0 && index < this.blogs.length) {
        this.blogs.splice(index, 1);
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("blogs", JSON.stringify(this.blogs));
    },
  },
});
