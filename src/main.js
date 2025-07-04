import "./assets/main.css";

import { createApp } from "vue";
import router from './router'; // Import router
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App)
const pinia = createPinia();

app.use(pinia);
app.use(router)
app.mount('#app')
