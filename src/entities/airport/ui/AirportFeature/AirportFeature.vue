<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import type Feature from 'ol/Feature'
import { AppMapFeature } from '@/shared/ui/AppMapFeature'
import { AppMapPoint } from '@/shared/ui/AppMapPoint'
import { AppMapStyle } from '@/shared/ui/AppMapStyle'
import type { Theme, Airport } from '@/shared/model'
import { renderAirport } from '../../lib/renderAirport'

interface AirportFeatureProps {
  airport: Airport
  theme: Theme
  isActive?: boolean
}

const props = defineProps<AirportFeatureProps>()
const featureRef = ref<{ feature: Feature }>()

const setProperties = () => {
  featureRef.value?.feature.set('theme', props.theme)
  featureRef.value?.feature.set('active', props.isActive)
  featureRef.value?.feature.set('airport', props.airport)
}

watch(props, setProperties)
onMounted(setProperties)
</script>

<template>
  <AppMapFeature ref="featureRef">
    <AppMapPoint :coords="props.airport.coords" />
    <AppMapStyle :renderer="renderAirport" />
  </AppMapFeature>
</template>
