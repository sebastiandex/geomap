<script lang="ts" setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'
import Map from 'ol/Map'
import { mapKey } from './context'
import './AppMap.scss'

const mapRef = ref()
const map = new Map()

onMounted(() => {
  map.setTarget(mapRef.value)
})

onUnmounted(() => {
  map.setTarget(undefined)
})

provide(mapKey, map)
</script>

<template>
  <div ref="mapRef" class="AppMap">
    <slot />
  </div>
</template>
