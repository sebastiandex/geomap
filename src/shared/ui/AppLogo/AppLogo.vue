<script lang="ts" setup>
import { computed } from 'vue'
import LogoLight from './logo-light.svg'
import LogoDark from './logo-dark.svg'
import './AppLogo.scss'

interface AppLogoProps {
  variant?: 'light' | 'dark'
}

const props = withDefaults(defineProps<AppLogoProps>(), {
  variant: 'light',
})

const logoPath = computed(() => {
  return props.variant === 'light' ? LogoLight : LogoDark
})
</script>

<template>
  <RouterLink to="/" class="AppLogo">
    <img :src="logoPath" alt="zit" class="AppLogo__image" />
    <p class="AppLogo__text">ГЕОКАРТА</p>
  </RouterLink>
</template>
