<template>
  <div id="app">
    <div class="flex flex-row justify-end">
      <div v-if="isLoggedIn" class="flex mt-3 mr-5">
        <div class="m-3 text-blue-700">Bienvenue {{ userName }}</div>
        <button
          class="m-1 inline-flex items-left px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="goToLogin"
        >
          Sign Out
        </button>
      </div>
      <div v-if="!isLoggedIn" class="p-6 pb-0 max-w-sm">
        <button
          @click="goToLogin"
          type="button"
          class="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
        >
          <svg
            class="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google
          <div></div>
        </button>
      </div>
    </div>
    <router-view></router-view>
  </div>
  <notifications position="top-right" classes="my-custom-class" />
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from './store/store.ts'
import router from './router'

const goToLogin = () => {
  router.push('/login')
}
const route = useRoute()
const { state } = useStore()
const userName = ref(state.user.name)
const isLoggedIn = ref(state.user.loggedIn)

const backgroundColor = computed(() => {
  console.log('route', route.name)

  switch (route.name) {
    case 'WelcomePage':
      return 'bg-cyan-200'
    default:
      return 'bg-cremeux'
  }
})

watch(
  () => state.user.name,
  (newValue) => {
    userName.value = newValue
  }
)

onMounted(() => {
  document.body.className = backgroundColor.value
})

onUnmounted(() => {
  document.body.className = ''
})

watch(backgroundColor, (newColor) => {
  document.body.className = newColor
})

watch(
  () => state.user.name,
  (newValue) => {
    userName.value = newValue
  }
)
</script>

<style scoped></style>
