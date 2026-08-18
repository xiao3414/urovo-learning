<template>
  <section class="solutions">
    <div class="home-section-inner">
      <div class="home-section-head home-section-head--center">
        <h2 class="home-section-title">{{ t('home.solutionsTitle') }}</h2>
        <p class="home-section-desc">{{ t('home.solutionsDesc') }}</p>
      </div>

      <div class="solutions-list">
        <article
          v-for="(item, index) in items"
          :key="item.id"
          class="solution-block"
          :class="{ 'solution-block--reverse': index % 2 === 1 }"
          @click="$router.push(item.path)"
        >
          <div class="solution-block__copy">
            <span class="solution-block__eyebrow">{{ t('site.nav.solutions') }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.subtitle }}</p>
            <span class="home-card-arrow">{{ t('home.solutionsExplore') }}</span>
          </div>
          <div class="solution-block__visual">
            <div class="solution-block__visual-bg" aria-hidden="true" />
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/i18n'

defineProps({
  items: { type: Array, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.solutions {
  padding: var(--section-pad-lg) 0;
  background: #fff;
}

.solutions-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.solution-block {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 0;
  min-height: 320px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  overflow: hidden;
  cursor: pointer;
  background: var(--color-bg-subtle);
  transition: box-shadow var(--transition-ui);
}

.solution-block:hover {
  box-shadow: var(--shadow-card-hover);
}

.solution-block--reverse {
  grid-template-columns: 1.05fr 1fr;
}

.solution-block--reverse .solution-block__copy {
  order: 2;
}

.solution-block--reverse .solution-block__visual {
  order: 1;
}

.solution-block__copy {
  padding: clamp(32px, 5vw, 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
}

.solution-block__eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 16px;
}

.solution-block__copy h3 {
  font-size: clamp(1.375rem, 2.5vw, 1.875rem);
  font-weight: 600;
  line-height: 1.15;
  color: var(--color-navy);
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.solution-block__copy p {
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  line-height: 1.65;
  max-width: 42ch;
}

.solution-block__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(24px, 4vw, 48px);
  overflow: hidden;
}

.solution-block__visual-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 70% 30%, rgba(0, 82, 217, 0.1) 0%, transparent 55%),
    linear-gradient(135deg, #eef4fc 0%, #f8fafc 100%);
}

.solution-block__visual img {
  position: relative;
  z-index: 1;
  max-width: 100%;
  max-height: min(280px, 38vw);
  object-fit: contain;
  filter: drop-shadow(0 16px 32px rgba(0, 21, 41, 0.1));
  transition: transform var(--transition-ui);
}

.solution-block:hover .solution-block__visual img {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .solution-block,
  .solution-block--reverse {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .solution-block--reverse .solution-block__copy,
  .solution-block--reverse .solution-block__visual {
    order: unset;
  }

  .solution-block__visual {
    min-height: 220px;
  }
}
</style>
