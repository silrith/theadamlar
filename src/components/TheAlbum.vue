<template>
  <div class="album-cover" :class="{ active: isActive }">
    <div
      class="album-front"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
      @click="openAlbum"
    ></div>
    <div class="album-back" @click="openAlbumSongs">
      <div class="cd" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="blank">
          <div class="blank-white"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  backgroundImage: String,
})

const isActive = ref(false)
const albumUrl = ref('')

const openAlbum = () => {
  isActive.value = !isActive.value
}

const openAlbumSongs = () => {
  const album = props.backgroundImage
  const match = album.match(/\/([^/]+)\./)

  switch (match[1]) {
    case 'eskidostumtanklagelmis':
      albumUrl.value =
        'https://open.spotify.com/intl-tr/album/3iiDh9sqqJDc9rxsGCm0pS?si=YDUr8I3NRrCJzIxDJzep_g'
      break
    case 'dunyagunlukleri':
      albumUrl.value =
        'https://open.spotify.com/intl-tr/album/3OIhzweJb5vgDOnPHTl3Dp?si=qYFWkRmRSZmHMzeZf8GKwQ'
      break
    case 'hareketekimsemaniolamaz':
      albumUrl.value =
        'https://open.spotify.com/intl-tr/album/4wYuj3aXLOS49Xfr1NoAW3?si=IqhYiRHAQiKZOVUp2K2bRg'
      break
    case 'ruyalardaburusmusuz':
      albumUrl.value =
        'https://open.spotify.com/intl-tr/album/1A4oBX00tNGOO7k4jC5HEt?si=MGDfZSVGQvCNKqKMhxxSAA'
      break
    default:
      albumUrl.value =
        'https://open.spotify.com/intl-tr/album/3iiDh9sqqJDc9rxsGCm0pS?si=ReaNAnzYSJykM3ypJNP6rA'
      break
  }

  window.open(albumUrl.value, '_blank')
}
</script>

<style scoped>
.album-cover {
  width: 360px;
  height: 360px;
  border: 4px solid #d8d1b4;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
}

.album-cover.active {
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.album-front {
  width: 352px;
  height: 352px;
  position: absolute;
  background-size: cover;
  background-position: center;
  opacity: 1;
  inset: 0;
  z-index: 1;
  transform-origin: left;
}

.album-cover.active .album-front {
  animation: openAlbum 1s linear forwards;
  border: 4px solid #d8d1b4;
}

.album-back {
  width: 352px;
  height: 352px;
  background-color: rgb(255, 255, 255, 0.25);
  position: absolute;
  opacity: 1;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: inset 0px 0px 4px 4px #d8d1b4;
}

.cd {
  width: 320px;
  height: 320px;
  border: 2px solid black;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: spin 10s infinite linear;
}

.blank {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
}

.blank-white {
  width: 95%;
  height: 95%;
  border-radius: 50%;
  background-color: black;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes openAlbum {
  0% {
    transform: translateX(0) rotateY(0);
    box-shadow: none;
  }
  100% {
    transform: rotateY(-180deg) translateX(0.5%);
    box-shadow: -4px 0px 6px 4px rgb(0, 0, 0, 0.75);
  }
}
</style>
