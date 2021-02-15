<template>
    <div id="fluidspage">

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


                                <!-- <div class="col-6 q-pa-sm">
                                    <input type="radio" v-model="groupAssignedId"
                                    :value="participant.id" 
                                    :name="groupid"/ 
                                    v-bind:value="rheologyOne">
                                    <label>Rheology</label>
                                </div>

                                <div class="col-6 q-pa-sm">
                                    <input type="radio" v-model="rOne" v-bind:value="rheologyTwo">
                                    <label>Fann</label>
                                </div> -->

                                <div class="col-12 q-pa-sm text-right"> 
                                    <q-btn 
                                        size="sm"
                                        label="Save"
                                        class="q-pa-sm"
                                        @click="PostFluid">
                                    </q-btn>
                                    <q-btn 
                                        size="sm"
                                        label="Import"
                                        class="q-pa-sm"
                                        @click="Import">
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
        rheologyModelType: "Rheology"
    }
  },
  methods: {
      Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Fluid");
            this.$store.commit('fluidsStore/SetisImportDialogVisible', true);
            this.$store.commit('dataImportStore/SetimportDialogCaption', "Import Fluid Parameters");
      },
      PostFluid(){
           var context =  this;
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
</style>