<template>
  <div>
     <Home-intro/>
     <Home-destinations/>
     <!-- <Card-experience/> -->
     <!-- <CardListExperiences/> -->
     <Home-cancelation-policy/>
     <Home-about/>
     <Home-blog-all/>
     <Images-awards/>
  </div>
</template>

<script>
import HomeIntro from '../organisms/Home-intro.vue'
import HomeDestinations from '../organisms/Home-destinations'
import HomeCancelationPolicy from '../organisms/Home-cancelation-policy'
import HomeAbout from '../organisms/Home-about'
import ImagesAwards from '../atoms/Images-awards.vue'
 import HomeBlogAll from '../organisms/Home-blog-all.vue'
 //import CardListExperiences from '../components/CardListExperiences.vue'
// import CardExperience from '../components/Card-experience.vue'

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeDestinations,
    HomeCancelationPolicy,
    HomeAbout,
    ImagesAwards,
    HomeBlogAll,
    // CardExperience,
    //CardListExperiences
  }
}
</script>

<style scoped>

</style>
