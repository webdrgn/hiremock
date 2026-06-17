<template>
  <div
    class="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-[560px] animate-screen-enter flex-col items-center justify-center gap-4 p-2 sm:p-3"
  >
    <div class="flex w-full flex-col items-center gap-3">
      <div
        class="w-full max-w-28 animate-art-float border-4 border-black bg-slate-800 p-2 [image-rendering:pixelated]"
      >
        <img src="/assets/sprites/user.svg" alt="" class="block w-full" />
      </div>

      <p class="readable-caption m-0 text-center text-emerald-400">
        Герман · senior frontend · ментор
      </p>
    </div>

    <div
      :key="introStep"
      class="w-full animate-panel-rise border-4 border-black bg-slate-900 p-4"
    >
      <p class="readable-copy m-0 text-balance text-center text-slate-100">
        <template v-for="(segment, segmentIndex) in currentSlide.segments" :key="segmentIndex">
          <span :class="segment.accent ? 'text-emerald-400' : ''">{{ segment.text }}</span>
        </template>
      </p>
    </div>

    <div class="flex items-center gap-2" aria-hidden="true">
      <span
        v-for="slideIndex in introSlides.length"
        :key="slideIndex"
        class="size-2.5 border-2 border-black transition-colors"
        :class="
          slideIndex - 1 === introStep
            ? 'bg-emerald-400 shadow-[inset_0_0_0_1px_#059669]'
            : slideIndex - 1 < introStep
              ? 'bg-emerald-600/60'
              : 'bg-slate-700'
        "
      />
    </div>

    <div class="flex w-full flex-col items-center gap-3">
      <PixelButton
        :label="isLastSlide ? 'ГОТОВ' : 'ДАЛЕЕ'"
        :color="isLastSlide ? '#10b981' : '#2563eb'"
        :ink="isLastSlide ? '#001902' : '#ffffff'"
        :show-play-mark="false"
        @click="advanceIntro"
      >
        <template #icon>
          <i
            :class="isLastSlide ? 'pi pi-check' : 'pi pi-arrow-right'"
            class="text-[10px]"
            aria-hidden="true"
          />
        </template>
      </PixelButton>
    </div>

    <p class="game-caption m-0 text-center">
      шаг {{ introStep + 1 }} / {{ introSlides.length }}
    </p>
  </div>
</template>

<script setup>
const { toNextScreen } = useScreenNavigate()

const introSlides = [
  {
    segments: [
      { text: 'Привет! Я Герман – senior frontend-разработчик в мировых tech-компаниях и ментор. Помогаю войти в IT-разработку с 0 и получить первую работу на удалёнке. ' },
      { text: 'За плечами — десятки собеседований и учеников, которые получили высокие офферы.', accent: true },
    ],
  },
  {
    segments: [
      { text: 'Слушай внимательно. Сейчас ты пройдёшь собеседование, которое отделяет тех, кого берут, от тех, кому говорят ' },
      { text: '«мы вам перезвоним».', accent: true },
    ],
  },
  {
    segments: [
      { text: 'Девять из десяти заваливают собес не потому что мало знают. А потому что не умеют это показать за 20 минут. ' },
      { text: 'Проверим тебя. Ты — кандидат. Реальный HR напротив, как на реальном созвоне.', accent: true },
    ],
  },
  {
    segments: [
      { text: 'А в конце я разберу каждый твой ответ — где сработал, а где бы провалился. Без этого разбора ты так и будешь гадать, почему после собесов тишина. ' },
      { text: 'Проверим, как ты держишься?', accent: true },
    ],
  },
]

const introStep = ref(0)

const currentSlide = computed(() => introSlides[introStep.value])
const isLastSlide = computed(() => introStep.value === introSlides.length - 1)

const advanceIntro = () => {
  if (isLastSlide.value) {
    toNextScreen()
    return
  }

  introStep.value++
}

useHead({
  title: 'Вступление',
})
</script>
