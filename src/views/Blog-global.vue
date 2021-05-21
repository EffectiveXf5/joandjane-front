<template>
  <div>
    <h2 class="title-blog-list">Inpiración para viajar por Asturias</h2>
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
  text-align: center;
}
</style>