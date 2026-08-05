<template>
  <TrainingPage :content="industryLogistics" page-id="logistics" intro-label="方案介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { industryLogistics } from '@/data/trainingContent'
</script>
