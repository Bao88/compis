<template>
  <div class="relative flex w-full h-40 overflow-hidden">
    <div class="w-full font-bold h-12">For deg</div>
    <div class="absolute mt-12 flex w-full justify-between">
      <!-- TODO: Make it into a slider -->
      <div class="w-1/4" v-for="(item, itemIndex) in items" :key="itemIndex">
        <img
          class="h-20 w-20 rounded-full"
          :src="'https://source.unsplash.com/160x160/?clothing,' + item"
          alt="Random picture from unsplash"
        />

        <div class="capitalize text-sm w-full text-center">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Slider Component',
  setup() {
    const items = [
      'shirt',
      'dress',
      'shoes',
      'suit',
      /*  'fashion',
      'training',
      'belt',
      'hat',
      'glasses',
      'sweater',
      'pants',
      'shoe', */
    ]

    return { items }
  },
})
</script>

<style scoped></style>
