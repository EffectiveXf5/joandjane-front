<template>
  <main class="main"> 

    <Filter-activities />

    <section class="main__section">
      <article class="main__section-article" v-for="(activity, index) in activities" :key="index">
        <img src="@/assets/images/cares.jpg">
        <div class="btn-price btn-container">{{activity.price}}</div>
        <h4>{{activity.title}}</h4>
        <p>{{activity.sumary}}</p>
        <p class="reviews-icons">{{activity.reviews.stars}}
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </p>
        <div class="duration-container">Duración: {{activity.duration}}</div>
      </article>
    </section>
  </main>
</template>

<script>
import FilterActivities from '../components/Filter-activities.vue'

export default {
  
  name: 'Experiences',

  components: {
    FilterActivities,
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

  .main__section-article img {
    width: 100%;
  }

  .main__section-article h4 {
    font-size: 0.9rem;
    padding: 5px 5px;
  }

  .main__section-article p {
    font-size: smaller;
    padding: 5px 5px;
    color: var(--tertiary-color);
  }

  .reviews-icons i {
    padding: 1px 1px;
    color: var(--primary-color);
  }

  .btn-container {
    float: right;
    position: relative;
    margin-right: 10px;
    top: -70px;
  }

  @media(max-width: 1000px) {
    .btn-container {
      font-size: smaller;
      padding: 10px;
      top: -50px;
      border-radius: 10px;
    }
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

  @media(max-width: 400px) {
    .main__section-article p {
      font-size: 0.6rem;
    }

    .duration-container {
      width: 120px;
      font-size: 0.6rem;
    }
  }

</style>