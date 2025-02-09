import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '../stores/loadingStore'
import HomeView from '../views/HomeView.vue'
import BiographyView from '../views/BiographyView.vue'
import DiscographyView from '../views/DiscographyView.vue'
import ConcertsView from '../views/ConcertsView.vue'
import GaleryView from '../views/GaleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home Page', component: HomeView },
    { path: '/biografi', name: 'Biography Page', component: BiographyView },
    { path: '/diskografi', name: 'Discography Page', component: DiscographyView },
    { path: '/galery', name: 'Galery Page', component: GaleryView },
    { path: '/konserler', name: 'Concerts Page', component: ConcertsView },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
})

router.beforeEach(() => {
  const loadingStore = useLoadingStore()
  loadingStore.startLoading()
})

router.afterEach(() => {
  const loadingStore = useLoadingStore()
  setTimeout(() => {
    loadingStore.stopLoading()
  }, 2500)
})

export default router
