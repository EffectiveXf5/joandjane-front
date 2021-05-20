<template>
    <main class="experiences-container">
        <h2 class="experiences-container__title"><i class="fas fa-hashtag icon-hashtag"></i>Top Jo&Jane</h2>

        <section class="experiences-container__section">
            <article class="experiences-container__section-article" v-for="(activity, index) in activities" :key="index">
                <img src="@/assets/images/cares.jpg" alt="">
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

        <button @click="next" class="carousel__btn__next">Next</button>
        <button @click="prev" class="carousel__btn__prev">Prev</button>
    </main>
</template>

<script>
export default {
    name: 'Experiences-home',

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

    .experiences-container {
        width: 95%;
        margin: auto;
    }

    .experiences-container__section {
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: center;
    }

    .experiences-container__section-article {
        width: 350px;
        height: 450px;
        margin: 0 10px;
    }

    .experiences-container__section-article:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: 1s;
    }

    .experiences-container__section-article img {
        width: inherit;
    }

    .experiences-container__section-article h4 {
        font-size: 0.9rem;
        padding: 5px 5px;
    }

    .experiences-container__section-article p {
        font-size: smaller;
        padding: 5px 5px;
        color: var(--tertiary-color);
    }

    .experiences-container__section-article i {
        padding: 1px 1px;
        color: var(--primary-color);
    }
    

</style>