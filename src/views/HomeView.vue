<template>
  <div class="home">
    <HomeHero :images="heroImages" />
    <HomeFeatured
      :products="featuredProducts"
      :product-count="productCount"
      :get-category-title="getCategoryTitle"
    />
    <HomePortfolio :categories="portfolioCategories" />
    <HomeSolutions :items="industryCards" />
    <HomeSoftware :items="softwareCards" />
    <HomeWhy :items="whyItems" :showcase-image="whyShowcaseImage" />
    <HomeContact :contact-url="contactSalesUrl" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import HomeHero from '@/components/home/HomeHero.vue'
import HomeFeatured from '@/components/home/HomeFeatured.vue'
import HomePortfolio from '@/components/home/HomePortfolio.vue'
import HomeSolutions from '@/components/home/HomeSolutions.vue'
import HomeSoftware from '@/components/home/HomeSoftware.vue'
import HomeWhy from '@/components/home/HomeWhy.vue'
import HomeContact from '@/components/home/HomeContact.vue'
import { useProductCatalog } from '@/composables/useProductCatalog'
import { useHomeContent } from '@/composables/useHomeContent'
import { useSiteNavigation } from '@/composables/useSiteNavigation'
import { useI18n } from '@/i18n'

const FEATURED_IDS = ['dt630', 'dt66', 'dt50-5g', 'rfg91', 'i9000s', 'k388-pro']
const HERO_IDS = { main: 'dt630', secondaryA: 'rfg91', secondaryB: 'i9000s' }

const { productCatalog, productCount, getCategoryTitle, productCategories } = useProductCatalog()
const { industries, software } = useHomeContent()
const { contactSalesUrl } = useSiteNavigation()
const { t } = useI18n()

function findProduct(id) {
  return productCatalog.value.find((p) => p.id === id)
}

const featuredProducts = computed(() =>
  FEATURED_IDS.map((id) => findProduct(id)).filter(Boolean)
)

const heroImages = computed(() => ({
  main: findProduct(HERO_IDS.main)?.imageDetail || findProduct(HERO_IDS.main)?.image || '',
  secondaryA: findProduct(HERO_IDS.secondaryA)?.image || '',
  secondaryB: findProduct(HERO_IDS.secondaryB)?.image || '',
}))

const portfolioCategories = computed(() =>
  productCategories.value
    .filter((c) => c.id !== 'all')
    .map((c) => {
      const products = productCatalog.value.filter((p) => p.category === c.id)
      const representative = products[0]
      return {
        id: c.id,
        title: c.title,
        description: t(`home.portfolio.${c.id}`),
        count: products.length,
        image: representative?.image,
      }
    })
)

const industryCards = computed(() =>
  industries.value.map((item) => ({
    ...item,
    image: findProduct(item.imageProductId)?.imageDetail || findProduct(item.imageProductId)?.image,
  }))
)

const softwareCards = computed(() => software.value)

const whyShowcaseImage = computed(() => {
  const p = findProduct('dt630')
  return p?.imageDetail || p?.image || ''
})

const whyItems = computed(() => [
  { key: 'portfolio', index: '01', title: t('home.why.portfolio.title'), desc: t('home.why.portfolio.desc') },
  { key: 'expertise', index: '02', title: t('home.why.expertise.title'), desc: t('home.why.expertise.desc') },
  { key: 'solutions', index: '03', title: t('home.why.solutions.title'), desc: t('home.why.solutions.desc') },
  { key: 'software', index: '04', title: t('home.why.software.title'), desc: t('home.why.software.desc') },
  { key: 'apac', index: '05', title: t('home.why.apac.title'), desc: t('home.why.apac.desc') },
])
</script>

<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}
</style>
