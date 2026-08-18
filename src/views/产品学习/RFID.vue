<template>
  <TrainingPage :content="content" page-id="rfid" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { useTrainingContent } from '@/composables/useTrainingContent'
const content = useTrainingContent('productRFID')
</script>
