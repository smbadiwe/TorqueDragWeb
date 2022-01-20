<template>
    <div>
        <q-scroll-area
            :visible="visible"
        style="height: 700px;"
        > 
            <div class="row text-accent"
                v-if="expanded">
                <div class="col-12">

                    <textbox variableName="Name" :col1="col1" :col2="col2"
                    v-model="typeOfHole"
                    unit="" :hasUnit="false" disabled></textbox>

                    <textbox variableName="Outer Diameter" :col1="col1" :col2="col2"
                    v-model="outerDiameter"
                    unit="in" :hasUnit="true"
                    :toolTipDescription="holeSectionDescriptions.outerDiameter"></textbox>

                    <textbox variableName="Inner Diameter" :col1="col1" :col2="col2"
                    v-model="innerDiameter"
                    unit="in" :hasUnit="true"
                    :toolTipDescription="holeSectionDescriptions.innerDiameter"></textbox>

                    <textbox variableName="Weight" :col1="col1" :col2="col2"
                    v-model="weight"
                    unit="lbf" :hasUnit="true"
                    :toolTipDescription="holeSectionDescriptions.weight"></textbox>

                    <textbox variableName="Top MD" :col1="col1" :col2="col2"
                    v-model="top"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="holeSectionDescriptions.top"></textbox>

                    <textbox variableName="Bottom MD" :col1="col1" :col2="col2"
                    v-model="bottom"
                    unit="ft" :hasUnit="true"
                    :toolTipDescription="holeSectionDescriptions.bottom"></textbox>

                    <textbox variableName="Friction Factor" :col1="col1" :col2="col2"
                    v-model="frictionFactor"
                    unit="" :hasUnit="false"
                    :toolTipDescription="holeSectionDescriptions.frictionFactor"></textbox>

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
                          label="Add"
                          @click="AddHoleRecord">
                      </q-btn>
                    </div>
  
              </div>
            </div>
        
            <div class="row" id="holepage">

                <!-- <div class="col-12 q-pa-sm"> 
                    <hr/>
                </div> -->

                <div class="col-4 q-pa-sm">
                    Riser 
                </div>

                <div class="col-4 q-pa-sm">
                    <q-btn  icon="add_box"
                        size="sm"
                        flat
                        @click="ShowHoleSection('New Riser')">
                        <q-tooltip>
                            Add Riser
                        </q-tooltip>
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm"></div>

                <div class="col-4 q-pa-sm">
                    Casing 
                </div>
                <div class="col-4 q-pa-sm">
                    <q-btn  icon="add_box"
                        size="sm"
                        flat
                        @click="ShowHoleSection('New Casing')">
                        <q-tooltip>
                            Add Casing
                        </q-tooltip>
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm">
                    <q-btn 
                        size="sm"
                        label="Add from catalog">
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm">
                    Open Hole 
                </div>
                <div class="col-4 q-pa-sm">
                    <q-btn  icon="add_box"
                        size="sm"
                        flat
                    @click="ShowHoleSection('New Open Hole')">
                        <q-tooltip>
                            Add Open Hole
                        </q-tooltip>
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm"></div>

                
                <div class="col-12 q-pa-sm text-right"> 
                    <q-btn 
                        icon="import_contacts"
                        size="sm"
                        class="q-pa-none"
                        @click="Import">
                    </q-btn>

                    <q-btn 
                        class="q-pa-none"
                        icon="save"
                        size="sm"
                        @click="SaveHoleSectionTable">
                        <q-tooltip>
                            Save HoleSection Table
                        </q-tooltip>
                    </q-btn>

                    <q-dialog v-model="isImportDialogVisible" class="bg-primary">
                        <div class="q-pa-sm bg-primary">
                            <msExcelImport-app></msExcelImport-app>
                        </div>
                    </q-dialog>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-table
                        class="my-sticky-header-table"
                        :data="holeSections"
                        :columns="columns"
                        row-key="name"
                        dark
                        color="amber"
                        bordered
                        :separator="separator">


                        <template v-slot:body="props">
                            <q-tr
                            :props="props">
                                <q-td key="typeOfHole" :props="props">{{ props.row.typeOfHole }}</q-td>
                                <q-td key="outerDiameter" :props="props">{{ props.row.outerDiameter }}</q-td>
                                <q-td key="innerDiameter" :props="props">{{ props.row.innerDiameter }}</q-td>
                                <q-td key="weight" :props="props">{{ props.row.weight }}</q-td>
                                <q-td key="topOfHole" :props="props">{{ props.row.topOfHole }}</q-td>
                                <q-td key="bottomOfHole" :props="props">{{ props.row.bottomOfHole }}</q-td>
                                <q-td key="frictionFactor" :props="props">{{ props.row.frictionFactor }}</q-td>
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
import textbox from "components/controls/textbox.vue"
import { convertToNumber } from 'boot/utils.js'
export default {
    computed:{
        holeSections() {
        return this.$store.getters['holeStore/holeSections'];
        },
        isImportDialogVisible() {
        return this.$store.getters['holeStore/isImportDialogVisible'];
        },
        holeSectionDescriptions(){
            return this.$store.getters['holeStore/holeSectionDescriptions'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport,
        textbox
    },
    data() {
        return {
            col1: "4",
            col2: "8",
            expanded: false,
            expanded2: true,
            header: "",
            typeOfHole: "",
            outerDiameter: null,
            innerDiameter: null,
            weight: null,
            top: null,
            bottom: null,
            frictionFactor: null,
            separator: 'cell',
            columns: [
            { name: "typeOfHole", label: "Hole Type", field: "", align: "left" },
            { name: "outerDiameter", label: "Outer Diameter (in)", field: "", align: "left" },
            { name: "innerDiameter", label: "Inner Diameter (in)", field: "", align: "left" },
            { name: "weight", label: "Weight (lb/ft)", field: "", align: "left" },
            { name: "topOfHole", label: "Top (ft)", field: "", align: "left" },
            { name: "bottomOfHole", label: "bottom (ft)", field: "", align: "left" },
            { name: "frictionFactor", label: "frictionFactor", field: "", align: "left" }
        ],
        visible: true
        }
    },
    methods: {
        Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Hole");
            this.$store.commit('holeStore/SetisImportDialogVisible', true);
            this.$store.commit('dataImportStore/SetimportDialogCaption', "Import Hole Sections");
            
        },
        ShowHoleSection(selectedHeader){
            var context = this;
            if(selectedHeader == "New Open Hole"){
                context.typeOfHole = "Open Hole"
                context.expanded = true;
                context.expanded2 = false
            }

            if(selectedHeader == "New Riser"){
                context.typeOfHole = "Riser"
                context.expanded = true;
                context.expanded2 = false
            }

            if(selectedHeader == "New Casing"){
                context.typeOfHole = "Casing"
                context.expanded = true;
                context.expanded2 = false
            }
            
        },
        ExpandExander2(){
            var context = this;
            if(context.expanded == true){
                context.expanded2 = false
            }else{
                context.expanded2 = true
            }
        },
        AddHoleRecord(){
            var context = this;
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            
            context.outerDiameter = convertToNumber(context.outerDiameter);
            context.innerDiameter = convertToNumber(context.innerDiameter);
                context.weight = convertToNumber(context.weight);
                context.top = convertToNumber(context.top);
                context.bottom = convertToNumber(context.bottom);
                context.frictionFactor = convertToNumber(context.frictionFactor);
   
                this.$store.commit('holeStore/SaveHoleSectionTable', {
                    typeOfHole: context.typeOfHole,
                    outerDiameter: context.outerDiameter,
                    innerDiameter: context.innerDiameter,
                    weight: context.weight,
                    topOfHole: context.top,
                    bottomOfHole: context.bottom,
                    frictionFactor: context.frictionFactor,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel.id,
                });
            context.outerDiameter = ''
            context.innerDiameter = ''
                context.weight = ''
                context.top = ''
                context.bottom = ''
                context.frictionFactor = ''

            
        },
        SaveHoleSectionTable(){
            var context = this;
            var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
            var companyName = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];

            this.$store.commit('dataImportStore/SetLoaderParameters', {
                showLoader: true,
                showImportView: false
            });

            this.$store.dispatch('holeStore/PostHoleSections', {
                    holeSections: context.holeSections,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel._id,
                    companyName,
                    holeSection: {}
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
          holeSections: []
      }
      console.log(payload) */
      //this.$store.dispatch('holeStore/GetHoleSections', payload)
      var tabCaption = "Hole Section Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>
 .my-sticky-header-table{
    height: 400px;
}

#holepage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}
    
</style>