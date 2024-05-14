import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

// 路由配置项
const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: () => import('@/views/home/index.vue') },
  { path: '/about', name: 'about', component: () => import('@/views/about/index.vue') }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})
// 导出路由实例
export default router

// 导出注册路由函数
export const useRouter = (app: App) => {
  app.use(router)
}
