<template>
  <TrainingPage :content="softwareUEE" page-id="uee" intro-label="平台介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { softwareUEE } from '@/data/trainingContent'
</script>
