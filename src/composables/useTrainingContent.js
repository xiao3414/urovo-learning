import { computed, unref } from 'vue'
import * as zh from '@/data/trainingContent'
import * as en from '@/i18n/content/trainingContent.en'
import { useLocaleStore } from '@/stores/locale'

const packs = { zh, en }

export function useTrainingContent(key) {
  const localeStore = useLocaleStore()
  return computed(() => {
    const k = unref(key)
    const pack = packs[localeStore.locale] || packs.en
    return pack[k]
  })
}

export function useTrainingContentMap(keys) {
  const localeStore = useLocaleStore()
  return computed(() => {
    const pack = packs[localeStore.locale] || packs.en
    return Object.fromEntries(keys.map((k) => [k, pack[k]]))
  })
}
