<template>
    <section class="container">
      <figure class="container__img-container">
        <img src="@/assets/images/sella1.jpg" alt="imagenPrincipal">
      </figure>

      <figure class="container__logo-container">
        <img src="@/assets/images/logo amarillo.png" alt="logo" class="logo">
      </figure>

      <article class="container__article">
        <h1 class="container__article-title">RESERVA LAS ACTIVIDAD<br>MÁS AUTENTICAS DE ASTURIAS</h1>
        <h3 class="container__article-hasthag"><i class="fas fa-hashtag"></i>BookLikeALocal</h3>
      </article>
      <!-- <Search/> -->
    </section>
</template>

<script>
/* import Search from '../atoms/Search.vue' */

export default {
  name: 'Home-intro',
  components: {
    /* Search, */
  }
}
</script>

<style scoped>

  .container {
    height: 70vh;
    width: 100%;
  }

  .container__img-container {
    height: 100%;
    width: 100%;
  }

  .container__img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .container__logo-container img {
    position: absolute;
    top: 130px;
  }
  
  .container__article {
    position: absolute;
    top: 45%;
    width: 100%;
  }

  .container__article-title {
    font-family: 'Jockey One', sans-serif;
    font-size: 61px;
    color: white;
    text-align: center;
  }

  .container__article-hasthag {
    font-size: 2rem;
    text-align: center;
  }

  .container__article-hasthag i {
    color: var(--primary-color);
    font-size: 2rem;
  }

  @media(max-width: 1000px) {
    .container__logo-container img {
      display: none;
    }

    .container__article-title {
      font-size: 40px;
    }

  }

</style>