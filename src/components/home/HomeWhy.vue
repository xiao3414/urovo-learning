<template>
  <section class="why">
    <div class="home-section-inner">
      <div class="why-layout">
        <div class="why-intro">
          <h2 class="home-section-title">{{ t('home.whyTitle') }}</h2>
          <p class="home-section-desc">{{ t('home.whyDesc') }}</p>
          <div v-if="showcaseImage" class="why-visual">
            <img :src="showcaseImage" alt="" loading="lazy" decoding="async" />
          </div>
        </div>

        <ul class="why-list">
          <li v-for="item in items" :key="item.key" class="why-item">
            <span class="why-item__index">{{ item.index }}</span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/i18n'

defineProps({
  items: { type: Array, required: true },
  showcaseImage: { type: String, default: '' },
})

const { t } = useI18n()
</script>

<style scoped>
.why {
  padding: var(--section-pad-lg) 0;
  background: #fff;
}

.why-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
}

.why-intro .home-section-desc {
  margin-bottom: 32px;
}

.why-visual {
  padding: 32px;
  background: var(--color-bg-subtle);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  display: flex;
  align-items: center;
  justify-content: center;
}

.why-visual img {
  max-width: 100%;
  max-height: 220px;
  object-fit: contain;
  filter: drop-shadow(0 12px 24px rgba(0, 21, 41, 0.08));
}

.why-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.why-item {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 20px;
  padding: 28px 0;
  border-bottom: 1px solid var(--color-border);
}

.why-item:first-child {
  padding-top: 0;
}

.why-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.why-item__index {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.06em;
  padding-top: 4px;
}

.why-item h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-navy);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.why-item p {
  font-size: var(--font-size-caption);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .why-layout {
    grid-template-columns: 1fr;
  }

  .why-visual {
    max-width: 480px;
  }
}
</style>
