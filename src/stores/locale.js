import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const STORAGE_KEY = 'urovo-learning-locale'

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'zh' || saved === 'en') return saved
  } catch {
    /* ignore */
  }
  return 'en'
}

export const useLocaleStore = defineStore('locale', () => {
  const locale = ref(detectLocale())

  watch(locale, (val) => {
    try {
      localStorage.setItem(STORAGE_KEY, val)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = val === 'zh' ? 'zh-CN' : 'en'
  }, { immediate: true })

  function setLocale(next) {
    if (next === 'zh' || next === 'en') locale.value = next
  }

  function toggleLocale() {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
  }

  return { locale, setLocale, toggleLocale }
})
