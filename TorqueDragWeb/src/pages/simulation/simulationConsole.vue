<template>
    <div class="bg-primary">
        <div class="row" v-show="showView">
            <div class="col-12 q-pa-sm bg-primary" style="height:500px;">

            </div>
        </div>
        <div class="row">
            <div class="col-12 q-pa-sm bg-primary">
                 <q-inner-loading :showing="showLoader">
                    <q-spinner-gears size="100px" color="primary" />
                </q-inner-loading>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        showLoader(){
            return this.$store.getters['dataImportStore/showLoader'];
        },
        showView(){
            return this.$store.getters['dataImportStore/showImportView'];
        },
    },
    created(){
        
    }
}
</script>