<template>
  <TrainingPage :content="content" page-id="customer-analysis" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { useTrainingContent } from '@/composables/useTrainingContent'
const content = useTrainingContent('salesCustomerAnalysis')
</script>
