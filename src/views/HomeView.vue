<script setup></script>

<template>
  <section>
    <div class="container">
      <img
        class="animated-img img1"
        src="../assets/adamlar/berkantilavel.svg"
        alt="Berkan Tilavel"
      />
      <img class="animated-img img3" src="../assets/adamlar/tolgaakdogan.svg" alt="Tolga Akdoğan" />
      <img
        class="animated-img img2"
        src="../assets/adamlar/beratiscioglu.svg"
        alt="Berat İşçioğlu"
      />
      <img
        class="animated-img img4"
        src="../assets/adamlar/gurhanogutucu.svg"
        alt="Gürhan Öğütücü"
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
  </section>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.animated-img {
  width: 100%;
  opacity: 0;
  position: relative;
  animation: slideIn 1s ease-in forwards;
}

.img1 {
  animation-delay: 3.35s;
  transform: translateX(-200%);
  --deg: -200%;
}

.img2 {
  animation-delay: 3.7s;
  transform: translateX(200%);
  --deg: 200%;
}

.img3 {
  animation-delay: 4.05s;
  transform: translateX(-200%);
  --deg: -200%;
}

.img4 {
  animation-delay: 4.4s;
  transform: translateX(200%);
  --deg: 200%;
}

@keyframes slideIn {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
    transform: translateX(var(--deg));
  }
  100% {
    opacity: 1;
  }
}

iframe {
  border: 2px solid #d8d1b4;
  border-radius: 2rem;
  width: 320px;
  height: 182px;
  box-shadow: 0px 0px 1px #d8d1b4;
  position: absolute;
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

@media (max-width: 768px) {
  iframe {
    display: none;
  }

  .social-media {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    right: 1rem;
  }
}
</style>
