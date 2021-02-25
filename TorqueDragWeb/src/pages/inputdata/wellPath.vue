<template>
    <div> 
        <q-scroll-area
            :visible="visible"
        style="height: 700px;"
        > 
            <div class="row text-accent"
            v-if="expanded">
            <div class="col-12 q-pa-md">
                    <q-expansion-item
                        v-model="expanded"
                        dense
                        dense-toggle
                        expand-separator
                        label="Add Datum"
                        clickable
                        @click="ExpandExander2"
                    >
                        <!-- <q-card>
                        <q-card-section> -->
                            
                            <div class="row">

                                <div class="col-6 q-pt-sm">Measured Depth (ft)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="measuredDepth"></div>
                                <!-- <div class="col-2"></div> -->

                                <div class="col-6 q-pt-sm">True Vertical Depth (ft)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trueVerticalDepth"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Inclination (deg)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="inclination"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">azimuth (deg)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="azimuth"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">NorthSouth (ft)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="northSouth"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">EastWest (ft)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="eastWest"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Vertical Section (ft)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="verticalSection"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Dogleg Severity (deg/100ft)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="doglegSeverity"></div>
                                <!-- <div class="col-4"></div> -->

                                <div style="height: 50px;"></div>

                                <div align="right">
                                <q-btn 
                                    class="text-center"
                                    size="sm"
                                    :label="buttonLabel"
                                    @click="AddSurveyRecord">
                                </q-btn>
                                </div>
                    
                            </div>
                        <!-- </q-card-section> -->

                        <!-- <q-card-actions align="right">
                            <q-btn 
                                size="sm"
                                label="Add"
                                @click="PostDatum">
                            </q-btn>
                        </q-card-actions> -->

                        <!-- </q-card> -->
                    </q-expansion-item>
    
                </div>
            </div>
            
            <div 
            v-if="expanded2"
            class="row" id="wellpathpage">
                <div class="col-12 q-pa-sm">
                    Vertical Section Definition
                    <br>
                    <hr/>
            </div>

                <div class="col-6 q-pt-sm">Origin N (ft): </div>
                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>

                <div class="col-6 q-pt-sm">Origin E (ft): </div>
                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>

                <div class="col-6 q-pt-sm">Azimuth (degrees):</div>
                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>

                <div class="col-12 q-pa-sm">
                    <hr/>
            </div>

                <div class="row" style="height:40px"></div>

                <div class="col-12 q-pa-sm text-right"> 
                    <q-btn 
                        class="q-pa-none"
                        icon="import_contacts"
                        size="sm"
                        @click="updateIsImportDialogVisible">
                        <q-tooltip>
                            Import Survey Table
                        </q-tooltip>
                    </q-btn>

                    <q-btn 
                        class="q-pa-none"
                        icon="add_box"
                        size="sm"
                        @click="ExpandExander">
                        <q-tooltip>
                            Add Survey Record
                        </q-tooltip>
                    </q-btn>

                    <q-btn 
                        class="q-pa-none"
                        icon="save"
                        size="sm"
                        @click="SaveSurveyTable">
                        <q-tooltip>
                            Save Survey Table
                        </q-tooltip>
                    </q-btn>

                    <q-dialog v-model="isImportDialogVisible" class="bg-secondary">
                        <div class="q-pa-sm bg-secondary">
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
                    dark
                    color="amber"
                    bordered
                    :separator="separator">


                    <template v-slot:body="props">
                        <q-tr
                        :props="props">
                            <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                            <q-td key="actions" :props="props">
                                <q-btn 
                                    class="q-pa-none"
                                    icon="system_update_alt"
                                    size="sm"
                                    @click="updateSurveyRecord(props.row)">
                                    <q-tooltip>
                                        Update survey record
                                    </q-tooltip>
                                </q-btn>
                            </q-td>
                            <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                            <q-td key="inclination" :props="props">{{ props.row.inclination }}</q-td>
                            <q-td key="azimuth" :props="props">{{ props.row.azimuth }}</q-td>
                            <q-td key="northSouth" :props="props">{{ props.row.northSouth }}</q-td>
                            <q-td key="eastWest" :props="props">{{ props.row.eastWest }}</q-td>
                            <q-td key="verticalSection" :props="props">{{ props.row.verticalSection }}</q-td>
                            <q-td key="doglegSeverity" :props="props">{{ props.row.doglegSeverity }}</q-td>
                        </q-tr>
                        </template>
                    </q-table>
                </div>

            </div>
        </q-scroll-area>
    </div>
</template>

