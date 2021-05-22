<template>
  <section class="main__section">
      <article class="main__section-article" v-for="(blog, index) in blogs" :key="index">
        <Card-blog :blog='blog' />
      </article>
    </section>
</template>

<script>
import CardBlog from './Card-blog.vue'

export default {
  
  name: 'CardListBlog',

  components: {
    CardBlog,
  },

  data() {
    return {
      blogs: []
    }
  },

  created() {
    this.listBlogs()
  },

  methods: {
    listBlogs() {
      this.axios.get('/blog')
        .then( res => {
          console.log(res.data)
          this.blogs = res.data;
        })

        .catch( e => {
          console.log(e.response)
        })
    }
  },
}
</script>

<style scoped>
.main__section{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  width: 70%;
  margin:auto;
}

@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {
  .main__section{
    display:grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;

  }
}

@media (max-width: 424px) {
    .main__section{
    display:grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;

  }
}
</style>