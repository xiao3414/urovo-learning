import { createRouter, createWebHistory } from 'vue-router'
import SiteLayout from '@/components/SiteLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: SiteLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: { titleKey: 'seo.home', descriptionKey: 'seo.homeDesc' },
        },
        {
          path: 'products',
          name: 'product-catalog',
          component: () => import('@/views/products/Catalog.vue'),
          meta: { titleKey: 'seo.products', descriptionKey: 'seo.productsDesc' },
        },
        {
          path: 'products/:id',
          name: 'product-detail',
          component: () => import('@/views/products/Detail.vue'),
          meta: { titleKey: 'seo.products' },
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/about/AboutView.vue'),
          meta: { titleKey: 'seo.about', descriptionKey: 'seo.aboutDesc' },
        },
        {
          path: 'resources',
          name: 'resources',
          component: () => import('@/views/resources/ResourcesView.vue'),
          meta: { titleKey: 'seo.resources', descriptionKey: 'seo.resourcesDesc' },
        },
        { path: 'product/pda', name: 'pda', component: () => import('@/views/产品学习/PDA.vue') },
        { path: 'product/rfid', name: 'rfid', component: () => import('@/views/产品学习/RFID.vue') },
        { path: 'product/pos', name: 'pos', component: () => import('@/views/产品学习/POS.vue') },
        {
          path: 'software/uee',
          name: 'uee',
          component: () => import('@/views/software/SoftwareDetailView.vue'),
          meta: { titleKey: 'seo.softwareEnterprise', descriptionKey: 'seo.softwareDesc' },
        },
        {
          path: 'software/ums',
          name: 'ums',
          component: () => import('@/views/software/SoftwareDetailView.vue'),
          meta: { titleKey: 'seo.softwareEnterprise', descriptionKey: 'seo.softwareDesc' },
        },
        {
          path: 'industry/logistics',
          name: 'logistics',
          component: () => import('@/views/solutions/SolutionDetailView.vue'),
          meta: { titleKey: 'seo.solutionsLogistics', descriptionKey: 'seo.solutionsDesc' },
        },
        {
          path: 'industry/manufacturing',
          name: 'manufacturing',
          component: () => import('@/views/solutions/SolutionDetailView.vue'),
          meta: { titleKey: 'seo.solutionsManufacturing', descriptionKey: 'seo.solutionsDesc' },
        },
        {
          path: 'industry/retail',
          name: 'retail',
          component: () => import('@/views/solutions/SolutionDetailView.vue'),
          meta: { titleKey: 'seo.solutionsRetail', descriptionKey: 'seo.solutionsDesc' },
        },
        { path: 'sales/company', name: 'company', redirect: '/about' },
        { path: 'sales/customer-analysis', name: 'customer-analysis', component: () => import('@/views/销售训练/客户分析.vue') },
        { path: 'sales/scripts', name: 'scripts', component: () => import('@/views/销售训练/话术.vue') },
        { path: 'sales/collaboration', name: 'collaboration', component: () => import('@/views/销售训练/内部协作.vue') },
        { path: 'exam', name: 'exam', component: () => import('@/views/考试系统/Index.vue') },
      ],
    },
  ],
})

export default router
