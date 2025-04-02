import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import UserPage from '@/pages/UserPage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/dynamic/:mood',
      name: 'dynamic',
      component: () => import ('@/pages/DynamicPage.vue'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('@/pages/UserPage.vue')
    },
    {
      path: '/not-user-found',
      name: 'notuserfound',
      component: () => import('@/pages/NotFound.vue'),
    },

    {
      path: '/cors',
      name: 'cors',
      component: () => import('@/pages/CorsPage.vue'),
    },
    {
      path:'/cors/ex',
      name: 'cors-ex',
      component: () => import('@/pages/CorsExPage.vue'),
    },
    {
      path:'/:pathMatch(.*)*',
      name: 'notfound',
      component:() =>{
        return import('@/pages/NotFound.vue')
      },
    },
  ],
})

export default router
