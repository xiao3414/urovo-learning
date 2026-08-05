<template>
  <el-container class="app-layout">
    <el-aside :width="collapsed ? '64px' : '280px'" class="sidebar">
      <div class="sidebar-header">
        <img src="/favicon.svg" alt="logo" class="logo" />
        <div v-show="!collapsed" class="brand">
          <h1>优博讯销售培训</h1>
          <p>urovo-learning</p>
        </div>
      </div>

      <div v-show="!collapsed" class="progress-card">
        <div class="progress-label">
          <span>学习进度</span>
          <span>{{ progressStore.completedCount }}/{{ progressStore.totalCount }}</span>
        </div>
        <el-progress
          :percentage="progressStore.progressPercent"
          :stroke-width="10"
          :color="'#0052D9'"
        />
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
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="currentTitle">{{ currentTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
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
import { useProgressStore } from '@/stores/progress'
import { allPages } from '@/data/menu'

const collapsed = ref(false)
const route = useRoute()
const progressStore = useProgressStore()

const currentTitle = computed(() => {
  if (route.name === 'home') return ''
  const page = allPages.find((p) => p.id === route.name)
  return page?.title || ''
})
</script>

<style scoped>
.app-layout {
  height: 100vh;
}

.sidebar {
  background: #001529;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
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

.progress-card {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 8px;
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
  background: #fff;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

.main-content {
  padding: 24px;
  overflow-y: auto;
}
</style>
