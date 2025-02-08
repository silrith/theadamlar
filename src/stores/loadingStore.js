import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false,
    isFadingOut: false,
  }),
  actions: {
    startLoading() {
      this.isLoading = true
      this.isFadingOut = false
    },
    stopLoading() {
      this.isFadingOut = true
      setTimeout(() => {
        this.isLoading = false
        this.isFadingOut = false
      }, 2000)
    },
  },
})
