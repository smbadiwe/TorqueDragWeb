<template>
    <div id="subsurfacepage">
        <q-scroll-area
            :visible="visible"
            style="height: 700px; width: 240px"
            > 
            <div class="row">
                <div class="col-12 q-pa-sm text-left">
                    Pore Pressure
                    <br>
                    <hr/>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-expansion-item
                        v-model="expanded"
                        dense
                        dense-toggle
                        expand-separator
                        label="0 data points">

                        <div class="row">
                            <div class="col-12 q-pa-sm"> 
                            <q-btn  icon="add_box"
                            size="sm"
                            flat
                            @click="ExpandExander">
                                <q-tooltip>
                                Add Pore Pressure
                                </q-tooltip>
                            </q-btn>
                            </div>
                            
                        </div>

                        <q-card class="bg-primary">
                            
                            <q-card-section v-if="isNewPorePressure">
                            
                            <div class="row q-pa-sm">

                            <div class="col-12 q-pa-sm">
                                New Datum
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">TVD</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-3 q-pa-sm">Pore Pressure</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">psi</div>
                            <div class="col-12 q-pa-sm"> <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExander">
                            </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm">
                                <hr/>
                            </div>

                    
                        </div>
                        </q-card-section>

                    <!--  <q-card-actions align="right"
                        v-if="isNewPorePressure">
                            <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExander">
                            </q-btn>
                        </q-card-actions> -->

                        

                        <q-card-section>

                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Import">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm"> 
                                <q-table  
                                :data="porePressures" 
                                :columns="columnsPorePressure" 
                                row-key="name" 
                                binary-state-sort
                                flat
                                bordered
                                class="my-sticky-header-table"
                                dark
                                color="amber"

                                :separator="separator">


                                <template v-slot:body="props">
                                    <q-tr 
                                    v-if ="!props.row.isPaid"
                                    :props="props">
                                        <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                                        <q-td key="porePressure" :props="props">{{ props.row.porePressure }}</q-td>
                                    </q-tr>
                                    </template>
                                </q-table>
                            </div>
                        </q-card-section>

                        </q-card>
                    </q-expansion-item>
                </div>
            </div>

            <div class="row">
                <div class="col-12 q-pa-sm text-left">
                    Fracture Gradient
                    <br>
                    <hr/>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-expansion-item
                        v-model="expandedFracGrad"
                        dense
                        dense-toggle
                        expand-separator
                        label="0 data point">

                        <div class="row">
                            <div class="col-12 q-pa-sm"> 
                            <q-btn  icon="add_box"
                            size="sm"
                            flat
                            @click="ExpandExanderFracGrad">
                                <q-tooltip>
                                Add Fracture Gradient
                                </q-tooltip>
                            </q-btn>
                            </div>
                            
                        </div>

                        <q-card class="bg-primary">
                            
                            <q-card-section v-if="isNewFracGrad">
                            
                            <div class="row q-pa-sm">

                            <div class="col-12 q-pa-sm">
                                New Datum
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">TVD</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-3 q-pa-sm">Fracture Gradient</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">psi</div>
                            <div class="col-12 q-pa-sm"> <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExanderFracGrad">
                            </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm">
                                <hr/>
                            </div>

                    
                        </div>
                        </q-card-section>

                    <!--  <q-card-actions align="right"
                        v-if="isNewPorePressure">
                            <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExander">
                            </q-btn>
                        </q-card-actions> -->

                        

                        <q-card-section>

                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Import">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm"> 
                                <q-table   
                                :data="fractureGradients" 
                                :columns="columnsFractureGradient" 
                                row-key="name" 
                                binary-state-sort
                                flat
                                bordered
                                class="my-sticky-header-table"
                                dark
                                color="amber"
                                :separator="separator">


                                <template v-slot:body="props">
                                    <q-tr 
                                    v-if ="!props.row.isPaid"
                                    :props="props">
                                        <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                                        <q-td key="fractureGradient" :props="props">{{ props.row.fractureGradient }}</q-td>
                                    </q-tr>
                                    </template>
                                </q-table>
                            </div>
                        </q-card-section>

                        </q-card>
                    </q-expansion-item>
                </div>
            </div>

            <div class="row">
                <div class="col-12 q-pa-sm text-left">
                    Formation Tops
                    <br>
                    <hr/>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-expansion-item
                        v-model="expandedFormationTop"
                        dense
                        dense-toggle
                        expand-separator
                        label="0 data point">

                        <div class="row">
                            <div class="col-12 q-pa-sm"> 
                            <q-btn  icon="add_box"
                            size="sm"
                            flat
                            @click="ExpandExanderFormationTop">
                                <q-tooltip>
                                Add Formation Top
                                </q-tooltip>
                            </q-btn>
                            </div>
                            
                        </div>

                        <q-card class="bg-primary">
                            
                            <q-card-section v-if="isFormationTop">
                            
                            <div class="row q-pa-sm">

                            <div class="col-12 q-pa-sm">
                                New Formation Top
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">Formation Name</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm"></div>

                            <div class="col-3 q-pa-sm">TVD</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-12 q-pa-sm"> <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExanderFormationTop">
                            </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm">
                                <hr/>
                            </div>

                    
                        </div>
                        </q-card-section>

                    <!--  <q-card-actions align="right"
                        v-if="isNewPorePressure">
                            <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExander">
                            </q-btn>
                        </q-card-actions> -->

                        

                        <q-card-section>

                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Import">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm"> 
                                <q-table
                                :data="formationTops" 
                                :columns="columnsFormationTop" 
                                row-key="name" 
                                binary-state-sort
                                flat
                                bordered
                                class="my-sticky-header-table"
                                dark
                                color="amber"
                                :separator="separator">


                                <template v-slot:body="props">
                                    <q-tr 
                                    v-if ="!props.row.isPaid"
                                    :props="props">
                                        <q-td key="formationName" :props="props">{{ props.row.formationName }}</q-td>
                                        <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                                    </q-tr>
                                    </template>
                                </q-table>
                            </div>
                        </q-card-section>

                        </q-card>
                    </q-expansion-item>
                </div>
            </div>

            <div class="row">
                <div class="col-12 q-pa-sm text-left">
                    Geothermal Gradient
                    <br>
                    <hr/>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-expansion-item
                        v-model="expandedGeothermalGradient"
                        dense
                        dense-toggle
                        expand-separator
                        label="0 data point">

                        <div class="row">
                            <div class="col-12 q-pa-sm"> 
                            <q-btn  icon="add_box"
                            size="sm"
                            flat
                            @click="ExpandExanderGeothermalGradient">
                                <q-tooltip>
                                Add Geothermal Gradient
                                </q-tooltip>
                            </q-btn>
                            </div>
                            
                        </div>

                        <q-card class="bg-primary">
                            
                            <q-card-section v-if="isNewGeothermalGradient">
                            
                            <div class="row q-pa-sm">

                            <div class="col-12 q-pa-sm">
                                New Geothermal Gradient
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">TVD</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-3 q-pa-sm">Geothermal Gradient</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">deg F/ft</div>

                            <div class="col-12 q-pa-sm"> <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExanderGeothermalGradient">
                            </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm">
                                <hr/>
                            </div>

                    
                        </div>
                        </q-card-section>

                    <!--  <q-card-actions align="right"
                        v-if="isNewPorePressure">
                            <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExander">
                            </q-btn>
                        </q-card-actions> -->

                        

                        <q-card-section>

                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Import">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm"> 
                                <q-table  
                                :data="geothermalGradients" 
                                :columns="columnsGeothermalGradient" 
                                row-key="name" 
                                binary-state-sort
                                flat
                                bordered
                                class="my-sticky-header-table"
                                dark
                                color="amber"
                                :separator="separator">


                                <template v-slot:body="props">
                                    <q-tr 
                                    v-if ="!props.row.isPaid"
                                    :props="props">
                                        <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                                        <q-td key="geothermalGradient" :props="props">{{ props.row.geothermalGradient }}</q-td>
                                    </q-tr>
                                    </template>
                                </q-table>
                            </div>
                        </q-card-section>

                        </q-card>
                    </q-expansion-item>
                </div>
            </div>

            <div class="row">
                <div class="col-12 q-pa-sm text-left">
                    Formation Influx
                    <br>
                    <hr/>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-expansion-item
                        v-model="expandedFormationInflux"
                        dense
                        dense-toggle
                        expand-separator
                        label="0 data point">

                        <div class="row">
                            <div class="col-12 q-pa-sm"> 
                            <q-btn  icon="add_box"
                            size="sm"
                            flat
                            @click="ExpandExanderFormationInflux">
                                <q-tooltip>
                                Add Formation Influx
                                </q-tooltip>
                            </q-btn>
                            </div>
                            
                        </div>

                        <q-card class="bg-primary">
                            
                            <q-card-section v-if="isNewFormationInflux">
                            
                            <div class="row q-pa-sm">

                            <div class="col-12 q-pa-sm">
                                New Formation Influx
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">TVD</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-3 q-pa-sm">Formation Influx</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">bbl/day</div>

                            <div class="col-12 q-pa-sm"> <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExanderFormationInflux">
                            </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm">
                                <hr/>
                            </div>

                    
                        </div>
                        </q-card-section>

                    <!--  <q-card-actions align="right"
                        v-if="isNewPorePressure">
                            <q-btn 
                                size="sm"
                                label="Add"
                                class="bg-primary"
                                @click="CollapseExander">
                            </q-btn>
                        </q-card-actions> -->

                        

                        <q-card-section>

                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Import">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm"> 
                                <q-table   
                                :data="formationInfluxes" 
                                :columns="columnsFormationInflux" 
                                row-key="name" 
                                binary-state-sort
                                flat
                                bordered
                                class="my-sticky-header-table"
                                dark
                                color="amber"
                                :separator="separator">


                                <template v-slot:body="props">
                                    <q-tr 
                                    v-if ="!props.row.isPaid"
                                    :props="props">
                                        <q-td key="trueVerticalDepth" :props="props">{{ props.row.trueVerticalDepth }}</q-td>
                                        <q-td key="formationInflux" :props="props">{{ props.row.formationInflux }}</q-td>  
                                    </q-tr>
                                    </template>
                                </q-table>
                            </div>
                        </q-card-section>

                        </q-card>
                    </q-expansion-item>
                </div>
            </div>
        </q-scroll-area>
    </div>
