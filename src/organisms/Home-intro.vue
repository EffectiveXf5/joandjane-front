<template>
    <div>
      <img src="" alt="imagenPrincipal" class="home-image-cover">
      <img src="" alt="logo" class="logo">
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