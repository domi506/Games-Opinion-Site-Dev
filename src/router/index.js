import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Opiniones from '@/views/Opiniones.vue'
import Admin from '@/views/Admin.vue'
import Edit from '@/views/Edit.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/Opiniones',
    name: 'Opiniones',
    component: Opiniones
  },
  {
    path: '/Edit/:index',
    name: 'Edit',
    component: Edit,
    props:true
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
