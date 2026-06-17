<template>
  <div
    class="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[560px] animate-screen-enter flex-col items-center justify-center gap-4 p-2 sm:p-3"
  >
    <h1 class="game-title m-0 animate-pulse text-balance text-center text-slate-100">
      Подключение к встрече
    </h1>

    <PixelLoader />

    <p class="game-caption m-0 text-balance text-center text-slate-400">
      Zoom · ожидание интервьюера...
    </p>
  </div>
</template>

<script setup>
const { toNextScreen } = useScreenNavigate();

useHead({
  title: 'Подключение к встрече'
})

onMounted(() => {
  setTimeout(toNextScreen, 3000);
});
</script>