</template>

<script>
export default {
    computed:{
        porePressures() {
        return this.$store.getters['subSurfaceStore/porePressures'];
        },
        fractureGradients() {
        return this.$store.getters['subSurfaceStore/fractureGradients'];
        },
        formationTops() {
        return this.$store.getters['subSurfaceStore/formationTops'];
        },
        geothermalGradients() {
        return this.$store.getters['subSurfaceStore/geothermalGradients'];
        },
        formationInfluxes() {
        return this.$store.getters['subSurfaceStore/formationInfluxes'];
        }
    },
    data() {
        return {
            visible: true,
            separator: 'cell',
            expanded: false,
            expandedFracGrad: false,
            expandedFormationTop: false,
            expandedGeothermalGradient: false,
            expandedFormationInflux: false,
            isNewPorePressure: false,
            isNewFracGrad:false,
            isFormationTop:false,
            isNewGeothermalGradient:false,
            isNewFormationInflux:false,
            columnsPorePressure: [
            { name: "trueVerticalDepth", label: "TVD (ft)", field: "", align: "left" },
            { name: "porePressure", label: "Pore Pressure (psi)", field: "", align: "left" },
          ],
          columnsFractureGradient: [
            { name: "trueVerticalDepth", label: "TVD (ft)", field: "", align: "left" },
            { name: "fractureGradient", label: "Pore Pressure (psi/ft)", field: "", align: "left" },
          ],
          columnsFormationTop: [
            { name: "formationName", label: "Formation Name", field: "", align: "left" },
            { name: "trueVerticalDepth", label: "TVD (ft)", field: "", align: "left" },
          ],
          columnsGeothermalGradient: [
            { name: "trueVerticalDepth", label: "TVD (ft)", field: "", align: "left" },
            { name: "geothermalGradient", label: "Geothermal Gradient (deg F/ft)", field: "", align: "left" },
          ],
          columnsFormationInflux: [
            { name: "trueVerticalDepth", label: "TVD (ft)", field: "", align: "left" },
            { name: "formationInflux", label: "Formation Influx (bbl/day)", field: "", align: "left" },
          ],
          message: ""
    }
    },
    methods: {
        ExpandExander(){
            var context =  this;
            context.isNewPorePressure = true;
        },
        CollapseExander(){
            var context =  this;
            context.isNewPorePressure = false;
        },
        ExpandExanderFracGrad(){
           var context =  this;
            context.isNewFracGrad = true; 
        },
        CollapseExanderFracGrad(){
           var context =  this;
            context.isNewFracGrad = false; 
        },
        ExpandExanderFormationTop(){
           var context =  this;
            context.isFormationTop = true; 
        },
        CollapseExanderFormationTop(){
           var context =  this;
            context.isFormationTop = false; 
        },
        ExpandExanderGeothermalGradient(){
           var context =  this;
            context.isNewGeothermalGradient = true; 
        },
        CollapseExanderGeothermalGradient(){
           var context =  this;
            context.isNewGeothermalGradient = false; 
        },
        ExpandExanderFormationInflux(){
           var context =  this;
            context.isNewFormationInflux = true; 
        },
        CollapseExanderFormationInflux(){
           var context =  this;
            context.isNewFormationInflux = false; 
        }

    },
    created(){
      var tabCaption = "Subsurface Properties Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
    }
}
</script>

<style scoped>

#subsurfacepage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}

.my-sticky-header-table{
  height: 450px;
}

</style>
