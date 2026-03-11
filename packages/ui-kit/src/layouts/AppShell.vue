<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineProps<{
  appName?: string;
}>();

const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark-mode', isDark.value);
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}

onMounted(() => {
  const saved = localStorage.getItem('theme');
  isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark-mode', isDark.value);
});
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface-0 text-surface-900">
    <header class="border-b border-surface-200 bg-surface-0 px-6 py-4">
      <div class="flex items-center justify-between">
        <h1 class="text-xl font-semibold" style="color: var(--p-primary-500)">{{ appName ?? 'US Telecoms' }} with Brand Color</h1>
        <div class="flex items-center gap-3">
          <button
            @click="toggleTheme"
            class="rounded-lg border border-surface-300 p-2 transition-colors hover:bg-surface-100"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
          <slot name="header-actions" />
        </div>
      </div>
    </header>

    <main class="flex-1 p-6">
      <slot />
    </main>

    <footer class="border-t border-surface-200 bg-surface-50 px-6 py-4 text-center text-sm text-surface-500">
      <slot name="footer">
        &copy; {{ new Date().getFullYear() }} US Telecoms
      </slot>
    </footer>
  </div>
</template>
