<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__top">
        <div class="site-footer__brand-block">
          <p class="site-footer__brand">{{ t('site.brand') }}</p>
          <p class="site-footer__tagline">{{ t('site.tagline') }}</p>
        </div>

        <nav class="site-footer__columns" aria-label="Footer">
          <div v-for="col in footerColumns" :key="col.title" class="site-footer__col">
            <p class="site-footer__col-title">{{ col.title }}</p>
            <template v-for="link in col.links" :key="link.id">
              <a
                v-if="link.external || link.href"
                :href="link.href"
                class="site-footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.label }}
              </a>
              <router-link v-else :to="link.path" class="site-footer__link">
                {{ link.label }}
              </router-link>
            </template>
          </div>
        </nav>
      </div>

      <div class="site-footer__meta">
        <div class="site-footer__lang">
          <span class="site-footer__lang-label">{{ t('site.footer.language') }}</span>
          <div class="lang-switch">
            <button
              type="button"
              class="lang-switch__btn"
              :class="{ active: locale === 'en' }"
              @click="setLocale('en')"
            >
              EN
            </button>
            <span class="lang-switch__sep">|</span>
            <button
              type="button"
              class="lang-switch__btn"
              :class="{ active: locale === 'zh' }"
              @click="setLocale('zh')"
            >
              {{ t('lang.zh') }}
            </button>
          </div>
        </div>

        <a
          :href="urovoWebUrl"
          class="site-footer__official"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('site.footer.officialWebsite') }} — www.urovo.com
        </a>

        <p class="site-footer__copy">{{ t('site.footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/i18n'
import { useSiteNavigation } from '@/composables/useSiteNavigation'

const { t, locale, setLocale } = useI18n()
const { footerColumns, urovoWebUrl } = useSiteNavigation()
</script>

<style scoped>
.site-footer {
  background: var(--color-navy);
  color: rgba(255, 255, 255, 0.85);
  margin-top: auto;
}

.site-footer__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--space-10) var(--space-6) var(--space-6);
}

.site-footer__top {
  display: grid;
  grid-template-columns: minmax(200px, 280px) 1fr;
  gap: var(--space-10);
  margin-bottom: var(--space-8);
}

.site-footer__brand {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: #fff;
  margin-bottom: var(--space-2);
}

.site-footer__tagline {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.65);
  max-width: 280px;
  line-height: var(--line-height-normal);
}

.site-footer__columns {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-6) var(--space-8);
}

.site-footer__col-title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin-bottom: var(--space-3);
}

.site-footer__link {
  display: block;
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  padding: 4px 0;
  transition: color var(--duration-fast) var(--ease-out);
}

.site-footer__link:hover {
  color: #fff;
}

.site-footer__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4) var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.site-footer__lang {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.site-footer__lang-label {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.55);
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.lang-switch__btn {
  border: none;
  background: transparent;
  font: inherit;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: rgba(255, 255, 255, 0.55);
  cursor: pointer;
  padding: 2px 0;
  border-bottom: 2px solid transparent;
  transition: color var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out);
}

.lang-switch__btn.active {
  color: #fff;
  border-bottom-color: #fff;
}

.lang-switch__sep {
  color: rgba(255, 255, 255, 0.35);
  font-size: var(--font-size-xs);
}

.site-footer__official {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.site-footer__official:hover {
  color: #fff;
}

.site-footer__copy {
  font-size: var(--font-size-xs);
  color: rgba(255, 255, 255, 0.45);
  margin-left: auto;
}

@media (max-width: 900px) {
  .site-footer__top {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .site-footer__copy {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .site-footer__inner {
    padding: var(--space-8) var(--space-4) var(--space-4);
  }

  .site-footer__meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
