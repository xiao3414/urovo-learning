<template>
  <div class="home-view">
    <el-card class="welcome-card" shadow="never">
      <div class="welcome-content">
        <div class="welcome-text">
          <el-tag type="warning" effect="dark" size="small">销售新人专属</el-tag>
          <h2>优博讯销售培训学习平台</h2>
          <p>产品图鉴 · 产品知识 · 行业方案 · 销售话术 · 在线考试</p>
          <div class="actions">
            <el-button type="primary" size="large" @click="$router.push('/products')">浏览产品图鉴</el-button>
            <el-button size="large" @click="continueLearning">
              {{ lastPage ? '继续学习' : '开始学习' }}
            </el-button>
            <el-button size="large" @click="$router.push('/exam')">结业考试</el-button>
          </div>
        </div>
        <div class="stats">
          <el-statistic title="学习模块" :value="progressStore.totalCount" />
          <el-statistic title="已完成" :value="progressStore.completedCount" />
          <el-statistic title="完成率" :value="progressStore.progressPercent" suffix="%" />
        </div>
      </div>
      <el-progress :percentage="progressStore.progressPercent" :stroke-width="12" color="#fff" style="margin-top:20px" />
    </el-card>

    <el-row :gutter="16">
      <el-col v-for="group in menuConfig.filter(g => g.children || g.path)" :key="group.id" :xs="24" :sm="12" :lg="8">
        <el-card shadow="hover" class="module-card" @click="startGroup(group)">
          <el-icon :size="28" color="#0052d9"><component :is="iconMap[group.icon]" /></el-icon>
          <h3>{{ group.title }}</h3>
          <p>{{ group.children ? `${group.children.length} 个模块` : `${productCount} 款产品` }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Box, Monitor, OfficeBuilding, ChatDotRound, Goods } from '@element-plus/icons-vue'
import { menuConfig, allPages } from '@/data/menu'
import { productCatalog } from '@/data/products'
import { useProgressStore } from '@/stores/progress'

const router = useRouter()
const progressStore = useProgressStore()
const iconMap = { Box, Monitor, OfficeBuilding, ChatDotRound, Goods }
const productCount = productCatalog.length

const lastPage = computed(() =>
  progressStore.lastVisited ? allPages.find((p) => p.id === progressStore.lastVisited) : null
)

function continueLearning() {
  router.push((lastPage.value || allPages[0]).path)
}

function startGroup(group) {
  if (group.path) {
    router.push(group.path)
    return
  }
  router.push(group.children[0].path)
}
</script>

<style scoped>
.home-view { max-width: 1100px; margin: 0 auto; }
.welcome-card { margin-bottom: 24px; background: linear-gradient(135deg, #0052d9, #003a8c); color: #fff; border: none; }
.welcome-content { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
.welcome-text h2 { font-size: 1.5rem; margin: 8px 0; }
.welcome-text p { opacity: 0.9; margin-bottom: 16px; }
.actions { display: flex; gap: 12px; }
.stats { display: flex; gap: 32px; }
.stats :deep(.el-statistic__head) { color: rgba(255,255,255,0.75); }
.stats :deep(.el-statistic__content) { color: #fff; }
.module-card { margin-bottom: 16px; cursor: pointer; transition: transform 0.2s; text-align: center; padding: 12px 0; }
.module-card:hover { transform: translateY(-2px); }
.module-card h3 { margin: 12px 0 4px; font-size: 15px; }
.module-card p { color: #909399; font-size: 13px; }
</style>
