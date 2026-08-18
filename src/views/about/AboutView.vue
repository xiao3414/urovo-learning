<template>
  <div class="site-page about-page">
    <header class="site-page-hero">
      <span class="site-page-eyebrow">{{ t('site.nav.about') }}</span>
      <h1>{{ t('about.title') }}</h1>
      <p>{{ t('about.subtitle') }}</p>
    </header>

    <section class="about-section">
      <h2>{{ t('about.companyOverview') }}</h2>
      <p class="about-lead">{{ content.overview }}</p>
    </section>

    <section class="site-section-block">
      <h2>{{ t('about.mobilityFocus') }}</h2>
      <dl class="site-spec-grid">
        <div v-for="item in content.focus" :key="item.label" class="site-spec-row">
          <dt>{{ item.label }}</dt>
          <dd>{{ item.value }}</dd>
        </div>
      </dl>
    </section>

    <section v-if="content.technology" class="site-section-block">
      <h2>{{ t('about.technologyTitle') }}</h2>
      <p class="about-lead">{{ content.technology }}</p>
    </section>

    <section v-if="content.specs?.length" class="site-section-block">
      <h2>{{ t('about.atAGlance') }}</h2>
      <dl class="site-spec-grid">
        <div v-for="spec in content.specs" :key="spec.label" class="site-spec-row">
          <dt>{{ spec.label }}</dt>
          <dd>{{ spec.value }}</dd>
        </div>
      </dl>
    </section>

    <section v-if="content.milestones?.length" class="site-section-block">
      <h2>{{ t('about.milestones') }}</h2>
      <ul class="milestone-list">
        <li v-for="(item, i) in content.milestones" :key="i">{{ item }}</li>
      </ul>
    </section>

    <section class="site-section-block">
      <h2>{{ t('about.apacTitle') }}</h2>
      <p class="about-lead">{{ content.apac }}</p>
    </section>

    <div class="site-cta-band">
      <div>
        <h2>{{ t('about.ctaTitle') }}</h2>
        <p>{{ t('about.ctaDesc') }}</p>
      </div>
      <a :href="contactSalesUrl" class="home-btn home-btn--primary" target="_blank" rel="noopener noreferrer">
        {{ t('home.contactSales') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { useCorporateContent } from '@/composables/useCorporateContent'
import { useSiteNavigation } from '@/composables/useSiteNavigation'
import { useI18n } from '@/i18n'

const { t } = useI18n()
const { contactSalesUrl } = useSiteNavigation()
const content = useCorporateContent('aboutUrovo')
</script>

<style scoped>
.about-section h2 {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 16px;
}

.about-lead {
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  max-width: 720px;
}

.milestone-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card, 8px);
  overflow: hidden;
}

.milestone-list li {
  padding: 14px 20px;
  font-size: 14px;
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-border);
  line-height: 1.55;
}

.milestone-list li:last-child {
  border-bottom: none;
}

.milestone-list li:nth-child(even) {
  background: var(--color-bg-subtle);
}
</style>
