<template>
    <main>
        <section>
            <article>
                <h1>{{activity.title}}</h1>
                <p>{{activity.sumary}}</p>
            </article>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Test',

    data() {
        return {
            activityId: '',
            activity: ''
        }
    },

    mounted() {
        this.activityId = this.$route.params.id
        this.axios.get(`/activity/${this.activityId}`)
            .then ( res => {
                console.log(res.data)
                this.activity = res.data
            })
    }
}
</script>

<style>

</style>