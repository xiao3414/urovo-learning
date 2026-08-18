<template>
  <div v-if="product" class="site-page product-detail">
    <button type="button" class="site-back-link" @click="router.push('/products')">
      {{ t('product.back') }}
    </button>

    <header class="detail-hero">
      <div class="detail-hero__copy">
        <span class="site-page-eyebrow">{{ getCategoryTitle(product.category) }}</span>
        <h1>{{ product.name }}</h1>
        <p v-if="product.positioning" class="detail-hero__positioning">{{ product.positioning }}</p>
        <p class="detail-hero__subtitle">{{ product.subtitle }}</p>
        <p class="detail-hero__highlight">{{ product.highlight }}</p>
        <a
          :href="contactSalesUrl"
          class="home-btn home-btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('product.contactSales') }}
        </a>
      </div>
      <div class="detail-hero__visual">
        <img
          :src="product.imageDetail || product.image"
          :alt="product.name"
          loading="eager"
          decoding="async"
        />
      </div>
    </header>

    <section v-if="product.why || product.highlight" class="site-section-block detail-why">
      <h2>{{ t('product.whyThisProduct') }}</h2>
      <p v-if="product.why" class="detail-why__text">{{ product.why }}</p>
      <ul v-else-if="highlightPoints.length" class="detail-why__list">
        <li v-for="(point, i) in highlightPoints" :key="i">{{ point }}</li>
      </ul>
    </section>

    <section v-if="keyFeatures.length" class="site-section-block">
      <h2>{{ t('product.keyFeatures') }}</h2>
      <div class="feature-list">
        <article v-for="(feature, i) in keyFeatures" :key="i" class="feature-item">
          <span class="feature-item__num">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <section v-if="product.specs?.length" class="site-section-block">
      <h2>{{ t('product.specifications') }}</h2>
      <dl class="site-spec-grid">
        <div v-for="spec in product.specs" :key="spec.label" class="site-spec-row">
          <dt>{{ spec.label }}</dt>
          <dd>{{ spec.value }}</dd>
        </div>
      </dl>
    </section>

    <section v-if="product.scenarios?.length" class="site-section-block">
      <h2>{{ t('product.applications') }}</h2>
      <div class="app-grid">
        <article v-for="(scene, i) in product.scenarios" :key="i" class="app-item">
          <h3>{{ scene.title }}</h3>
          <p>{{ scene.desc }}</p>
        </article>
      </div>
    </section>

    <section v-if="relatedProducts.length" class="site-section-block">
      <h2>{{ t('product.relatedProducts') }}</h2>
      <div class="related-grid">
        <article
          v-for="item in relatedProducts"
          :key="item.id"
          class="related-card"
          @click="router.push(`/products/${item.id}`)"
        >
          <div class="related-card__img">
            <img :src="item.image" :alt="item.name" loading="lazy" />
          </div>
          <div>
            <span class="related-card__cat">{{ getCategoryTitle(item.category) }}</span>
            <h3>{{ item.name }}</h3>
            <span class="related-card__cta">{{ t('product.explore') }}</span>
          </div>
        </article>
      </div>
    </section>

    <div class="site-cta-band">
      <div>
        <h2>{{ t('home.contactTitle') }}</h2>
        <p>{{ t('home.contactDesc') }}</p>
      </div>
      <a :href="contactSalesUrl" class="home-btn home-btn--primary" target="_blank" rel="noopener noreferrer">
        {{ t('home.contactSales') }}
      </a>
    </div>
  </div>

  <div v-else class="site-page product-not-found">
    <p>{{ t('product.notFound') }}</p>
    <button type="button" class="home-btn home-btn--primary" @click="router.push('/products')">
      {{ t('product.back') }}
    </button>
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useSiteNavigation } from '@/composables/useSiteNavigation'
import { useI18n } from '@/i18n'

const route = useRoute()
const router = useRouter()
const { getProductById, getCategoryTitle, productCatalog } = useProductCatalog()
const { contactSalesUrl } = useSiteNavigation()
const { t } = useI18n()

const product = computed(() => getProductById(route.params.id))

const keyFeatures = computed(() => {
  if (!product.value?.scenarios?.length) return []
  return product.value.scenarios.slice(0, 3)
})

const highlightPoints = computed(() => {
  if (!product.value?.highlight) return []
  return product.value.highlight.split('·').map((s) => s.trim()).filter(Boolean)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return productCatalog.value
    .filter((p) => p.category === product.value.category && p.id !== product.value.id)
    .slice(0, 3)
})

onMounted(() => {
  window.scrollTo(0, 0)
})

watch(
  () => route.params.id,
  () => {
    window.scrollTo(0, 0)
  }
)
</script>

<style scoped>
.detail-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 56px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--color-border);
}

.detail-hero__copy h1 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 600;
  color: var(--color-navy);
  line-height: 1.15;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.detail-hero__positioning {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-primary);
  margin-bottom: 8px;
}

.detail-why__text,
.detail-why__list {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 720px;
}

.detail-why__list {
  margin: 0;
  padding-left: 1.25em;
}

.detail-why__list li {
  margin: 8px 0;
}

.detail-hero__subtitle {
  font-size: 17px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin-bottom: 8px;
}

.detail-hero__highlight {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.detail-hero__visual {
  background: var(--color-bg-subtle);
  border-radius: var(--radius-card, 8px);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 320px;
}

.detail-hero__visual img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.feature-list {
  display: grid;
  gap: 0;
  border-top: 1px solid var(--color-border);
}

.feature-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border);
}

.feature-item__num {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.04em;
}

.feature-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 6px;
}

.feature-item p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}

.app-item {
  padding: 24px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-card, 8px);
}

.app-item h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 8px;
}

.app-item p {
  font-size: 14px;
  line-height: 1.55;
  color: var(--color-text-secondary);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}

.related-card {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: border-color var(--transition-ui);
}

.related-card:hover {
  border-bottom-color: var(--color-primary);
}

.related-card__img {
  aspect-ratio: 1;
  background: var(--color-bg-subtle);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.related-card__img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.related-card__cat {
  display: block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 4px;
}

.related-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 4px;
}

.related-card__cta {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
}

.product-not-found {
  padding: 80px 0;
  text-align: center;
}

.product-not-found p {
  margin-bottom: 24px;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .detail-hero {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .detail-hero__visual {
    order: -1;
    min-height: 240px;
    padding: 24px;
  }
}
</style>
