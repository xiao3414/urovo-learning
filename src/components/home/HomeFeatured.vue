<template>
  <section class="featured">
    <div class="home-section-inner">
      <header class="featured-header">
        <div>
          <h2 class="home-section-title">{{ t('home.featuredTitle') }}</h2>
          <p class="home-section-desc">{{ t('home.featuredDesc') }}</p>
        </div>
        <button type="button" class="home-link-action" @click="router.push('/products')">
          {{ t('home.viewAll', { count: productCount }) }}
        </button>
      </header>

      <!-- Primary showcase -->
      <article
        v-if="primary"
        class="showcase-lead"
        @click="router.push(`/products/${primary.id}`)"
      >
        <div class="showcase-lead__visual">
          <img
            :src="primary.image"
            :alt="`${primary.name} - UROVO APAC`"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="showcase-lead__info">
          <span class="showcase-tag">{{ getCategoryTitle(primary.category) }}</span>
          <h3>{{ primary.name }}</h3>
          <p>{{ primary.subtitle }}</p>
          <span class="showcase-link">{{ t('home.portfolioExplore') }}</span>
        </div>
      </article>

      <!-- Secondary pair -->
      <div v-if="secondary.length" class="showcase-mid">
        <article
          v-for="item in secondary"
          :key="item.id"
          class="showcase-mid__item"
          @click="router.push(`/products/${item.id}`)"
        >
          <div class="showcase-mid__visual">
            <img
              :src="item.image"
              :alt="`${item.name} - UROVO APAC`"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="showcase-mid__info">
            <span class="showcase-tag">{{ getCategoryTitle(item.category) }}</span>
            <h3>{{ item.name }}</h3>
            <p>{{ item.subtitle }}</p>
            <span class="showcase-link">{{ t('home.portfolioExplore') }}</span>
          </div>
        </article>
      </div>

      <!-- Compact row -->
      <div v-if="tertiary.length" class="showcase-compact">
        <article
          v-for="item in tertiary"
          :key="item.id"
          class="showcase-compact__item"
          @click="router.push(`/products/${item.id}`)"
        >
          <div class="showcase-compact__visual">
            <img
              :src="item.image"
              :alt="`${item.name} - UROVO APAC`"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="showcase-compact__info">
            <span class="showcase-tag showcase-tag--sm">{{ getCategoryTitle(item.category) }}</span>
            <h3>{{ item.name }}</h3>
            <span class="showcase-link showcase-link--sm">{{ t('home.portfolioExplore') }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from '@/i18n'

const props = defineProps({
  products: { type: Array, required: true },
  productCount: { type: Number, required: true },
  getCategoryTitle: { type: Function, required: true },
})

const router = useRouter()
const { t } = useI18n()

const primary = computed(() => props.products[0] || null)
const secondary = computed(() => props.products.slice(1, 3))
const tertiary = computed(() => props.products.slice(3, 6))
</script>

<style scoped>
.featured {
  padding: 96px 0 88px;
  background: #fff;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.featured-header .home-section-desc {
  max-width: 480px;
}

/* ── Lead product ── */
.showcase-lead {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  padding-bottom: 40px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: opacity var(--transition-ui);
}

.showcase-lead:hover {
  opacity: 0.98;
}

.showcase-lead:hover .showcase-lead__visual img {
  transform: scale(1.02);
}

.showcase-lead__visual {
  position: relative;
  height: clamp(260px, 32vw, 340px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background:
    radial-gradient(ellipse at 50% 80%, rgba(0, 82, 217, 0.05) 0%, transparent 62%),
    var(--color-bg-subtle);
  border-radius: var(--radius-card);
}

.showcase-lead__visual img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 12px 28px rgba(0, 21, 41, 0.1));
  transition: transform var(--transition-ui);
}

.showcase-lead__info {
  padding: 8px 0;
}

.showcase-lead__info h3 {
  font-size: clamp(1.375rem, 2.2vw, 1.75rem);
  font-weight: 600;
  color: var(--color-navy);
  letter-spacing: -0.02em;
  margin: 8px 0 12px;
  line-height: 1.2;
}

.showcase-lead__info p {
  font-size: 15px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-width: 38ch;
  margin-bottom: 4px;
}

/* ── Mid row ── */
.showcase-mid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--color-border);
}

.showcase-mid__item {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 20px;
  align-items: center;
  cursor: pointer;
  transition: opacity var(--transition-ui);
}

.showcase-mid__item:hover {
  opacity: 0.96;
}

.showcase-mid__item:hover .showcase-mid__visual img {
  transform: scale(1.02);
}

.showcase-mid__visual {
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  background: var(--color-bg-subtle);
  border-radius: 6px;
}

.showcase-mid__visual img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 6px 14px rgba(0, 21, 41, 0.07));
  transition: transform var(--transition-ui);
}

.showcase-mid__info h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-navy);
  letter-spacing: -0.01em;
  margin: 6px 0 8px;
  line-height: 1.25;
}

.showcase-mid__info p {
  font-size: 13px;
  color: var(--color-text-secondary);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 2px;
}

/* ── Compact row ── */
.showcase-compact {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.showcase-compact__item {
  cursor: pointer;
  transition: opacity var(--transition-ui);
}

.showcase-compact__item:hover {
  opacity: 0.96;
}

.showcase-compact__item:hover .showcase-compact__visual img {
  transform: scale(1.02);
}

.showcase-compact__visual {
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  margin-bottom: 14px;
  background: var(--color-bg-subtle);
  border-radius: 6px;
}

.showcase-compact__visual img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform var(--transition-ui);
}

.showcase-compact__info h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-navy);
  margin: 4px 0 6px;
  letter-spacing: -0.01em;
}

/* ── Shared tags & links ── */
.showcase-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
}

.showcase-tag--sm {
  font-size: 10px;
}

.showcase-link {
  display: inline-block;
  margin-top: 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
  transition: opacity var(--transition-ui);
}

.showcase-link--sm {
  margin-top: 8px;
  font-size: 12px;
}

.showcase-lead:hover .showcase-link,
.showcase-mid__item:hover .showcase-link,
.showcase-compact__item:hover .showcase-link {
  opacity: 0.85;
}

@media (max-width: 1024px) {
  .showcase-lead {
    grid-template-columns: 1fr;
  }

  .showcase-lead__visual {
    height: 280px;
  }

  .showcase-mid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 768px) {
  .featured {
    padding: 72px 0 64px;
  }

  .featured-header {
    margin-bottom: 36px;
  }

  .showcase-mid__item {
    grid-template-columns: 1fr;
  }

  .showcase-mid__visual {
    height: 200px;
  }

  .showcase-compact {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .showcase-compact__visual {
    height: 160px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .showcase-lead,
  .showcase-mid__item,
  .showcase-compact__item,
  .showcase-lead__visual img,
  .showcase-mid__visual img,
  .showcase-compact__visual img {
    transition: none;
  }
}
</style>
