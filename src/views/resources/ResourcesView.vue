<template>
  <div class="site-page resources-page">
    <header class="site-page-hero">
      <span class="site-page-eyebrow">{{ t('site.nav.resources') }}</span>
      <h1>{{ t('resources.title') }}</h1>
      <p>{{ t('resources.subtitle') }}</p>
    </header>

    <section class="resources-section">
      <h2>{{ t('resources.onSiteTitle') }}</h2>
      <p class="resources-note">{{ t('resources.availabilityNote') }}</p>
      <article class="resource-card resource-card--primary">
        <h3>{{ t('resources.productTitle') }}</h3>
        <p>{{ t('resources.productDesc') }}</p>
        <router-link to="/products" class="resource-card__link">
          {{ t('resources.browseProducts') }}
        </router-link>
      </article>
    </section>

    <section class="resources-section">
      <h2>{{ t('resources.externalTitle') }}</h2>
      <div class="resources-grid">
        <article class="resource-card">
          <h3>{{ t('resources.downloadsTitle') }}</h3>
          <p>{{ t('resources.downloadsDesc') }}</p>
          <a :href="downloadsUrl" class="resource-card__link" target="_blank" rel="noopener noreferrer">
            {{ t('resources.visitResourceCenter') }}
          </a>
        </article>

        <article class="resource-card">
          <h3>{{ t('resources.docsTitle') }}</h3>
          <p>{{ t('resources.docsDesc') }}</p>
          <a :href="downloadsUrl" class="resource-card__link" target="_blank" rel="noopener noreferrer">
            {{ t('resources.viewDocumentation') }}
          </a>
        </article>
      </div>
    </section>

    <div class="site-cta-band">
      <div>
        <h2>{{ t('resources.ctaTitle') }}</h2>
        <p>{{ t('resources.ctaDesc') }}</p>
      </div>
      <a :href="contactSalesUrl" class="home-btn home-btn--primary" target="_blank" rel="noopener noreferrer">
        {{ t('home.contactSales') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '@/i18n'
import { useSiteNavigation } from '@/composables/useSiteNavigation'

const { t } = useI18n()
const { downloadsUrl, contactSalesUrl } = useSiteNavigation()
</script>

<style scoped>
.resources-section {
  margin-bottom: 48px;
}

.resources-section h2 {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 16px;
}

.resources-note {
  font-size: 15px;
  line-height: 1.65;
  color: var(--color-text-secondary);
  max-width: 720px;
  margin-bottom: 20px;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.resource-card {
  padding: 28px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
}

.resource-card--primary {
  border-color: var(--color-primary-muted, rgba(0, 82, 217, 0.25));
  max-width: 560px;
}

.resource-card h3 {
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 10px;
}

.resource-card p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
}

.resource-card__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
}

.resource-card__link:hover {
  text-decoration: underline;
}
</style>
