<template>
  <div class="w-full" :class="{ 'h-40': compact, 'h-64': !compact }">
    <div class="w-full font-bold h-12">{{ texts }}</div>
    <carousel class="" :items-to-show="itemsToShow">
      <slide v-for="(item, itemIndex) in items" :key="itemIndex">
        <div
          class="cursor-pointer"
          @mousedown="mouseDown"
          @mouseup="selectItem(item)"
        >
          <img
            :class="{
              'h-20 w-20 rounded-full': compact,
              'h-40 w-40': !compact,
            }"
            :src="'https://source.unsplash.com/160x160/?clothing,' + item"
            alt="Random picture from unsplash"
            loading="lazy"
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
import { productTypes } from '../constants'

import { appStore } from '../store/store'

// https://vuejsexamples.com/modern-lightweight-vue-3-carousel-component/
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import router from '../router'

export default defineComponent({
  name: 'Slider Component',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    compact: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isCompact = props.compact
    const texts = props.text
    let time: number

    // Random strings so we can query different images.
    let items = productTypes

    if (isCompact) items = items.reverse()

    const itemsToShow = ref(8)
    const sizes = {
      small: isCompact ? 4 : 2,
      medium: isCompact ? 6 : 3,
      large: isCompact ? 8 : 4,
      xlarge: isCompact ? 10 : 6,
    }

    const setItemsToShow = () => {
      if (screen.isXLarge()) itemsToShow.value = sizes.xlarge
      if (screen.isLarge()) itemsToShow.value = sizes.large
      if (screen.isMedium()) itemsToShow.value = sizes.medium
      if (screen.isSmall()) itemsToShow.value = sizes.small
    }

    // Run once
    setItemsToShow()

    window.addEventListener('resize', () => {
      setItemsToShow()
    })

    // Methods called from template
    // Calculate how much time have passed between mousedown adn mouseup event
    // If the time is less than 50 ms then recognize it as "click"
    // or else we will see it as a dragging motion
    const selectItem = (type: string) => {
      const timePassed = Date.now() - time
      if (timePassed < 50) {
        appStore.setProductType(type)
        router.push('/products')
      }
    }

    // Set the time when mouse was held down.
    const mouseDown = () => {
      time = Date.now()
    }

    return {
      // Variables
      items,
      itemsToShow,
      texts,
      // Events
      selectItem,
      mouseDown,
    }
  },
})
</script>

<style scoped></style>
