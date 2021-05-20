<template>
    <main class="main">
        <section class="main__section">
            <article class="main__section-article">
                <figure>
                    <img src="@/assets/images/playas-blog.jpg" alt="">
                </figure>

                <h3 class="section__article-title">{{blog.title}}</h3>

                <div class="section__article-detailsContainer">
                    <h5><i class="fas fa-user"></i> Autor/a: {{blog.author}}</h5>
                    <h5><i class="fas fa-clock"></i> Tiempo de lectura: {{blog.reading_time}}</h5>
                    <h5><i class="far fa-calendar-alt"></i> Fecha creación: {{blog.createdAt}}</h5>

                </div>

                <p class="section__article-sumary">{{blog.description}}</p>

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

</style>