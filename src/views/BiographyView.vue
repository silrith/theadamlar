<template>
  <section>
    <h1 style="text-decoration: underline; text-underline-offset: 8px">The Adamlar</h1>
    <div class="biography">
      <p style="text-decoration: underline; text-underline-offset: 8px">Biyografi</p>
      <p>
        <b style="font-size: 1.25rem; text-decoration: underline; text-underline-offset: 8px"
          >Adamlar</b
        >
        vokalist ve gitarist Tolga Akdoğan, gitarist Gürhan Öğütücü, bas gitarist Berat İşçioğlu ve
        baterist Berkan Tilavel'den oluşan 2014 yılında kurulmuş bir Türk rock grubudur.
      </p>
      <p>
        İlk olarak Tolga Akdoğan "Adamlar" adıyla yan proje gibi müzik üretimine başladı. Ardından
        kariyerine bu isimde devam etme kararı aldı. Şarkıları albümde toplama fikriyle albüm
        sürecine girildi. Ve albüm kayıt sürecinde de yaşanan değişimler sonucu grup elemanları
        belirlendi. Kadro Tolga Akdoğan, Berkan Tilavel, Burak Güngörmüş, Gürhan Öğütücü ve sonradan
        gelen Burak Irmak ile tamamlandı. Eylül 2014'te ilk albümleri Eski Dostum Tankla Gelmiş'i
        yayınladılar. Tarz olarak eğlenceli sözlere ve müziğe sahip bu albüm, turneyle birlikte
        fazlaca ilgi gördü. Ekim 2016 yılında ikinci albümleri olan Rüyalarda Buruşmuşuz piyasaya
        sürüldü. Ağustos 2018'de "Hikaye" teklisi klibiyle birlikte yayımlandı. 12 Nisan 2019
        tarihinde bu şarkının da yer aldığı üçüncü albümleri Dünya Günlükleri yayımlandı. Haziran
        2021'de Sezen Aksu'nun ''Küçüğüm'' adlı şarkısına yaptıkları cover klibiyle bİrlikte
        yayınlandı.
      </p>
    </div>
    <p style="text-decoration: underline; text-underline-offset: 8px">Diskografi</p>
    <div class="discography">
      <div>
        <p style="text-decoration: underline; text-underline-offset: 8px">albümler</p>
        <ul>
          <li>2014 - Eski Dostum Tankla Gelmiş</li>
          <li>2016 - Rüyalarda Buruşmuşuz</li>
          <li>2019 - Dünya Günlükleri</li>
          <li>2023 - Harekete Kimse Mâni Olamaz</li>
          <li>2024 - Kahırlı Merdiven</li>
        </ul>
      </div>
      <div>
        <p style="text-decoration: underline; text-underline-offset: 8px">Single</p>
        <ul>
          <li>2018 - Hikaye</li>
          <li>2021 - Küçüğüm</li>
          <li>2024 - Ankara'dan Abim Geldi</li>
        </ul>
      </div>
      <div>
        <p style="text-decoration: underline; text-underline-offset: 8px">EP</p>
        <ul>
          <li>2024 - Canlı 01: FadeOut Studios</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biography,
.discography {
  padding: 1rem;
  text-align: justify;
  width: clamp(300px, 95vw, 1600px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.discography {
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .discography {
    flex-direction: column;
  }

  p,
  li {
    font-size: 0.75rem;
  }
}
</style>
