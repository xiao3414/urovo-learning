<template>
  <TrainingPage :content="industryRetail" page-id="retail" intro-label="方案介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { industryRetail } from '@/data/trainingContent'
</script>
