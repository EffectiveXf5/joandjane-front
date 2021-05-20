<template>
    <router-link to="/blogId/blog._id">
      <div @click="getOneData(blog._id)">
        <img src="@/assets/images/playas-blog.jpg">
        <h4>{{blog.title}}</h4>
        <p>{{blog.author}}</p>
        <p>{{blog.createdAt}}</p>
        <p>{{blog.reading_time}}</p>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'CardBlog',
  
  props: ['blog'],

  data() {
    return {
      blogId: []
    }
  },

  methods: {
    getOneData(_id) {
      console.log(_id)
        this.$router.push(`/blogId/${_id}`)
    },
  },
}
</script>

<style scoped>



</style>