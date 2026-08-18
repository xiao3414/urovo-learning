<template>
  <div class="site-layout">
    <SiteHeader />
    <main class="site-main" :class="{ 'site-main--home': isHome }">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './SiteHeader.vue'
import SiteFooter from './SiteFooter.vue'
import { usePageTitle } from '@/composables/usePageTitle'

const route = useRoute()
const isHome = computed(() => route.name === 'home')

usePageTitle()
</script>

<style scoped>
.site-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
}

.site-main {
  flex: 1;
  padding: var(--space-6);
  padding-top: calc(var(--site-header-height) + var(--space-6));
  overflow-x: hidden;
}

/* Home hero extends under transparent header overlay */
.site-main--home {
  padding: 0;
}

@media (max-width: 480px) {
  .site-main {
    padding: var(--space-4);
    padding-top: calc(var(--site-header-height) + var(--space-4));
  }

  .site-main--home {
    padding: 0;
  }
}
</style>
