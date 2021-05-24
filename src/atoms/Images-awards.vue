<template>
    <div>
       <figure class="home-award">
           <img src="/images/premio-web.png" alt="premio" class="home-image">
       </figure> 
    </div>
</template>

<script>

export default {
  name: "Images-awards"
}
</script>
<style scoped>
.home-award{
  text-align: center;
}

@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {
  .home-image{
    width: 13rem;
  }
}

@media (max-width: 424px) {
  .home-image{
    width: 7rem;
  }
}
</style>
