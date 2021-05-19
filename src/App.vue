<template>
  <div>
    <Header/>
    <Header-mobile id="mobile"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HeaderMobile from './components/Header-mobile.vue'
export default {
  name: 'App',
  components: {
    Header,
    HeaderMobile,
    Footer
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


