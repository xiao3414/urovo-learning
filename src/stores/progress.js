import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

const STORAGE_KEY = 'urovo-learning-exam'

function loadExamResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/** 仅保存考试结果（可选恢复），不含学习进度追踪 */
export const useProgressStore = defineStore('progress', () => {
  const examResult = ref(loadExamResult())

  watch(examResult, (val) => {
    try {
      if (val) localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
  }, { deep: true })

  function saveExamResult(result) {
    examResult.value = result
  }

  function clearExamResult() {
    examResult.value = null
  }

  return {
    examResult,
    saveExamResult,
    clearExamResult,
  }
})
