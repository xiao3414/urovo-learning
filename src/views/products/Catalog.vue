<template>
  <div class="site-page catalog-page">
    <header class="site-page-hero catalog-hero">
      <div>
        <span class="site-page-eyebrow">{{ t('site.nav.products') }}</span>
        <h1>{{ t('catalog.title') }}</h1>
        <p>{{ t('catalog.subtitle') }}</p>
        <p class="catalog-count">{{ t('catalog.subtitleCount', { count: productCatalog.length }) }}</p>
      </div>
    </header>

    <div class="catalog-toolbar">
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
        </button>
      </div>

      <div class="catalog-search">
        <input
          v-model="keyword"
          type="search"
          class="catalog-search__input"
          :placeholder="t('catalog.searchPlaceholder')"
        />
      </div>
    </div>

    <p v-if="resultHint" class="result-hint">{{ resultHint }}</p>

    <div v-if="filteredProducts.length" class="product-grid">
      <article
        v-for="item in filteredProducts"
        :key="item.id"
        class="product-card"
        @click="goDetail(item.id)"
      >
        <div class="product-card__image">
          <img
            :src="item.image"
            :alt="item.name"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">{{ getCategoryTitle(item.category) }}</span>
          <h3>{{ item.name }}</h3>
          <p class="product-card__highlight">{{ item.highlight }}</p>
          <span class="product-card__cta">{{ t('catalog.viewDetail') }}</span>
        </div>
      </article>
    </div>

    <div v-else class="catalog-empty">
      <p>{{ t('catalog.notFound') }}</p>
    </div>

    <div class="site-cta-band">
      <div>
        <h2>{{ t('catalog.ctaTitle') }}</h2>
        <p>{{ t('catalog.ctaDesc') }}</p>
      </div>
      <a :href="contactSalesUrl" class="home-btn home-btn--primary" target="_blank" rel="noopener noreferrer">
        {{ t('catalog.ctaButton') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useSiteNavigation } from '@/composables/useSiteNavigation'
import { useI18n } from '@/i18n'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const { productCatalog, productCategories, getCategoryTitle } = useProductCatalog()
const { contactSalesUrl } = useSiteNavigation()

const keyword = ref('')
const activeCategory = ref('all')

const filteredProducts = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  return productCatalog.value.filter((p) => {
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
  const cat = productCategories.value.find((c) => c.id === activeCategory.value)
  if (keyword.value.trim()) {
    return t('catalog.resultHintSearch', { keyword: keyword.value.trim(), count: n })
  }
  if (activeCategory.value !== 'all') {
    return t('catalog.resultHint', { category: cat?.title, count: n })
  }
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
  if (cat && productCategories.value.some((c) => c.id === cat)) {
    activeCategory.value = cat
  }
}

onMounted(syncCategoryFromQuery)
watch(() => route.query.category, syncCategoryFromQuery)
</script>

<style scoped>
.catalog-hero {
  margin-bottom: 40px;
}

.catalog-count {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-top: 8px;
}

.catalog-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.filter-pill {
  padding: 8px 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: #fff;
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: border-color var(--transition-ui), color var(--transition-ui), background var(--transition-ui);
}

.filter-pill:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-pill.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.catalog-search {
  flex-shrink: 0;
  width: min(100%, 280px);
}

.catalog-search__input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font: inherit;
  font-size: 14px;
  color: var(--color-navy);
  background: #fff;
  transition: border-color var(--transition-ui);
}

.catalog-search__input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.catalog-search__input::placeholder {
  color: var(--color-text-muted);
}

.result-hint {
  font-size: 13px;
  color: var(--color-text-muted);
  margin: -16px 0 24px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.product-card {
  cursor: pointer;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 24px;
  transition: border-color var(--transition-ui);
}

.product-card:hover {
  border-bottom-color: var(--color-primary);
}

.product-card__image {
  aspect-ratio: 4/3;
  background: var(--color-bg-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: var(--radius-card, 8px);
}

.product-card__image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-card__cat {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 6px;
}

.product-card__body h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 8px;
}

.product-card__highlight {
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-card__cta {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
}

.catalog-empty {
  padding: 64px 0;
  text-align: center;
  color: var(--color-text-muted);
  font-size: 15px;
}

@media (max-width: 768px) {
  .catalog-toolbar {
    flex-direction: column;
  }

  .catalog-search {
    width: 100%;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
