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
  <div class="w-full" :class="{ 'h-40': compact, 'h-64': !compact }">
    <div class="w-full font-bold h-12">For deg</div>
    <carousel class="" :items-to-show="itemsToShow">
      <slide v-for="(item, itemIndex) in items" :key="itemIndex">
        <div @click="selectItem(item)">
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
    compact: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isCompact = props.compact

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
    const selectItem = (type: string) => {
      appStore.setProductType(type)
      router.push('/products')
    }

    return { items, itemsToShow, selectItem }
  },
})
</script>

<style scoped></style>
