<template>
  <header class="container mx-auto px-6 py-8">
    <div class="flex items-center justify-between">
      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <div v-for="link in navLinks" :key="link.name" class="relative">
          <template v-if="link.hasDropdown">
            <button
              @click="toggleDropdown(link.name)"
              :class="['nav-link flex items-center gap-1', { 'nav-link-active': link.active }]"
            >
              {{ link.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-if="dropdownOpen[link.name]"
              class="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
            >
              <a
                v-for="item in link.dropdownItems"
                :key="item.name"
                :href="item.href"
                class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                {{ item.name }}
              </a>
            </div>
          </template>
          <template v-else>
            <a
              :href="link.href"
              :class="['nav-link', { 'nav-link-active': link.active }]"
            >
              {{ link.name }}
              <span
                v-if="link.active"
                class="absolute -bottom-1 left-0 w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full"
              ></span>
            </a>
          </template>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-800/50 hover:bg-white/30 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-all duration-300"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-900 dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Theme Toggle -->
      <ThemeToggle />
    </div>

    <!-- Mobile Navigation -->
    <nav
      v-if="isMenuOpen"
      class="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4"
    >
      <div class="flex flex-col gap-4">
        <div v-for="link in navLinks" :key="link.name">
          <template v-if="link.hasDropdown">
            <button
              @click="toggleDropdown(link.name)"
              class="nav-link-mobile flex items-center justify-between w-full"
            >
              {{ link.name }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              v-if="dropdownOpen[link.name]"
              class="ml-4 mt-2 space-y-2"
            >
              <a
                v-for="item in link.dropdownItems"
                :key="item.name"
                :href="item.href"
                @click="isMenuOpen = false"
                class="nav-link-mobile block"
              >
                {{ item.name }}
              </a>
            </div>
          </template>
          <template v-else>
            <a
              :href="link.href"
              @click="isMenuOpen = false"
              :class="['nav-link-mobile', { 'nav-link-active-mobile': link.active }]"
            >
              {{ link.name }}
            </a>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isMenuOpen = ref(false)
const dropdownOpen = ref({})

const toggleDropdown = (name) => {
  dropdownOpen.value = { ...dropdownOpen.value, [name]: !dropdownOpen.value[name] }
}

const navLinks = ref([
  { name: 'Services', href: '#services', active: true },
  { name: 'Works', href: '#works', active: false, hasDropdown: true, dropdownItems: [
    { name: 'Professional', href: '#works?filter=professional' },
    { name: 'Fun Time', href: '#works?filter=fun' }
  ] },
  { name: 'Blogs', href: '#blogs', active: false },
  { name: 'Gallery', href: '#gallery', active: false },
])
</script>
