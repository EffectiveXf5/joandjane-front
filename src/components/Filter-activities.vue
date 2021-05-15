<template>
  <section class="main__sectionFilter">
      <h3 class="main__sectionFilter-title">Filtrar</h3>

      <article class="main__sectionFilter-btnContainer">
        <button class="btn-filter">Destino</button>
        <button class="btn-filter">Tipo de Actividad</button>
        <button class="btn-filter">Duración</button>
        <button class="btn-filter">Precio</button>
        <button class="btn-filter">Pet Friendly</button>
        <button class="btn-filter">Niños</button>
      </article>
    </section>
</template>

<script>
export default {
    name: 'Filter-activities',

}
</script>

<style scoped>

    .main__sectionFilter-title {
        width: 100%;
        padding: 15px;
    }

    .main__sectionFilter-btnContainer {
        display: grid;
        grid-template-columns: repeat( 2, 1fr);
        width: 80%;
        margin: auto;
        grid-gap: 10px;
    }

    .main__sectionFilter-btnContainer button {
        justify-self: center;
        cursor: pointer;
    }

    .main__sectionFilter-btnContainer button:hover {
        background-color: var(--primary-color);
        color: var(--seconday-color);
        transition: 1s;
        border: none;
    }

    @media(max-width: 500px) {
        .main__sectionFilter-btnContainer button {
            justify-self: center;
            width: 100px;
            font-size: 0.6rem;
            height: 25px;
        }
    }

</style>