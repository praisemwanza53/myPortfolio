<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-200 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black">
    <Header />
    <Hero />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import { useTheme } from './composables/useTheme'

// Initialize theme
const { isDark, toggleTheme } = useTheme()
</script>
