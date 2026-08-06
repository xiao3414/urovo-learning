<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="hero-badge">UROVO · 优博讯</span>
          <h1>智能数据终端<br />全系列产品培训</h1>
          <p class="hero-desc">
            覆盖 PDA、RFID、POS、工业平板等 {{ productCount }} 款产品图鉴，
            配合行业方案与销售话术，助力新人快速上手。
          </p>
          <div class="hero-actions">
            <el-button type="primary" size="large" round @click="$router.push('/products')">
              浏览产品图鉴
            </el-button>
            <el-button size="large" round plain @click="continueLearning">
              {{ lastPage ? '继续学习' : '开始学习' }}
            </el-button>
            <el-button size="large" round plain @click="$router.push('/exam')">
              结业考试
            </el-button>
          </div>
        </div>
        <div class="hero-stats">
          <div v-for="s in statItems" :key="s.label" class="stat-card">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
          <div class="progress-wrap">
            <div class="progress-head">
              <span>学习进度</span>
              <span>{{ progressStore.progressPercent }}%</span>
            </div>
            <el-progress
              :percentage="progressStore.progressPercent"
              :stroke-width="8"
              :show-text="false"
              color="#fff"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured products -->
    <section class="section featured">
      <div class="section-head">
        <div>
          <h2 class="section-title">明星产品</h2>
          <p class="section-desc">优博讯主力机型，点击查看参数与应用场景</p>
        </div>
        <el-button type="primary" link @click="$router.push('/products')">
          查看全部 {{ productCount }} 款 →
        </el-button>
      </div>
      <div class="featured-grid">
        <article
          v-for="item in featuredProducts"
          :key="item.id"
          class="featured-card"
          @click="$router.push(`/products/${item.id}`)"
        >
          <div class="featured-img">
            <img :src="item.image" :alt="item.name" loading="lazy" decoding="async" />
          </div>
          <div class="featured-body">
            <span class="featured-cat">{{ getCategoryTitle(item.category) }}</span>
            <h3>{{ item.name }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Category shortcuts -->
    <section class="section categories">
      <h2 class="section-title">产品分类</h2>
      <p class="section-desc">按品类快速进入图鉴筛选</p>
      <div class="category-grid">
        <button
          v-for="cat in categoryShortcuts"
          :key="cat.id"
          type="button"
          class="category-chip"
          @click="$router.push({ path: '/products', query: { category: cat.id } })"
        >
          <span class="category-name">{{ cat.title }}</span>
          <span class="category-count">{{ cat.count }}</span>
        </button>
      </div>
    </section>

    <!-- Training modules -->
    <section class="section modules">
      <h2 class="section-title">培训模块</h2>
      <p class="section-desc">产品知识、行业方案与销售技能系统学习</p>
      <div class="module-grid">
        <article
          v-for="group in menuConfig.filter((g) => g.children || g.path)"
          :key="group.id"
          class="module-card"
          @click="startGroup(group)"
        >
          <div class="module-icon">
            <el-icon :size="26"><component :is="iconMap[group.icon]" /></el-icon>
          </div>
          <h3>{{ group.title }}</h3>
          <p>{{ group.children ? `${group.children.length} 个子模块` : `${productCount} 款产品` }}</p>
          <span class="module-link">进入 →</span>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Box, Monitor, OfficeBuilding, ChatDotRound, Goods } from '@element-plus/icons-vue'
import { menuConfig, allPages } from '@/data/menu'
import {
  productCatalog,
  productCategories,
  getCategoryTitle,
} from '@/data/products'
import { useProgressStore } from '@/stores/progress'

const FEATURED_IDS = ['dt630', 'dt66', 'dt50-5g', 'rfg91', 'i9000s', 'k388-pro']

const router = useRouter()
const progressStore = useProgressStore()
const iconMap = { Box, Monitor, OfficeBuilding, ChatDotRound, Goods }
const productCount = productCatalog.length

