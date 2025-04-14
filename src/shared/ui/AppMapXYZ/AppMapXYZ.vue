<script lang="ts" setup>
import { inject, onMounted, onUnmounted, watch } from 'vue'
import XYZ from 'ol/source/XYZ'
import TileLayer from 'ol/layer/Tile'
import { tileLayerKey } from '@/shared/ui/AppMapTileLayer'

interface AppMapXYZProps {
  url: string
}

const props = defineProps<AppMapXYZProps>()
const tileLayer = inject<TileLayer<XYZ>>(tileLayerKey)
const source = new XYZ()

const setUrl = () => {
  source.setUrl(props.url)
}

watch(() => props.url, setUrl, { immediate: true })

onMounted(() => {
  tileLayer?.setSource(source)
})

onUnmounted(() => {
  tileLayer?.setSource(null)
})
</script>
