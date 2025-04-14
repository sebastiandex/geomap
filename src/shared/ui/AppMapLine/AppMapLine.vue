<script lang="ts" setup>
import { computed, inject, onUnmounted, watch } from 'vue'
import { LineString } from 'ol/geom'
import type { Coordinate } from 'ol/coordinate'
import { featureKey } from '@/shared/ui/AppMapFeature'

interface AppMapLineProps {
  coords: Coordinate
}

const props = defineProps<AppMapLineProps>()
const feature = inject(featureKey)
const line = computed(() => new LineString(props.coords))

const applyGeometry = () => {
  line.value.transform('EPSG:4326', 'EPSG:3857')
  feature?.setGeometry(line.value)
}

const removeGeometry = () => {
  feature?.setGeometry(undefined)
}

watch(line, applyGeometry, { immediate: true })
onUnmounted(removeGeometry)
</script>
