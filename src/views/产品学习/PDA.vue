<template>
  <TrainingPage :content="productPDA" page-id="pda" intro-label="产品介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { productPDA } from '@/data/trainingContent'
</script>
