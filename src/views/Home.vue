<template>
  <div>
     <Home-intro/>
     <Search/>
     <Experiences-home />
     <Home-destinations/>
     <Home-cancelation-policy/>
     <Home-about/>
     <Home-blog-all/>
     <Images-awards/>
  </div>
</template>

<script>
import HomeIntro from '../organisms/Home-intro.vue'
import HomeDestinations from '../organisms/Home-destinations'
import Search from '../atoms/Search.vue'
import ExperiencesHome from '../components/Experiences-home'
import HomeCancelationPolicy from '../organisms/Home-cancelation-policy'
import HomeAbout from '../organisms/Home-about'
import ImagesAwards from '../atoms/Images-awards.vue'
import HomeBlogAll from '../organisms/Home-blog-all.vue'

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeDestinations,
    Search,
    ExperiencesHome,
    HomeCancelationPolicy,
    HomeAbout,
    ImagesAwards,
    HomeBlogAll,

  }
}
</script>

<style scoped>

</style>
