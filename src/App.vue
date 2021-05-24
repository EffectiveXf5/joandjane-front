<template>
  <div>
    <Header/>
    <Header-mobile id="mobile"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
const TIMEOUT = 1;
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeaderMobile from './components/Header-mobile.vue'
export default {
  name: 'App',
  components: {
    Header,
    HeaderMobile,
    Footer
  },
   mounted () {
  if (this.$route.hash) {
  setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
  }
 },
  methods: {
   handleView() {
     this.mobileview
   },
    scrollTo: function (hash) {
      setTimeout(() => { location.href = hash }, TIMEOUT)
    }
  }
}
</script>

<style>
  @import './assets/css/general.css';
@media (min-width: 1000px) {
#mobile{
  display:none
  }
}

@media (max-width: 999px) and (min-width: 425px) {

}
</style>


