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
    CardListExperiences,
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
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat( 3, 1fr);
    grid-gap: 20px;
  }

  .main__section-article {
    width: 100%;
    /* margin-bottom: 20px; */
    position: relative;
    margin: 0 10px;
    border: solid #969696 1px;
    padding: 5px;
    max-width: 24rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .main__section-article:hover {
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
  }

  @media(min-width: 1000px) {
    
  }

  @media(max-width: 999px) and (min-width: 425px) {
    .main__section {
      margin: auto;
      margin-top: 50px;
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .main__section-article{
      max-width: 45rem;
      height: 21rem;
    }
  }

  @media (max-width: 424px) {
      .main__section {
      margin: auto;
      margin-top: 50px;
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .main__section-article{
      max-width: 45rem;
      height: 21rem;
    }
  }

</style>