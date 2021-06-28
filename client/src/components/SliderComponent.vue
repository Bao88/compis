<template>
  <!-- <div class="relative flex w-full h-40 overflow-hidden">
    <div class="w-full font-bold h-12">For deg</div>
    <div class="absolute mt-12 flex w-full justify-between">
      <div class="w-1/4" v-for="(item, itemIndex) in items" :key="itemIndex">
        <img
          class="h-20 w-20 rounded-full"
          :src="'https://source.unsplash.com/160x160/?clothing,' + item"
          alt="Random picture from unsplash"
        />

        <div class="capitalize text-sm w-full text-center">{{ item }}</div>
      </div>
    </div>
  </div> -->
  <div class="w-full h-40">
    <div class="w-full font-bold h-12">For deg</div>
    <carousel class="" :items-to-show="itemsToShow">
      <slide v-for="(item, itemIndex) in items" :key="itemIndex">
        <div class="">
          <img
            class="h-20 w-20 rounded-full"
            :src="'https://source.unsplash.com/160x160/?clothing,' + item"
            alt="Random picture from unsplash"
          />

          <div class="capitalize text-sm w-full text-center">{{ item }}</div>
        </div>
      </slide>

      <template>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { screen } from '../utilities'

// https://vuejsexamples.com/modern-lightweight-vue-3-carousel-component/
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: 'Slider Component',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const items = [
      'shirt',
      'dress',
      'shoes',
      'suit',
      'fashion',
      'training',
      'belt',
      'hat',
      'glasses',
      'sweater',
      'pants',
      'shoe',
    ]

    console.log(window.innerWidth)

    const itemsToShow = ref(8)

    const setItemsToShow = () => {
      if (screen.isXLarge()) itemsToShow.value = 10
      if (screen.isLarge()) itemsToShow.value = 8
      if (screen.isMedium()) itemsToShow.value = 6
      if (screen.isSmall()) itemsToShow.value = 4
    }

    // Run once
    setItemsToShow()

    window.addEventListener('resize', () => {
      setItemsToShow()
    })

    return { items, itemsToShow }
  },
})
</script>

<style scoped></style>
