<template>
  <section class="contact">
    <div class="home-section-inner contact__inner">
      <div class="contact__copy">
        <h2>{{ t('home.contactTitle') }}</h2>
        <p>{{ t('home.contactDesc') }}</p>
      </div>
      <a
        :href="contactUrl"
        class="home-btn home-btn--inverse"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('home.contactSales') }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/i18n'

defineProps({
  contactUrl: { type: String, required: true },
})

const { t } = useI18n()
</script>

<style scoped>
.contact {
  padding: var(--section-pad) 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: #fff;
}

.contact__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.contact__copy h2 {
  font-size: clamp(1.375rem, 2.5vw, 1.75rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
}

.contact__copy p {
  font-size: var(--font-size-body);
  color: rgba(255, 255, 255, 0.82);
  max-width: 520px;
  line-height: 1.65;
}

@media (max-width: 768px) {
  .contact__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
