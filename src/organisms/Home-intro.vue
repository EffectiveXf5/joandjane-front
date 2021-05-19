<template>
    <div>
    <figure>
      <img src="@/assets/images/sella1.jpg" alt="imagenPrincipal" class="home-image-cover">
    </figure>
    <figure>
      <img src="@/assets/images/logo amarillo.png" alt="logo" class="logo">
    </figure>
      <h1>Reserva las actividades más auténticas de Asturias</h1>
      <h3>#BookLikeALocal</h3>
      <Search/>
    </div>
</template>

<script>
import Search from '../atoms/Search.vue'

export default {
  name: 'Home-intro',
  components: {
    Search,
  }
}
</script>

<style scoped>
.home-image-cover{
 width:100%;
}
</style>