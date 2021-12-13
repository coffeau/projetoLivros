import Vue from 'vue'
import VueRouter from 'vue-router'
import Perfil from '../views/Perfil';

import { auth } from '../plugins/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    //meta: { requiresAuth: true, },
    children: [
      { path: '/perfil', component: Perfil, name: "Perfil" },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/formulario',
        name: 'formulario',
        component: () => import('../views/Formulario.vue')
      },
      {
        path: '/perfil',
        name: 'perfil',
        component: () => import('../views/Perfil.vue')
      }
    ]
  },

  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children: [

    ]
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
