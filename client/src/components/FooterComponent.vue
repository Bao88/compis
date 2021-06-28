-<template>
  <div
    class="footer mt-32 w-full flex flex-wrap items-center justify-center text-white"
  >
    <div class="flex md:w-2/3 justify-center">
      <!--  <img
        class="footer-logo mx-4 cursor-pointer"
        :src="footer.image"
        alt="The Research Council of Norway logo"
        @click="imageClick"
      /> -->

      <div class="text-black md:w-4/6 footer-text">
        {{ 'footer.title' }}
        Images are from
        <a href="https://unsplash.com/">https://unsplash.com/</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appStore } from '../store/store'

export default defineComponent({
  name: 'Footer',
  setup() {
    appStore
    const imageClick = () => {
      const url =
        'https://www.forskningsradet.no/en/about-the-research-council/programmes/FINNUT/'

      const win = window.open(url, '_blank')
      if (win) win.focus()
    }
    return { imageClick }
  },
})
</script>

<style scoped>
.footer {
  height: 22vh;
}

.footer-logo {
  height: 20vh;
}

.footer-text {
  height: 20vh;
  display: flex;
  align-items: flex-end;
}
</style>
