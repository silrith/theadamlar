<script setup>
import Album from '../components/TheAlbum.vue'
import kahirlimerdiven from '/albums/kahirlimerdiven.svg'
import hareketekimsemaniolamaz from '/albums/hareketekimsemaniolamaz.svg'
import dunyagunlukleri from '/albums/dunyagunlukleri.svg'
import ruyalardaburusmusuz from '/albums/ruyalardaburusmusuz.svg'
import eskidostumtanklagelmis from '/albums/eskidostumtanklagelmis.svg'
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
