import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from "@/views/Layout/DashboardLayout";
import HomeLayout from "@/views/Layout/HomeLayout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeLayout,
        redirect: 'home',
        children: [
            {
                name: 'home',
                path: '/home',
                component: () => import('../views/Home/Home')
            },
            {
                name: 'login',
                path: '/login',
                component: () => import('../views/Home/Login')
            }
        ]
    },
    {
        path: '/',
        component: DashboardLayout,
        redirect: 'dashboard',
        children: [
            {
                name: 'dashboard',
                path: '/dashboard',
                component: () => import('../views/Dashboard/Dashboard')
            },
            {
                name: 'users',
                path: '/users',
                component: () => import('../views/Users/Users')
            },
            {
                name: 'jobs',
                path: '/jobs',
                component: () => import('../views/Jobs/Jobs')
            }
      ]
    }
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
