<template>
    <main class="main-blog">
        <section class="main-blog__section">
            <article class="main-blog__section-article">
                <div class="section__blog-detailsContainer">
                    <h5><i class="fas fa-user"></i> {{blog.author}}</h5>
                    <h5><i class="fas fa-clock"></i> {{blog.reading_time}}</h5>
                    <h5><i class="far fa-calendar-alt"></i> {{blog.createdAt}}</h5>
                </div>
                <div class="section__blog-titleContainer">
                    <figure >
                        <img :src="blog.img" alt="foto blog post" class="section__blog-image">
                    </figure>
                    <h3 class="section__blog-title">{{blog.title}}</h3>
                </div>

                <p class="section__blog-description">{{blog.description}}</p>

            </article>
        </section>

    </main>
</template>

<script>
export default {
    name: 'OnePostBlog',

    data() {
        return {
            blogId: '',
            blog: ''
        }
    },

    mounted() {
        this.blogId = this.$route.params.id
        this.axios.get(`/blog/${this.blogId}`)
            .then ( res => {
                console.log(res.data)
                this.blog = res.data
            })
    }
}
</script>

<style scoped>

.main-blog__section{
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.section__blog-detailsContainer{
    display: flex;
    justify-content: center;
}

.section__blog-detailsContainer h5{
    text-align: center;
    padding-right: 5rem;
}

.main-blog__section-article{
    justify-content: center;
}

.section__blog-titleContainer{
    position: relative;
    display: inline-block;
    text-align: left;
    margin-bottom:1rem;
}
.section__blog-title{
    position: absolute;
    top: 10px;
    font-size: 2.5rem;
    padding-left: 3rem;
    padding-right: 3rem;
    color: ivory;
    text-align: left;
}
.section__blog-image{
    filter: brightness(0.6);
    max-height: 25rem;
    width: auto;
}

.section__blog-description{
    text-align: justify;
    margin-right: 15rem;
    margin-left: 15rem;
}




@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {
    .section__blog-detailsContainer{
        display: flex;
        justify-content: center;
    }

    .section__blog-detailsContainer h5{
        text-align: center;
        padding-right: 3rem;
        margin-left: 2rem;
    }

    .section__blog-title{
        position: absolute;
        font-size: 2rem;
        padding-left: 3rem;
        padding-right: 3rem;
        top: 10px;
        color: ivory;
    }
    .section__blog-image{
        filter: brightness(0.6);
        max-height: 20rem;
        width: auto;
    }

    .section__blog-description{
        text-align: justify;
        margin-right: 4rem;
        margin-left: 4rem;
    }
}

@media (max-width: 424px) {
        .section__blog-detailsContainer{
        display: flex;
        justify-content: center;
    }

    .section__blog-detailsContainer h5{
        text-align: center;
        padding-right: 2rem;
        margin-left:2rem;
    }

    .section__blog-title{
        position: absolute;
        font-size: 1.8rem;
        padding-left: 2rem;
        padding-right: 2rem;
        top: 10px;
        color: ivory;
    }
    .section__blog-image{
        filter: brightness(0.6);
        max-height: 15rem;
        width: auto;
    }

    .section__blog-description{
        text-align: justify;
        margin-right: 3rem;
        margin-left: 3rem;
        font-size: 0.9rem;
    }
}
</style>