<template>
  <div class="catalog">
    <header class="catalog-hero">
      <div>
        <h1>产品图鉴</h1>
        <p>优博讯全系列 {{ productCatalog.length }} 款产品 · 参数 · 应用场景</p>
      </div>
      <el-input
        v-model="keyword"
        placeholder="搜索型号、特性…"
        clearable
        class="search"
        :prefix-icon="Search"
      />
    </header>

    <div class="filter-bar">
      <button
        v-for="cat in productCategories"
        :key="cat.id"
        type="button"
        class="filter-pill"
        :class="{ active: activeCategory === cat.id }"
        @click="setCategory(cat.id)"
      >
        {{ cat.title }}
        <span class="pill-count">{{ countByCategory(cat.id) }}</span>
      </button>
    </div>

    <p v-if="resultHint" class="result-hint">{{ resultHint }}</p>

    <TransitionGroup
      v-if="filteredProducts.length"
      name="grid"
      tag="div"
      class="product-grid"
    >
      <article
        v-for="item in filteredProducts"
        :key="item.id"
        class="product-card"
        @click="goDetail(item.id)"
      >
        <div class="card-image">
          <img
            :src="item.image"
            :alt="item.name"
            loading="lazy"
            decoding="async"
            width="360"
            height="270"
          />
          <span class="card-badge">{{ getCategoryTitle(item.category) }}</span>
        </div>
        <div class="card-content">
          <h3>{{ item.name }}</h3>
          <p class="card-subtitle">{{ item.subtitle }}</p>
          <p class="card-highlight">{{ item.highlight }}</p>
          <span class="card-cta">查看详情 →</span>
        </div>
      </article>
    </TransitionGroup>

    <el-empty v-else description="未找到匹配产品" class="empty" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import { productCatalog, productCategories, getCategoryTitle } from '@/data/products'

const router = useRouter()
const route = useRoute()
const keyword = ref('')
const activeCategory = ref('all')

function countByCategory(id) {
  if (id === 'all') return productCatalog.length
  return productCatalog.filter((p) => p.category === id).length
}

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

const resultHint = computed(() => {
  const n = filteredProducts.value.length
  const cat = productCategories.find((c) => c.id === activeCategory.value)
  if (keyword.value.trim()) return `搜索「${keyword.value.trim()}」共 ${n} 款`
  if (activeCategory.value !== 'all') return `${cat?.title} · 共 ${n} 款`
  return ''
})

function setCategory(id) {
  activeCategory.value = id
  router.replace({ query: id === 'all' ? {} : { category: id } })
}

function goDetail(id) {
  router.push(`/products/${id}`)
}

function syncCategoryFromQuery() {
  const cat = route.query.category
  if (cat && productCategories.some((c) => c.id === cat)) {
    activeCategory.value = cat
  }
}

onMounted(syncCategoryFromQuery)
watch(() => route.query.category, syncCategoryFromQuery)
</script>

<style scoped>
.catalog {
  max-width: var(--content-max);
  margin: 0 auto;
}

.catalog-hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
}

.catalog-hero h1 {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.catalog-hero p {
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}

.search {
  width: min(100%, 280px);
}

/* Filter pills */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  background: var(--color-bg-elevated);
  font-family: inherit;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
}

.filter-pill:hover {
  border-color: var(--color-primary-muted);
  color: var(--color-primary);
}

.filter-pill.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
  box-shadow: var(--shadow-sm);
}

.pill-count {
  font-size: var(--font-size-xs);
  padding: 1px 7px;
  border-radius: var(--radius-full);
  background: var(--color-border-light);
  color: var(--color-text-muted);
  transition: background var(--duration-fast);
}

.filter-pill.active .pill-count {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}

.result-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  margin: calc(-1 * var(--space-2)) 0 var(--space-4);
}

/* Product grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-4);
  position: relative;
}

.product-card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-muted);
}

.card-image {
  position: relative;
  aspect-ratio: 4/3;
  background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
}

.card-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-badge {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  font-size: var(--font-size-xs);
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-primary-muted);
}

.card-content {
  padding: var(--space-4);
}

.card-content h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin-bottom: var(--space-1);
}

.card-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-highlight {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-3);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-cta {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.empty {
  padding: var(--space-12) 0;
}

/* Grid filter animation */
.grid-move,
.grid-enter-active,
.grid-leave-active {
  transition: all var(--duration-normal) var(--ease-out);
}

.grid-enter-from {
  opacity: 0;
  transform: scale(0.94) translateY(12px);
}

.grid-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(-8px);
}

.grid-leave-active {
  position: absolute;
  width: calc((100% - 3 * var(--space-4)) / 4);
}

@media (max-width: 1200px) {
  .grid-leave-active {
    width: calc((100% - 2 * var(--space-4)) / 3);
  }
}

@media (max-width: 900px) {
  .grid-leave-active {
    width: calc((100% - var(--space-4)) / 2);
  }
}

@media (max-width: 560px) {
  .grid-leave-active {
    width: 100%;
  }
}
</style>
