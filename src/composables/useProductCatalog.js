import { computed } from 'vue'
import { productCatalog, productCategories, getProductById as getById } from '@/data/products'
import { productTextEn } from '@/i18n/products.en'
import { useI18n, translateSpecLabel } from '@/i18n'
import { useLocaleStore } from '@/stores/locale'

function localizeProduct(product, locale) {
  if (!product || locale === 'zh') return product
  const en = productTextEn[product.id] || {}
  return {
    ...product,
    subtitle: en.subtitle || product.subtitle,
    highlight: en.highlight || product.highlight,
    specs: product.specs.map((s) => ({
      label: translateSpecLabel(s.label, locale),
      value: s.value,
    })),
    scenarios: en.scenarios || product.scenarios,
  }
}

export function useProductCatalog() {
  const { t } = useI18n()
  const localeStore = useLocaleStore()

  const categories = computed(() =>
    productCategories.map((c) => ({
      ...c,
      title: t(`categories.${c.id}`),
    }))
  )

  const catalog = computed(() =>
    productCatalog.map((p) => localizeProduct(p, localeStore.locale))
  )

  function getCategoryTitle(id) {
    return t(`categories.${id}`) || id
  }

  function getProductById(id) {
    const p = getById(id)
    return p ? localizeProduct(p, localeStore.locale) : null
  }

  return {
    productCatalog: catalog,
    productCategories: categories,
    getCategoryTitle,
    getProductById,
    productCount: productCatalog.length,
  }
}
