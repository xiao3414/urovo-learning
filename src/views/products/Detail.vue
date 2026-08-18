<template>
  <div v-if="product" class="product-detail">
    <el-button :icon="ArrowLeft" text @click="$router.push('/products')">{{ t('product.back') }}</el-button>

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
            {{ t('product.enterTraining') }}
          </el-button>
          <el-button @click="activeTab = 'scenarios'">{{ t('product.viewScenarios') }}</el-button>
        </div>
      </el-col>
    </el-row>

    <el-tabs v-model="activeTab" type="border-card" class="detail-tabs">
      <el-tab-pane :label="t('product.specs')" name="specs">
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

      <el-tab-pane :label="t('product.scenarios')" name="scenarios">
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

  <el-empty v-else :description="t('product.notFound')">
    <el-button type="primary" @click="$router.push('/products')">{{ t('product.back') }}</el-button>
  </el-empty>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useI18n } from '@/i18n'

const route = useRoute()
const activeTab = ref('specs')
const { getProductById, getCategoryTitle } = useProductCatalog()
const { t, locale } = useI18n()

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

watch(locale, () => {
  /* re-localize product display */
})
</script>

<style scoped>
.product-detail {
  max-width: var(--content-max);
  margin: 0 auto;
}

.hero {
  margin: var(--space-4) 0 var(--space-6);
}

.image-panel {
  background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
}

.image-panel img {
  max-width: 100%;
  max-height: 360px;
  object-fit: contain;
}

.subtitle {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  margin: var(--space-2) 0;
}

.highlight {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.detail-tabs {
  margin-top: var(--space-4);
}

.scene-card {
  height: 100%;
  position: relative;
  padding-top: var(--space-2);
}

.scene-num {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene-card h4 {
  font-size: var(--font-size-md);
  margin-bottom: var(--space-2);
  padding-right: var(--space-8);
}

.scene-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height-normal);
}
</style>
