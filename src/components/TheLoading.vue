<script setup>
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '../stores/loadingStore'

const loadingStore = useLoadingStore()
const { isLoading, isFadingOut } = storeToRefs(loadingStore)
</script>

<template>
  <section v-if="isLoading" class="loading" :class="{ fadeOut: isFadingOut }">
    <div class="images">
      <img src="../assets/adamlar/adamlar.png" alt="Adamlar Logo" width="256" height="112" />
      <img src="../assets/adamlar/snake.png" alt="Yılan" width="256" height="256" />
    </div>
  </section>
</template>

<style scoped>
.loading {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 1;
  transition: opacity 2s ease-in-out;
}

.fadeOut {
  opacity: 0;
}

.loading .images {
  animation: opaque-growth 4s ease-in forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@keyframes opaque-growth {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.25);
  }
}
</style>
