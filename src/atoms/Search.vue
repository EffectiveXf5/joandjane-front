<template>
  <div class="search-container">
    <label class="search-container__label">Busca tu experiencia</label>
    <input class="search-container__input" type="text" placeholder="Encuentra tu experiencia">
    <i class="fas fa-search "></i>
  </div>
</template>

<script>
export default {
    name: 'Search'

}
</script>

<style scoped>

  .search-container {
    padding: 30px;
    text-align: center;
    width: 80%;
    margin: auto;
  }

  .search-container__label {
    display: none;
  }

  .search-container__input {
    padding: 15px 40px;
    border-radius: 10px 0 0 10px;
    border: 2px solid var(--tertiary-color);
  }

  .search-container i {
    padding: 17px;
    color: white;
    background-color: var(--primary-color);
    border-radius: 0 10px 10px 0;
  }

  @media(max-width: 425px) {
    .search-container__input {
      padding: 10px 15px;
    }

    .search-container i {
      padding: 12px;
    }
  }

  @media(max-width: 350px) {
    .search-container__input {
      padding: 5px 10px;
      font-size: 0.7rem;
    }

    .search-container i {
      padding: 8px;
    }
  }

</style>