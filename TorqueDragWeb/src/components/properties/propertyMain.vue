<template>
    <div class="bg-primary text-accent">
         <div class="row">
             <div class="col-12">
                 <wellSchematic v-if='isWellSchematic'></wellSchematic>
             </div>
         </div>
    </div>
</template>

<script>
import wellSchematic from 'components/properties/wellSchematic.vue'
export default {
    computed:{
        isWellSchematic(){
            return this.$store.getters['propertyGridStore/isWellSchematic'];
        }
    },
    components:{
        wellSchematic
    }
}
</script>

<style>
table {
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid rgba(255,255,255, 1);
}
</style>