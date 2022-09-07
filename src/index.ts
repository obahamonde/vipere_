import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'


const routes = setupLayouts(generatedRoutes)
const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
