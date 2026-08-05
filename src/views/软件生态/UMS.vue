<template>
  <TrainingPage :content="softwareUMS" page-id="ums" intro-label="平台介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { softwareUMS } from '@/data/trainingContent'
</script>
