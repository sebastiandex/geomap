<script lang="ts" setup>
import { inject, onMounted, onUnmounted, provide } from 'vue'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { vectorLayerKey } from '@/shared/ui/AppMapVectorLayer'
import { vectorSourceKey } from './context'

const layer = inject<VectorLayer<VectorSource>>(vectorLayerKey)
const source = new VectorSource()

onMounted(() => {
  layer?.setSource(source)
})

onUnmounted(() => {
  layer?.setSource(null)
})

provide(vectorSourceKey, source)
</script>

<template>
  <slot />
</template>
