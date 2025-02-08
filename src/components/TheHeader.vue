<template>
  <header>
    <router-link to="/">
      <img src="../assets/adamlar/adamlar.png" alt="Adamlar Logo" width="128" height="56" />
    </router-link>
    <nav>
      <router-link to="/">Ana Sayfa</router-link>
      <router-link to="/biografi">Biografi</router-link>
      <router-link to="/diskografi">Diskografi</router-link>
      <router-link to="/konserler">Konser Takvimi</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  background-color: rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  border-bottom: 2px solid #d8d1b4;
  top: 0;
}
</style>
