<script lang="ts" setup>
import { inject, onUnmounted, computed, watch } from 'vue'
import Point from 'ol/geom/Point'
import type { Coordinate } from 'ol/coordinate'
import { featureKey } from '@/shared/ui/AppMapFeature'

interface AppMapPointProps {
  coords: Coordinate
}

const props = defineProps<AppMapPointProps>()

const feature = inject(featureKey)
const point = computed(() => new Point(props.coords))

const setGeometry = () => {
  feature?.setGeometry(point.value)
}

watch(point, setGeometry, { immediate: true })

onUnmounted(() => {
  feature?.setGeometry(undefined)
})
</script>
