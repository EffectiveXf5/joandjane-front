import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/destinos',
    name: 'Destinations',
    component: () => import('../views/Destinations.vue')
  },
  {
    path: '/destinoID',
    name: 'Specific-destination',
    component: () => import('../views/Specific-destination.vue')
  },
  {
    path: '/experiencias',
    name: 'Experiences',
    component: () => import('../views/Experiences.vue')
  },
  {
    path: '/experienciaId',
    name: 'Specific-experience',
    component: () => import('../views/Specific-experience.vue')
  },
  {
    path: '/blog',
    name: 'Blog-global',
    component: () => import('../views/Blog-global.vue')
  },
  {
    path: '/blogId',
    name: 'Blog-post',
    component: () => import('../views/Blog-post.vue')
  },
  {
    path: '/nuevaexperiencia',
    name: 'Nueva-experiencia',
    component: () => import('../views/Form-new-experience.vue')
  },
  {
    path: '/nuevoblog',
    name: 'Nuevo-blog',
    component: () => import('../views/Form-new-blog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
