<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
import Header from './components/TheHeader.vue'
import Loading from './components/TheLoading.vue'

const isLoading = ref(true)
const router = useRouter()

router.beforeEach(() => {
  isLoading.value = true
})

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 5000)
})
</script>

<template>
  <img src="./assets/adamlar/snake.png" alt="Kahırlı Merdiven" class="app-image" />
  <p>KAHıRLı MERdivEN</p>
  <Header />
  <Loading v-if="isLoading" />
  <RouterView />
</template>

<style scoped>
.app-image {
  opacity: 0.25;
  position: absolute;
  width: clamp(300px, 25vw, 480px);
  height: clamp(300px, 25vw, 480px);
  top: 25%;
}
p {
  position: absolute;
  bottom: 10%;
  rotate: -10deg;
  font-size: clamp(1rem, 5vw, 5rem);
  opacity: 0.25;
}
</style>
