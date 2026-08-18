<template>
  <div class="site-page solution-page">
    <header class="solution-hero">
      <div class="solution-hero__copy">
        <span class="site-page-eyebrow">{{ t('site.nav.solutions') }}</span>
        <h1>{{ content.title }}</h1>
        <p>{{ content.subtitle }}</p>
      </div>
      <div v-if="heroImage" class="solution-hero__visual">
        <img :src="heroImage" :alt="content.title" loading="eager" decoding="async" />
      </div>
    </header>

    <section class="solution-section">
      <h2>{{ t('solution.industryOverview') }}</h2>
      <p class="solution-lead">{{ content.overview }}</p>
    </section>

    <section v-if="content.challenges?.length" class="solution-section">
      <h2>{{ t('solution.challenges') }}</h2>
      <ul class="solution-list">
        <li v-for="(item, i) in content.challenges" :key="i">{{ item }}</li>
      </ul>
    </section>

    <section class="solution-section">
      <h2>{{ t('solution.urovoSolution') }}</h2>
      <p class="solution-lead">{{ content.solution }}</p>
    </section>

    <section v-if="content.applications?.length" class="solution-section">
      <h2>{{ t('solution.applications') }}</h2>
      <div class="app-grid">
        <article v-for="(app, i) in content.applications" :key="i" class="app-item">
          <h3>{{ app.title }}</h3>
          <p>{{ app.desc }}</p>
        </article>
      </div>
    </section>

    <section v-if="content.specs?.length" class="site-section-block">
      <h2>{{ t('solution.atAGlance') }}</h2>
      <dl class="site-spec-grid">
        <div v-for="spec in content.specs" :key="spec.label" class="site-spec-row">
          <dt>{{ spec.label }}</dt>
          <dd>{{ spec.value }}</dd>
        </div>
      </dl>
    </section>

    <section v-if="recommendedProducts.length" class="site-section-block">
      <h2>{{ t('solution.recommendedProducts') }}</h2>
      <div class="rec-grid">
        <article
          v-for="item in recommendedProducts"
          :key="item.id"
          class="rec-card"
          @click="router.push(`/products/${item.id}`)"
        >
          <div class="rec-card__img">
            <img :src="item.image" :alt="item.name" loading="lazy" />
          </div>
          <div>
            <span class="rec-card__cat">{{ getCategoryTitle(item.category) }}</span>
            <h3>{{ item.name }}</h3>
            <p class="rec-card__sub">{{ item.highlight }}</p>
            <span class="showcase-link">{{ t('product.explore') }}</span>
          </div>
        </article>
      </div>
    </section>

    <section class="site-section-block software-teaser">
      <h2>{{ t('solution.software') }}</h2>
      <p class="solution-lead solution-lead--compact">{{ t('solution.softwareDesc') }}</p>
      <div class="software-teaser__grid">
        <router-link to="/software/uee" class="software-teaser__item">
          <span class="software-teaser__code">UEE</span>
          <span class="software-teaser__label">{{ t('software.ueeTagline') }}</span>
        </router-link>
        <router-link to="/software/ums" class="software-teaser__item">
          <span class="software-teaser__code">UMS</span>
          <span class="software-teaser__label">{{ t('software.umsTagline') }}</span>
        </router-link>
      </div>
    </section>

    <section v-if="content.faqs?.length" class="site-section-block">
      <h2>{{ t('solution.faq') }}</h2>
      <div class="faq-list">
        <details v-for="(item, i) in content.faqs" :key="i" class="faq-item">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </section>

    <section v-if="content.useCases?.length" class="site-section-block">
      <h2>{{ t('solution.useCases') }}</h2>
      <div class="usecase-list">
        <article v-for="(item, i) in content.useCases" :key="i" class="usecase-item">
          <span class="usecase-item__label">{{ item.label }}</span>
          <p><strong>{{ t('solution.useCaseChallenge') }}:</strong> {{ item.challenge }}</p>
          <p><strong>{{ t('solution.useCaseApproach') }}:</strong> {{ item.approach }}</p>
          <p class="usecase-item__outcome"><strong>{{ t('solution.useCaseOutcome') }}:</strong> {{ item.outcome }}</p>
        </article>
      </div>
    </section>

    <div class="site-cta-band">
      <div>
        <h2>{{ t('solution.ctaTitle') }}</h2>
        <p>{{ t('solution.ctaDesc') }}</p>
      </div>
      <a :href="contactSalesUrl" class="home-btn home-btn--primary" target="_blank" rel="noopener noreferrer">
        {{ t('home.contactSales') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCorporateContent } from '@/composables/useCorporateContent'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useSiteNavigation } from '@/composables/useSiteNavigation'