const featuredProducts = computed(() =>
  FEATURED_IDS.map((id) => productCatalog.find((p) => p.id === id)).filter(Boolean)
)

const categoryShortcuts = computed(() =>
  productCategories
    .filter((c) => c.id !== 'all')
    .map((c) => ({
      ...c,
      count: productCatalog.filter((p) => p.category === c.id).length,
    }))
)

const statItems = computed(() => [
  { label: '学习模块', value: progressStore.totalCount },
  { label: '已完成', value: progressStore.completedCount },
  { label: '产品图鉴', value: productCount },
])

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
.home {
  max-width: var(--content-max);
  margin: 0 auto;
}

/* Hero */
.hero {
  margin: calc(-1 * var(--space-6));
  margin-bottom: var(--space-10);
  padding: var(--space-10) var(--space-6);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  color: #fff;
}

.hero-inner {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: var(--space-8);
  flex-wrap: wrap;
}

.hero-copy {
  flex: 1;
  min-width: 280px;
}

.hero-badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.06em;
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}

.hero h1 {
  font-size: clamp(1.75rem, 4vw, var(--font-size-2xl));
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-4);
}

.hero-desc {
  font-size: var(--font-size-md);
  line-height: var(--line-height-normal);
  opacity: 0.9;
  max-width: 520px;
  margin-bottom: var(--space-6);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.hero-actions :deep(.el-button.is-plain) {
  --el-button-bg-color: rgba(255, 255, 255, 0.12);
  --el-button-border-color: rgba(255, 255, 255, 0.35);
  --el-button-text-color: #fff;
  --el-button-hover-bg-color: rgba(255, 255, 255, 0.22);
  --el-button-hover-border-color: #fff;
  --el-button-hover-text-color: #fff;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  min-width: 280px;
  flex: 0 1 360px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--space-4);
  text-align: center;
  backdrop-filter: blur(4px);
}

.stat-value {
  display: block;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
}

.stat-label {
  font-size: var(--font-size-xs);
  opacity: 0.75;
  margin-top: var(--space-1);
}

.progress-wrap {
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
}

.progress-head {
  display: flex;
  justify-content: space-between;
  font-size: var(--font-size-xs);
  opacity: 0.85;
  margin-bottom: var(--space-2);
}

/* Sections */
.section {
  margin-bottom: var(--space-10);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
  flex-wrap: wrap;
}

/* Featured grid */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-4);
}

.featured-card {
  background: var(--color-bg-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast);
}

.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary-muted);
}

.featured-img {
  aspect-ratio: 4/3;
  background: linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
}

.featured-img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.featured-body {
  padding: var(--space-3) var(--space-4) var(--space-4);
}

.featured-cat {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.featured-body h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: var(--space-1) 0;
}

.featured-body p {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  line-height: var(--line-height-tight);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Category chips */
.category-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.category-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  transition: all var(--duration-fast) var(--ease-out);
}

.category-chip:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.category-count {
  font-size: var(--font-size-xs);
  background: var(--color-border-light);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
}

.category-chip:hover .category-count {
  background: rgba(0, 82, 217, 0.12);
  color: var(--color-primary);
}

/* Module grid */
.module-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-4);
}

.module-card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
  position: relative;
}

.module-card:hover {
  border-color: var(--color-primary-muted);
  box-shadow: var(--shadow-sm);
  transform: translateY(-2px);
}

.module-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--color-primary-light);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
}

.module-card h3 {
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-1);
}

.module-card p {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.module-link {
  position: absolute;
  right: var(--space-5);
  bottom: var(--space-5);
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  opacity: 0;
  transition: opacity var(--duration-fast);
}

.module-card:hover .module-link {
  opacity: 1;
}

@media (max-width: 768px) {
  .hero {
    margin: calc(-1 * var(--space-4));
    margin-bottom: var(--space-8);
    padding: var(--space-8) var(--space-4);
  }

  .hero-stats {
    width: 100%;
    flex: 1 1 100%;
  }
}
</style>
