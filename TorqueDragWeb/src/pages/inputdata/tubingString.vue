<template>
    <div id="tubingstringpage">

            <div class="row">
                 <div class="col-12 q-pa-sm text-right"> 
                            <q-btn 
                                icon="import_contacts"
                                size="sm"
                                class="q-pa-sm"
                                @click="Import">
                                <q-tooltip>
                                    Import Strings Table
                                </q-tooltip>
                            </q-btn>

                            <q-btn 
                                class="q-pa-none"
                                icon="add_box"
                                size="sm"
                                @click="ExpandExander">
                                <q-tooltip>
                                    Add String Record
                                </q-tooltip>
                            </q-btn>

                            <q-btn 
                                class="q-pa-none"
                                icon="save"
                                size="sm"
                                @click="SaveTubingStringTable">
                                <q-tooltip>
                                    Save String Table
                                </q-tooltip>
                            </q-btn>

                    <q-dialog v-model="isImportDialogVisible" class="bg-primary">
                        <div class="q-pa-sm bg-primary">
                            <msExcelImport-app></msExcelImport-app>
                        </div>
                    </q-dialog>
                </div>
            </div>

            <div class="row">
            <div class="col-12">
                <q-tabs 
                    v-model="tab"
                    dense
                    class="bg-secondary text-accent"
                    active-color="primary"
                    indicator-color="accent"
                    align="justify"
                    narrow-indicator
                >

                <q-tab
                v-for="outputTab in outputTabs" :key="outputTab.name"
                :name="outputTab.name"
                :label="outputTab.name">
                </q-tab>
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="general"
                class="bg-primary">
                    <div>
                            <div class="row text-accent"
                                    v-if="expanded">
                                    <div class="col-12 q-pa-md">
                                            <q-expansion-item
                                                v-model="expanded"
                                                dense
                                                dense-toggle
                                                expand-separator
                                                label="Add Tubing"
                                                clickable
                                                @click="ExpandExander2"
                                            >
                                            <div class="row">
                                                <div class="col-3 q-pa-sm">
                                                    Type: 
                                                </div>
                                                <div class="col-9 q-pa-sm">
                                                    <select style="width:100%;"
                                                    class="text-center bg-positive text-accent"
                                                    name="NameOfDatum"
                                                    id="" >
                                                        <option>
                                                            Hydraulic
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <textbox variableName="Description" :col1="col1" :col2="col2"
                                            v-bind:variable="itemDescription"
                                            unit="" :hasUnit="false"></textbox>
                                            
                                            <q-expansion-item
                                                class="row"
                                                v-model="expandGeneral"
                                                dense
                                                dense-toggle
                                                expand-separator
                                                label="General"
                                                clickable
                                            >
                                                    
                                                <div class="col-12">
                                                    
                                                    <textbox variableName="Length" :col1="col1" :col2="col2"
                                                    v-bind:variable="length"
                                                    unit="ft" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.length"></textbox>

                                                    <textbox variableName="MD" :col1="col1" :col2="col2"
                                                    v-bind:variable="measuredDepth"
                                                    unit="ft" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.measuredDepth"></textbox>

                                                    <textbox variableName="Size" :col1="col1" :col2="col2"
                                                    v-bind:variable="size"
                                                    unit="ft" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.size"></textbox>

                                                    <textbox variableName="OD" :col1="col1" :col2="col2"
                                                    v-bind:variable="outerDiameter"
                                                    unit="in" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.outerDiameter"></textbox>

                                                    <textbox variableName="ID" :col1="col1" :col2="col2"
                                                    v-bind:variable="innerDiameter"
                                                    unit="in" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.innerDiameter"></textbox>
                                        
                                                </div>

                                            </q-expansion-item>

                                            <q-expansion-item
                                                class="row"
                                                v-model="expandedMechanical"
                                                dense
                                                dense-toggle
                                                expand-separator
                                                label="Mechanical"
                                                clickable
                                            >

                                                <div class="col-12">

                                                    <div class="row">
                                                        <div class="col-3 q-pa-sm">
                                                            Section Type: 
                                                        </div>
                                                        <div class="col-9 q-pa-sm">
                                                            <select style="width:100%;"
                                                            class="text-center bg-positive text-accent"
                                                            v-on:change="onItemSelectionChanged($event)"
                                                            name="sectionType"
                                                            v-model="typeOfSection"
                                                            id="" >
                                                                <option>
                                                                    Pup Joint
                                                                </option>
                                                                <option>
                                                                    Tubing
                                                                </option>
                                                                <option>
                                                                    Flow Coupling
                                                                </option>
                                                                <option>
                                                                    SSSV
                                                                </option>
                                                                <option>
                                                                    Seal Assembly
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <textbox variableName="Weight" :col1="col1" :col2="col2"
                                                    v-bind:variable="weight"
                                                    unit="lbf" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.weight"></textbox>

                                                    <textbox variableName="Grade" :col1="col1" :col2="col2"
                                                    v-bind:variable="grade"
                                                    unit="" :hasUnit="false"
                                                    :toolTipDescription="pipeDescriptions.grade"></textbox>

                                                    <textbox variableName="Minimum Yield Strength" :col1="col1" :col2="col2"
                                                    v-bind:variable="minimumYieldStrength"
                                                    unit="psi" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.minimumYieldStrength"></textbox>

                                                    <textbox variableName="Youngs Modulus" :col1="col1" :col2="col2"
                                                    v-bind:variable="youngsModulus"
                                                    unit="psi" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.youngsModulus"></textbox>

                                                    <textbox variableName="MakeUp Torque" :col1="col1" :col2="col2"
                                                    v-bind:variable="makeUpTorque"
                                                    unit="kip" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.makeUpTorque"></textbox>

                                                    <textbox variableName="OverPull Margin" :col1="col1" :col2="col2"
                                                    v-bind:variable="overPullMargin"
                                                    unit="kip" :hasUnit="true"
                                                    :toolTipDescription="pipeDescriptions.overPullMargin"></textbox>

                                        
                                                </div>

                                            </q-expansion-item>
                                                

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
                                                    label="Add"
                                                    @click="AddTubingStringRecord">
                                                </q-btn>
                                                </div>
                                            </q-expansion-item>
                            
                                        </div>
                            </div>
                
                            <div class="row q-pa-sm">
                                

                                    <div class="col-12 q-pa-sm text-right">        

                                        <q-dialog v-model="isImportDialogVisible" class="bg-primary">
                                            <div class="q-pa-sm bg-primary">
                                                <msExcelImport-app></msExcelImport-app>
                                            </div>
                                        </q-dialog>
                                    </div>

                                    <div class="col-12 q-pa-sm"> 
                                    <q-table
                                    class="my-sticky-header-table"
                                        :data="pipes"
                                        :columns="columns"
                                        row-key="name"
                                        dark
                                        color="amber"
                                        bordered
                                        :separator="separator">


                                    <template v-slot:body="props">
                                        <q-tr
                                        :props="props">
                                            <q-td key="typeOfSection" :props="props">{{ props.row.typeOfSection }}</q-td>
                                            <q-td key="length" :props="props">{{ props.row.length }}</q-td>
                                            <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                                            <q-td key="outerDiameter" :props="props">{{ props.row.outerDiameter }}</q-td>
                                            <q-td key="innerDiameter" :props="props">{{ props.row.innerDiameter }}</q-td>
                                        </q-tr>
                                        </template>
                                    </q-table>
                                    </div>
                        
                            </div>
                    </div>
                </q-tab-panel>

                <q-tab-panel name="optional"
                 class="bg-primary">
                    <div class="row text-accent">
                            <q-expansion-item class="col-12 q-pa-sm"
                                                v-model="expandBitParams"
                                                dense
                                                dense-toggle
                                                expand-separator
                                                label="Drill Bit Parameters"
                                                clickable
                                            >
                                                    
                                            <textbox variableName="Bit Size" :col1="col1" :col2="col2"
                                            v-bind:variable="drillBit.bitSize"
                                            unit="in" :hasUnit="true"
                                            :toolTipDescription="pipeDescriptions.bitSize"></textbox>

                                            <textbox variableName="Number of Nozzles" :col1="col1" :col2="col2"
                                            v-bind:variable="drillBit.numberOfBitNozzles"
                                            unit="" :hasUnit="false"
                                            :toolTipDescription="pipeDescriptions.numberOfBitNozzles"></textbox>

                                            <textbox variableName="Discharge Coefficient" :col1="col1" :col2="col2"
                                            v-bind:variable="drillBit.dischargeCoefficient"
                                            unit="fraction" :hasUnit="true"
                                            :toolTipDescription="pipeDescriptions.dischargeCoefficient"></textbox>

                            </q-expansion-item>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </div>
    </div>

           

    </div>
