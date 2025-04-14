<script lang="ts" setup>
import { provide, inject, onMounted, watch } from 'vue'
import View from 'ol/View'
import type { Coordinate } from 'ol/coordinate'
import { mapKey } from '@/shared/ui/AppMap'
import { viewKey } from './context'

interface AppMapViewProps {
  center?: Coordinate
  zoom?: number
}

const props = defineProps<AppMapViewProps>()
const map = inject(mapKey)
const view = new View()

const setCenter = () => {
  view.setCenter(props.center)
}

const setZoom = () => {
  if (props.zoom) {
    view.setZoom(props.zoom)
  }
}

watch(() => props.center, setCenter, { immediate: true })
watch(() => props.zoom, setZoom, { immediate: true })

onMounted(() => {
  map?.setView(view)
})

provide(viewKey, view)
</script>

<template>
  <slot />
</template>
