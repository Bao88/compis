import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// Views
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: AdminView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