import { useI18n } from '@/i18n'

const ROUTE_CONFIG = {
  logistics: { contentKey: 'industryLogistics' },
  retail: { contentKey: 'industryRetail' },
  manufacturing: { contentKey: 'industryManufacturing' },
}

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { getProductById, getCategoryTitle } = useProductCatalog()
const { contactSalesUrl } = useSiteNavigation()

const config = computed(() => ROUTE_CONFIG[route.name] || ROUTE_CONFIG.logistics)
const contentKey = computed(() => config.value.contentKey)
const content = useCorporateContent(contentKey)

const heroImage = computed(() => {
  const p = getProductById(content.value?.heroProductId)
  return p?.imageDetail || p?.image || ''
})

const recommendedProducts = computed(() =>
  (content.value?.recommendedProductIds || [])
    .map((id) => getProductById(id))
    .filter(Boolean)
)
</script>

<style scoped>
.solution-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--color-border);
}

.solution-hero h1 {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  color: var(--color-navy);
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  line-height: 1.15;
}

.solution-hero p {
  font-size: 16px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 480px;
}

.solution-hero__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  padding: 24px;
  background: var(--color-bg-subtle);
  border-radius: var(--radius-card, 8px);
}

.solution-hero__visual img {
  max-width: 100%;
  max-height: 280px;
  object-fit: contain;
  filter: drop-shadow(0 16px 32px rgba(0, 21, 41, 0.1));
}

.solution-section {
  margin-bottom: 48px;
}

.solution-section h2 {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.solution-lead {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 720px;
}

.solution-lead--compact {
  margin-bottom: 20px;
  font-size: 15px;
}

.solution-list {
  margin: 0;
  padding-left: 1.25em;
  max-width: 680px;
}

.solution-list li {
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-text-secondary);
  margin: 10px 0;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.app-item {
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
  background: #fff;
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

.faq-list {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
  overflow: hidden;
}

.faq-item {
  border-bottom: 1px solid var(--color-border);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item summary {
  padding: 16px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-navy);
  cursor: pointer;
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item p {
  padding: 0 20px 16px;
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.usecase-list {
  display: grid;
  gap: 16px;
}

.usecase-item {
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
}

.usecase-item__label {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 12px;
}

.usecase-item p {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 6px 0;
}

.usecase-item__outcome {
  color: var(--color-navy) !important;
}

.rec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.rec-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
  cursor: pointer;
  transition: box-shadow var(--transition-ui, 0.22s ease);
}

.rec-card:hover {
  box-shadow: var(--shadow-card-hover, 0 6px 20px rgba(0, 82, 217, 0.08));
}

.rec-card__img {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-subtle);
  border-radius: 6px;
}

.rec-card__img img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.rec-card__cat {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.rec-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-navy);
  margin: 4px 0;
}

.rec-card__sub {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.45;
  margin-bottom: 8px;
}

.software-teaser__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.software-teaser__item {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 28px 24px;
  background: var(--color-navy);
  color: #fff;
  text-decoration: none;
  border-radius: var(--radius-card, 8px);
  transition: background var(--transition-ui, 0.22s ease);
}

.software-teaser__item:hover {
  background: var(--color-primary);
}

.software-teaser__code {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.software-teaser__label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
}

.showcase-link {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .solution-hero {
    grid-template-columns: 1fr;
  }

  .rec-grid {
    grid-template-columns: 1fr;
  }

  .software-teaser__grid {
    grid-template-columns: 1fr;
  }
}
</style>
