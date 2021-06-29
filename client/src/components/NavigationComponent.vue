-<template>
  <div
    class="fixed top-0 z-20 w-full h-16 bg-white navigation-style flex items-center justify-end"
    style="font-weight: 100;"
  >
    <img
      src="../assets/compis_logo.jpg"
      alt="compis logo, consisting of letters that spell compis"
      class="compis-logo cursor-pointer h-full py-2 z-50"
      @click="selected(-1)"
    />
    <div class="hidden sm:block">
      <template v-for="(nav, index) in navigation">
        <div
          v-if="nav.name === 'Products'"
          class="dropdown relative inline-block"
          :key="index"
        >
          <button class="focus:outline-none  py-2 inline-flex items-center">
            <span class="text-18" style="padding: 0 20px 0 20px;">{{
              nav.name
            }}</span>
          </button>
          <ul
            class="dropdown-menu absolute hidden border text-center"
            style="padding: 10px 0 10px 0"
          >
            <li
              v-for="(productType, productTypeIndex) in nav.children"
              :key="'router-children-' + productTypeIndex"
              class="w-40 py-1 text-18 hover:bg-gray-200"
              @click="selectedProductType(productType)"
            >
              <button class="focus:outline-none capitalize">
                {{ productType }}
              </button>
              <!-- <router-link
                class="hover:text-gray-400 px-4"
                @click="selected(index)"
                :to="children.route"
                >{{ children.name }}</router-link
              > -->
            </li>
          </ul>
        </div>
        <router-link
          v-else
          class="inline-block text-black text-18"
          style="padding: 0 20px 0 20px;"
          :class="{
            'border-b-2': selectedHeader === index,
          }"
          @click="selected(index)"
          :to="nav.route"
          :key="'router-' + index"
          >{{ nav.name }}</router-link
        >
      </template>
    </div>

    <!-- https://css-tricks.com/line-animated-hamburger-menu/ -->
    <button
      id="button-hamburger"
      class="flex menu sm:hidden z-50"
      aria-label="Main Menu"
      @click="toggleOverlay(true)"
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>

    <div
      v-if="showOverlay"
      class="fixed w-screen h-screen top-0 left-0 bg-white flex flex-wrap justify-center align-items items-center"
    >
      <div
        class="absolute w-full flex flex-wrap text-3xl font-semibold text-center navigation-overlay-transition-left"
        :class="{ 'overlay-hide-left': showChildren }"
      >
        <template v-for="(nav, index) in navigation">
          <button
            v-if="nav.name === 'Products'"
            class="font-semibold w-full focus:outline-none"
            :key="index"
            @click="showChildren = !showChildren"
          >
            <span class="font-extrabold">{{ nav.name }}</span>
            <span class="ml-2">></span>
          </button>

          <router-link
            v-else
            class="font-extrabold w-full my-1"
            @click="selected(index)"
            :to="nav.route"
            :key="'router-' + index"
            >{{ nav.name }}</router-link
          >
        </template>
      </div>
      <div
        class="absolute w-full flex flex-wrap text-3xl font-semibold text-center navigation-overlay-transition-right"
        :class="{ 'overlay-show-right': showChildren }"
      >
        <button
          class="font-semibold w-full focus:outline-none"
          @click="showChildren = !showChildren"
        >
          <span class="mr-2" dir="rtl">></span>
          <span class="font-extrabold">Back</span>
        </button>

        <!-- Product types -->
        <div class="w-full">Choose a product type:</div>
        <button
          class="w-full text-26 cursor-pointer capitalize"
          v-for="(productType, productTypeIndex) in navigation[0].children"
          :key="'product-' + productTypeIndex"
          @click="selectedProductType(productType)"
        >
          {{ productType }}
        </button>
        <!-- <router-link
          v-for="(nav, index) in navigation[0].children"
          class="font-extrabold w-full my-1"
          @click="selected(index)"
          :to="nav.route"
          :key="'router-children-' + index"
          >{{ nav.name }}</router-link
        > -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref /* watch */ } from 'vue'
import {} from '../structure/models'
import router from '../router'
import { productTypes } from '../constants'
import { appStore } from '../store/store'

export default defineComponent({
  name: 'Navigation',
  setup() {
    const selectedHeader = ref(-1)
    const showOverlay = ref(false)
    const showChildren = ref(false)

    const navigation = computed(() => {
      return [
        {
          id: 'About',
          name: 'Products',
          route: '',
          children: productTypes,
        },
        {
          name: 'News',
          route: 'news',
          children: undefined,
        },
        {
          name: 'Resources for Teachers',
          route: 'resources',
          children: undefined,
        },
      ]
    })

    /* Change when router updates */
    /*  watch(
      () => router.currentRoute.value,
      newValue => {
        const route = newValue.fullPath
        if (
          route == '/who-we-are' ||
          route == '/timeline' ||
          route == '/publications' ||
          route == '/contacts'
        )
          selectedHeader.value = 0
      }
    ) */

    /* Mobile only: Toggle the button animation when showing/closing the overlay */
    let button: HTMLElement | null
    const toggleOverlay = (isButton: boolean) => {
      /* Mobile only: toggle the overlay when it is active only  */
      if (showOverlay.value || isButton) {
        if (!button) button = document.getElementById('button-hamburger')
        if (button) {
          button.classList.toggle('opened')
          const isOpened = button.classList.contains('opened')
            ? 'true'
            : 'false'
          button.setAttribute('aria-expanded', isOpened)
          showOverlay.value = !showOverlay.value
        }
      }
    }

    // Template methods

    /* A route has been selected, add a border under the header to indicate where the user currently are */
    const selected = (index: number) => {
      if (index < 0) {
        router.push('/')
      }

      toggleOverlay(false)
    }

    const selectedProductType = (type: string) => {
      appStore.setProductType(type)
      toggleOverlay(false)

      router.push('/products')
    }

    return {
      navigation,
      selectedHeader,
      selected,
      toggleOverlay,
      showOverlay,
      showChildren,
      selectedProductType,
    }
  },
})
</script>

<style scoped>
.compis-logo {
  position: absolute;
  left: 0;
  margin-left: 3vw;
  max-height: 100px;
  max-width: 100%;
}

.navigation-style {
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 3vw;
  padding-right: 3vw;
  pointer-events: auto;
}

.dropdown:hover .dropdown-menu {
  display: block;
  background: white;
  color: black;
}

.join-button {
  background-color: #2c3e77;
  border-color: #2c3e77;
}

.navigation-overlay-transition-left {
  left: 0;
  transition: 0.5s left ease-in-out;
}

.navigation-overlay-transition-right {
  right: -100vw;
  transition: 0.5s right ease-in-out;
}

.overlay-hide-left {
  left: -100vw;
}

.overlay-show-right {
  right: 0;
}

/* Hamburger button */
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
