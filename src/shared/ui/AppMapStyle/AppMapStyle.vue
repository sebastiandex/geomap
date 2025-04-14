<script lang="ts" setup>
import { inject, onMounted, onUnmounted, watch } from 'vue'
import Style from 'ol/style/Style'
import type { RenderFunction } from 'ol/style/Style'
import { featureKey } from '@/shared/ui/AppMapFeature'

interface AppMapStyleProps {
  renderer?: RenderFunction | null
}

const props = withDefaults(defineProps<AppMapStyleProps>(), { renderer: null })
const feature = inject(featureKey)
const style = new Style()

const setRenderer = () => {
  style.setRenderer(props.renderer)
}

watch(() => props.renderer, setRenderer, { immediate: true })

onMounted(() => {
  feature?.setStyle(style)
})

onUnmounted(() => {
  feature?.setStyle(undefined)
})
</script>

<template>
  <slot />
</template>
