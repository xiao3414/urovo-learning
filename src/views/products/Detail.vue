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
.product-detail {
  max-width: var(--content-max);
  margin: 0 auto;
}

.hero {
  margin: var(--space-4) 0 var(--space-6);
  align-items: center;
}

.image-panel {
  background: linear-gradient(135deg, var(--color-primary-light), #e6f4ff);
  border-radius: var(--radius-lg);
  padding: var(--space-4);
  border: 1px solid var(--color-primary-muted);
}

.image-panel img {
  width: 100%;
  display: block;
  border-radius: var(--radius-md);
}

.hero :deep(h2) {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: var(--space-2) 0;
}

.subtitle {
  color: var(--color-text-secondary);
  margin: var(--space-2) 0;
  font-size: var(--font-size-md);
}

.highlight {
  color: var(--color-text-muted);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-4);
}

.actions {
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.detail-tabs {
  margin-top: var(--space-2);
}

.scene-card {
  margin-bottom: var(--space-4);
  min-height: 140px;
  position: relative;
  padding-left: var(--space-2);
  border-radius: var(--radius-md);
}

.scene-num {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene-card h4 {
  margin-bottom: var(--space-2);
  color: var(--color-primary);
  padding-right: 36px;
  font-size: var(--font-size-md);
}

.scene-card p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
}
</style>
