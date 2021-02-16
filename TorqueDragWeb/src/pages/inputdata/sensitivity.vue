<template>
    <div class="row bg-secondary dialogBorder" style="width: 500px; max-height: 700px;">
        <div class="col-10">
            <div class="row">
                <q-bar class="col-12 q-pa-sm row bg-secondary text-accent" >
                    <div>Friction Factors</div>
                    <q-space />
                    <q-btn  
                        icon="add_box"
                        size="sm"
                        flat
                        @click="showSensitivityDialog">
                        <q-tooltip>
                            Add more sensitivities
                        </q-tooltip>
                    </q-btn>
                </q-bar>
            </div>

            <sensitivityDialog2></sensitivityDialog2>
          </div>

          <div class="col-2 bg-primary">

          </div>

          <q-dialog v-model="SensitivityDialog" class="bg-primary">
            <div class="q-pa-sm bg-primary">
                <sensitivityDialog></sensitivityDialog>
            </div>
        </q-dialog>
    </div>
    
</template>

<script>
import sensitivityDialog from 'pages/inputdata/sensitivityDialog.vue'
import sensitivityDialog2 from 'pages/inputdata/sensitivityDialog2.vue'
export default {
    computed:{
        SensitivityDialog(){
            return this.$store.getters['simulationStore/SensitivityDialog'];
        }
    },
    components:{
        sensitivityDialog,
        sensitivityDialog2
    },
    data() {
        return {
        }
    },
    methods: {
        showSensitivityDialog(){
            this.$store.commit('simulationStore/showSensitivityDialog', true);
        }
    }
    
}
</script>

<style scoped>

.textBox{
    width: 90px;
}

.my-sticky-header-table{
  height: 400px;
}

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
    max-height: 700px;
  /* height: 50px; */
}

</style>