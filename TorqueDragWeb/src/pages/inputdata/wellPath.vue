<template>
    <div> 

            <div class="row text-accent"
            v-if="expanded">
                    <!-- <q-expansion-item
                    class="col-12 q-pa-md"
                        v-model="expanded"
                        dense
                        dense-toggle
                        expand-separator
                        label="Add Well Path"
                        clickable
                        @click="ExpandExander2"
                    > -->
                      <div class="col-12 q-pa-md">  
                            
                     <textbox variableName="Measured Depth" :col1="col1" :col2="col2"
                    v-bind:variable="measuredDepth"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.measuredDepth"></textbox>

                    <textbox variableName="True Vertical Depth" :col1="col1" :col2="col2"
                    v-bind:variable="trueVerticalDepth"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.trueVerticalDepth"></textbox>

                    <textbox variableName="Inclination" :col1="col1" :col2="col2"
                    v-bind:variable="inclination"
                    unit="deg" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.inclination"></textbox>

                    <textbox variableName="Azimuth" :col1="col1" :col2="col2"
                    v-bind:variable="azimuth"
                    unit="deg" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.azimuth"></textbox>

                    <textbox variableName="North/South" :col1="col1" :col2="col2"
                    v-bind:variable="northSouth"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.northSouth"></textbox>

                     <textbox variableName="East/West" :col1="col1" :col2="col2"
                    v-bind:variable="eastWest"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.eastWest"></textbox>

                     <textbox variableName="Vertical Section" :col1="col1" :col2="col2"
                    v-bind:variable="verticalSection"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.verticalSection"></textbox>

                     <textbox variableName="Dogleg Severity" :col1="col1" :col2="col2"
                    v-bind:variable="doglegSeverity"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="deviationSurveyDescriptions.doglegSeverity"></textbox>

                    <div class="row">
                      <div class="col-12" style="height:10px;"></div>
                    </div>

                    <div class="row">
                      
                        <q-btn 
                        class="col-2 text-right"
                          align="right"
                          size="sm"
                          label="Cancel"
                          @click="cancelDatum">
                      </q-btn>
                      <q-space/>
                      <q-btn 
                      class="col-2 text-right"
                          align="right"
                          size="sm"
                          :label="buttonLabel"
                          @click="AddSurveyRecord">
                      </q-btn>
                    </div>

                       </div>
                    <!-- </q-expansion-item> -->
    
            </div>
            
            <div 
            v-if="expanded2"
            class="row" id="wellpathpage">
                <div class="col-12 q-pa-sm">
                    Vertical Section Definition
                    <br>
                    <hr/>
            </div>

                <!-- <div class="col-6 q-pt-sm">Origin N (ft): </div>
                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>

                <div class="col-6 q-pt-sm">Origin E (ft): </div>
                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>

                <div class="col-6 q-pt-sm">Azimuth (degrees):</div>
                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>

                <div class="col-12 q-pa-sm">
                    <hr/>
                </div> -->

                <div class="row" style="height:20px"></div>

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
                            Add New Survey Record
                        </q-tooltip>
                    </q-btn>

                   <!--  <q-btn 
                        class="q-pa-none"
                        icon="save"
                        size="sm"
                        @click="SaveSurveyTable">
                        <q-tooltip>
                            Save Survey Table
                        </q-tooltip>
                    </q-btn> -->

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
        <!-- </q-scroll-area> -->
    </div>
</template>

<script>
import msExcelImport from 'components/dataImport/msExcelImport.vue';
import textbox from "components/controls/textbox.vue"
import { convertToNumber } from 'boot/utils.js'
export default {
    computed:{
        deviationSurveys() {
        return this.$store.getters['wellPathStore/deviationSurveys'];
        },
        isImportDialogVisible() {
        return this.$store.getters['wellPathStore/isImportDialogVisible'];
        },
        deviationSurveyDescriptions(){
            return this.$store.getters['wellPathStore/deviationSurveyDescriptions'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport,
        textbox
    },
     data () {
        return {
        col1:"6",
        col2: "6",
        separator: 'cell',
        columns: [
            { name: "measuredDepth", label: "Measured Depth (ft)", field: "", align: "left" },
            { name: "actions", label: "Actions", field: "", align: "left" },
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
      cancelDatum(){
      var context =  this;
      context.expanded = false;
      context.expanded2 = true
    },
      SaveSurveyTable(){
          var context = this;
          var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
          var companyName = this.$store.getters['authStore/companyName'];
          var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
          var IdentityModel = this.$store.getters['authStore/IdentityModel'];

          this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });

            const payload = {
                deviationSurveys: context.deviationSurveys,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel._id,
                companyName
            }

            console.log('payload: ', payload);

          this.$store.dispatch('wellPathStore/PostDeviationSurvey', payload);

      },
      ExpandExander(){
        var context = this;
        context.isAdd = true;
        context.expanded = true;
        context.expanded2 = false

        context.measuredDepth = "";
        context.trueVerticalDepth = "";
        context.inclination = "";
        context.azimuth = "";
        context.northSouth = "";
        context.eastWest = "";
        context.verticalSection = "";
        context.doglegSeverity = "";
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
  height: 350px;
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