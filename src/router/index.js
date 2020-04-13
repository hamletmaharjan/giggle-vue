import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trending',
    name: 'Trending',
    component: () => import(/* webpackChunkName: "popular" */ '../views/Trending.vue')
  },
  {
    path: '/fresh',
    name: 'Fresh',
    component: () => import(/* webpackChunkName: "fresh" */ '../views/Fresh.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component:() => import('../views/Signup.vue')
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: () => import('../views/ArticleDetails.vue')
  },
  {
    path: '/user/:username',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
