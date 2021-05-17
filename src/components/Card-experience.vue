<template>
  <section class="main__section">
      <article class="main__section-article" v-for="(activity, index) in activities" :key="index">
        <CardListExperiences :activity='activity' />
      </article>
    </section>
</template>

<script>
import CardListExperiences from './CardListExperiences.vue'

export default {
  
  name: 'Card-experience',

  components: {
    CardListExperiences
  },

  data() {
    return {
      activities: []
    }
  },

  created() {
    this.listActivities()
  },

  methods: {
    listActivities() {
      this.axios.get('/activity')
        .then( res => {
          console.log(res.data)
          this.activities = res.data;
        })

        .catch( e => {
          console.log(e.response)
        })
    }
  },
}
</script>

<style scoped>

  .main__section {
    width: 90%;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat( 3, 1fr);
    grid-gap: 20px;
  }

  .main__section-article {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  }

  .main__section-article:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: 1s;
  }

  @media(max-width: 850px) {
    .main__section {
      width: 90%;
      margin: auto;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
    }
  }

</style>