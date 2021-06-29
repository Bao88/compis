<template>
  <div class="p-5 m-0 w-full">
    <!-- Banner -->
    <div
      class="compis-bg-main-color h-40 flex justify-center items-center text-white"
    >
      Salg på sko!
    </div>

    <div class="p-4 text-center capitalize text-lg">
      <h3>{{ productType }}</h3>
      <p class="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tellus orci ac
        auctor augue mauris. Mauris sit amet massa vitae tortor.
      </p>
    </div>

    <!-- Filter -->
    <div>
      <img src="" alt="" />
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { appStore } from '../store/store'

/* Components */

// Interfaces and classes

export default defineComponent({
  name: 'Product',
  components: {},
  setup() {
    const productType = computed(() => appStore.getProductType())

    return { productType }
  },
})
</script>

<style scoped></style>
