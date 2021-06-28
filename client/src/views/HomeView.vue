<template>
  <div class="pt-16 p-5 m-0 w-full">
    <div class="p-4 text-center">
      Random texts scrolling
    </div>
    <!-- Section 1 -->
    <div
      :class="getClass"
      class="relative square flex justify-center items-center"
    >
      <img
        id="home-main-background"
        class="absolute top-0 left-0 object-cover w-full h-full"
        src="https://picsum.photos/400"
        alt="compis home image"
      />
      <div class="z-10 p-2 text-center flex justify-center flex-wrap">
        <div class="w-full sm:w-2/3 flex flex-col justify-center">
          <div
            class="font-semibold w-full text-white text-2xl md:text-xl xl:text-hd_section_1_title xl:tracking-1 2xl:text-5xl pt-10 px-10"
          >
            {{ 'Middle title' }}
          </div>
          <div
            class="w-full text-white text-18 md:text-xl xl:text-18 2xl:text-5xl px-10 mt-6 circular-light"
          >
            {{ 'subtitle' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appStore } from '../store/store'

/* Components */
/* import CardComponent from '../components/CardComponent.vue' */

export default defineComponent({
  name: 'Home',
  /*  components: { CardComponent }, */
  setup() {
    appStore

    const getClass = () => {
      return 'home-section-1'
    }

    /* Scale the background based on the user's scroll to create an interactive effect on the backgrounds */
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.offsetHeight
      const background1 = document.getElementById('home-main-background')
      const background2 = document.getElementById('home-second-background')

      if (!background1 || !background2) return
      const scrolled = window.scrollY / (windowHeight - window.innerHeight) + 1
      const transformValue = 'scale(' + scrolled + ')'

      // Scaling
      background1.style.webkitTransform = transformValue
      background1.style.transform = transformValue

      background2.style.webkitTransform = transformValue
      background2.style.transform = transformValue
    })

    return {
      getClass,
    }
  },
})
</script>

<style scoped>
.square {
}
</style>
