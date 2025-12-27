import { ref, onMounted, watch } from 'vue'

export function useTheme() {
    const isDark = ref(false)

    // Initialize theme from localStorage or system preference
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme')

        if (savedTheme) {
            isDark.value = savedTheme === 'dark'
        } else {
            // Check system preference
            isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
        }

        applyTheme()
    }

    // Apply theme to document
    const applyTheme = () => {
        if (isDark.value) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    // Toggle theme
    const toggleTheme = () => {
        isDark.value = !isDark.value
    }

    // Watch for theme changes and update localStorage
    watch(isDark, (newValue) => {
        localStorage.setItem('theme', newValue ? 'dark' : 'light')
        applyTheme()
    })

    onMounted(() => {
        initTheme()
    })

    return {
        isDark,
        toggleTheme
    }
}
