<template>
  <TrainingPage :content="productPOS" page-id="pos" intro-label="产品介绍" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { productPOS } from '@/data/trainingContent'
</script>
