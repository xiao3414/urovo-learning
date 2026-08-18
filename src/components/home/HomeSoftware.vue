<template>
  <section class="software">
    <div class="home-section-inner">
      <div class="software-header">
        <h2 class="software-title">{{ t('home.softwareTitle') }}</h2>
        <p class="software-desc">{{ t('home.softwareDesc') }}</p>
      </div>

      <div class="software-grid">
        <article
          v-for="item in items"
          :key="item.id"
          class="software-panel"
          @click="$router.push(item.path)"
        >
          <div class="software-panel__top">
            <span class="software-panel__code">{{ item.id.toUpperCase() }}</span>
            <span class="home-card-arrow software-panel__arrow">{{ t('home.softwareExplore') }}</span>
          </div>
          <h3>{{ item.tagline || item.title }}</h3>
          <p class="software-panel__subtitle">{{ item.subtitle }}</p>
          <p class="software-panel__focus">
            {{ item.id === 'uee' ? t('home.ueeFocus') : t('home.umsFocus') }}
          </p>
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
.software {
  padding: var(--section-pad-lg) 0;
  background: var(--color-navy);
  color: #fff;
}

.software-header {
  max-width: 640px;
  margin-bottom: 48px;
}

.software-title {
  font-size: var(--font-size-h2);
  font-weight: 600;
  line-height: var(--line-height-h2);
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.software-desc {
  font-size: var(--font-size-body);
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.65;
}

.software-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.software-panel {
  padding: clamp(28px, 4vw, 40px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-card);
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition:
    background-color var(--transition-ui),
    border-color var(--transition-ui),
    transform var(--transition-ui);
}

.software-panel:hover {
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.22);
  transform: translateY(-2px);
}

.software-panel__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.software-panel__code {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.55);
}

.software-panel__arrow {
  color: rgba(255, 255, 255, 0.85);
  margin-top: 0;
}

.software-panel h3 {
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
}

.software-panel__subtitle {
  font-size: var(--font-size-caption);
  color: rgba(255, 255, 255, 0.58);
  margin-bottom: 20px;
}

.software-panel__focus {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .software-grid {
    grid-template-columns: 1fr;
  }
}
</style>
