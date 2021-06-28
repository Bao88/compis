<template>
  <div style="width: 400px;">
    <div
      class="w-full flex justify-center"
      style="height: 230px;"
      :class="imgData.css"
    >
      <img class="w-1/2 p-4" :src="imgData.src" alt="compis icon" />
    </div>

    <div
      class="w-full uppercase"
      style="font-size: 12px; margin-top: 15px; margin-bottom: 5px; letter-spacing: 0.5px;"
    >
      {{ getDate(data.date) }}
    </div>
    <div class="w-4/5 pop-text" style="font-size: 22px; line-height: 1.3;">
      {{ data.title }}
    </div>

    <div
      v-if="data.description"
      class="w-full overflow-ellipsis overflow-hidden circular-light"
      style="margin-top: 15px;"
    >
      {{ data.description }}
    </div>

    <div class="w-full text-left">
      <a
        class=""
        :href="data.pageurl"
        :target="data.pageurl.substring('#/timeline') ? '' : '_blank'"
      >
        <button
          class="cursor-pointer opacity-50"
          style="margin-top: 25px; font-size: 14px;"
        >
          Read more
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getRandomIcon, getDate } from '../utilities'

export default defineComponent({
  name: 'Card Component',
  props: {
    data: {
      type: Object,
    },
  },
  setup(props) {
    const imgData = getRandomIcon()
    return { props, imgData, getDate }
  },
})
</script>
