import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: () => import('@/views/EventList.vue')
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props:true,
      component: () => import('@/views/EventDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
