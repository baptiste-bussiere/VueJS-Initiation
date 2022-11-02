import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// import font
import "@/assets/Style.css"
createApp(App).use(store).use(router).mount('#app')