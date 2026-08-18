import { computed } from 'vue'
import { examQuestions as examZh, PASS_SCORE as PASS_ZH } from '@/data/exam'
import { examQuestions as examEn, PASS_SCORE as PASS_EN } from '@/i18n/exam/en'
import { useLocaleStore } from '@/stores/locale'

export function useExam() {
  const localeStore = useLocaleStore()
  return computed(() => {
    if (localeStore.locale === 'zh') {
      return { questions: examZh, passScore: PASS_ZH }
    }
    return { questions: examEn, passScore: PASS_EN }
  })
}
