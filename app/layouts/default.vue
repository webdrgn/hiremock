<template>
  <div class="relative min-h-screen w-full py-16 px-4">
    <div class="fixed top-3 right-3 z-20 flex items-center gap-2">
      <a
        href="https://github.com/webdrgn/pixel-resume"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub репозиторий"
        class="inline-flex"
      >
        <Button
          icon="pi pi-github"
          aria-label="GitHub репозиторий"
          class="!size-8 !border-black !bg-slate-800 !text-slate-400 hover:!bg-slate-900 hover:!text-slate-100"
        />
      </a>

      <Button
        label="сброс"
        class="!border-black !bg-slate-800 !px-2.5 !py-2 !text-[10px] !text-slate-400 hover:!bg-slate-900 hover:!text-slate-100"
        @click="handleresetCurrentScreen"
      />
    </div>
    
    <div class="mx-auto w-full max-w-[980px]">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { Button } from 'primevue'
const { resetCurrentScreen } = useScreenNavigate()

const handleresetCurrentScreen = () => {
  resetCurrentScreen()
  navigateTo('/')
}
</script>
