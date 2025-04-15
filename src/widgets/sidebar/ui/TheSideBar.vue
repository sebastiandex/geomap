<script lang="ts" setup>
import { TelegramList } from '@/entities/telegram'
import { useTelegramStore } from '@/entities/telegram'
// import { AppDatePicker } from '@/shared/ui/AppDatePicker'
import { playAutoSelect } from '@/entities/airport/lib/helpers'
import './TheSideBar.scss'

const store = useTelegramStore()
playAutoSelect()
</script>

<template>
  <aside class="TheSideBar">
    <div class="TheSideBar__header">
      <div class="TheSideBar__title">Телеграммы</div>
      <!-- <AppDatePicker v-model="store.date" /> -->
      <button
        class="TheSideBar__button"
        type="button"
        @click="!store.autoRunIOn ? playAutoSelect() : (store.autoRunIOn = false)"
      >
        {{ store.autoRunIOn ? 'PAUSE' : 'PLAY' }}
      </button>
    </div>
    <div class="TheSideBar__routes">
      <TelegramList />
    </div>
  </aside>
</template>
