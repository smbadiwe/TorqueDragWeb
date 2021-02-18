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
                        label="Add Datum"
                        clickable
                        @click="ExpandExander2"
                    >
                        <!-- <q-card>
                        <q-card-section> -->
                            
                            <div class="row">

                                <div class="col-6 q-pt-sm">Temperature (deg F)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="temperature"></div>
                                <!-- <div class="col-2"></div> -->

                                <div class="col-6 q-pt-sm">Pressure (psi)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="pressure"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Density (lb/ft3)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="density"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Plastic Viscoity (cp)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="plasticViscoity"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Yield Point (lbf/100ft2)</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="yieldPoint"></div>
                                <!-- <div class="col-4"></div> -->

                                <div class="col-6 q-pt-sm">Reference</div>
                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="reference"></div>
                                <!-- <div class="col-4"></div> -->

                                <div style="height: 50px;"></div>

                                <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    class="text-center"
                                    size="sm"
                                    label="Add"
                                    @click="AddPVTRecord">
                                </q-btn>
                                </div>
                    
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
                            <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="mudName"></div>
                        </div>

                        <div class="row">
                            <div class="col-3 q-pa-sm">Description:</div>
                            <div class="col-3"></div>
                            <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="description"></div>
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
                            <select v-model="mudBaseType"
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
                            <select v-model="baseFluid" 
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
                            <select v-model="rheologyModel" 
                            class="text-center bg-positive text-accent"
                            style="width:100%;">
                                    <option>Bingham Plastic</option>
                                    <option>Power law</option>
                                    <option>Herschel Bulkley</option>
                            </select>
                            </div>

                            <div class="col-6 q-pa-sm">
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
                            </div>


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
import { convertToNumber } from 'src/boot/utils';
export default {
    computed:{
        mudPVTs() {
            return this.$store.getters['fluidsStore/mudPVTs'];
        },
        isImportDialogVisible() {
        return this.$store.getters['fluidsStore/isImportDialogVisible'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport
    },
    data () {
    return {
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
        mudName: "",
        description: "",
        mudBaseType: "",
        baseFluid: "",
        rheologyModel: "",
        rheologyModelType: "Rheology",
        temperature: null,
        pressure: null,
        density: null,
        plasticViscoity: null,
        yieldPoint: null,
        reference: ''
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
                    userId: IdentityModel.id,
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
                fluid: {
                    mudName: context.mudName,
                    description: context.description,
                    mudBaseType: context.mudBaseType,
                    baseFluid: context.baseFluid,
                    rheologyModel: context.rheologyModel,
                    rheologyModelType: context.rheologyModelType,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel.id
                }
            })

            this.$store.dispatch('fluidsStore/PostMudPVTs', {
                mudPVTs: context.mudPVTs,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });
        }
  },
  created(){
      var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          userId: IdentityModel.id
      }
      this.$store.dispatch('fluidsStore/GetFluid', payload);
      var tabCaption = "Fluids Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  /*     mudName: context.mudName,
                    description: context.description,
                    mudBaseType: context.mudBaseType,
                    baseFluid: context.baseFluid,
                    rheologyModel: context.rheologyModel,
                    rheologyModelType: context.rheologyModelType,
                    designId: selectedTorqueDragDesign.designId */
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