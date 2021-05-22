<template>
  <div>
    <h1 class="title-blog-list">INSPIRACIÓN PARA VIAJAR POR <span style="color:#FFCC33">ASTURIAS</span></h1>
    <Card-list-blog />
  </div>
</template>

<script>
import CardListBlog from '../components/Card-list-blog.vue'

export default {
  name: 'Blog-global',
  components: {
    CardListBlog
  }
}
</script>

<style scoped>
.title-blog-list{
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
}

@media (min-width: 1000px) {
  }

@media (max-width: 999px) and (min-width: 425px) {
  .title-blog-list{
    font-size: 1.8rem;
    text-align: center;
  }
  
}

@media (max-width: 424px) {
  .title-blog-list{
    font-size: 1rem;
    text-align: center;
  }
}
</style>