<template>
  <TrainingPage :content="content" page-id="pos" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { useTrainingContent } from '@/composables/useTrainingContent'
const content = useTrainingContent('productPOS')
</script>
