<template>
  <main>
    <section>
      <article v-for="(activity, index) in activities" :key="index">
        <img :src="activity.img">
        <h4>{{activity.title}}</h4>
        <p>{{activity.sumary}}</p>
        <div>{{activity.price}}</div>
      </article>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Experiences',

  data() {
    return {
      activities: []
    }
  },

  created() {
    this.listActivities()
  },

  methods: {
    listActivities() {
      this.axios.get('/activity')
        .then( res => {
          this.activities = res.data;
          console.log(this.activities[0].img)
        })

        .catch( e => {
          console.log(e.response)
        })
    }
  },
}
</script>

<style scoped>

</style>