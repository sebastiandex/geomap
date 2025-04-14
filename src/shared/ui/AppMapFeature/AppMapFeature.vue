<script lang="ts" setup>
import { provide, inject, onMounted, onUnmounted } from 'vue'
import Feature from 'ol/Feature'
import VectorSource from 'ol/source/Vector'
import { vectorSourceKey } from '@/shared/ui/AppMapVectorSource'
import { featureKey } from './context'

const source = inject<VectorSource>(vectorSourceKey)
const feature = new Feature()

onMounted(() => {
  source?.addFeature(feature)
})

onUnmounted(() => {
  source?.removeFeature(feature)
})

provide(featureKey, feature)
defineExpose({ feature })
</script>

<template>
  <slot />
</template>
