import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Root',
  //   component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
  // },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "button" */ '../views/button/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
