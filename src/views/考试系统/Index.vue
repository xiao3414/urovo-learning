<template>
  <div class="exam-view">
    <el-card v-if="!submitted" shadow="never">
      <template #header>
        <div class="exam-header">
          <div>
            <h2>{{ t('exam.title') }}</h2>
            <p>{{ t('exam.subtitle', { total: examData.questions.length, pass: examData.passScore }) }}</p>
          </div>
          <el-tag type="info">{{ t('exam.progress') }} {{ answeredCount }}/{{ examData.questions.length }}</el-tag>
        </div>
      </template>

      <div v-for="(q, index) in examData.questions" :key="q.id" class="question-block">
        <div class="question-title">
          <el-tag size="small">{{ q.category }}</el-tag>
          <span>{{ index + 1 }}. {{ q.question }}</span>
        </div>
        <el-radio-group v-model="answers[q.id]" class="options">
          <el-radio
            v-for="(opt, i) in q.options"
            :key="i"
            :value="i"
            border
            class="option-item"
          >
            {{ String.fromCharCode(65 + i) }}. {{ opt }}
          </el-radio>
        </el-radio-group>
      </div>

      <div class="submit-bar">
        <el-button type="primary" size="large" :disabled="answeredCount < examData.questions.length" @click="submitExam">
          {{ t('exam.submit') }}
        </el-button>
        <span v-if="answeredCount < examData.questions.length" class="hint">
          {{ t('exam.unanswered', { count: examData.questions.length - answeredCount }) }}
        </span>
      </div>
    </el-card>

    <el-card v-else shadow="never" class="result-card">
      <el-result
        :icon="passed ? 'success' : 'error'"
        :title="passed ? t('exam.passed') : t('exam.failed')"
        :sub-title="t('exam.score', { score, pass: examData.passScore })"
      >
        <template #extra>
          <el-button type="primary" @click="retryExam">{{ t('exam.retry') }}</el-button>
          <el-button @click="showReview = !showReview">
            {{ showReview ? t('exam.hideReview') : t('exam.showReview') }}
          </el-button>
        </template>
      </el-result>

      <div v-if="showReview" class="review-section">
        <h3>{{ t('exam.reviewTitle') }}</h3>
        <div v-for="(q, index) in examData.questions" :key="q.id" class="review-item">
          <p class="review-q">{{ index + 1 }}. {{ q.question }}</p>
          <p :class="answers[q.id] === q.answer ? 'correct' : 'wrong'">
            {{ t('exam.yourAnswer') }}: {{ formatAnswer(answers[q.id]) }}
            <span v-if="answers[q.id] !== q.answer">（{{ t('exam.correctAnswer') }}: {{ formatAnswer(q.answer) }}）</span>
          </p>
          <p class="explain">{{ q.explain }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useExam } from '@/composables/useExam'
import { useProgressStore } from '@/stores/progress'
import { useI18n } from '@/i18n'

const progressStore = useProgressStore()
const examData = useExam()
const { t } = useI18n()

const answers = ref({})
const submitted = ref(false)
const score = ref(0)
const passed = ref(false)
const showReview = ref(false)

const answeredCount = computed(() =>
  Object.values(answers.value).filter((v) => v !== undefined).length
)

onMounted(() => {
  const saved = progressStore.examResult
  if (saved?.submitted) {
    answers.value = saved.answers
    score.value = saved.score
    passed.value = saved.passed
    submitted.value = true
  }
})

function formatAnswer(index) {
  if (index === undefined) return t('exam.notAnswered')
  return String.fromCharCode(65 + index)
}

function submitExam() {
  const questions = examData.value.questions
  const passScore = examData.value.passScore
  let correct = 0
  questions.forEach((q) => {
    if (answers.value[q.id] === q.answer) correct++
  })
  score.value = Math.round((correct / questions.length) * 100)
  passed.value = score.value >= passScore
  submitted.value = true

  progressStore.saveExamResult({
    submitted: true,
    answers: { ...answers.value },
    score: score.value,
    passed: passed.value,
    date: new Date().toISOString(),
  })

  if (passed.value) {
    ElMessage.success(t('exam.passMessage'))
  } else {
    ElMessage.warning(t('exam.failMessage'))
  }
}

function retryExam() {
  answers.value = {}
  submitted.value = false
  score.value = 0
  passed.value = false
  showReview.value = false
  progressStore.clearExamResult()
}
</script>

<style scoped>
.exam-view {
  max-width: 800px;
  margin: 0 auto;
}

.exam-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.exam-header h2 {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.exam-header p {
  color: #909399;
  font-size: 14px;
}

.question-block {
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebeef5;
}

.question-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.5;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
}

.option-item {
  width: 100%;
  margin-right: 0;
}

.submit-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}

.hint {
  color: #909399;
  font-size: 14px;
}

.review-section {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #ebeef5;
}

.review-section h3 {
  margin-bottom: 16px;
}

.review-item {
  margin-bottom: 16px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 6px;
}

.review-q {
  font-weight: 500;
  margin-bottom: 6px;
}

.correct {
  color: #67c23a;
}

.wrong {
  color: #f56c6c;
}

.explain {
  color: #909399;
  font-size: 13px;
  margin-top: 4px;
}
</style>
