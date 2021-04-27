import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DashboardLayout from "@/views/Layout/DashboardLayout";

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      component: DashboardLayout,
      children: [
          {
              name: 'dashboard',
              path: '/dashboard',
              component: () => import('../views/Dashboard')
          }
      ]
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
        return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
})

export default router
