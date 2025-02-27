import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/Dashboard.vue'
import VendorView from '../views/Vendor.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: DashboardView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/vendor',
    name: 'vendor',
    component: VendorView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue'), // Lazy-loaded
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
