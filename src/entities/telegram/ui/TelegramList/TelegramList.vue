<script lang="ts" setup>
import type { Telegram } from '@/shared/model'
import TelegramItem from '../TelegramItem/TelegramItem.vue'
import { useTelegramStore } from '../../model/useTelegramStore'
import './TelegramList.scss'

const store = useTelegramStore()

const checkActive = (telegram: Telegram) => {
  return store.selected?.id === telegram.id
}

const onClick = (telegram: Telegram) => {
  // store.setSelected(telegram)
  store.addActive(telegram)
}
</script>

<template>
  <div class="TelegramList">
    <TelegramItem
      v-for="telegram in store.telegrams"
      :key="telegram.id"
      class="TelegramList__route"
      :telegram="telegram"
      :is-active="checkActive(telegram)"
      @click="onClick(telegram)"
    />
  </div>
</template>
