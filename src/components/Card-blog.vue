<template>
    <router-link to="/blogId/blog._id">
      <div @click="getOneData(blog._id)">
        <div class="card-blog">
          <div class="card-blog-container">
            <img :src="blog.img" alt="foto blog post" class="card-blog-image">
            <div class="card-blog-info">
              <p>{{blog.author}}</p>
              <p>{{blog.createdAt}}</p>
              <p>{{blog.reading_time}}</p>
              <h4>{{blog.title}}</h4>
            </div>
            <hr>
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
  }
  .card-blog-container{
    position: relative;
    display: inline-block;
    text-align: center;
  }
  .card-blog-container h4{
    position: absolute;
    top: 16rem;
    left: 10px;
    color: white;
  }
  .card-blog-container hr{
    position: absolute;
    top: 21rem;
    left: 10px;
    width: 23rem;
    color: white;
  }
  .card-blog-info{
    display:flex;
    position: absolute;
    top: 30px;
    left: 10px;
    color: white;
    text-align: center;
  }

    .card-blog-info p{
      font-size: 0.8rem;
      padding-right: 1rem;

  }
  .card-blog-image{
    max-width: 25rem;
    height: 25rem;
    object-fit: cover;
    filter: brightness(0.6);
  }


</style>