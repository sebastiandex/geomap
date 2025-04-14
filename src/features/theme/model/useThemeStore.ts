import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Theme } from '@/shared/model'

export const useThemeStore = defineStore('theme', () => {
  const initialTheme = (localStorage.getItem('theme') as Theme) || 'light'
  const theme = ref<Theme>(initialTheme)

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    const oldTheme = newTheme === 'light' ? 'dark' : 'light'
    document.body.classList.add(newTheme)
    document.body.classList.remove(oldTheme)
    localStorage.setItem('theme', newTheme)
  }

  setTheme(initialTheme)

  return { theme, setTheme }
})
