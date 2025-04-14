<script lang="ts" setup>
import { TheHeader } from '@/widgets/header'
import './App.scss'
</script>

<template>
  <div class="App">
    <TheHeader />
    <main class="App__main">
      <RouterView />
    </main>
  </div>
</template>
