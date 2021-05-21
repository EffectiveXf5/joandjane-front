<template>
  <div class="search-container">
    <form @submit.prevent="">
      <label class="search-container__label">Busca tu experiencia</label>
      <input class="search-container__input" type="text" placeholder="Encuentra tu experiencia">
      <button class="search-container__button" type="submit"><i class="fas fa-search "></i></button>
    </form>
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

  .search-container__button {
    border: none;
    padding: 17px;
    background-color: var(--primary-color);
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  }

  .search-container i {
    color: white;
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