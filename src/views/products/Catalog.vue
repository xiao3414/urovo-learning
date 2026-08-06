<template>
  <div class="product-catalog">
    <div class="catalog-header">
      <div>
        <h2>产品图鉴</h2>
        <p>浏览优博讯主力产品 · 查看图片、参数与应用场景</p>
      </div>
      <el-input
        v-model="keyword"
        placeholder="搜索产品型号…"
        clearable
        class="search-input"
        :prefix-icon="Search"
      />
    </div>

    <el-tabs v-model="activeCategory" class="category-tabs">
      <el-tab-pane
        v-for="cat in productCategories"
        :key="cat.id"
        :label="cat.title"
        :name="cat.id"
      />
    </el-tabs>

    <el-row :gutter="16">
      <el-col
        v-for="item in filteredProducts"
        :key="item.id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
      >
        <el-card shadow="hover" class="product-card" @click="goDetail(item.id)">
          <div class="image-wrap">
            <img :src="item.image" :alt="item.name" loading="lazy" />
            <el-tag size="small" class="category-tag">{{ getCategoryTitle(item.category) }}</el-tag>
          </div>
          <div class="card-body">
            <h3>{{ item.name }}</h3>
            <p class="subtitle">{{ item.subtitle }}</p>
            <p class="highlight">{{ item.highlight }}</p>
            <el-button type="primary" link @click.stop="goDetail(item.id)">
              查看详情 →
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-empty v-if="!filteredProducts.length" description="未找到匹配产品" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { productCatalog, productCategories, getCategoryTitle } from '@/data/products'

const router = useRouter()
const keyword = ref('')
const activeCategory = ref('all')

const filteredProducts = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  return productCatalog.filter((p) => {
    const matchCat = activeCategory.value === 'all' || p.category === activeCategory.value
    const matchKw =
      !kw ||
      p.name.toLowerCase().includes(kw) ||
      p.subtitle.toLowerCase().includes(kw) ||
      p.highlight.toLowerCase().includes(kw)
    return matchCat && matchKw
  })
})

function goDetail(id) {
  router.push(`/products/${id}`)
}
</script>

<style scoped>
.product-catalog { max-width: 1200px; margin: 0 auto; }
.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.catalog-header h2 { font-size: 1.5rem; margin-bottom: 4px; }
.catalog-header p { color: #909399; font-size: 14px; }
.search-input { width: 260px; }
.category-tabs { margin-bottom: 8px; }
.product-card {
  margin-bottom: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}
.product-card:hover { transform: translateY(-3px); }
.image-wrap {
  position: relative;
  background: #f5f7fa;
  border-radius: 6px;
  overflow: hidden;
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 8px;
}
.category-tag { position: absolute; top: 8px; left: 8px; }
.card-body { padding-top: 12px; }
.card-body h3 { font-size: 18px; margin-bottom: 4px; color: #0052d9; }
.subtitle { font-size: 13px; color: #606266; margin-bottom: 8px; line-height: 1.4; }
.highlight { font-size: 12px; color: #909399; margin-bottom: 8px; line-height: 1.5; }
</style>
