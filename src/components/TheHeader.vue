<template>
  <header :class="{ 'full-screen': isMenuOpen }">
    <router-link to="/">
      <img src="../assets/adamlar/adamlar.png" alt="Adamlar Logo" width="96" height="42" />
    </router-link>
    <nav :class="{ open: isMenuOpen }">
      <router-link to="/" @click="closeMenu">Ana Sayfa</router-link>
      <router-link to="/biografi" @click="closeMenu">Biografi</router-link>
      <router-link to="/diskografi" @click="closeMenu">Diskografi</router-link>
      <router-link to="/konserler" @click="closeMenu">Konser Takvimi</router-link>
    </nav>
    <button class="hamburger" @click="toggleMenu">
      <font-awesome-icon :icon="['fas', 'microphone-lines']" />
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1rem);
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  border-bottom: 2px solid #d8d1b4;
  top: 0;
  transition: all 0.3s ease-in-out;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  font-size: clamp(0.75rem, 5vw, 1rem);
  font-weight: bold;
  transition: color 0.5s ease-in-out;
  color: #d8d1b4;
}

nav a:hover {
  color: #b6444f;
}

.hamburger {
  display: none;
  font-size: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #d8d1b4;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 1);
    backdrop-filter: blur(1rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }

  nav.open {
    transform: translateY(0);
  }

  header {
    padding: 1rem 0.5rem;
  }
}
</style>
