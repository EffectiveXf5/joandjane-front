<template>
    <div v-show="visibleSlide === index" class="carousel__slide">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'CarouselSlide',

    props: ['visibleSlide', 'index'],

    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>