import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Telegram } from '@/shared/model'
import { mockData } from './mocks_first_part4'

export const useTelegramStore = defineStore('telegram', () => {
  const selected = ref<Telegram>()
  const active = ref<Telegram[]>([])
  const autoRunIOn = ref<boolean>(true)
  const date = ref<string>(new Date().toString())
  const telegrams = ref<Telegram[]>(mockData)

  const setSelected = (telegram: Telegram) => {
    selected.value = telegram
  }
  const addActive = (telegram: Telegram) => {
    const exists = active.value.find((t) => t.id === telegram.id)
    if (!exists) {
      active.value.push(telegram)
    }
  }
  const removeActive = (id: number) => {
    active.value = active.value.filter((item) => item.id !== id)
  }
  const shiftArray = () => {
    const telegramsCopy = [...telegrams.value]
    telegrams.value = telegramsCopy.splice(0, 1)
  }
  const disableAutoPlay = () => {
    autoRunIOn.value = false
  }

  watch(date, () => (selected.value = undefined))

  return {
    date,
    telegrams,
    selected,
    active,
    setSelected,
    addActive,
    removeActive,
    autoRunIOn,
    shiftArray,
    disableAutoPlay,
  }
})
