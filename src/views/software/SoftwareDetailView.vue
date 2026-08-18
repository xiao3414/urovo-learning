<template>
  <div class="software-page">
    <header class="software-hero">
      <div class="site-page software-hero__inner">
        <span class="software-hero__eyebrow">{{ t('site.nav.software') }}</span>
        <p class="software-hero__code">{{ content.title }}</p>
        <h1>{{ content.tagline }}</h1>
        <p class="software-hero__subtitle">{{ content.subtitle }}</p>
        <p class="software-hero__ecosystem">{{ t('software.ecosystem') }}</p>
      </div>
    </header>

    <div class="site-page software-body">
      <section v-if="content.lifecycle?.length" class="software-lifecycle">
        <p class="software-lifecycle__label">{{ t('software.lifecycle') }}</p>
        <div class="software-lifecycle__tags">
          <span v-for="item in content.lifecycle" :key="item" class="software-lifecycle__tag">{{ item }}</span>
        </div>
        <p class="software-lifecycle__hint">{{ t('software.lifecycleItems') }}</p>
      </section>

      <section class="software-section">
        <h2>{{ t('software.overview') }}</h2>
        <p class="software-lead">{{ content.overview }}</p>
      </section>

      <section v-if="content.capabilities?.length" class="site-section-block">
        <h2>{{ t('software.capabilities') }}</h2>
        <dl class="site-spec-grid">
          <div v-for="cap in content.capabilities" :key="cap.label" class="site-spec-row">
            <dt>{{ cap.label }}</dt>
            <dd>{{ cap.value }}</dd>
          </div>
        </dl>
      </section>

      <section v-if="content.mobilitySupport" class="site-section-block">
        <h2>{{ t('software.mobilitySupport') }}</h2>
        <p class="software-lead">{{ content.mobilitySupport }}</p>
      </section>

      <section v-if="supportedProducts.length" class="site-section-block">
        <h2>{{ t('software.supportedDevices') }}</h2>
        <div class="device-grid">
          <article
            v-for="item in supportedProducts"
            :key="item.id"
            class="device-card"
            @click="router.push(`/products/${item.id}`)"
          >
            <div class="device-card__img">
              <img :src="item.image" :alt="item.name" loading="lazy" />
            </div>
            <div>
              <span class="device-card__cat">{{ getCategoryTitle(item.category) }}</span>
              <h3>{{ item.name }}</h3>
              <span class="device-card__link">{{ t('product.explore') }}</span>
            </div>
          </article>
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

      <div class="site-cta-band">
        <div>
          <h2>{{ t('software.ctaTitle') }}</h2>
          <p>{{ t('software.ctaDesc') }}</p>
        </div>
        <a :href="contactSalesUrl" class="home-btn home-btn--primary" target="_blank" rel="noopener noreferrer">
          {{ t('home.contactSales') }}
        </a>
      </div>
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
  uee: { contentKey: 'softwareUEE' },
  ums: { contentKey: 'softwareUMS' },
}

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { contactSalesUrl } = useSiteNavigation()
const { getProductById, getCategoryTitle } = useProductCatalog()

const config = computed(() => ROUTE_CONFIG[route.name] || ROUTE_CONFIG.uee)
const contentKey = computed(() => config.value.contentKey)
const content = useCorporateContent(contentKey)

const supportedProducts = computed(() =>
  (content.value?.recommendedProductIds || [])
    .map((id) => getProductById(id))
    .filter(Boolean)
)
</script>

<style scoped>
.software-page {
  width: 100%;
}

.software-hero {
  background: var(--color-navy);
  color: #fff;
  padding: 48px 0 56px;
  margin-left: calc(-1 * var(--space-6));
  margin-right: calc(-1 * var(--space-6));
  margin-top: calc(-1 * var(--space-6));
}

.software-hero__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.software-hero__eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 16px;
}

.software-hero__code {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: 12px;
}

.software-hero h1 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.software-hero__subtitle {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.72);
  max-width: 560px;
  line-height: 1.65;
}

.software-hero__ecosystem {
  margin-top: 16px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.software-lifecycle {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--color-border);
}

.software-lifecycle__label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 12px;
}

.software-lifecycle__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.software-lifecycle__tag {
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-navy);
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

.software-lifecycle__hint {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.software-body {
  padding-top: 56px;
  padding-bottom: 48px;
}

.software-section h2 {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 16px;
}

.software-lead {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 720px;
}

.device-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.device-card {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 16px;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
  cursor: pointer;
  transition: border-color var(--transition-ui);
}

.device-card:hover {
  border-color: var(--color-primary);
}

.device-card__img {
  aspect-ratio: 1;
  background: var(--color-bg-subtle);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.device-card__img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.device-card__cat {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.device-card h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-navy);
  margin: 4px 0;
}

.device-card__link {
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
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

@media (max-width: 768px) {
  .software-hero {
    margin-left: calc(-1 * var(--space-4));
    margin-right: calc(-1 * var(--space-4));
    margin-top: calc(-1 * var(--space-4));
  }

  .software-hero__inner {
    padding: 0 var(--space-4);
  }
}
</style>
