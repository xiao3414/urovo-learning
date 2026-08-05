<template>
  <TrainingPage :content="salesCompany" page-id="company" intro-label="知识要点" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { salesCompany } from '@/data/trainingContent'
</script>
