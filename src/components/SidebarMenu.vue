<template>
  <el-scrollbar class="menu-scroll">
    <el-menu
      :default-active="activePath"
      :collapse="collapsed"
      background-color="#001529"
      text-color="rgba(255,255,255,0.75)"
      active-text-color="#409EFF"
      :default-openeds="defaultOpeneds"
      router
    >
      <template v-for="group in menuConfig" :key="group.id">
        <el-menu-item v-if="group.path" :index="group.path">
          <el-icon><component :is="iconMap[group.icon]" /></el-icon>
          <span>{{ group.title }}</span>
          <el-icon v-if="progressStore.isCompleted('exam')" class="done-icon">
            <CircleCheckFilled />
          </el-icon>
        </el-menu-item>

        <el-sub-menu v-else :index="group.id">
          <template #title>
            <el-icon><component :is="iconMap[group.icon]" /></el-icon>
            <span>{{ group.title }}</span>
          </template>
          <el-menu-item
            v-for="item in group.children"
            :key="item.id"
            :index="item.path"
          >
            <span class="lesson-title">{{ item.title }}</span>
            <el-icon v-if="progressStore.isCompleted(item.id)" class="done-icon">
              <CircleCheckFilled />
            </el-icon>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  Box, Monitor, OfficeBuilding, ChatDotRound, EditPen, Goods, CircleCheckFilled,
} from '@element-plus/icons-vue'
import { menuStructure } from '@/data/menu'
import { useMenuConfig } from '@/composables/useMenuConfig'
import { useProgressStore } from '@/stores/progress'

defineProps({ collapsed: Boolean })

const route = useRoute()
const progressStore = useProgressStore()
const { menuConfig } = useMenuConfig()

const iconMap = { Box, Monitor, OfficeBuilding, ChatDotRound, EditPen, Goods }
const defaultOpeneds = menuStructure.filter((g) => g.children).map((g) => g.id)
const activePath = computed(() => route.path)
</script>

<style scoped>
.menu-scroll { flex: 1; overflow: hidden; }
:deep(.el-menu) { border-right: none; }
:deep(.el-menu-item) { display: flex; align-items: center; }
.lesson-title { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 13px; }
.done-icon { color: #67c23a; font-size: 14px; margin-left: auto; }
</style>
