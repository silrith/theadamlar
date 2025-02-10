<template>
  <section>
    <div class="gallery">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        @click="openModal(image)"
        alt="Gallery Image"
        class="gallery-image"
      />
    </div>

    <div v-if="modalImage" class="modal" @click="closeModal">
      <img :src="modalImage" class="modal-content" @click.stop />
      <button class="close-btn" @click="closeModal">×</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  'https://media.bantmag.com/wp-content/uploads/2019/06/adamlar4.webp',
  'https://media.bantmag.com/wp-content/uploads/2019/06/adamlar2-800x533.avif',
  'https://api.pozitifmuzik.com/images/event/4e4934087d7f47879fe430c97de798a5/base.png',
  'https://www.dergy.com/_next/image/?url=https%3A%2F%2Fwp.dergy.com%2Fwp-content%2Fuploads%2F2023%2F02%2FAdamlar-Harekete-Kimse-Mani-Olamaz.-Part-II-EP-sanatci-gorseli-2-scaled-1.jpg&w=1920&q=75',
  'https://cdn.bubilet.com.tr/files/Etkinlik/adamlar-konseri-45103.jpg',
  'https://lakonser.com/wp-content/uploads/2024/02/adamlar-27.02.2024-02-24-11.jpg',
  'https://ifyazilim.nyc3.cdn.digitaloceanspaces.com/EtkIO/PublicDepo/EtkinlikAfis/2024/12/adamlar-244441.jpg',
  'https://www.fonajans.com.tr/wp-content/uploads/2022/08/adamlar-grubu-kimdir-1024x374.jpg',
  'https://static.darkbluenotes.com/uploads/2023/07/adamlar_tolga-800x445.jpg',
  'https://cdn1.kralmuzik.com.tr/media/img/920x570/24-11/18/adamlar-kahirli-merdiven-album-1.jpg',
  'https://img.redbull.com/images/c_fill,g_auto,w_1200,h_800/q_auto,f_auto/redbullcom/2016/11/19/1331830227014_2/adamlar',
  'https://image.milimaj.com/i/milliyet/75/869x477/5c8c5d9207291c1d74fc7729.jpg',
  'https://lh3.googleusercontent.com/w4kf-St5IrEQlqbdBoTkLRREZ9lUVc5OitJe_5b8BnAGgDJK7sWHyZ7LCQPuNKhhWoNpHHvNmfdv4i4=w2880-h1200-p-l90-rj',
  'https://sozleri.co/wp-content/uploads/2024/11/adamlar-es-sarki-sozleri.jpg',
  'https://www.pausedergi.com/wp-content/uploads/2024/11/foto-1-20.jpg',
])

const modalImage = ref(null)

const openModal = (image) => {
  modalImage.value = image
}

const closeModal = () => {
  modalImage.value = null
}
</script>

<style scoped>
.gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
}

.gallery-image {
  width: clamp(280px, 95%, 320px);
  height: clamp(280px, 95%, 320px);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 2px solid #afa991;
  filter: sepia(75%);
}

.gallery-image:hover {
  filter: none;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #afa991;
  cursor: pointer;
  border: 2px solid #afa991;
  background: #b6444f;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
