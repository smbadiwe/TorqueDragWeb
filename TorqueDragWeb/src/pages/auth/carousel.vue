<template>
    <div>
        <q-carousel
        height="480px"
        style="text-shadow: 1px 1px 2px #333;"
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        >
            <q-carousel-slide 
            :name="1" 
            img-src="~/assets/images/rig_1.jpg">
            <div class="absolute-bottom custom-caption">
                <div class="text-h2 text-center text-primary">Join Us Today</div>
                <div class="text-subtitle1 text-center text-primary">together, we can achieve anything</div>
            </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
            slide: 1
        }
    }
}
</script>

<style scoped>

</style>