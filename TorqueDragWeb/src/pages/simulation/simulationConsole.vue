<template>
    <div class="bg-primary">
        <div class="row" v-show="showSimulatedReturnData">
            <div class="col-12 q-pa-sm bg-accent" style="height:500px;">

            </div>
        </div>
        <div class="row">
            <div class="col-12 q-pa-sm bg-primary">
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
    },
    created(){
        var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            this.$store.dispatch('simulationStore/RunSimulation', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id
            });
    }
}
</script>