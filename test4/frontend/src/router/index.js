import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/firstPage',
    name: 'firstPage',
    component: () => import('../views/firstPage.vue') // set home as path '/'
  },
  {
    path: '/homePage/:userId',
    name: 'homePage',
    component: () => import('../views/HomePage.vue') // set home as path '/'
  },
  {
    path: '/book/:bookId/:userId',
    name: 'detailPage',
    component: () => import('../views/detailPage.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue')
  },
  {
    path: '/signupPage',
    name: 'signupPage',
    component: () => import('../views/signupPage.vue')
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: () => import('../views/forgetPassword.vue')
  },
  {
    path: '/detailProfile/:userId',
    name: 'detailProfile',
    component: () => import('../views/detailProfile.vue')
  },
  {
    path: '/barPage',
    name: 'barPage',
    component: () => import('../views/barPage.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router