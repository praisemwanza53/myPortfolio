<template>
  <section class="container mx-auto px-6 py-12 md:py-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
      <!-- Left Column: Name and Social -->
      <div class="lg:col-span-4 animate-slide-up">
        <!-- Name -->
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-gray-900 dark:text-white">
          Praise
          <br />
          Mwanza<span class="text-yellow-500 dark:text-yellow-400">.</span>
        </h1>
        
        <!-- Accent Line -->
        <div class="w-24 h-1 bg-yellow-500 dark:bg-yellow-400 mb-8"></div>

        <!-- Social Links -->
        <div class="flex items-center gap-6">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            :aria-label="social.name"
            class="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component :is="social.icon" />
          </a>
        </div>
      </div>

      <!-- Center Column: Image -->
      <div class="lg:col-span-4 flex justify-center">
        <div class="relative">
          <div class="absolute inset-0 bg-yellow-400/20 dark:bg-yellow-400/10 blur-3xl rounded-full"></div>
          <img
            src="/profile.png"
            alt="Praise Mwanza"
            class="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-2xl animate-float"
          />
        </div>
      </div>

      <!-- Right Column: Description -->
      <div class="lg:col-span-4 space-y-6 animate-slide-up">
        <p class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">
          Introducing
        </p>
        
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white leading-tight">
          Mechatronics Engineer and AI Enthusiast,
          <br />
          <span class="text-yellow-600 dark:text-yellow-400">
            Cofounder and COO of Uniplexity.
          </span>
        </h2>
        
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm the most passionate Engineer you will ever get to work with. If you have a great project that needs some amazing skills, I'm your guy.
        </p>

        <a href="#story" class="btn-primary inline-flex items-center group">
          My story
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, h } from 'vue'

const socials = ref([
  {
    name: 'Email',
    url: 'mailto:mwanzapraise700@gmail.com',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-6 h-6',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
      })
    ])
  },
  {
    name: 'Phone',
    url: 'tel:+260970397095',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-6 h-6',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
      })
    ])
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/praise-mwanza-615859343',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-6 h-6',
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
      })
    ])
  },
  {
    name: 'GitHub',
    url: 'https://github.com/praisemwanza53',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-6 h-6',
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
      })
    ])
  },
  {
    name: 'GrabCAD',
    url: 'https://grabcad.com/praise.mwanza-3',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-6 h-6',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
      })
    ])
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@mwanzapraise700',
    icon: () => h('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      class: 'w-6 h-6',
      fill: 'currentColor',
      viewBox: '0 0 24 24'
    }, [
      h('path', {
        d: 'M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z'
      })
    ])
  }
])
</script>
