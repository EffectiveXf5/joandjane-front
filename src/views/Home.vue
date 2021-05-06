<template>
  <div>
     <Home-intro/>
     <Card-experience/>
     <Home-destinations/>
     <Home-cancelation-policy/>
     <Home-about/>
     <Home-blog-all/>
     <Images-awards/>
  </div>
</template>

<script>
import CardExperience from '../components/Card-experience'
import HomeIntro from '../organisms/Home-intro'
import HomeDestinations from '../organisms/Home-destinations'
import HomeCancelationPolicy from '../organisms/Home-cancelation-policy'
import ImagesAwards from '../atoms/Images-awards'
import HomeAbout from '../organisms/Home-about'
import HomeBlogAll from '../organisms/Home-blog-all.vue'

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeDestinations,
    HomeCancelationPolicy,
    CardExperience,
    ImagesAwards,
    HomeAbout,
    HomeBlogAll
  }

}
</script>

<style scoped>

</style>
