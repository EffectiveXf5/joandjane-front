<template>
     <div class="home-us" id="about-us">
          <div class="about-title">
               <h2><i class="fas fa-hashtag icon-hashtag"></i>¿Quiénes somos?</h2>
          </div>
          <div class="about-video">
               <video src="/video/video-jojane.mp4" class="video-container" controls></video>
          </div>
     </div>
</template>

<script>

export default {
  name: 'Home-about',
}
</script>

<style scoped>
.home-us{
  margin-bottom:2rem;
}
.about-title{
  width: 95%;
  margin: auto;
  margin-top:1rem;
  margin-bottom:1rem;
  font-weight: bolder;
}
.about-video{
     text-align: center;
}
.video-container{
     width: 80%;
}
</style>