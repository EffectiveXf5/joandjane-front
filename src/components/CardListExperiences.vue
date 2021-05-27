<template>
    <router-link to="/experienciaId/activity_id">
      <div @click="getOneData(activity._id)">
        <img :src="activity.img">
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
        <div class="duration-container">
          <p><i class="fas fa-clock"></i>Duración: {{activity.duration}}</p>
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'CardListExperience',
  
  props: ['activity'],

  data() {
    return {
      activityId: []
    }
  },

  methods: {
    getOneData(_id) {
      console.log(_id)
        this.$router.push(`/experienciaId/${_id}`)
    },
  },
}
</script>

<style scoped>

  .main__section-article img {
    max-height: 11rem;
    object-fit: cover;
    width: 23rem;
  }

  .main__section-article h4 {
    font-size: 0.9rem;
    padding-top: 5px;
    padding-right: 5px;
    padding-left: 5px;
    color: var(--secondary-color);
  }

  .main__section-article p {
    font-size: smaller;
    padding-left:5px;
    padding-right: 5px;
    padding-top: 5px;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    color: var(--tertiary-color);
  }

  .reviews-icons i {
    padding: 1px 1px;
    color: var(--primary-color);
  }

  .duration-container{
    margin-top: 1rem;
    width: 12rem;
    padding-top:0.1rem;
    padding-left: 0.1rem;
    text-align: left;
  }
  .duration-container i{
    color: var(--secondary-color);
    padding-right:5px;
  }
  .duration-container p{
    color: var(--secondary-color);
    font-size: 0.8rem;
  }
  .btn-container {
    float: right;
    position: relative;
    margin-right: 10px;
    top: -50px;
    font-size: smaller;
    padding: 4px;
    border-radius: 10px;
  }

  @media(min-width: 1000px) {
  
  }

  @media(max-width: 999px) and (min-width: 425px) {
    .main__section-article img{
      max-width:100%;
      width: stretch;
      height: 18rem;
    }

    .main__section-article h4{
      font-size: 0.8rem;
    }

    .reviews-icons i{
      padding-top:5px;
      color: var(--primary-color);
      width: 0.9rem;
    }

    .duration-container{
      width: 11rem;
      padding-left: 0.1rem;
    }
    .duration-container i{
      color: var(--secondary-color);
      padding-right:5px;
    }
    .duration-container p{
      color: var(--secondary-color);
      font-size: 0.7rem;
    }

    .btn-container {
    float: right;
    position: relative;
    margin-right: 10px;
    top: -40px;
    font-size: smaller;
    padding: 4px;
    border-radius: 10px;
    }
  }

  @media(max-width: 424px) {
    .main__section-article img{
      max-height: 10rem;
      max-width: 100%;
      width: stretch;
    }

    .main__section-article h4{
      font-size: 0.9rem;
    }

    .main__section-article p {
      font-size: 0.65rem;
    }

    .reviews-icons i{
      padding-top:5px;
      color: var(--primary-color);
      width: 0.8rem;
    }

    .duration-container{
        width: 8rem;
        padding-left: 0.1rem;
    }
    .duration-container i{
        padding-right:5px;
    }
    .duration-container p{
        font-size: 0.6rem;
    }
  }

</style>