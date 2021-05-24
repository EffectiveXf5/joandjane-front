<template>
     <div class="home-destinations">
        <h2>#Destinos Jo&Jane</h2>
        <div class="home-destinations-grid">
          <div class="home__destinations-container">
            <img src="/images/destinos-arriondas.jpg" alt="Arriondas">
            <h3 class="destination-name">ARRIONDAS</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-gijon.jpg" alt="gijon">
            <h3 class="destination-name">GIJÓN</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-llanes.jpg" alt="llanes">
            <h3 class="destination-name">LLANES</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-ribadesella.jpg" alt="Ribadesella">
            <h3 class="destination-name">RIBADESELLA</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-villaviciosa.jpg" alt="Villaviciosa">
            <h3 class="destination-name">VILLAVICIOSA</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-cangas-onis.jpg" alt="Cangas de Onis">
            <h3 class="destination-name">CANGAS DE ONÍS</h3>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home-destination',
  components: {
  }

}
</script>

<style scoped>
.home-destinations-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  margin:auto;
}

.home__destinations-container{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.destination-name{
  position: absolute;
  top: 17rem;
  color: white;
}


</style>



