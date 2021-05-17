<template>
     <div class="home-destinatios">
      <h2>Destinos</h2>
        <!--aqui va el grid de los destinos-->
      <ul>
        <li v-for="(destinations, index) in destinationsLoaded" :key="index">
          {{ destinations }}
        </li>
      </ul>
      <button @click="loadMore">Load</button>
    </div>
</template>

<script>
export default {
  name: 'Home-destination',
  components: {
  },
    data() {
    return {
      destinationsDB: ["gijon", "oviedo", "aviles", "tremañes", "mieres", "logroño", "estonia", "quesun", "quepan"],
      length: 6,
    };
  },
  methods: {
    loadMore() {
      if (this.length > this.destinationsDB.length) return;
      this.length = this.length + 3;
    },
  },
  computed: {
    destinationsLoaded() {
      return this.destinationsDB.slice(0, this.length);
    },
  },
}
</script>

<style>

</style>


