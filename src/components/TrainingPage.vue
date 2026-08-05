<template>
  <div class="training-page">
    <div class="page-header">
      <div>
        <h2>{{ content.title }}</h2>
        <p class="subtitle">{{ content.subtitle }}</p>
      </div>
      <el-button
        :type="progressStore.isCompleted(pageId) ? 'success' : 'primary'"
        :icon="progressStore.isCompleted(pageId) ? CircleCheckFilled : CircleCheck"
        @click="progressStore.toggleCompleted(pageId)"
      >
        {{ progressStore.isCompleted(pageId) ? '已学完' : '标记学完' }}
      </el-button>
    </div>

    <el-tabs v-model="activeTab" type="border-card">
      <el-tab-pane :label="introLabel" name="intro">
        <div class="intro-content" v-html="content.intro" />
        <el-descriptions v-if="content.specs?.length" :column="2" border class="specs">
          <el-descriptions-item
            v-for="spec in content.specs"
            :key="spec.label"
            :label="spec.label"
          >
            {{ spec.value }}
          </el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>

      <el-tab-pane name="scripts">
        <template #label>
          <span>销售话术 <el-badge :value="content.scripts?.length || 0" type="primary" /></span>
        </template>
        <el-collapse v-if="content.scripts?.length" accordion>
          <el-collapse-item
            v-for="(item, i) in content.scripts"
            :key="i"
            :title="item.scene"
            :name="i"
          >
            <div class="script-content">
              <el-tag type="warning" size="small">话术模板</el-tag>
              <p>{{ item.content }}</p>
              <el-button size="small" text type="primary" @click="copyText(item.content)">复制话术</el-button>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-empty v-else description="本模块暂无专项话术，请参考「销售话术」" />
      </el-tab-pane>

      <el-tab-pane name="faqs">
        <template #label>
          <span>客户问题 <el-badge :value="content.faqs?.length || 0" type="danger" /></span>
        </template>
        <el-collapse v-if="content.faqs?.length" accordion>
          <el-collapse-item v-for="(item, i) in content.faqs" :key="i" :title="item.q" :name="i">
            <div class="faq-answer">
              <el-tag type="success" size="small">参考答案</el-tag>
              <p>{{ item.a }}</p>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-empty v-else description="暂无" />
      </el-tab-pane>

      <el-tab-pane name="cases">
        <template #label>
          <span>成功案例 <el-badge :value="content.cases?.length || 0" type="success" /></span>
        </template>
        <el-row v-if="content.cases?.length" :gutter="16">
          <el-col v-for="(item, i) in content.cases" :key="i" :xs="24" :md="12" class="case-col">
            <el-card shadow="hover">
              <template #header>
                <div class="case-header">
                  <span class="case-customer">{{ item.customer }}</span>
                  <el-tag size="small">{{ item.industry }}</el-tag>
                </div>
              </template>
              <div class="case-body">
                <p><strong>挑战：</strong>{{ item.challenge }}</p>
                <p><strong>方案：</strong>{{ item.solution }}</p>
                <p class="case-result"><strong>成果：</strong>{{ item.result }}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-empty v-else description="暂无" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { CircleCheck, CircleCheckFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useProgressStore } from '@/stores/progress'

const props = defineProps({
  content: { type: Object, required: true },
  pageId: { type: String, required: true },
  introLabel: { type: String, default: '知识要点' },
})

const progressStore = useProgressStore()
const activeTab = ref('intro')

onMounted(() => progressStore.visitPage(props.pageId))

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => ElMessage.success('话术已复制'))
}
</script>

<style scoped>
.training-page { max-width: 960px; margin: 0 auto; }
.page-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 20px; flex-wrap: wrap; }
.page-header h2 { font-size: 1.5rem; font-weight: 600; }
.subtitle { color: #909399; font-size: 14px; margin-top: 4px; }
.intro-content { line-height: 1.8; color: #303133; }
.intro-content :deep(h3) { margin: 20px 0 10px; font-size: 16px; color: #0052d9; }
.intro-content :deep(h4) { margin: 14px 0 6px; font-size: 14px; }
.intro-content :deep(p) { margin: 8px 0; }
.intro-content :deep(ul) { padding-left: 1.5em; margin: 8px 0; }
.intro-content :deep(li) { margin: 4px 0; }
.specs { margin-top: 20px; }
.script-content, .faq-answer { line-height: 1.8; }
.script-content p, .faq-answer p { margin: 12px 0; }
.case-col { margin-bottom: 16px; }
.case-header { display: flex; justify-content: space-between; align-items: center; }
.case-customer { font-weight: 600; }
.case-body p { margin: 8px 0; font-size: 14px; color: #606266; line-height: 1.6; }
.case-result { color: #0052d9; }
</style>
