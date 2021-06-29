<template>
  <div class="p-5 m-0 w-full">
    <div class="p-4 text-center text-sm">
      Free delivery on everything!
    </div>

    <BoxComponent :data="content[0]" />
    <BoxComponent :data="content[1]" class="my-5" />

    <!-- Slider -->
    <SliderComponent :compact="true" :text="'For deg'" />

    <BoxComponent :data="content[2]" class="my-5" />

    <SliderComponent :compact="false" :text="'Populære nå'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
        srcset: [
          ' https://source.unsplash.com/1kOIl9vu4cY/1280x1280',
          ' https://source.unsplash.com/1kOIl9vu4cY/1600x1600',
        ],
      },
      {
        title: 'Comfortable',
        subtitle: 'clothes to move in',
        imgUrl: 'https://source.unsplash.com/vBW5RylIdTU/640x640',
        alt: 'A woman dancing ballet and a man sitting on a summer chair',
        srcset: [
          'https://source.unsplash.com/vBW5RylIdTU/1280x1280',
          'https://source.unsplash.com/vBW5RylIdTU/1600x1600',
        ],
      },
      {
        title: 'Good for enviroment',
        subtitle: '',
        imgUrl: 'https://source.unsplash.com/1Pgq9ZpIatI/640x640',
        alt: 'A brown bag made of enviromental friendly material',
        srcset: [
          'https://source.unsplash.com/1Pgq9ZpIatI/1280x1280',
          'https://source.unsplash.com/1Pgq9ZpIatI/1600x1600',
        ],
      },
    ]

    return {
      content,
    }
  },
})
</script>

<style scoped></style>
