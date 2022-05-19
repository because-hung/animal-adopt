import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeViewTW from '../views/HomeViewTW.vue'
import AdoptPage from '../views/pages/AdoptPage.vue'

const routes = [
  {
    path: '/',
    name: 'homeTW',
    component: HomeViewTW
  },
  {
    path: '/adopt',
    name: 'AdoptPage',
    component: AdoptPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
