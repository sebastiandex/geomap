<script lang="ts" setup>
import ArrowRight from '@/shared/ui/icons/IconArrowRight.vue'
import type { Telegram, TelegramType } from '@/shared/model'
import { computed } from 'vue'
import './TelegramItem.scss'
import defaultAirportImage from '/airportLogo/unknown.svg'
interface TelegramItemProps {
  telegram: Telegram
  isActive?: boolean
}

const props = defineProps<TelegramItemProps>()
// const getTime = (date: string) => {
//   const time = new Date(date)
//   const hours = (time.getHours() < 10 ? '0' : '') + time.getHours()
//   const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
//   const seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds()
//   return `${hours + ':' + minutes + ':' + seconds}`
// }

const imagePath = computed(() => {
  return `./airportLogo/${props.telegram.iata}.svg`
})

const codeColors: Record<TelegramType, string> = {
  PNL: 'lightBlue',
  PTM: 'blue',
  MVT: 'purple',
  PSM: 'orange',
  ADL: 'adl',
  LDM: 'ldm',
  BSM: 'bsm',
  PRL: 'prl',
  CRM: 'crm',
}
</script>

<template>
  <button type="button" class="TelegramItem" :class="{ TelegramItem_active: props.isActive }">
    <div :class="['TelegramItem__type', `TelegramItem__type_${codeColors[props.telegram.type]}`]">
      {{ props.telegram.type }}
    </div>
    <div class="TelegramItem__code">
      {{ props.telegram.from.name }}
    </div>
    <ArrowRight class="TelegramItem__arrow" />
    <template v-if="Array.isArray(props.telegram.to)">
      <div v-for="(item, idx) in props.telegram.to" :key="idx" class="TelegramItem__code">
        {{ item.name }}
      </div>
    </template>
    <div v-else class="TelegramItem__code">
      {{ props.telegram.to.name }}
    </div>
    <!-- <div class="TelegramItem__time">
      {{ getTime(props.telegram.datetime) }}
    </div> -->
    <div class="TelegramItem__iata">
      <img :src="imagePath" @error="imagePath = defaultAirportImage" />
    </div>
  </button>
</template>
