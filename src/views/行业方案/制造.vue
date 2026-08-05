<template>
  <TrainingPage :content="industryManufacturing" page-id="manufacturing" intro-label="方案介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { industryManufacturing } from '@/data/trainingContent'
</script>
