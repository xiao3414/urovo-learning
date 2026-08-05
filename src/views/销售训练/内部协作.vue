<template>
  <TrainingPage :content="salesCollaboration" page-id="collaboration" intro-label="协作指南" />
</template>
<script setup>
import TrainingPage from '@/components/TrainingPage.vue'
import { salesCollaboration } from '@/data/trainingContent'
</script>
