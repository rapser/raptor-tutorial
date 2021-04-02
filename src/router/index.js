import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/episodes',
    alias: '/',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episode" */ '../views/Episodes.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "location" */ '../views/Locations.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "character" */ '../views/Characters.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
