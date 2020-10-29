<template>
    <div>   
        <div class="row">
            <div class="col-12 q-pa-sm">
                Vertical Section Definition
                <br>
                <hr/>
           </div>

            <div class="col-6 q-pa-sm">
                Origin N: 
            </div>
            <div class="col-6 q-pa-sm">
                0.00 ft 
            </div>

             <div class="col-6 q-pa-sm">
                Origin E: 
            </div>
            <div class="col-6 q-pa-sm">
                0.00 ft 
            </div>

             <div class="col-6 q-pa-sm">
                Azimuth:
            </div>
            <div class="col-6 q-pa-sm">
                142.69 degrees 
            </div>

            <div class="col-12 q-pa-sm">
                <hr/>
           </div>

            <div class="row" style="height:40px"></div>

            <div class="col-12 q-pa-sm"> 
                <q-btn 
                    size="sm"
                    label="Import"
                    @click="updateIsImportDialogVisible">
                </q-btn>

                <q-dialog v-model="isImportDialogVisible" class="bg-accent">
                    <div class="q-pa-sm bg-accent">
                        <msExcelImport-app></msExcelImport-app>
                    </div>
                </q-dialog>
            </div>

            <q-table  
             :data="deviationSurveys" 
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             style="width:100%;">


            <template v-slot:body="props">
                <q-tr
                :props="props">
                    <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                    <q-td key="inclination" :props="props">{{ props.row.inclination }}</q-td>
                    <q-td key="azimuth" :props="props">{{ props.row.azimuth }}</q-td>
                </q-tr>
                </template>
            </q-table>

        </div>
    </div>
</template>

<script>
import msExcelImport from 'components/dataImport/msExcelImport.vue';
export default {
    computed:{
        deviationSurveys() {
        return this.$store.getters['wellPathStore/deviationSurveys'];
        },
        isImportDialogVisible() {
        return this.$store.getters['wellPathStore/isImportDialogVisible'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport
    },
     data () {
        return {
        columns: [
            { name: "measuredDepth", label: "MD (ft)", field: "", align: "left" },
            { name: "inclination", label: "Inc (deg)", field: "", align: "left" },
            { name: "azimuth", label: "Azi (deg)", field: "", align: "left" }
        ]
    }
  },
  methods: {
      updateIsImportDialogVisible(){
          var context =  this;
          this.$store.commit('dataImportStore/SetTypeOfInput', "Well Path");
          this.$store.commit('wellPathStore/SetisImportDialogVisible', true);
      }
  },
  created(){
      var Conn = this.$store.getters['authStore/companyDBConnectionString'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var payload = {
          companyDBConnectionString: Conn,
          designId: selectedTorqueDragDesign.designId,
          deviationSurveys: [],
          deviationSurveysString: ""
      }
      console.log(payload)
      this.$store.dispatch('wellPathStore/GetDeviationSurveys', payload)
  }
}
</script>