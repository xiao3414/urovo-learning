<template>
  <header
    class="site-header"
    :class="{
      'site-header--overlay': overlayMode,
      'site-header--solid': !overlayMode,
      'site-header--menu-open': mobileOpen || openMega,
    }"
  >
    <div class="site-header__bar">
      <div class="site-header__inner">
        <router-link to="/" class="site-header__brand" @click="closeAll">
          <img src="/favicon.svg" alt="" class="site-header__logo" width="32" height="32" />
          <span class="site-header__brand-text">{{ t('site.brand') }}</span>
        </router-link>

        <nav class="site-header__nav" aria-label="Main">
          <div
            v-for="group in megaMenuGroups"
            :key="group.id"
            class="nav-item"
            @mouseenter="openMegaGroup(group.id)"
            @mouseleave="scheduleCloseMega"
          >
            <button
              type="button"
              class="nav-trigger"
              :class="{ 'nav-trigger--active': openMega === group.id }"
              :aria-expanded="openMega === group.id"
              @click="toggleMega(group.id)"
            >
              {{ group.label }}
              <svg class="nav-chevron" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </button>
          </div>
        </nav>

        <div class="site-header__actions">
          <div class="lang-switch" role="group" :aria-label="t('site.footer.language')">
            <button
              type="button"
              class="lang-switch__btn"
              :class="{ active: locale === 'en' }"
              @click="setLocale('en')"
            >
              EN
            </button>
            <span class="lang-switch__sep" aria-hidden="true">|</span>
            <button
              type="button"
              class="lang-switch__btn"
              :class="{ active: locale === 'zh' }"
              @click="setLocale('zh')"
            >
              {{ t('lang.zh') }}
            </button>
          </div>

          <a
            :href="contactSalesUrl"
            class="site-header__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ t('site.nav.contactSales') }}
          </a>

          <button
            type="button"
            class="site-header__hamburger"
            :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="mobileOpen"
            @click="mobileOpen = !mobileOpen"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="activeMegaGroup && openMega"
      class="mega-panel"
      @mouseenter="cancelCloseMega"
      @mouseleave="scheduleCloseMega"
    >
      <div class="mega-panel__inner">
        <p class="mega-panel__label">{{ activeMegaGroup.panelLabel }}</p>
        <div class="mega-panel__grid">
          <template v-for="link in activeMegaGroup.links" :key="link.id">
            <a
              v-if="link.external"
              :href="link.href"
              class="mega-link"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeAll"
            >
              <span class="mega-link__title">{{ link.label }}</span>
              <span v-if="link.desc" class="mega-link__desc">{{ link.desc }}</span>
            </a>
            <router-link
              v-else
              :to="link.path"
              class="mega-link"
              @click="closeAll"
            >
              <span class="mega-link__title">{{ link.label }}</span>
              <span v-if="link.desc" class="mega-link__desc">{{ link.desc }}</span>
            </router-link>
          </template>
        </div>
        <router-link
          v-if="activeMegaGroup.viewAll"
          :to="activeMegaGroup.viewAll.path"
          class="mega-view-all"
          @click="closeAll"
        >
          {{ activeMegaGroup.viewAll.label }}
        </router-link>
      </div>
    </div>

    <el-drawer
      v-model="mobileOpen"
      direction="rtl"
      size="min(320px, 88vw)"
      :with-header="false"
      class="site-drawer"
      append-to-body
    >
      <div class="drawer-inner">
        <a
          :href="contactSalesUrl"
          class="drawer-cta"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeAll"
        >
          {{ t('site.nav.contactSales') }}
        </a>

        <div v-for="group in megaMenuGroups" :key="group.id" class="drawer-group">
          <p class="drawer-group__title">{{ group.label }}</p>
          <template v-for="link in group.links" :key="link.id">
            <a
              v-if="link.external"
              :href="link.href"
              class="drawer-link"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeAll"
            >
              {{ link.label }}
            </a>
            <router-link v-else :to="link.path" class="drawer-link" @click="closeAll">
              {{ link.label }}
            </router-link>
          </template>
          <router-link
            v-if="group.viewAll"
            :to="group.viewAll.path"
            class="drawer-link drawer-link--muted"
            @click="closeAll"
          >
            {{ group.viewAll.label }}
          </router-link>
        </div>

        <div class="drawer-lang">
          <span class="drawer-lang__label">{{ t('site.footer.language') }}</span>
          <div class="lang-switch lang-switch--drawer">
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
      </div>
    </el-drawer>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/i18n'
import { useSiteNavigation } from '@/composables/useSiteNavigation'

const SCROLL_THRESHOLD = 24

const route = useRoute()
const { t, locale, setLocale } = useI18n()
const { megaMenuGroups, contactSalesUrl } = useSiteNavigation()

const scrolled = ref(false)
const mobileOpen = ref(false)
const openMega = ref(null)
let closeTimer = null

const isHome = computed(() => route.name === 'home')
const overlayMode = computed(() => isHome.value && !scrolled.value && !openMega.value)

