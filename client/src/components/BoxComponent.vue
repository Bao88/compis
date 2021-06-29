<template>
  <div>
    <div class="pt-100 sm:pt-70 relative w-full compis-bg-main-color">
      <img
        v-if="data.imgUrl"
        class="absolute top-0 left-0 object-cover w-full h-full"
        :src="data.imgUrl"
        alt="compis box component image"
        loading="lazy"
      />
      <div
        class="absolute top-0 left-0 z-10 p-2 text-center flex justify-center flex-wrap w-full h-full"
      >
        <div class="w-full border-2 flex justify-center items-end">
          <div class="font-semibold w-full text-white text-2xl">
            {{ data.title }}
            <div
              class="w-full text-white text-18 md:text-xl xl:text-18 2xl:text-5xl px-10 mt-6 circular-light"
            >
              {{ data.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

// Interfaces and classes
import { BoxComponentData } from '../structure/models'

export default defineComponent({
  name: 'Box Component',
  props: {
    data: {
      type: Object as PropType<BoxComponentData>,
      required: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped></style>
