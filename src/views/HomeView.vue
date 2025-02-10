<template>
  <section>
    <div class="container">
      <!-- tarayıcı desteklemesine göre resim formatı -->
      <!-- <picture>
        <source srcset="image.avif" type="image/avif" />
        <source srcset="image.webp" type="image/webp" />
        <img src="image.jpg" alt="Görsel" />
      </picture> -->
      <img
        class="animated-img"
        src="../assets/adamlar/berkantilavel.svg"
        alt="Berkan Tilavel"
        style="--t: 5s; --p: -200%"
      />
      <img
        class="animated-img"
        src="../assets/adamlar/tolgaakdogan.svg"
        alt="Tolga Akdoğan"
        style="--t: 2s; --p: -200%"
      />
      <img
        class="animated-img"
        src="../assets/adamlar/beratiscioglu.svg"
        alt="Berat İşçioğlu"
        style="--t: 3s; --p: 200%"
      />
      <img
        class="animated-img"
        src="../assets/adamlar/gurhanogutucu.svg"
        alt="Gürhan Öğütücü"
        style="--t: 4s; --p: 200%"
      />
    </div>
    <iframe
      src="https://www.youtube.com/embed/QmOAfzLAH58?autoplay=1&mute=1&rel=0&showinfo=0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
    <div class="social-media">
      <a
        href="https://open.spotify.com/intl-tr/artist/1g4J8P1JWwanNyyXckRX5W?si=H6GLkHC-Q2uZ8o40fFyhJQ"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'spotify']" />
      </a>
      <a href="https://www.youtube.com/channel/UCH_gImB5q15ScuE8-52k3Iw" target="_blank">
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
      <a href="https://www.instagram.com/theadamlar/" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a href="https://x.com/theadamlar" target="_blank">
        <font-awesome-icon :icon="['fab', 'square-x-twitter']" />
      </a>
      <a href="https://www.facebook.com/theadamlar/?locale=tr_TR" target="_blank">
        <font-awesome-icon :icon="['fab', 'square-facebook']" />
      </a>
    </div>
    <!-- <div class="play" @click="toggleAlbum">
      <font-awesome-icon :icon="['fas', isPlaying ? 'stop' : 'play']" />
      <audio ref="audioPlayer" :src="audioUrl" hidden></audio>
    </div> -->
  </section>
</template>

<script setup>
// import { ref } from 'vue'

// const isPlaying = ref(false)
// const audioPlayer = ref(null)
// const audioUrl = ref('/mp3/kahirli-merdiven.mp3')

// const toggleAlbum = () => {
//   if (isPlaying.value) {
//     audioPlayer.value.pause()
//     audioPlayer.value.currentTime = 0
//   } else {
//     audioPlayer.value.play()
//   }

//   isPlaying.value = !isPlaying.value
// }
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
}

.animated-img {
  width: 100%;
  opacity: 0;
  position: relative;
  animation: slideIn 4s ease-in forwards;
  height: clamp(200px, 95vw, 100%);
  animation-delay: var(--t);
  transform: translateX(var(--p));
  filter: drop-shadow(-1px 1px 2px #b6444f);
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(var(--p));
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

iframe {
  border: 2px solid #d8d1b4;
  border-radius: 2rem;
  width: clamp(300px, 25vw, 640px);
  height: clamp(170px, 14.25vw, 270px);
  box-shadow: 0px 0px 1px #d8d1b4;
}

.social-media {
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
}

.play {
  position: absolute;
  bottom: 0.5rem;
  background-color: #b6444f;
  padding: clamp(0.25rem, 2.5vw, 0.5rem);
  border-radius: 50%;
  width: clamp(0.5rem, 2.5vw, 2rem);
  height: clamp(0.5rem, 2.5vw, 2rem);
  box-shadow: 0 0 2px 2px #d8d1b4;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .social-media {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right: 1rem;
  }

  .animated-img {
    height: 180px;
  }
}
</style>
