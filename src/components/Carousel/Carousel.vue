<template>
    <section class="carosuel">
        <slot></slot>

        <button @click="next" class="carousel__btn__next">Next</button>
        <button @click="prev" class="carousel__btn__prev">Prev</button>
    </section>
</template>

<script>
export default {
    name: 'Carousel',

    data() {
        return {
            
        }
    },

    methods: {
        next() {
            this.$emit('next')
        },

        prev() {
            this.$emit('prev')
        },
    },
}
</script>

<style>

</style>