<script lang="ts" setup>
import { provide, inject, onMounted, onUnmounted } from 'vue'
import TileLayer from 'ol/layer/Tile'
import { mapKey } from '@/shared/ui/AppMap'
import { tileLayerKey } from './context'

const map = inject(mapKey)
const tileLayer = new TileLayer({})

onMounted(() => {
  map?.addLayer(tileLayer)
})

onUnmounted(() => {
  map?.removeLayer(tileLayer)
})

provide(tileLayerKey, tileLayer)
</script>

<template>
  <slot />
</template>
