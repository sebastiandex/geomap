<script lang="ts" setup>
import { computed } from 'vue'
import { fromLonLat } from 'ol/proj'
import { useThemeStore } from '@/features/theme'
import { AirportFeature } from '@/entities/airport'
import { useTelegramStore, TelegramFeature } from '@/entities/telegram'
import { getAirportsFromTelegrams } from '@/entities/airport'
import { AppMap } from '@/shared/ui/AppMap'
import { AppMapView } from '@/shared/ui/AppMapView'
import { AppMapTileLayer } from '@/shared/ui/AppMapTileLayer'
import { AppMapXYZ } from '@/shared/ui/AppMapXYZ'
import { AppMapVectorLayer } from '@/shared/ui/AppMapVectorLayer'
import { AppMapVectorSource } from '@/shared/ui/AppMapVectorSource'
import type { Airport } from '@/shared/model'
import './TheMap.scss'

const tileUrls = {
  light: import.meta.env.VITE_TILE_LIGHT_URL,
  dark: import.meta.env.VITE_TILE_DARK_URL,
}

const themeStore = useThemeStore()
const telegramStore = useTelegramStore()
const sourceUrl = computed(() => tileUrls[themeStore.theme])
const airports = computed(() => getAirportsFromTelegrams(telegramStore.telegrams))
const store = useTelegramStore()
const checkActive = (airport: Airport) => {
  const { selected } = telegramStore
  return selected?.from.name === airport.name || selected?.to.name === airport.name
}
</script>

<template>
  <AppMap class="TheMap" @click="store.autoRunIOn = false" @wheel="store.autoRunIOn = false">
    <AppMapView :center="fromLonLat([88, 54])" :zoom="4" />
    <AppMapTileLayer>
      <AppMapXYZ :url="sourceUrl" />
    </AppMapTileLayer>
    <AppMapVectorLayer>
      <AppMapVectorSource>
        <AirportFeature
          v-for="airport in airports"
          :key="airport.name"
          :airport="airport"
          :theme="themeStore.theme"
          :is-active="checkActive(airport)"
        />
      </AppMapVectorSource>
    </AppMapVectorLayer>
    <AppMapVectorLayer
      v-for="telegram in telegramStore.active"
      :key="telegram.id"
      :telegram="telegram"
    >
      <AppMapVectorSource>
        <TelegramFeature :telegram="telegram" :theme="themeStore.theme" />
      </AppMapVectorSource>
    </AppMapVectorLayer>
  </AppMap>
</template>
