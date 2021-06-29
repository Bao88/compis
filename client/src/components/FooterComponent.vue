-<template>
  <div class="footer w-full flex flex-wrap items-center justify-center">
    <img
      src="../assets/compis_logo.jpg"
      alt="compis logo, consisting of letters that spell compis"
      class="h-20 w-20 cursor-pointer py-2 z-50"
      @click="$router.push('/')"
    />
    <div class="text-center">
      Created by Hoang Bao Ngo
      <div>
        Illustrations from
        <a href="https://unsplash.com/" class="underline">unsplash</a>
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

    return {}
  },
})
</script>

<style scoped></style>
