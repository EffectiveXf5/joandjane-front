<template>
    <div>
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
    </div>
</template>

<script>
export default {
  name: 'CardListExperience',
  
  props: ['activity']
}
</script>

<style scoped>

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