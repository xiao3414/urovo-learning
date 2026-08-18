<template>
  <section class="hero">
    <div class="hero-bg" aria-hidden="true">
      <div class="hero-bg__grid" />
      <div class="hero-bg__glow" />
      <div class="hero-bg__accent" />
    </div>

    <div class="hero-inner home-section-inner">
      <div class="hero-copy">
        <span class="hero-eyebrow">{{ t('home.eyebrow') }}</span>
        <h1>
          <span class="hero-title-line">{{ t('home.titleLine1') }}</span>
          <span class="hero-title-line hero-title-line--accent">{{ t('home.titleLine2') }}</span>
        </h1>
        <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
        <div class="hero-actions">
          <button type="button" class="home-btn home-btn--primary" @click="router.push('/products')">
            {{ t('home.exploreProducts') }}
          </button>
          <button type="button" class="home-btn home-btn--secondary" @click="router.push('/industry/logistics')">
            {{ t('home.exploreSolutions') }}
          </button>
        </div>
      </div>

      <div class="hero-stage" aria-hidden="true">
        <div class="hero-stage__floor" />
        <div class="hero-stage__cluster">
          <img
            class="hero-product hero-product--main"
            :src="images.main"
            alt=""
            loading="eager"
            decoding="async"
          />
          <img
            class="hero-product hero-product--secondary hero-product--a"
            :src="images.secondaryA"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            class="hero-product hero-product--secondary hero-product--b"
            :src="images.secondaryB"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from '@/i18n'

defineProps({
  images: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const { t } = useI18n()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: var(--hero-min-height);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-bg-hero);
  border-bottom: 1px solid var(--color-border);
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero-bg__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 82, 217, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 82, 217, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, transparent 85%);
}

.hero-bg__glow {
  position: absolute;
  top: -15%;
  right: -5%;
  width: 55%;
  height: 90%;
  background: radial-gradient(ellipse at 40% 40%, rgba(0, 82, 217, 0.07) 0%, transparent 68%);
}

.hero-bg__accent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 82, 217, 0.15), transparent);
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: calc(var(--site-header-height) + 44px);
  padding-bottom: 64px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(32px, 5vw, 56px);
  align-items: center;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.hero-copy h1 {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
}

.hero-title-line {
  display: block;
  font-size: var(--font-size-h1);
  font-weight: 600;
  line-height: var(--line-height-h1);
  color: var(--color-navy);
  letter-spacing: -0.025em;
}

:global(html[lang='zh-CN']) .hero-title-line {
  font-weight: 500;
  letter-spacing: -0.01em;
}

.hero-title-line--accent {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.65;
  color: var(--color-text-secondary);
  max-width: 480px;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-stage {
  position: relative;
  height: clamp(340px, 40vw, 440px);
}

.hero-stage__floor {
  position: absolute;
  bottom: 6%;
  left: 50%;
  transform: translateX(-50%);
  width: 88%;
  height: 38%;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(0, 82, 217, 0.07) 0%,
    rgba(0, 82, 217, 0.02) 45%,
    transparent 72%
  );
  pointer-events: none;
}

.hero-stage__cluster {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-product {
  position: absolute;
  object-fit: contain;
  display: block;
  transition: transform var(--transition-ui);
}

.hero-product--main {
  width: 54%;
  max-height: 88%;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  filter: drop-shadow(0 22px 44px rgba(0, 21, 41, 0.14));
}

.hero-product--a {
  width: 28%;
  max-height: 42%;
  top: 6%;
  right: 4%;
  z-index: 2;
  opacity: 0.7;
  filter: drop-shadow(0 10px 20px rgba(0, 21, 41, 0.08));
}

.hero-product--b {
  width: 25%;
  max-height: 38%;
  bottom: 8%;
  left: 2%;
  z-index: 1;
  opacity: 0.62;
  filter: drop-shadow(0 10px 20px rgba(0, 21, 41, 0.07));
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    padding-bottom: 56px;
  }

  .hero-stage {
    height: 320px;
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-inner {
    padding-top: calc(var(--site-header-height) + 32px);
    padding-bottom: 48px;
  }

  .hero-stage {
    height: 280px;
  }

  .hero-product--main {
    width: 62%;
  }
}

@media (max-width: 480px) {
  .hero-stage {
    height: 240px;
  }
}
</style>
