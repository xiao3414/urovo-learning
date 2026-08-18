<template>
  <section class="portfolio">
    <div class="home-section-inner">
      <div class="portfolio-header">
        <h2 class="home-section-title">{{ t('home.portfolioTitle') }}</h2>
        <p class="home-section-desc">{{ t('home.portfolioDesc') }}</p>
      </div>

      <div class="portfolio-grid">
        <article
          v-for="(cat, index) in categories"
          :key="cat.id"
          class="portfolio-item"
          :class="{ 'portfolio-item--hero': index === 0 }"
          @click="$router.push({ path: '/products', query: { category: cat.id } })"
        >
          <div class="portfolio-item__visual">
            <img
              v-if="cat.image"
              :src="cat.image"
              :alt="cat.title"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="portfolio-item__content">
            <span class="portfolio-item__meta">{{ cat.count }} {{ t('home.productsUnit') }}</span>
            <h3>{{ cat.title }}</h3>
            <p>{{ cat.description }}</p>
            <span class="home-card-arrow">{{ t('home.portfolioExplore') }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/i18n'

defineProps({
  categories: { type: Array, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.portfolio {
  padding: var(--section-pad-lg) 0;
  background: var(--color-bg-subtle);
}

.portfolio-header {
  max-width: 640px;
  margin-bottom: 48px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
}

.portfolio-item {
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  overflow: hidden;
  cursor: pointer;
  transition:
    transform var(--transition-ui),
    box-shadow var(--transition-ui),
    border-color var(--transition-ui);
}

.portfolio-item--hero {
  grid-column: span 8;
  flex-direction: row;
}

.portfolio-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(0, 82, 217, 0.2);
}

.portfolio-item:hover .portfolio-item__visual img {
  transform: scale(1.04);
}

.portfolio-item__visual {
  flex: 1;
  min-height: 160px;
  background: linear-gradient(165deg, #eef3fa 0%, #fff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
}

.portfolio-item--hero .portfolio-item__visual {
  flex: 0 0 52%;
  min-height: 240px;
}

.portfolio-item__visual img {
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  transition: transform var(--transition-ui);
}

.portfolio-item--hero .portfolio-item__visual img {
  max-height: 200px;
}

.portfolio-item__content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio-item__meta {
  font-size: 11px;
  font-weight: 500;
  color: var(--color-text-secondary);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.portfolio-item__content h3 {
  font-size: var(--font-size-h3);
  font-weight: 600;
  color: var(--color-navy);
  margin: 8px 0 10px;
  letter-spacing: -0.01em;
}

.portfolio-item__content p {
  font-size: var(--font-size-caption);
  color: var(--color-text-secondary);
  line-height: 1.55;
  max-width: 36ch;
}

@media (max-width: 1024px) {
  .portfolio-item,
  .portfolio-item--hero {
    grid-column: span 6;
    flex-direction: column;
  }

  .portfolio-item--hero .portfolio-item__visual {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .portfolio {
    padding: var(--section-pad) 0;
  }

  .portfolio-item,
  .portfolio-item--hero {
    grid-column: span 12;
  }
}
</style>
