<template>
    <div class="bg-accent">
        <div class="row" v-show="showSimulatedReturnData">
            <div class="col-12 flex flex-center bg-accent" style="height:100vh">

            </div>
        </div>
        <div class="row">
            <div class="col-12">
                 <q-inner-loading :showing="visible">
                    <q-spinner-gears size="100px" color="primary" />
                </q-inner-loading>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        visible(){
        return this.$store.getters['simulationStore/visible'];
        },
        showSimulatedReturnData(){
        return this.$store.getters['simulationStore/showSimulatedReturnData'];
        },
    }
}
</script>