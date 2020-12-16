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

            <div class="col-12 q-pa-sm"> 
                <q-table
                class="my-sticky-header-table"
                :data="deviationSurveys" 
                :columns="columns" 
                row-key="name" 
                flat
                bordered
                :separator="separator">


                <template v-slot:body="props">
                    <q-tr
                    :props="props">
                        <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                        <q-td key="inclination" :props="props">{{ props.row.inclination }}</q-td>
                        <q-td key="azimuth" :props="props">{{ props.row.azimuth }}</q-td>
                        <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                        <q-td key="northSouth" :props="props">{{ props.row.northSouth }}</q-td>
                        <q-td key="eastWest" :props="props">{{ props.row.eastWest }}</q-td>
                        <q-td key="verticalSection" :props="props">{{ props.row.verticalSection }}</q-td>
                        <q-td key="verticalSection" :props="props">{{ props.row.doglegSeverity }}</q-td>
                    </q-tr>
                    </template>
                </q-table>
            </div>

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
        separator: 'cell',
        columns: [
            { name: "measuredDepth", label: "Measured Depth (ft)", field: "", align: "left" },
            { name: "inclination", label: "Inclination (deg)", field: "", align: "left" },
            { name: "azimuth", label: "Azimuth (deg)", field: "", align: "left" },
            { name: "trueVerticalDepth", label: "True Vertical Depth (ft)", field: "", align: "left" },
            { name: "northSouth", label: "North/South (ft)", field: "", align: "left" },
            { name: "eastWest", label: "East/West (ft)", field: "", align: "left" },
            { name: "verticalSection", label: "Vertical Section (ft)", field: "", align: "left" },
            { name: "doglegSeverity", label: "Dogleg Severity (rad/100)", field: "", align: "left" }
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
      var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          deviationSurveys: [],
          deviationSurveysString: ""
      }
      console.log(payload)
      this.$store.dispatch('wellPathStore/GetDeviationSurveys', payload)
      var tabCaption = "Wellpath Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>
.my-sticky-header-table{
    /* height or max-height is important */
  height: 500px;
}
    
</style>