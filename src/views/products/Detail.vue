<template>
  <div v-if="product" class="product-detail">
    <el-button :icon="ArrowLeft" text @click="$router.push('/products')">返回产品图鉴</el-button>

    <el-row :gutter="24" class="hero">
      <el-col :xs="24" :md="10">
        <div class="image-panel">
          <img
            :src="product.imageDetail || product.image"
            :alt="product.name"
            loading="eager"
            decoding="async"
            width="720"
            height="540"
          />
        </div>
      </el-col>
      <el-col :xs="24" :md="14">
        <el-tag type="primary" size="small">{{ getCategoryTitle(product.category) }}</el-tag>
        <h2>{{ product.name }}</h2>
        <p class="subtitle">{{ product.subtitle }}</p>
        <p class="highlight">{{ product.highlight }}</p>
        <div class="actions">
          <el-button v-if="product.trainingPath" type="primary" @click="$router.push(product.trainingPath)">
            进入销售培训
          </el-button>
          <el-button @click="activeTab = 'scenarios'">查看应用场景</el-button>
        </div>
      </el-col>
    </el-row>

    <el-tabs v-model="activeTab" type="border-card" class="detail-tabs">
      <el-tab-pane label="规格参数" name="specs">
        <el-descriptions :column="1" border>
          <el-descriptions-item
            v-for="spec in product.specs"
            :key="spec.label"
            :label="spec.label"
          >
            {{ spec.value }}
          </el-descriptions-item>
        </el-descriptions>
      </el-tab-pane>

      <el-tab-pane label="应用场景" name="scenarios">
        <el-row :gutter="16">
          <el-col v-for="(scene, i) in product.scenarios" :key="i" :xs="24" :md="8">
            <el-card shadow="never" class="scene-card">
              <div class="scene-num">{{ i + 1 }}</div>
              <h4>{{ scene.title }}</h4>
              <p>{{ scene.desc }}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>

  <el-empty v-else description="产品不存在">
    <el-button type="primary" @click="$router.push('/products')">返回产品图鉴</el-button>
  </el-empty>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import { getProductById, getCategoryTitle } from '@/data/products'

const route = useRoute()
const activeTab = ref('specs')

const product = computed(() => getProductById(route.params.id))

onMounted(() => {
  window.scrollTo(0, 0)
})

watch(
  () => route.params.id,
  () => {
    activeTab.value = 'specs'
    window.scrollTo(0, 0)
  }
)
</script>

<style scoped>
.product-detail { max-width: 1000px; margin: 0 auto; }
.hero { margin: 16px 0 24px; align-items: center; }
.image-panel {
  background: linear-gradient(135deg, #f0f5ff, #e6f4ff);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #d6e4ff;
}
.image-panel img { width: 100%; display: block; border-radius: 8px; }
.subtitle { color: #606266; margin: 8px 0; font-size: 15px; }
.highlight { color: #909399; font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.actions { display: flex; gap: 12px; flex-wrap: wrap; }
.detail-tabs { margin-top: 8px; }
.scene-card { margin-bottom: 16px; min-height: 140px; position: relative; padding-left: 8px; }
.scene-num {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #0052d9;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.scene-card h4 { margin-bottom: 8px; color: #0052d9; padding-right: 36px; }
.scene-card p { color: #606266; font-size: 14px; line-height: 1.6; }
</style>
