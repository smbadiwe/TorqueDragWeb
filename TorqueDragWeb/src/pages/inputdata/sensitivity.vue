<template>
    <div class="row bg-secondary dialogBorder" style="max-height: 700px;">
        <div class="col-12">
            <div class="row">
                <q-bar class="col-12 q-pa-sm row bg-secondary text-accent" >
                    <div class="q-pa-sm text-left">
                        <input type="checkbox" id="checkbox" v-model="isTDSensitivity">
                        <label for="checkbox"> Use Sensyivity Friction Factors </label>
                    </div>
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

            <!-- <sensitivityDialog2></sensitivityDialog2> -->
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
        },
        isTDSensitivity(){
            return this.$store.getters['simulationStore/isTDSensitivity'];
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
    },
    created(){
        var tabCaption = "Sensitivity";
      this.$store.commit('settingsStore/GetTabCaptionRight', tabCaption);
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