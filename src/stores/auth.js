import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const router = useRouter();

  const login = (username, password) => {
    if (username === "admin" && password === "password/secret123") {
      user.value = { username };
      localStorage.setItem("user", JSON.stringify(user.value));
      router.push("/dashboard");
    } else {
      alert("Invalid username or password!");
    }
  };

  const logout = () => {
    user.value = null;
    localStorage.removeItem("user");
    router.push("/login");
  };

  return { user, login, logout };
});
