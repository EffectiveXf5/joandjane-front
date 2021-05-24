<template>
    <main class="experiences-container">
        <h2 class="experiences-container__title"><i class="fas fa-hashtag icon-hashtag"></i>Inspiración para viajar por Asturias</h2>

        <carousel 
            @next="next" 
            @prev="prev"
        >

            <section class="experiences-container__section">
                <carousel-slide class="experiences-container__section-article" v-for="(blog, index) in blogs" :key="index">
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