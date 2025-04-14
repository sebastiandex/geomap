<script lang="ts" setup>
import { inject, onUnmounted, onMounted, computed, ref, watch } from 'vue'
import type Feature from 'ol/Feature'
import { mapKey } from '@/shared/ui/AppMap'
import { AppMapFeature } from '@/shared/ui/AppMapFeature'
import { AppMapLine } from '@/shared/ui/AppMapLine'
import { AppMapStyle } from '@/shared/ui/AppMapStyle'
import type { Telegram, Theme } from '@/shared/model'
import { getLineCoords } from '../../lib/helpers'
import { LINE_POINTS, POINTS_PER_MS } from '../../lib/constants'
import { renderTelegram } from '../../lib/renderTelegram'
import { useTelegramStore } from '../../model/useTelegramStore'

interface TelegramFeatureProps {
  telegram: Telegram
  theme: Theme
}

const props = defineProps<TelegramFeatureProps>()
const map = inject(mapKey)
const store = useTelegramStore()
const featureRef = ref<{ feature: Feature }>()
const startTime = ref(0)
const elapsedPoints = ref(0)
const coords = computed(() => getLineCoords(props.telegram).slice(0, elapsedPoints.value))

const onPostRender = () => {
  if (elapsedPoints.value >= LINE_POINTS) {
    store.removeActive(props.telegram.id)
    return stopAnimation()
  }
  const diff = Date.now() - startTime.value
  elapsedPoints.value = Math.ceil(diff * POINTS_PER_MS)
  getLineCoords(props.telegram).slice(0, elapsedPoints.value)
  map?.render()
}

const stopAnimation = () => {
  map?.un('postrender', onPostRender)
}

const startAnimation = () => {
  stopAnimation()
  startTime.value = Date.now()
  elapsedPoints.value = 0
  map?.on('postrender', onPostRender)
}

const setTheme = () => {
  featureRef.value?.feature.set('theme', props.theme)
}

watch(() => props.telegram, startAnimation, { immediate: true })
watch(() => props.theme, setTheme)

onMounted(setTheme)
onUnmounted(stopAnimation)
</script>

<template>
  <AppMapFeature ref="featureRef">
    <AppMapLine :coords="coords" />
    <AppMapStyle :renderer="renderTelegram" :telegram="telegram" />
  </AppMapFeature>
</template>
