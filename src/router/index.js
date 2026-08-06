import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: () => import('@/views/HomeView.vue') },
        { path: 'products', name: 'product-catalog', component: () => import('@/views/products/Catalog.vue') },
        { path: 'products/:id', name: 'product-detail', component: () => import('@/views/products/Detail.vue') },
        { path: 'product/pda', name: 'pda', component: () => import('@/views/产品学习/PDA.vue') },
        { path: 'product/rfid', name: 'rfid', component: () => import('@/views/产品学习/RFID.vue') },
        { path: 'product/pos', name: 'pos', component: () => import('@/views/产品学习/POS.vue') },
        { path: 'software/uee', name: 'uee', component: () => import('@/views/软件生态/UEE.vue') },
        { path: 'software/ums', name: 'ums', component: () => import('@/views/软件生态/UMS.vue') },
        { path: 'industry/logistics', name: 'logistics', component: () => import('@/views/行业方案/物流.vue') },
        { path: 'industry/manufacturing', name: 'manufacturing', component: () => import('@/views/行业方案/制造.vue') },
        { path: 'industry/retail', name: 'retail', component: () => import('@/views/行业方案/零售.vue') },
        { path: 'sales/company', name: 'company', component: () => import('@/views/销售训练/公司与品牌.vue') },
        { path: 'sales/customer-analysis', name: 'customer-analysis', component: () => import('@/views/销售训练/客户分析.vue') },
        { path: 'sales/scripts', name: 'scripts', component: () => import('@/views/销售训练/话术.vue') },
        { path: 'sales/collaboration', name: 'collaboration', component: () => import('@/views/销售训练/内部协作.vue') },
        { path: 'exam', name: 'exam', component: () => import('@/views/考试系统/Index.vue') },
      ],
    },
  ],
})

export default router
