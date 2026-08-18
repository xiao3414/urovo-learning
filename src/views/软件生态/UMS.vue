<template>
  <TrainingPage :content="content" page-id="ums" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { useTrainingContent } from '@/composables/useTrainingContent'
const content = useTrainingContent('softwareUMS')
</script>
