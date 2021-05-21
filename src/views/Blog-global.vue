<template>
  <div>
    <h2 class="title-blog-list">Inpiración para <br>viajar por Asturias</h2>
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

</style>