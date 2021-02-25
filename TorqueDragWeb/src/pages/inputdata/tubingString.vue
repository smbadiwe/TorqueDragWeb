<template>
    <div id="tubingstringpage">

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

                            <div class="col-4 q-pt-sm">Description</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="itemDescription"></div>

                            </div>
                            <q-expansion-item
                                v-model="expandGeneral"
                                dense
                                dense-toggle
                                expand-separator
                                label="General"
                                clickable
                            >
                                    
                                <div class="row dialogBorder">

                                    <div class="col-4 q-pt-sm">Length (ft)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="length"></div>
                                    <!-- <div class="col-2"></div> -->

                                    <div class="col-4 q-pt-sm">MD (ft)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="measuredDepth"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">Size (in)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="size"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">OD (in)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="outerDiameter"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">ID (in)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="innerDiameter"></div>
                        
                                </div>

                            </q-expansion-item>

                            <q-expansion-item
                                v-model="expandedMechanical"
                                dense
                                dense-toggle
                                expand-separator
                                label="Mechanical"
                                clickable
                            >

                                <div class="row dialogBorder">

                                    <div class="col-3 q-pa-sm">
                                        Section Type: 
                                    </div>
                                    <div class="col-9 q-pa-sm">
                                        <select style="width:100%;"
                                        class="text-center bg-positive text-accent"
                                        name="NameOfDatum"
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

                                    <div class="col-4 q-pt-sm">Weight (ppf)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="weight"></div>
                                    <!-- <div class="col-2"></div> -->

                                    <div class="col-4 q-pt-sm">Grade</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="grade"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">Minimum yield Strength (psi)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="minimumYieldStrength"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">Youngs Modulus (psi)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="youngsModulus"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">MakeUp Torque (kip)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="makeUpTorque"></div>
                                    <!-- <div class="col-4"></div> -->

                                    <div class="col-4 q-pt-sm">OverPull Margin (kip)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="overPullMargin"></div>
                                    <!-- <div class="col-4"></div> -->

                        
                                </div>

                            </q-expansion-item>
                                
                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Add"
                                    class="q-pa-none"
                                    @click="AddTubingStringRecord">
                                </q-btn>
                            </div>
                            </q-expansion-item>
            
                        </div>
                </div>
 

                <!-- <div class="row q-pa-sm">
                    <div class="col-3">String name:</div>
                    <div class="col-3">Assembly</div>
                </div> -->

                <!-- <div class="row q-pa-sm">
                    <div class="col-3">String depth:</div>
                    <div class="col-3">14,814.00 ft</div>
                </div> -->

                <div class="row q-pa-sm">
                

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
</template>

<script>
import msExcelImport from 'components/dataImport/msExcelImport.vue';
import { convertToNumber } from 'src/boot/utils';
export default {
     computed:{
        pipes() {
        return this.$store.getters['tubingStringStore/pipes'];
        },
        isImportDialogVisible() {
        return this.$store.getters['tubingStringStore/isImportDialogVisible'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport
    },
    data () {
        return {
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
        typeOfSection: "",
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
        youngsModulus: null
        }
  },
  methods: {
      Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Tubing String");
            this.$store.commit('tubingStringStore/SetisImportDialogVisible', true);
            
      },
      updateIsImportDialogVisible(){
          var context =  this;
          this.$store.commit('dataImportStore/SetTypeOfInput', "Tubing String");
          this.$store.commit('wellPathStore/SetisImportDialogVisible', true);
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

</style>