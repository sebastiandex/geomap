<script lang="ts" setup>
import { inject, provide, onMounted, onUnmounted } from 'vue'
import VectorLayer from 'ol/layer/Vector'
import { mapKey } from '@/shared/ui/AppMap'
import { vectorLayerKey } from './context'

const map = inject(mapKey)
const layer = new VectorLayer()

onMounted(() => {
  map?.addLayer(layer)
})

onUnmounted(() => {
  map?.removeLayer(layer)
})

provide(vectorLayerKey, layer)
</script>

<template>
  <slot />
</template>
