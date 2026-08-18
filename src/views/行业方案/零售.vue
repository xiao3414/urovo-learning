<template>
  <TrainingPage :content="content" page-id="retail" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { useTrainingContent } from '@/composables/useTrainingContent'
const content = useTrainingContent('industryRetail')
</script>
