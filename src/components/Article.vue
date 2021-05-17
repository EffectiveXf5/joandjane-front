<template>
    <main class="main">
        <section class="main__section">
            <article class="main__section-article">
                <figure>
                    <img src="@/assets/images/cares.jpg" alt="">
                </figure>

                <h3 class="section__article-title">{{activity.title}}</h3>
                <p class="section__article-sumary">{{activity.sumary}}</p>

                <div class="section__article-detailsContainer">
                    <h5>Duración: {{activity.duration}}</h5>
                    <h5>Cancelación: {{activity.cancelation}}</h5>
                    <h5>Confirmación: {{activity.instant_confirmation}}</h5>
                    <h5>Ticket: {{activity.mobile_ticket}}</h5>
                    <h5>Mascotas: {{activity.pet_friendly}}</h5>
                </div>

                <h3 class="section__article-title">La experiencia</h3>
                <p>{{activity.experience_details}}</p>

                <h3 class="section__article-title">¿Que Incluye?</h3>
                <div>
                    {{activity.includes}}
                </div>
               
                <h3 class="section__article-title">Prepara tu experiencia</h3>
                <p>{{activity.prepare_experience}}</p>

                <h3>Opiniones de los Usuarios</h3>
                <p>{{activity.reviews.date}}</p>
                <p>{{activity.reviews.name}}</p>
                <p>{{activity.reviews.comment}}</p>
            </article>
        </section>

        <section>
            <h3 class="section__article-title">Localización</h3>
            <img :src="activity.location" alt="">
        </section>
    </main>
</template>

<script>
export default {
    name: 'Article',

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

<style scoped>

    .main__section {
        width: 60%;
        margin: 40px;
    }

    .main__section-article figure img {
        width: 100%;
        height: 360px;
        object-fit: fill;
    }

    .section__article-title {
        padding: 2px;
    }

    .section__article-description {
        padding: 2px;
    }

    .section__article-detailsContainer {
        width: 100%;
        margin: 20px 0;
        background-color: var(--quaternary-color);
        padding: 20px;
    }

    .section__article-detailsContainer h5 {
        padding: 5px;
    }

</style>