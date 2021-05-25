<template>
    <main class="blogs-container">
        <h2 class="blogs-container__title"><i class="fas fa-hashtag icon-hashtag"></i>Inspiración para viajar por Asturias</h2>

        <carousel 
            @next="next" 
            @prev="prev"
        >

            <section class="blogs-container__section">
                <carousel-slide class="blogs-container__section-article" v-for="(blog, index) in blogs" :key="index">
                    <img :src="blog.img" alt="">
                    <h4>{{blog.title}}</h4>
                </carousel-slide>
            </section>
        </carousel>
    </main>
</template>

<script>
import Carousel from '../components/Carousel/Carousel.vue'
import CarouselSlide from '../components/Carousel/CarouselSlide.vue'

export default {
    name: 'Experiences-home',

    components: { 
        Carousel,
        CarouselSlide
    },

    data() {
        return {
            blogs: [],

            visibleSlide: 4
        }
    },

    computed: {
        slidesLength() {
            return this.blogs.length;
        },
    },

    created() {
        this.listblogs()
    },

    methods: {
        listblogs() {
            this.axios.get('/blog')
                .then( res => {
                    console.log(res.data)
                    this.blogs = res.data;
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
    .blogs-container{
        margin-bottom: 2rem;
    }

    .blogs-container__title {
        width: 95%;
        margin: auto;
        padding-bottom: 1rem;
    }

    .blogs-container__section {
        display: flex;
        margin-left: 5rem;
    }

    .blogs-container__section-article {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 2rem;
        border: solid #969696 1px;
        padding: 5px;
        color:var(--secondary-color);
    }

    .blogs-container__section-article:hover {
        box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        background-color: rgb(255, 204, 51);
    }

    .blogs-container__section-article img{
        height: 23rem;
        object-fit: cover;
        max-width: 23rem;
        filter: brightness(0.7);
    }

    .blogs-container__section-article h4{
        position: absolute;
        top: 18rem;
        text-align: center;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        background-color: rgb(255, 204, 51);
        margin-right: 20px;
        margin-left: 20px;
        border-radius: 10px;
    }

@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {

    .blogs-container__section {
        margin-left: 3rem;
    }

    .blogs-container__section-article {
        margin-right: 1rem;
    }

    .blogs-container__section-article img{
        height: 16rem;
        max-width: 16rem;
    }

    .blogs-container__section-article h4{
        font-size: 0.9rem;
        top: 10rem;
    }
}

@media (max-width: 424px) {
    .blogs-container__section {
        margin-left: 1.5rem;
    }

    .blogs-container__section-article {
        margin-right: 0.5rem;
    }
    .blogs-container__section-article img{
        height: 12rem;
        max-width: 12rem;
    }

    .blogs-container__section-article h4{
        font-size: 0.7rem;
        top: 8rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-bottom: 0.3rem;
        padding-top: 0.3rem;
        margin-right: 15px;
        margin-left: 15px;
    }
}

</style>