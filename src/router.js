import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Historia from './components/Historia.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/historia', component: Historia }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
