<template>
    <router-link to="/blogId/blog._id">
      <div @click="getOneData(blog._id)">
        <div class="card-blog">
          <div class="card-blog-container">
            <img src="@/assets/images/playas-blog.jpg">
            <div class="card-blog-info">
              <p>{{blog.author}}</p>
              <p>{{blog.createdAt}}</p>
              <p>{{blog.reading_time}}</p>
              <h4>{{blog.title}}</h4>
            </div>
          </div>
        </div>
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
  .card-blog{
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
  }
  .card-blog-container{
    position: relative;
    display: inline-block;
    text-align: center;
  }
  .card-blog-container h4{
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .card-blog-container img{
    max-width: 25rem;
    height: 25rem;
    object-fit: cover;
  }
  .card-blog-info{
    position: absolute;
    top: 30px;
    left: 10px;
  }

</style>