</template>

<script>
import msExcelImport from 'components/dataImport/msExcelImport.vue';
import textbox from "components/controls/textbox.vue"
import { convertToNumber } from 'src/boot/utils';
export default {
     computed:{
        pipes() {
        return this.$store.getters['tubingStringStore/pipes'];
        },
        drillBit() {
        return this.$store.getters['tubingStringStore/drillBit'];
        },
        isImportDialogVisible() {
        return this.$store.getters['tubingStringStore/isImportDialogVisible'];
        },
        pipeDescriptions(){
            return this.$store.getters['tubingStringStore/pipeDescriptions'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport,
        textbox
    },
    data () {
        return {
        col1: "4",
        col2: "8",
        expandBitParams: true,
        tab: 'general',
        outputTabs: [
            {
                name: 'general',
                isActive: true,
            },
            {
                name: 'optional',
                isActive: false,
            }
        ],
        separator: 'cell',
        columns: [
            { name: "typeOfSection", label: "Section Type", field: "", align: "left" },
            { name: "length", label: "Length (ft)", field: "", align: "left" },
            { name: "measuredDepth", label: "MD (ft)", field: "", align: "left" },
            { name: "outerDiameter", label: "OD (in)", field: "", align: "left" },
            { name: "innerDiameter", label: "ID (in)", field: "", align: "left" }
        ],
        expandGeneral: false,
        expandedMechanical: false,
        expanded2: true,
        expanded: false,
        visible: true,
        typeOfSection: "Tubing",
        length: null,
        measuredDepth: null,
        size: null,
        weight: null,
        grade: "",
        outerDiameter: null,
        innerDiameter: null,
        minimumYieldStrength: null,
        itemDescription: "",
        makeUpTorque: null,
        overPullMargin: null,
        youngsModulus: null,
        isGeneral: true,
        isOptional: false
        }
  },
  methods: {
      ShowActivePage(selectedTab){
            var context =  this;
            context.isGeneral = false;
            context.isOptional = false;
            switch(selectedTab){
                case "General":
                    context.isGeneral = true;
                    break;
                case "Optional":
                    context.isOptional = true;
                    break;

            }
        },
      onItemSelectionChanged(e){
          var context = this;
            var name = e.target.options[e.target.options.selectedIndex].text;
            context.typeOfSection = name;
            console.log("context.typeOfSection", context.typeOfSection)
      },
      Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Tubing String");
            this.$store.commit('tubingStringStore/SetisImportDialogVisible', true);
            
      },
      updateIsImportDialogVisible(){
          var context =  this;
          this.$store.commit('dataImportStore/SetTypeOfInput', "Tubing String");
          this.$store.commit('tubingStringStore/SetisImportDialogVisible', true);
          this.$store.commit('dataImportStore/SetimportDialogCaption', "Import Tubing String");
      },
      ExpandExander(){
        var context = this;
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
        AddTubingStringRecord(){
            var context = this;
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            
                context.length = convertToNumber(context.length);
                context.measuredDepth = convertToNumber(context.measuredDepth);
                context.size = convertToNumber(context.size);
                context.weight = convertToNumber(context.weight);
                context.outerDiameter = convertToNumber(context.outerDiameter);
                context.innerDiameter = convertToNumber(context.innerDiameter);
                context.minimumYieldStrength = convertToNumber(context.minimumYieldStrength);
                context.makeUpTorque = convertToNumber(context.makeUpTorque);
                context.overPullMargin = convertToNumber(context.overPullMargin);
                context.youngsModulus = convertToNumber(context.youngsModulus);
   
                this.$store.commit('tubingStringStore/SaveTubingStringTable', {
                    typeOfSection: context.typeOfSection,
                    itemDescription: context.itemDescription,
                    grade: context.grade,
                    length: context.length,
                    measuredDepth: context.measuredDepth,
                    size: context.size,
                    weight: context.weight,
                    outerDiameter: context.outerDiameter,
                    innerDiameter: context.innerDiameter,
                    minimumYieldStrength: context.minimumYieldStrength,
                    makeUpTorque: context.makeUpTorque,
                    overPullMargin: context.overPullMargin,
                    youngsModulus: context.youngsModulus,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel.id,
                });
            context.typeOfSection = ''
            context.itemDescription = ''
            context.grade = ''
            context.length = ''
            context.measuredDepth = ''
            context.size = ''
            context.weight = ''
            context.outerDiameter = ''
            context.innerDiameter = ''
            context.minimumYieldStrength = ''
            context.makeUpTorque = ''
            context.overPullMargin = ''
            context.youngsModulus = ''

            
        },
        SaveTubingStringTable(){
            var context = this;
            var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];

            this.$store.commit('dataImportStore/SetLoaderParameters', {
                showLoader: true,
                showImportView: false
            });

             this.$store.dispatch('tubingStringStore/PostPipes', {
                pipes: context.pipes,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });

              this.$store.dispatch('tubingStringStore/PostDrillBit', {
                drillBit: context.drillBit,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });

        },
        cancelDatum(){
            var context =  this;
            context.expanded = false;
            context.expanded2 = true
        }
  },
  created(){
      /* var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel']
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          userId: IdentityModel.id,
          pipes: []
      }
      console.log(payload)
      this.$store.dispatch('tubingStringStore/GetPipes', payload); */
      var tabCaption = "String Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>

    .my-sticky-header-table{
    height: 450px;
    }

    /* .login-input{
        font-size:14px;
        background-color: white;
    } */

    #tubingstringpage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
}

.taboutput {
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
    background-color: rgba(45,66,123,1);
}

.vl {
  border-left: 2px solid rgba(255,255,255, 1);
  height: 50px;
}

</style>