<template>
  <el-container class="app-layout">
    <el-aside :width="collapsed ? '64px' : '280px'" class="sidebar">
      <div class="sidebar-header">
        <img src="/favicon.svg" alt="logo" class="logo" />
        <div v-show="!collapsed" class="brand">
          <h1>{{ t('brand.title') }}</h1>
          <p>{{ t('brand.subtitle') }}</p>
        </div>
      </div>

      <SidebarMenu :collapsed="collapsed" />

      <div class="sidebar-footer">
        <el-button
          :icon="collapsed ? Expand : Fold"
          text
          @click="collapsed = !collapsed"
        />
      </div>
    </el-aside>

    <el-container>
      <el-header class="main-header" height="56px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">{{ t('nav.home') }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="route.name === 'product-detail'" :to="{ path: '/products' }">
            {{ t('nav.catalog') }}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="currentTitle">{{ currentTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="header-actions">
          <el-tag size="small" type="info" effect="plain">{{ t('brand.region') }}</el-tag>
          <el-dropdown trigger="click" @command="setLocale">
            <el-button text class="lang-btn">
              <el-icon><Globe /></el-icon>
              {{ locale === 'zh' ? t('lang.zh') : t('lang.en') }}
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="en" :disabled="locale === 'en'">English</el-dropdown-item>
                <el-dropdown-item command="zh" :disabled="locale === 'zh'">中文</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Fold, Expand } from '@element-plus/icons-vue'
import SidebarMenu from './SidebarMenu.vue'
import { useMenuConfig } from '@/composables/useMenuConfig'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useI18n } from '@/i18n'

const Globe = {
  template: `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.4a15.6 15.6 0 0 0-1.12-4.36A8.03 8.03 0 0 1 19.93 11ZM12 4c.95 1.74 1.6 3.6 1.92 5.5H10.08C10.4 7.6 11.05 5.74 12 4ZM8.59 6.64A15.6 15.6 0 0 0 7.47 11h-3.4a8.03 8.03 0 0 1 4.52-4.36ZM4.07 13h3.4c.22 1.54.62 3.02 1.12 4.36A8.03 8.03 0 0 1 4.07 13Zm3.53 5.36c.5-1.34.9-2.82 1.12-4.36h3.45c-.32 1.9-.97 3.76-1.92 5.5-1.05-1.01-1.78-2.2-2.65-3.14ZM13 18.5c.95-1.74 1.6-3.6 1.92-5.5h3.78a8.03 8.03 0 0 1-4.52 4.36A15.6 15.6 0 0 0 13 18.5Zm3.41-12.86A15.6 15.6 0 0 0 15.53 11h3.4a8.03 8.03 0 0 0-4.52-5.36ZM13 5.5c1.05 1.01 1.78 2.2 2.65 3.14.5 1.34.9 2.82 1.12 4.36H13V5.5Zm-1 0v7.5H7.23c.22-1.54.62-3.02 1.12-4.36.87-.94 1.6-2.13 2.65-3.14Z"/></svg>`,
}

const collapsed = ref(false)
const route = useRoute()
const { getPageTitle } = useMenuConfig()
const { getProductById } = useProductCatalog()
const { t, locale, setLocale } = useI18n()

const currentTitle = computed(() => {
  if (route.name === 'home') return ''
  if (route.name === 'product-catalog') return t('nav.catalog')
  if (route.name === 'product-detail') {
    return getProductById(route.params.id)?.name || t('product.notFound')
  }
  return getPageTitle(route.name)
})
</script>

<style scoped>
.app-layout {
  height: 100vh;
}

.sidebar {
  background: var(--color-sidebar);
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width var(--duration-normal) var(--ease-out);
  overflow: hidden;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}

.brand h1 {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}

.brand p {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
  margin-top: 2px;
}

.sidebar-footer {
  margin-top: auto;
  padding: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.sidebar-footer :deep(.el-button) {
  color: rgba(255, 255, 255, 0.75);
}

.main-header {
  background: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-6);
  height: var(--header-height);
  gap: 16px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.lang-btn {
  font-weight: 500;
}

.main-content {
  padding: var(--space-6);
  overflow-y: auto;
  background: var(--color-bg);
}
</style>
