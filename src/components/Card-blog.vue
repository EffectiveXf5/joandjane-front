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
            <div class="card-blog-social">
              <p><i class="far fa-eye"></i>&nbsp;184</p>
              <p><i class="far fa-comment"></i>&nbsp;0</p>
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
  }
  .card-blog-container{
    position: relative;
    display: inline-block;
    text-align: center;
  }
  .card-blog-image{
    max-width: 25rem;
    height: 25rem;
    object-fit: cover;
    filter: brightness(0.6);
  }
  .card-blog-info{
    display:flex;
    position: absolute;
    top: 20px;
    left: 10px;
    color: white;
    text-align: left;
  }
  .card-blog-info p{
    font-size: 0.8rem;
    padding-right: 1rem;
  }
  .card-blog-container h4{
    position: absolute;
    top: 17rem;
    left: 10px;
    color: white;
  }
  .card-blog-container hr{
    position: absolute;
    top: 22rem;
    left: 10px;
    width: 23rem;
    color: white;
  }

  .card-blog-social{
    display:flex;
    position: absolute;
    top: 23rem;
    left: 10px;
    color: white;
    text-align: center;
    font-size: 0.8rem;
  }
  .card-blog-social p{
    padding-right: 1rem;
  }

@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {
  .card-blog-image{
    max-width: 20rem;
    height: 20rem;
  }
  .card-blog-info p{
    font-size: 0.7rem;
    padding-right: 1rem;
  }
  .card-blog-container h4{
    top: 11rem;
  }
  .card-blog-container hr{
    top: 17rem;
    left: 10px;
    width: 18rem;
  }

  .card-blog-social{
    top: 18rem;
    left: 10px;
    font-size: 0.8rem;
  }
  .card-blog-social p{
    font-size: 0.7rem;
  }
}

@media (max-width: 424px) {

  .card-blog-image{
    max-width: 15rem;
    height: 15rem;
  }
  .card-blog-info p{
    font-size: 0.5rem;
    padding-right: 1rem;
  }
  .card-blog-container h4{
    top: 8rem;
    font-size:0.8rem;
  }
  .card-blog-container hr{
    top: 12.5rem;
    left: 10px;
    width: 13rem;
  }

  .card-blog-social{
    top: 13rem;
    left: 10px;
  }
  .card-blog-social p{
    font-size: 0.5rem;
  }
}

</style>