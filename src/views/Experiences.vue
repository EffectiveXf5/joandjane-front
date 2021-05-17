<template>
  <main class="main"> 

    <Filter-activities />

    <Card-experience />

  </main>
</template>

<script>
import CardExperience from '../components/Card-experience.vue'
import FilterActivities from '../components/Filter-activities.vue'

export default {
  
  name: 'Experiences',

  components: {
    FilterActivities,
    CardExperience,
  },
}

</script>

<style scoped>

  

</style>