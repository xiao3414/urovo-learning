import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/i18n'
import { useProductCatalog } from '@/composables/useProductCatalog'

export function usePageTitle(getDynamicTitle) {
  const route = useRoute()
  const { t, locale } = useI18n()
  const { getProductById } = useProductCatalog()

  function resolveTitle() {
    if (typeof getDynamicTitle === 'function') {
      const custom = getDynamicTitle()
      if (custom) return custom
    }

    if (route.name === 'product-detail' && route.params.id) {
      const product = getProductById(route.params.id)
      if (product?.name) {
        return t('seo.productDetail', { name: product.name })
      }
      return t('seo.productNotFound')
    }

    const key = route.meta?.titleKey
    if (key) return t(key)

    return t('seo.default')
  }

  function apply() {
    document.title = resolveTitle()
    const descKey = route.meta?.descriptionKey
    if (descKey) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', t(descKey))
    }
  }

  watch([() => route.fullPath, locale], apply, { immediate: true })

  return { apply, resolveTitle }
}
