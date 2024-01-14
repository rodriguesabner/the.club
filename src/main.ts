import {createApp} from 'vue'
import * as VueRouter from "vue-router"
import App from './App.vue'
import './style.css'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app')
