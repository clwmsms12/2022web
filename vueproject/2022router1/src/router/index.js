import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ProductView from '../views/ProductView.vue'
import OnlineView from '../views/OnlineView.vue'
import CommView from '../views/CommView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/online',
    name: 'online',
    component: OnlineView
  },
  {
    path: '/comm',
    name: 'comm',
    component: CommView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
