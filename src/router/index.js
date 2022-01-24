import Vue from 'vue'
import VueRouter from 'vue-router'
import Perfil from '../views/Perfil';

//import { auth } from '../plugins/firebase'
//import { Store } from 'vuex';
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    meta: { auth: false },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/formulario',
        name: 'formulario',
        component: () => import('../views/Formulario.vue')
      },
      {
        path: 'api',
        name: 'api',
        component: () => import('../api/api.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    meta: { auth: true, },
    children: [
      { path: '/perfil', component: Perfil, name: "Perfil" },
    ]
  },
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)){
    if(!store.state.auth.loggedIn){
      next('/login')
    }else{
      next()
    }
  }else {
    next()
  }
})

  //if (auth && !auth.currentUser) {
    //next('/login')
  //} else {
    //next()
  //}


export default router
