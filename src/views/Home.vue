<template>
  <div>
    <section class="home-intro">
      <img src="" alt="imagenPrincipal" class="home-image-cover">
      <img src="" alt="logo" class="logo">
      <h1>Reserva las actividades más auténticas de Asturias</h1>
      <h3>#BookLikeALocal</h3>
      <Search/>
    </section>

    <br>

    <section class="home-top-experiences">
      <h2>Top Jo & Jane</h2>
      <Card-experience/>
    </section>

    <br>
    
    <section class="home-destinatios">
      <h2>Destinos</h2>
      <!-- aqui va el grid de los destinos -->
    </section>

    <br>
    
    <section class="home-politics">
          <img src="" alt="Remo">
        <div class="cajaRosa">
          <h5>Politica cancelación</h5>
          <p>blablabla</p>
        </div>
        <div class="cajaVerde">
          <h5>La mejor experiencia</h5>
          <p>blablablabla</p>
        </div>
    </section>

    <br>
    
    <section class="home-us">
          <h1 class="activitie-title">¿Quienes somos?</h1>
          <video src="" alt="video de quienes somos"></video>
    </section>

    <br>
    
    <section class="home-blog">
        <h1>Inspiración para viajar por Asturias</h1>
        <p>link a blogs</p>
    </section>

    <br>
    
    <section class="home-award">
        <img src="" alt="premio">
    </section>
        <br>
    
  </div>
</template>

<script>
import CardExperience from '../components/Card-experience.vue'
import Search from '../components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search,
    CardExperience
  }

}
</script>

<style scoped>

</style>