<script>
import msExcelImport from 'components/dataImport/msExcelImport.vue';
import { convertToNumber } from 'boot/utils.js'
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
            { name: "actions", label: "", field: "", align: "left" },
            { name: "trueVerticalDepth", label: "True Vertical Depth (ft)", field: "", align: "left" },
            { name: "inclination", label: "Inclination (deg)", field: "", align: "left" },
            { name: "azimuth", label: "Azimuth (deg)", field: "", align: "left" },
            { name: "northSouth", label: "North/South (ft)", field: "", align: "left" },
            { name: "eastWest", label: "East/West (ft)", field: "", align: "left" },
            { name: "verticalSection", label: "Vertical Section (ft)", field: "", align: "left" },
            { name: "doglegSeverity", label: "Dogleg Severity (rad/100)", field: "", align: "left" }
        ],
        visible: true,
        expanded: false,
        expanded2: true,
        measuredDepth: '',
        trueVerticalDepth: '',
        inclination: '',
        azimuth: '',
        northSouth: '',
        eastWest: '',
        verticalSection: '',
        doglegSeverity: '',
        selectedItem: {},
        isAdd: true,
        buttonLabel: 'Add',
        id: null
        
    }
  },
  methods: {
      updateIsImportDialogVisible(){
          var context =  this;
          this.$store.commit('dataImportStore/SetTypeOfInput', "Well Path");
          this.$store.commit('wellPathStore/SetisImportDialogVisible', true);
          this.$store.commit('dataImportStore/SetimportDialogCaption', "Import Deviation Survey");
   
      },
      AddSurveyRecord(){
          var context = this;
          context.buttonLabel = 'Add';
          var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
          var IdentityModel = this.$store.getters['authStore/IdentityModel'];

            if(context.isAdd == true){
                context.measuredDepth = convertToNumber(context.measuredDepth);
                context.trueVerticalDepth = convertToNumber(context.trueVerticalDepth);
                context.inclination = convertToNumber(context.inclination);
                context.azimuth = convertToNumber(context.azimuth);
                context.northSouth = convertToNumber(context.northSouth);
                context.eastWest = convertToNumber(context.eastWest);
                context.verticalSection = convertToNumber(context.verticalSection);
                context.doglegSeverity = convertToNumber(context.doglegSeverity);
                this.$store.commit('wellPathStore/SaveSurveyTable', {
                    measuredDepth: context.measuredDepth,
                    trueVerticalDepth: context.trueVerticalDepth,
                    inclination: context.inclination,
                    azimuth: context.azimuth,
                    northSouth: context.northSouth,
                    eastWest: context.eastWest,
                    verticalSection: context.verticalSection,
                    doglegSeverity: context.doglegSeverity,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel.id,
                });
                context.measuredDepth = ''
                context.trueVerticalDepth = ''
                    context.inclination = ''
                    context.azimuth = ''
                    context.northSouth = ''
                    context.eastWest = ''
                    context.verticalSection = ''
                    context.doglegSeverity = ''
            }else{
                context.selectedItem.measuredDepth = convertToNumber(context.measuredDepth);
                context.selectedItem.trueVerticalDepth = convertToNumber(context.trueVerticalDepth);
                context.selectedItem.inclination = convertToNumber(context.inclination);
                context.selectedItem.azimuth = convertToNumber(context.azimuth);
                context.selectedItem.northSouth = convertToNumber(context.northSouth);
                context.selectedItem.eastWest = convertToNumber(context.eastWest);
                context.selectedItem.verticalSection = convertToNumber(context.verticalSection);
                context.selectedItem.doglegSeverity = convertToNumber(context.doglegSeverity);

                this.$store.commit('wellPathStore/updateSurveyTable', {
                measuredDepth: context.id,
                surveyRecord: context.selectedItem
                });

                context.measuredDepth = ''
            context.trueVerticalDepth = ''
                context.inclination = ''
                context.azimuth = ''
                context.northSouth = ''
                context.eastWest = ''
                context.verticalSection = ''
                context.doglegSeverity = ''
            }
            
           
            //context.expanded == false
            //context.expanded2 = true

           
      },
      updateSurveyRecord(_selectedItem){
           var context = this;
           context.id = _selectedItem.measuredDepth;
           context.isAdd = false;
           context.buttonLabel = 'Update'
           context.measuredDepth = _selectedItem.measuredDepth
           context.trueVerticalDepth = _selectedItem.trueVerticalDepth
            context.inclination = _selectedItem.inclination
            context.azimuth = _selectedItem.azimuth
            context.northSouth = _selectedItem.northSouth
            context.eastWest = _selectedItem.eastWest
            context.verticalSection = _selectedItem.verticalSection
            context.doglegSeverity = _selectedItem.doglegSeverity
            context.expanded = true;
            context.expanded2 = false
            context.selectedItem = _selectedItem;
      },
      SaveSurveyTable(){
          var context = this;
          var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
          var Conn = this.$store.getters['authStore/companyName'];
          var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
          var IdentityModel = this.$store.getters['authStore/IdentityModel'];

          this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });

          this.$store.dispatch('wellPathStore/PostDeviationSurvey', {
                deviationSurveys: context.deviationSurveys,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });

      },
      ExpandExander(){
        var context = this;
        context.isAdd = true;
        context.expanded = true;
        context.expanded2 = false
        },
        ExpandExander2(){
        var context = this;
        if(context.expanded == true){
            context.expanded2 = false
        }else{
            context.expanded2 = true
        }
    },
  },
  created(){
      /* var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel']
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          userId: IdentityModel.id,
          deviationSurveys: [],
          deviationSurveysString: ""
      }
      console.log(payload)
      this.$store.dispatch('wellPathStore/GetDeviationSurveys', payload) */
      var tabCaption = "Wellpath Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>
.my-sticky-header-table{
  height: 400px;
}

.q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    
    background-color: black
  }


#wellpathpage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}
    
</style>