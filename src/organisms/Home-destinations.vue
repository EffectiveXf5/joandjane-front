<template>
     <div class="home-destinations" id="destinations">
        <h2><i class="fas fa-hashtag icon-hashtag"></i>Destinos Jo&Jane</h2>
        <div class="home-destinations-grid">
          <div class="home__destinations-container">
            <img src="/images/destinos-arriondas.jpg" alt="Arriondas" class="destination-image">
            <h3 class="destination-name">ARRIONDAS</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-gijon.jpg" alt="gijon" class="destination-image">
            <h3 class="destination-name">GIJÓN</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-llanes.jpg" alt="llanes" class="destination-image">
            <h3 class="destination-name">LLANES</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-ribadesella.jpg" alt="Ribadesella" class="destination-image">
            <h3 class="destination-name">RIBADESELLA</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-villaviciosa.jpg" alt="Villaviciosa" class="destination-image">
            <h3 class="destination-name">VILLAVICIOSA</h3>
          </div>
          <div class="home__destinations-container">
            <img src="/images/destinos-cangas-onis.jpg" alt="Cangas de Onis" class="destination-image">
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

.home-destinations h2{
  width: 95%;
  margin: auto;
  margin-top:1rem;
  margin-bottom:1rem;
}

.home-destinations-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  justify-content: center;
  margin:auto;
  margin-bottom:2rem;
}

.home__destinations-container{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.destination-image{
  max-height: 20rem;
  object-fit: cover;
  width: 20rem;
}

.destination-name{
  position: absolute;
  top: 17rem;
  color: white;
}


@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {
  .home-destinations h2{
    width: 95%;
    margin: auto;
    margin-top:1rem;
    margin-bottom:1rem;
  }
  
  .home-destinations-grid{
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    justify-content: center;
    margin-bottom:2rem;
  }

  .destination-image{
    max-height: 15rem;
    object-fit: cover;
    width: 15rem;
  }

  .destination-name{
    position: absolute;
    top: 12rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 424px) {
  .home-destinations h2{
    width: 95%;
    margin: auto;
    margin-top:1rem;
    margin-bottom:1rem;
  }

  .home-destinations-grid{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      width: 50%;
      justify-content: center;
      margin-bottom:2rem;
    }

    .destination-image{
      max-height: 10rem;
      object-fit: cover;
      width: 10rem;
    }

    .destination-name{
      position: absolute;
      top: 8rem;
      font-size: 0.7rem;
    }
}

</style>


