<template>
    <main class="experiences-container">
        <h2 class="experiences-container__title"><i class="fas fa-hashtag icon-hashtag"></i>Top Jo&Jane</h2>

        <carousel 
            @next="next" 
            @prev="prev"
        >

            <section class="experiences-container__section">
                <carousel-slide class="experiences-container__section-article" v-for="(activity, index) in activities" :key="index">
                    <img :src="activity.img" alt="">
                    <h4>{{activity.title}}</h4>
                    <p >{{activity.sumary}}</p>
                    <p class="reviews-icons">{{activity.reviews.stars}}
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </p>
                    <div class="duration-container">
                        <p ><i class="fas fa-clock"></i>Duración: {{activity.duration}}</p>
                    </div>
                </carousel-slide>
            </section>
        </carousel>
    </main>
</template>

<script>
import Carousel from './Carousel/Carousel.vue'
import CarouselSlide from './Carousel/CarouselSlide.vue'

export default {
    name: 'Experiences-home',

    components: { 
        Carousel,
        CarouselSlide
    },

    data() {
        return {
            activities: [],

            visibleSlide: 4
        }
    },

    computed: {
        slidesLength() {
            return this.activities.length;
        },
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
    },

    next() {
        if(this.visibleSlide >= this.slides.length - 1) {
            this.visibleSlide = 0;
        } else {
            this.visibleSlide++;
        }
    },

    prev() {
        if(this.visibleSlide <= 0) {
            this.visibleSlide >= this.slides.length - 1;
        } else {
            this.visibleSlide--;
        }
    },
  },
}
</script>

<style scoped>

    .experiences-container {
        margin-bottom: 2rem;
    }

    .experiences-container__title {
        width: 95%;
        margin: auto;
        padding-bottom: 1rem;
    }

    .experiences-container__section {
        display: flex;
        margin-left: 5rem;
    }

    .experiences-container__section-article {
        margin: 0 10px;
        border: solid #969696 1px;
        padding: 5px;
        max-width: 24rem;
        height: 22rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .experiences-container__section-article:hover {
        box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    .experiences-container__section-article img {
        max-height: 11rem;
        object-fit: cover;
        width: 23rem;
    }

    .experiences-container__section-article h4 {
        font-size: 0.9rem;
        padding-top: 5px;
        padding-right: 5px;
        padding-left: 5px;
    }

    .experiences-container__section-article p {
        font-size: smaller;
        padding-left:5px;
        padding-right: 5px;
        padding-top: 5px;
        overflow:hidden; 
        text-overflow:ellipsis;
        display:-webkit-box; 
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
        color: var(--tertiary-color);
    }

    .fa-star {
        color: var(--primary-color);
        padding-top: 1rem;
    }
    .duration-container{
        margin-top: 1rem;
        width: 12rem;
        padding-top:0.1rem;
        padding-left: 0.1rem;
        text-align: left;
    }
    .duration-container i{
        color: black;
        padding-right:5px;
    }
    .duration-container p{
        color: black;
        font-size: 0.8rem;
    }


@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {

    .experiences-container__section {
        margin-left: 3rem;
    }

    .experiences-container__section-article {
        max-width: 20rem;
        height: 18rem;
    }

    .experiences-container__section-article img {
        max-height: 8rem;
        width: 19rem;
    }

    .experiences-container__section-article h4 {
        font-size: 0.8rem;
    }

    .fa-star {
        padding-top:5px;
        color: var(--primary-color);
        width: 0.9rem;
    }
    .duration-container{
        width: 11rem;
        padding-left: 0.1rem;
    }
    .duration-container i{
        color: black;
        padding-right:5px;
    }
    .duration-container p{
        color: black;
        font-size: 0.7rem;
    }
}

@media (max-width: 424px) {
    .experiences-container__section {
        margin-left: 1rem;
    }

    .experiences-container__section-article {
        max-width: 16rem;
        height: 14rem;
    }

    .experiences-container__section-article img {
        max-height: 6rem;
        width: 15rem;
    }

    .experiences-container__section-article h4 {
        font-size: 0.6rem;
    }

    .experiences-container__section-article p {
        font-size: 0.5rem;
    }

    .fa-star {
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
        font-size: 0.5rem;
    }
}
</style>