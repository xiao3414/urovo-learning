<template>
  <TrainingPage :content="productRFID" page-id="rfid" intro-label="产品介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { productRFID } from '@/data/trainingContent'
</script>
