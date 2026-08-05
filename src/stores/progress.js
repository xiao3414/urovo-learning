import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { allPages } from '@/data/menu'

const STORAGE_KEY = 'urovo-learning-progress'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw
      ? JSON.parse(raw)
      : { completed: [], lastVisited: null, visitedAt: {}, examResult: null }
  } catch {
    return { completed: [], lastVisited: null, visitedAt: {}, examResult: null }
  }
}

export const useProgressStore = defineStore('progress', () => {
  const data = loadProgress()
  const completed = ref(data.completed)
  const lastVisited = ref(data.lastVisited)
  const visitedAt = ref(data.visitedAt || {})
  const examResult = ref(data.examResult)

  const totalCount = computed(() => allPages.length)
  const completedCount = computed(() => completed.value.length)
  const progressPercent = computed(() =>
    totalCount.value ? Math.round((completedCount.value / totalCount.value) * 100) : 0
  )

  function persist() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        completed: completed.value,
        lastVisited: lastVisited.value,
        visitedAt: visitedAt.value,
        examResult: examResult.value,
      })
    )
  }

  watch([completed, lastVisited, visitedAt, examResult], persist, { deep: true })

  function isCompleted(pageId) {
    return completed.value.includes(pageId)
  }

  function markCompleted(pageId) {
    if (!completed.value.includes(pageId)) {
      completed.value.push(pageId)
    }
  }

  function markIncomplete(pageId) {
    completed.value = completed.value.filter((id) => id !== pageId)
  }

  function toggleCompleted(pageId) {
    if (isCompleted(pageId)) markIncomplete(pageId)
    else markCompleted(pageId)
  }

  function visitPage(pageId) {
    lastVisited.value = pageId
    visitedAt.value[pageId] = new Date().toISOString()
  }

  function saveExamResult(result) {
    examResult.value = result
  }

  function clearExamResult() {
    examResult.value = null
  }

  function resetProgress() {
    completed.value = []
    lastVisited.value = null
    visitedAt.value = {}
    examResult.value = null
  }

  return {
    completed,
    lastVisited,
    visitedAt,
    examResult,
    totalCount,
    completedCount,
    progressPercent,
    isCompleted,
    markCompleted,
    markIncomplete,
    toggleCompleted,
    visitPage,
    saveExamResult,
    clearExamResult,
    resetProgress,
  }
})
