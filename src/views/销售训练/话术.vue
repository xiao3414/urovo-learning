<template>
  <TrainingPage :content="content" page-id="scripts" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { useTrainingContent } from '@/composables/useTrainingContent'
const content = useTrainingContent('salesScripts')
</script>
