<template>
    <main class="main">
        <section class="main__section">
            <article class="main__section-article">
                <figure>
                    <img :src="activity.img" alt="">
                </figure>

                <h3 class="section__article-title">{{activity.title}}</h3>
                <p class="section__article-sumary">{{activity.sumary}}</p>

                <div class="section__article-detailsContainer">
                    <h5><i class="fas fa-clock"></i> Duración: {{activity.duration}}</h5>
                    <h5><i class="fas fa-times"></i> Cancelación: {{activity.cancelation}}</h5>
                    <h5><i class="fas fa-check"></i> Confirmación: {{activity.instant_confirmation}}</h5>
                    <h5><i class="fas fa-mobile-alt"></i> Ticket Movil</h5>
                    <h5><i class="fas fa-paw"></i> Mascotas: {{activity.pet_friendly}}</h5>
                    <h5><i class="fas fa-child"></i> Niños: {{activity.children}}</h5>
                </div>

                <h3 class="section__article-title">La experiencia</h3>
                <p class="section__article-experience">{{activity.experience_details}}</p>

                <h3 class="section__article-title">¿Que Incluye?</h3>

                <div class="section__article-includes">
                    <div v-for="(exp, index) in activity.includes" :key="index">
                        <h5>{{exp}}</h5>
                    </div>
                </div>
               
                <h3 class="section__article-title">Prepara tu experiencia</h3>
                <p class="section__article-prepare-experience">{{activity.prepare_experience}}</p>
                
                <div class="section__article-reviews-container">
                    <h3 class="section__article-title">Opiniones de los Usuarios</h3>
                    <div class="section__article-reviews-header">
                        <i class="fas fa-thumbs-up"></i>
                        <h4>Reviews verificadas</h4>
                        <p>Nuestras reviews solo provienen de usuarios que hayan hecho ésta actividad</p>
                    </div>

                    <div class="section__article-reviews-star">
                        <div>
                            <h6>5 Estrellas 0%</h6>
                            <h6>4 Estrellas 0%</h6>
                            <h6>3 Estrellas 0%</h6>
                            <h6>2 Estrellas 0%</h6>
                            <h6>1 Estrellas 0%</h6>
                        </div>

                        <div class="section__article-reviews">
                            <div v-for="(rev, index) in activity.reviews" :key="index">
                                <h5>{{rev}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
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
        object-fit: cover;
    }

    .section__article-title {
        padding: 2px;
        font-size: x-large;
        font-weight: bolder;
    }

    .section__article-sumary {
        padding: 2px;
        color: var(--tertiary-color);
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

    .section__article-detailsContainer h5 i {
        padding: 5px;
        font-size: larger;
        margin-right: 10px;
    }

    .section__article-detailsContainer h5 {
        padding: 5px;
        font-size: 1rem;
        margin-left: 10px;
    }

    .section__article-experience {
        color: var(--tertiary-color);
        margin: 20px auto;
    }

    .section__article-includes {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }

    .section__article-includes div {
        height: 120px;
        width: 120px;
        text-align: center;
        font-size: x-small;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.17);
    }

    .section__article-prepare-experience {
        color: var(--tertiary-color);
        margin: 20px 0;
    }

    .section__article-reviews-header {
        margin: 20px auto;
        background-color: var(--primary-color);
        padding: 6px;
        display: grid;
        grid-template-areas: 'i h'
                             'i p';
        grid-template-columns: 25% 75%;
        grid-template-rows: 1;
    }

    .section__article-reviews-header h1 {
        grid-area: h;
    }

    .section__article-reviews-header i {
        grid-area: i;
        font-size: 3rem;
        align-self: center;
        justify-self: center;
    }

    .section__article-reviews-header p {
        grid-area: p;
        font-size: smaller;
    }

    .section__article-reviews-star {
        display: grid;
        grid-template-areas: 's r';
        grid-template-columns: repeat( 2, 1fr);
    }

    .section__article-reviews-star div h6 {
        padding: 6px;
    }

</style>