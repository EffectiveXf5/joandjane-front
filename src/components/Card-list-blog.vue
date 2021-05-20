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


</style>