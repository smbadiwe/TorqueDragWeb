<template>
    <div>

        <div class="row text-accent"
            v-if="expanded">
            <div class="col-12 q-pa-md">
                    <q-expansion-item
                        v-model="expanded"
                        dense
                        dense-toggle
                        expand-separator
                        label="Add Fluid Data"
                        clickable
                        @click="ExpandExander2"
                    >
                        <textbox variableName="Temperature" :col1="col1" :col2="col2"
                        v-bind:variable="temperature"
                        unit="deg F" :hasUnit="true"  
                        :toolTipDescription="fluidDescription.temperature"></textbox>

                        <textbox variableName="Pressure" :col1="col1" :col2="col2"
                        v-bind:variable="pressure"
                        unit="psi" :hasUnit="true"
                        :toolTipDescription="fluidDescription.pressure"></textbox>

                        <textbox variableName="Density" :col1="col1" :col2="col2"
                        v-bind:variable="density"
                        unit="lb/ft3" :hasUnit="true"
                        :toolTipDescription="fluidDescription.density"></textbox>

                        <textbox variableName="Plastic Viscoity" :col1="col1" :col2="col2"
                        v-bind:variable="plasticViscoity"
                        unit="cp" :hasUnit="true"
                        :toolTipDescription="fluidDescription.plasticViscoity"></textbox>

                        <textbox variableName="Yield Point" :col1="col1" :col2="col2"
                        v-bind:variable="yieldPoint"
                        unit="lbf/100ft2" :hasUnit="true"
                        :toolTipDescription="fluidDescription.yieldPoint"></textbox>

                        <textbox variableName="Reference" :col1="col1" :col2="col2"
                        v-bind:variable="reference"
                        unit="" :hasUnit="false"
                        :toolTipDescription="fluidDescription.Reference"></textbox>

                        <div class="row">
                            <div class="col-12" style="height:10px;"></div>
                        </div>

                        <div class="row">
                      
                        <q-btn 
                        class="col-2 text-right"
                          align="right"
                          size="sm"
                          label="Cancel"
                          @click="cancelPVTRecord">
                      </q-btn>
                      <q-space/>
                      <q-btn 
                      class="col-2 text-right"
                          align="right"
                          size="sm"
                          label="Add"
                          @click="AddPVTRecord">
                      </q-btn>
                    </div>
    
                    </q-expansion-item>
    
                </div>
        </div>

        <div class="row">
            <div class="col-12">
                <q-card class="my-card" 
                style="height: 450px;"
                flat scroll> 

                    <q-card-section class="bg-primary text-white text-center">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-h6">Mud Details</div>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-section class="bg-primary text-white text-center">
                        <div class="row">
                            <div class="col-3 q-pa-sm">Name:</div>
                            <div class="col-3"></div>
                            <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="fluid.mudName"></div>
                        </div>

                        <div class="row">
                            <div class="col-3 q-pa-sm">Description:</div>
                            <div class="col-3"></div>
                            <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="fluid.description"></div>
                        </div>

                        <div class="row">
                            <div class="col-12 q-pa-sm text-left">
                                Fluid Composition
                                <br>
                                <hr/>
                            </div>

                            <div class="col-6 q-pa-sm">
                                Mud base type: 
                            </div>
                            <div class="col-6 q-pa-sm">
                            <select v-model="fluid.mudBaseType"
                            class="text-center bg-positive text-accent"
                            style="width:100%;">
                                    <option>Brine</option>
                                    <option>Oil</option>
                                    <option>Water</option>
                                    <option>Synthetic</option>
                            </select>
                            </div>

                            <div class="col-6 q-pa-sm">
                                Base Fluid: 
                            </div>
                            <div class="col-6 q-pa-sm">
                            <select v-model="fluid.baseFluid" 
                            class="text-center bg-positive text-accent"
                            style="width:100%;">
                                    <option>Brine</option>
                                    <option>Oil</option>
                                    <option>Water</option>
                                    <option>Synthetic</option>
                            </select>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-12 q-pa-sm text-left">
                                Rheology Tests
                                <br>
                                <hr/>
                            </div>

                            <div class="col-6 q-pa-sm">
                                Rheology model: 
                            </div>
                            <div class="col-6 q-pa-sm">
                            <select v-model="fluid.rheologyModel" 
                            class="text-center bg-positive text-accent"
                            style="width:100%;">
                                    <option>Newtonian</option>
                                    <option>Bingham Plastic</option>
                                    <option>Power law</option>
                                    <option>Herschel Bulkley</option>
                            </select>
                            </div>

                            <!-- <div class="col-6 q-pa-sm">
                                <label>
                                    <input type="radio" value="Rheology" v-model="rheologyModelType" />
                                    Rheology
                                </label>
                            </div>

                            <div class="col-6 q-pa-sm">
                                <label>
                                    <input type="radio" value="Fann" v-model="rheologyModelType" />
                                    Fann
                                </label>
                            </div> -->

                           <!--  <q-expansion-item class="col-12 q-pa-sm"
                                v-model="expandFannParams"
                                dense
                                dense-toggle
                                expand-separator
                                label="Fann Parameters"
                                clickable
                            >
                                    
                                <div class="row dialogBorder">

                                    <div class="col-4 q-pt-sm">Base Dial Reading</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="fluid.baseFannDialReading"></div>
                                    
                                    <div class="col-4 q-pt-sm">Base Speed (RPM)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="fluid.baseFannRPM"></div>
                                    

                                    <div class="col-4 q-pt-sm">Dial Reading</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="fluid.fannDialReading"></div>
                                   

                                    <div class="col-4 q-pt-sm">Speed (RPM)</div>
                                    <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="fluid.fannRPM"></div>
                                    
                                </div>

                            </q-expansion-item> -->


                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    icon="import_contacts"
                                    size="sm"
                                    class="q-pa-sm"
                                    @click="Import">
                                    <q-tooltip>
                                        Import PVT Table
                                    </q-tooltip>
                                </q-btn>

                                <q-btn 
                                    class="q-pa-none"
                                    icon="add_box"
                                    size="sm"
                                    @click="ExpandExander">
                                    <q-tooltip>
                                        Add PVT Record
                                    </q-tooltip>
                                </q-btn>

                                <q-btn 
                                    class="q-pa-none"
                                    icon="save"
                                    size="sm"
                                    @click="SavePVTTable">
                                    <q-tooltip>
                                        Save PVT Table
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
                            :data="mudPVTs"
                            :columns="columns"
                            row-key="name"
                            dark
                            color="amber"
                            bordered
                            :separator="separator">


                            <template v-slot:body="props">
                                <q-tr
                                :props="props">
                                    <q-td key="temperature" :props="props">{{ props.row.temperature }}</q-td>
                                    <q-td key="pressure" :props="props">{{ props.row.pressure }}</q-td>
                                    <q-td key="density" :props="props">{{ props.row.density }}</q-td>
                                    <q-td key="plasticViscoity" :props="props">{{ props.row.plasticViscoity }}</q-td>
                                    <q-td key="yieldPoint" :props="props">{{ props.row.yieldPoint }}</q-td>
                                    <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
                                </q-tr>
                                </template>
                            </q-table>

                            </div>

                            <div class="col-12 q-pa-sm text-left">
                                Fluid Plot
                                <br>
                                <hr/>
                            </div>

                        </div>

                    </q-card-section>

                </q-card>

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
        mudPVTs() {
            return this.$store.getters['fluidsStore/mudPVTs'];
        },
        isImportDialogVisible() {
        return this.$store.getters['fluidsStore/isImportDialogVisible'];
        },
        fluid() {
        return this.$store.getters['fluidsStore/fluid'];
        },
        fluidDescription(){
            return this.$store.getters['fluidsStore/fluidDescription'];
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
        expandFannParams: true,
        expanded: false,
        expanded2: true,
      visible: true,
      shape: 'line',
      picked: '',
      separator: 'cell',
      columns: [
            { name: "temperature", label: "Temperature (deg F)", field: "", align: "left" },
            { name: "pressure", label: "Pressure (psi)", field: "", align: "left" },
            { name: "density", label: "Density (lb/ft3)", field: "", align: "left" },
            { name: "plasticViscoity", label: "Plastic Viscoity (cp)", field: "", align: "left" },
            { name: "yieldPoint", label: "Yield Point (lbf/100ft2)", field: "", align: "left" },
            { name: "reference", label: "Reference", field: "", align: "left" }
        ],
        temperature: null,
        pressure: null,
        density: null,
        plasticViscoity: null,
        yieldPoint: null,
        reference: ''
/*         mudName: "",
        description: "",
        mudBaseType: "",
        baseFluid: "",
        rheologyModel: "",
        rheologyModelType: "Rheology",
        baseFannDialReading: null,
        baseFannRPM: null,
        fannDialReading: null,
        fannRPM: null */
    }
  },
  methods: {
      Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Fluid");
            this.$store.commit('fluidsStore/SetisImportDialogVisible', true);
            this.$store.commit('dataImportStore/SetimportDialogCaption', "Import Fluid Parameters");
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
         cancelPVTRecord(){
            var context =  this;
            context.expanded = false;
            context.expanded2 = true
        },
        AddPVTRecord(){
            var context = this;
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            
            context.temperature = convertToNumber(context.temperature);
            context.pressure = convertToNumber(context.pressure);
            context.density = convertToNumber(context.density);
            context.plasticViscoity = convertToNumber(context.plasticViscoity);
            context.yieldPoint = convertToNumber(context.yieldPoint);
   
                this.$store.commit('fluidsStore/SavePVTRecord', {
                    reference: context.reference,
                    temperature: context.temperature,
                    pressure: context.pressure,
                    density: context.density,
                    plasticViscoity: context.plasticViscoity,
                    yieldPoint: context.yieldPoint,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel._id,
                });

            context.reference = ''
            context.temperature = ''
            context.pressure = ''
            context.density = ''
            context.plasticViscoity = ''
            context.yieldPoint = ''

            
        },
        SavePVTTable(){
            var context = this;
            var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];

            this.$store.commit('dataImportStore/SetLoaderParameters', {
                showLoader: true,
                showImportView: false
            });

            this.$store.dispatch('fluidsStore/PostFluid', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel._id,
                fluid: context.fluid
            })

            this.$store.dispatch('fluidsStore/PostMudPVTs', {
                mudPVTs: context.mudPVTs,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel._id,
                companyName: Conn
              });
        }
  },
  created(){
      /* var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          userId: IdentityModel.id
      }
      this.$store.dispatch('fluidsStore/GetFluid', payload); */
      var tabCaption = "Fluids Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>
.my-card {
    border: none;
}

#fluidspage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}

.my-sticky-header-table{
    height: 280px;
}

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
}

</style>