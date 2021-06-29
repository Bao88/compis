<template>
  <div class="p-0 m-0 w-full">
    <form></form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appStore } from '../store/store'

export default defineComponent({
  name: 'Admin',
  setup() {
    appStore
    return {}
  },
})
</script>

<style scoped></style>
