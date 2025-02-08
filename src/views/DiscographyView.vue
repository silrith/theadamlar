<script setup>
import Album from '../components/TheAlbum.vue'
import kahirlimerdiven from '../assets/albums/kahirlimerdiven.svg'
import hareketekimsemaniolamaz from '../assets/albums/hareketekimsemaniolamaz.svg'
import dunyagunlukleri from '../assets/albums/dunyagunlukleri.svg'
import ruyalardaburusmusuz from '../assets/albums/ruyalardaburusmusuz.svg'
import eskidostumtanklagelmis from '../assets/albums/eskidostumtanklagelmis.svg'
</script>

<template>
  <section class="discography">
    <Album :backgroundImage="kahirlimerdiven" />
    <Album :backgroundImage="hareketekimsemaniolamaz" />
    <Album :backgroundImage="dunyagunlukleri" />
    <Album :backgroundImage="ruyalardaburusmusuz" />
    <Album :backgroundImage="eskidostumtanklagelmis" />
  </section>
</template>

<style scoped>
.discography {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  padding: 1rem;
  position: relative;
}
</style>
