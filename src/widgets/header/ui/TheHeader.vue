<script lang="ts" setup>
import { ThemeSwitch, useThemeStore } from '@/features/theme'
import { AppHeader } from '@/shared/ui/AppHeader'
import { AppLogo } from '@/shared/ui/AppLogo'

const themeStore = useThemeStore()
</script>

<template>
  <AppHeader>
    <AppLogo :variant="themeStore.theme" />
    <ThemeSwitch />
  </AppHeader>
</template>
