<template>
  <div class="p-0 m-0 w-full">
    <!-- Section 1 -->
    <div
      v-if="section1"
      :class="getClass"
      class="relative home-section-1 flex justify-center items-center"
    >
      <img
        id="home-main-background"
        class="absolute top-0 left-0 object-cover w-full h-full"
        style="filter: brightness(75%);"
        :src="section1.image"
        alt="compis home image: School girl studying in a classroom"
      />
      <div class="z-10 p-2 text-center flex justify-center flex-wrap">
        <div class="w-full sm:w-2/3 flex flex-col justify-center">
          <div
            class="font-semibold w-full text-white text-2xl md:text-xl xl:text-hd_section_1_title xl:tracking-1 2xl:text-5xl pt-10 px-10"
          >
            {{ section1.title.slice(0, section1.title.indexOf(' - ')) }}
          </div>
          <div
            class="w-full text-white text-18 md:text-xl xl:text-18 2xl:text-5xl px-10 mt-6 circular-light"
          >
            {{ section1.title.slice(section1.title.indexOf(' - ') + 3) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { appStore } from '../store/store'
import { assetRoot, projectName } from '../constants'
import { ContentType } from '../structure/models'

/* Components */
/* import CardComponent from '../components/CardComponent.vue' */

export default defineComponent({
  name: 'Home',
  /*  components: { CardComponent }, */
  setup() {
    const mainImage = `${assetRoot}/${projectName}/compis-home.jpg`
    const graphic = `${assetRoot}/${projectName}/compisgraphic-3.png`

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
      mainImage,
      graphic,
      getClass,
    }
  },
})
</script>

<style scoped>
.home-section-1 {
  min-height: 85vh;
  /* height: 66vh; */
  overflow: hidden;
}

.home-max-width {
  max-width: 1400px;
}

.home-section-1-button {
  background-color: #2c3e77;
  border-color: #2c3e77;
}

.home-section-1-text {
  position: absolute;
  width: 50vw;
  height: 30vh;
  top: 50%;
  left: 50%;
  margin-left: -25vw;
  margin-top: -15vh;
  vertical-align: middle;
}

.compis-home-graphic {
  max-height: 66vh;
}

.section-1-title-1080 {
  font-size: 2.35rem;
  line-height: 1.35;
}
</style>
