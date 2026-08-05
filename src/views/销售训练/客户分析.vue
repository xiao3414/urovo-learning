<template>
  <TrainingPage :content="salesCustomerAnalysis" page-id="customer-analysis" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { salesCustomerAnalysis } from '@/data/trainingContent'
</script>
