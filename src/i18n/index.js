import { computed } from 'vue'
import zh from './messages/zh-CN'
import en from './messages/en-US'
import { useLocaleStore } from '@/stores/locale'

const messages = { zh, en }

function getByPath(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj)
}

function interpolate(str, params = {}) {
  if (!str || !params) return str
  return str.replace(/\{(\w+)\}/g, (_, key) => (params[key] !== undefined ? String(params[key]) : `{${key}}`))
}

export function useI18n() {
  const localeStore = useLocaleStore()
  const locale = computed(() => localeStore.locale)

  function t(key, params) {
    const pack = messages[localeStore.locale] || messages.en
    const val = getByPath(pack, key)
    if (val === undefined) return key
    return typeof val === 'string' ? interpolate(val, params) : val
  }

  return {
    locale,
    t,
    setLocale: localeStore.setLocale,
    toggleLocale: localeStore.toggleLocale,
    isZh: computed(() => localeStore.locale === 'zh'),
    isEn: computed(() => localeStore.locale === 'en'),
  }
}

export function translateSpecLabel(label, locale) {
  const pack = messages[locale] || messages.en
  return pack.specLabels?.[label] || label
}
