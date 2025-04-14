<script lang="ts" setup>
import { computed } from 'vue'
import { AppSwitch } from '@/shared/ui/AppSwitch'
import { useThemeStore } from '../../model/useThemeStore'
import './ThemeSwitch.scss'

const store = useThemeStore()

const active = computed({
  get() {
    return store.theme === 'dark'
  },
  set(value: boolean) {
    store.setTheme(value ? 'dark' : 'light')
  },
})
</script>

<template>
  <AppSwitch v-model="active" class="ThemeSwitch" inactive-text="Светлая" active-text="Тёмная" />
</template>
