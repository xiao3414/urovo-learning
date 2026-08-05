<template>
  <div class="exam-view">
    <el-card v-if="!submitted" shadow="never">
      <template #header>
        <div class="exam-header">
          <div>
            <h2>销售新人结业考试</h2>
            <p>共 {{ examQuestions.length }} 题，满分 100 分，{{ PASS_SCORE }} 分及格</p>
          </div>
          <el-tag type="info">进度 {{ answeredCount }}/{{ examQuestions.length }}</el-tag>
        </div>
      </template>

      <div v-for="(q, index) in examQuestions" :key="q.id" class="question-block">
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
        <el-button type="primary" size="large" :disabled="answeredCount < examQuestions.length" @click="submitExam">
          提交答卷
        </el-button>
        <span v-if="answeredCount < examQuestions.length" class="hint">
          还有 {{ examQuestions.length - answeredCount }} 题未作答
        </span>
      </div>
    </el-card>

    <el-card v-else shadow="never" class="result-card">
      <el-result
        :icon="passed ? 'success' : 'error'"
        :title="passed ? '恭喜通过！' : '未通过，请继续学习'"
        :sub-title="`得分：${score} 分 / 100 分（及格线 ${PASS_SCORE} 分）`"
      >
        <template #extra>
          <el-button type="primary" @click="retryExam">重新考试</el-button>
          <el-button @click="showReview = !showReview">
            {{ showReview ? '隐藏解析' : '查看解析' }}
          </el-button>
        </template>
      </el-result>

      <div v-if="showReview" class="review-section">
        <h3>答题解析</h3>
        <div v-for="(q, index) in examQuestions" :key="q.id" class="review-item">
          <p class="review-q">{{ index + 1 }}. {{ q.question }}</p>
          <p :class="answers[q.id] === q.answer ? 'correct' : 'wrong'">
            你的答案：{{ formatAnswer(answers[q.id]) }}
            <span v-if="answers[q.id] !== q.answer">（正确答案：{{ formatAnswer(q.answer) }}）</span>
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
import { examQuestions, PASS_SCORE } from '@/data/exam'
import { useProgressStore } from '@/stores/progress'

const progressStore = useProgressStore()

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
  if (index === undefined) return '未作答'
  return String.fromCharCode(65 + index)
}

function submitExam() {
  let correct = 0
  examQuestions.forEach((q) => {
    if (answers.value[q.id] === q.answer) correct++
  })
  score.value = Math.round((correct / examQuestions.length) * 100)
  passed.value = score.value >= PASS_SCORE
  submitted.value = true

  progressStore.saveExamResult({
    submitted: true,
    answers: { ...answers.value },
    score: score.value,
    passed: passed.value,
    date: new Date().toISOString(),
  })

  if (passed.value) {
    progressStore.markCompleted('exam')
    ElMessage.success('考试通过，已记录学习进度！')
  } else {
    ElMessage.warning('未达及格线，建议复习后重考')
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
