<template>
  <div class="w-full poppin-texts flex flex-col items-center text-18">
    <NavigationComponent class="section-max-width" />
    <router-view class="section-max-width pt-24"></router-view>
    <FooterComponent class="section-max-width" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appStore } from './store/store'
import NavigationComponent from './components/NavigationComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavigationComponent,
    FooterComponent,
  },
  setup() {
    appStore
  },
})
</script>

<style>
.poppin-texts {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}
.section-max-width {
  max-width: 1200px;
}

.section-height--medium {
  min-height: 66vh;
}

.section-container-height--50 {
  min-height: 50%;
}

/* App Colors */
.compis-main-color {
  color: #8fcf69;
}

.compis-bg-main-color {
  background-color: #8fcf69;
}
</style>
