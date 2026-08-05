<template>
  <TrainingPage :content="salesScripts" page-id="scripts" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { salesScripts } from '@/data/trainingContent'
</script>
