import { computed, unref } from 'vue'
import * as zh from '@/data/corporateContent'
import * as en from '@/i18n/content/corporateContent.en'
import { useLocaleStore } from '@/stores/locale'

const packs = { zh, en }

const KEY_MAP = {
  industryLogistics: 'industryLogistics',
  industryManufacturing: 'industryManufacturing',
  industryRetail: 'industryRetail',
  softwareUEE: 'softwareUEE',
  softwareUMS: 'softwareUMS',
  aboutUrovo: 'aboutUrovo',
}

export function useCorporateContent(key) {
  const localeStore = useLocaleStore()
  return computed(() => {
    const k = unref(key)
    const pack = packs[localeStore.locale] || packs.en
    return pack[KEY_MAP[k] || k]
  })
}

export function useCorporateIndustries() {
  const localeStore = useLocaleStore()
  return computed(() => {
    const pack = packs[localeStore.locale] || packs.en
    return [
      { id: 'logistics', path: '/industry/logistics', ...pack.industryLogistics, imageProductId: 'rt40s' },
      { id: 'retail', path: '/industry/retail', ...pack.industryRetail, imageProductId: 'dt66' },
      { id: 'manufacturing', path: '/industry/manufacturing', ...pack.industryManufacturing, imageProductId: 'dt50-5g' },
    ]
  })
}

export function useCorporateSoftware() {
  const localeStore = useLocaleStore()
  return computed(() => {
    const pack = packs[localeStore.locale] || packs.en
    return [
      { id: 'uee', path: '/software/uee', ...pack.softwareUEE },
      { id: 'ums', path: '/software/ums', ...pack.softwareUMS },
    ]
  })
}
