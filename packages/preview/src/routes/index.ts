import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/stickyElTable',
    component: () => import('@/pages/stickyElTable/index.vue')
  },
  {
    path: '/previewImg',
    component: () => import('@/pages/previewImg.vue')
  }
]



export default createRouter({
  history: createWebHistory(),
  routes
})