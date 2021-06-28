<template>
  <div class="p-5 m-0 w-full">
    <div class="p-4 text-center text-sm">
      Free delivery on everything!
    </div>

    <BoxComponent :data="content[0]" />
    <BoxComponent :data="content[1]" class="my-5" />

    <!-- Slider -->
    <SliderComponent />

    <BoxComponent :data="content[2]" class="my-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { appStore } from '../store/store'

/* Components */
import BoxComponent from '../components/BoxComponent.vue'
import SliderComponent from '../components/SliderComponent.vue'

// Interfaces and classes
import { BoxComponentData } from '../structure/models'

export default defineComponent({
  name: 'Home',
  components: { BoxComponent, SliderComponent },
  setup() {
    appStore

    const content: BoxComponentData[] = [
      {
        title: 'Shoe sale',
        subtitle: '50% off',
        imgUrl: 'https://source.unsplash.com/1kOIl9vu4cY/640x640',
        alt: 'A pair of colourful shoes',
      },
      {
        title: 'Comfortable',
        subtitle: 'clothes to move in',
        imgUrl: 'https://source.unsplash.com/vBW5RylIdTU/640x640',
        alt: 'A woman dancing ballet and a man sitting on a summer chair',
      },
      {
        title: 'Good for enviroment',
        subtitle: '',
        imgUrl: 'https://source.unsplash.com/1Pgq9ZpIatI/640x640',
        alt: 'A brown bag made of enviromental friendly material',
      },
    ]

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

    const show = ref(true)
    setTimeout(() => {
      show.value = false
    }, 2000)
    return {
      content,
      show,
    }
  },
})
</script>

<style scoped></style>