const activeMegaGroup = computed(() =>
  megaMenuGroups.value.find((g) => g.id === openMega.value)
)

function onScroll() {
  scrolled.value = window.scrollY > SCROLL_THRESHOLD
}

function closeAll() {
  mobileOpen.value = false
  openMega.value = null
}

function openMegaGroup(id) {
  cancelCloseMega()
  openMega.value = id
}

function scheduleCloseMega() {
  cancelCloseMega()
  closeTimer = setTimeout(() => {
    openMega.value = null
  }, 120)
}

function cancelCloseMega() {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}

function toggleMega(id) {
  openMega.value = openMega.value === id ? null : id
}

watch(() => route.path, () => {
  closeAll()
  scrolled.value = window.scrollY > SCROLL_THRESHOLD
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  cancelCloseMega()
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition:
    background-color var(--duration-fast) var(--ease-out),
    border-color var(--duration-fast) var(--ease-out),
    box-shadow var(--duration-fast) var(--ease-out);
}

.site-header__bar {
  height: var(--site-header-height);
  border-bottom: 1px solid transparent;
  transition: border-color var(--duration-fast) var(--ease-out);
}

.site-header--overlay .site-header__bar {
  background: rgba(248, 250, 252, 0.82);
  border-bottom-color: rgba(229, 230, 235, 0.6);
}

.site-header--solid .site-header__bar,
.site-header--menu-open .site-header__bar {
  background: #fff;
  border-bottom-color: var(--color-border);
  box-shadow: 0 1px 3px rgba(0, 21, 41, 0.04);
}

.site-header__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  height: 100%;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.site-header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  flex-shrink: 0;
}

.site-header__logo {
  display: block;
}

.site-header__brand-text {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--color-navy);
  white-space: nowrap;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
  justify-content: center;
  padding: 0 16px;
}

.nav-item {
  position: relative;
}

.nav-trigger {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
  border: none;
  background: transparent;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-navy);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: color 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  letter-spacing: 0.01em;
}

.nav-trigger:hover,
.nav-trigger--active {
  color: var(--color-primary);
}

.nav-chevron {
  opacity: 0.45;
  transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.22s;
}

.nav-trigger--active .nav-chevron,
.nav-item:hover .nav-chevron {
  transform: rotate(180deg);
  opacity: 0.75;
}

.mega-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: var(--site-header-height);
  background: #fff;
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 12px 32px rgba(0, 21, 41, 0.06);
  padding: 36px 0 40px;
}

.mega-panel__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.mega-panel__label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 24px;
}

.mega-panel__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 4px 40px;
}

.mega-link {
  display: block;
  padding: 10px 0;
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.mega-link__title {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-navy);
  margin-bottom: 4px;
  transition: color var(--duration-fast) var(--ease-out);
}

.mega-link__desc {
  display: block;
  font-size: 13px;
  line-height: 1.45;
  color: var(--color-text-secondary);
}

.mega-link:hover .mega-link__title {
  color: var(--color-primary);
}

.mega-view-all {
  display: inline-block;
  margin-top: 28px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-primary);
  text-decoration: none;
}

.mega-view-all:hover {
  text-decoration: underline;
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px;
}

.lang-switch__btn {
  border: none;
  background: transparent;
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.22s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.22s;
  letter-spacing: 0.02em;
}

.lang-switch__btn.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.lang-switch__sep {
  color: var(--color-border);
  font-size: 11px;
  user-select: none;
}

.site-header__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: var(--color-primary);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  white-space: nowrap;
  letter-spacing: 0.01em;
  transition: background-color 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}

.site-header__cta:hover {
  background: var(--color-primary-dark);
}

.site-header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: var(--radius-sm);
  color: var(--color-navy);
}

.site-header__hamburger span {
  display: block;
  height: 2px;
  width: 100%;
  background: currentColor;
  border-radius: 1px;
}

.drawer-inner {
  padding: var(--space-4);
}

.drawer-cta {
  display: block;
  width: 100%;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-6);
  background: var(--color-primary);
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  border-radius: var(--radius-sm);
}

.drawer-group {
  margin-bottom: var(--space-5);
}

.drawer-group__title {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.drawer-link {
  display: block;
  padding: var(--space-2) 0;
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-base);
}

.drawer-link:hover {
  color: var(--color-primary);
}

.drawer-link--muted {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

.drawer-lang {
  margin-top: var(--space-8);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.drawer-lang__label {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.lang-switch--drawer .lang-switch__btn {
  font-size: var(--font-size-sm);
}

@media (max-width: 1024px) {
  .site-header__nav,
  .mega-panel {
    display: none;
  }

  .site-header__hamburger {
    display: flex;
  }

  .lang-switch {
    display: none;
  }

  .site-header__cta {
    display: none;
  }
}

@media (max-width: 480px) {
  .site-header__inner {
    padding: 0 var(--space-4);
  }

  .site-header__brand-text {
    font-size: var(--font-size-sm);
  }
}
</style>

<style>
.site-drawer .el-drawer__body {
  padding: 0;
}
</style>
