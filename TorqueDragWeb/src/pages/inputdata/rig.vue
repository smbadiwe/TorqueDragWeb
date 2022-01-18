<template>
    <div id="rigpage">
        <div class="row q-pa-sm">
            <div class="col-12">
            Mechanical Limits
            <br>
            <hr/>
            </div>

            <div class="col-5"><q-checkbox v-model="isBlockRating" label="Block rating:" color="primary" /></div>
            <div class="col-3 q-pt-sm">1,500 kip</div>
            <div class="col-4"></div>

            <div class="col-5"><q-checkbox v-model="isTorqueRating" label="Torque rating:" color="primary" /></div>
            <div class="col-3  q-pt-sm">50,000 ft-lbf</div>
            <div class="col-4"></div>
    
        </div>

        <div class="row q-pa-sm">
            <div class="col-12">
            Circulating System
            <br>
            <hr/>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-5">Rated working pressure</div>
                    <div class="col-4"></div>
                    <div class="col-3">5,000 psi</div>
                </div>
            </div>

            <div class="col-12">
                <div class="row">
                    <q-expansion-item
                        v-model="expandTwoSetsOfFieldData"
                        dense
                        dense-toggle
                        expand-separator
                        label="Two Sets of Field Data"
                        clickable
                    >
                            
                        <div class="row dialogBorder">
                            <div class="col-4 q-pt-sm">Surface System Constant</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.surfaceSystemConstant"></div>
                            <div class="col-4 q-pt-sm">Minimum Pump Flow Rate (gpm)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.minimumFlowRate"></div>
                            <div class="col-4 q-pt-sm">Maximum Horse Power (hp)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.maxHorsePower"></div>

                            <div class="col-4 q-pt-sm">Maximum Surface Pressure (psi)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.maxAllowableSurfacePressure"></div>

                            <div class="col-4 q-pt-sm">High Pump Pressure (psi)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.highPumpPressure"></div>
                            <!-- <div class="col-2"></div> -->

                            <div class="col-4 q-pt-sm">Flow Rate High Pump Pressure (gpm)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.flowRateHighPumpPressure"></div>
                            <!-- <div class="col-4"></div> -->

                            <div class="col-4 q-pt-sm">Low Pump Pressure (psi)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.lowPumpPressure"></div>
                            <!-- <div class="col-4"></div> -->

                            <div class="col-4 q-pt-sm">Flow Rate Low Pump Pressure (gpm)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.flowRateLowPumpPressure"></div>

                            <div class="col-4 q-pt-sm">Pump Efficiency (fraction)</div>
                            <div class="col-8 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="rig.pumpEfficiency"></div>

                            <div class="col-4 q-pt-sm"> 
                                <q-btn 
                                size="sm"
                                label="Calculatee the flow exponent (M) =>"
                                @click="calculateFlowExponent">
                                </q-btn>
                            </div>
                            <div class="col-8 q-pa-sm">{{ rig.flowExponent}}</div>

                            <div class="col-10 q-pt-sm"> 
                            </div>
                            <div class="col-2 q-pa-sm">
                                <q-btn 
                                size="sm"
                                label="Save"
                                @click="SaveRigData">
                                </q-btn>
                            </div>
                
                        </div>

                    </q-expansion-item>
                </div>
            </div>

            <div class="col-12">
                <div class="row">
                    <div class="col-4 q-pa-sm">
                        Mud Pumps 
                    </div>
                    <div class="col-4 q-pa-sm">
                        <q-btn  icon="add_box"
                            size="sm"
                            flat>
                            <q-tooltip>
                                Add mud pump
                            </q-tooltip>
                        </q-btn>
                    </div>

                    <div class="col-4 q-pa-sm">
                        <q-btn 
                            size="sm"
                            label="Add from catalog">
                        </q-btn>
                    </div>
                </div>
            </div>
    
        </div>
       
    </div>
</template>

<script>
export default {
    computed:{
        rig() {
        return this.$store.getters['rigStore/rig'];
        }
    },
    data() {
        return {
            isBlockRating: true,
            isTorqueRating: true,
            visible: TextTrackCue,
            expandTwoSetsOfFieldData: true
        }
    },
    methods:{
        calculateFlowExponent(){
            var context =  this;
            var companyName = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            
            this.$store.dispatch('rigStore/calculateFlowExponent', {
                companyName: companyName,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id
            });
        },
        SaveRigData(){
            var context = this;
            var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
            var companyName = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];

            this.$store.commit('dataImportStore/SetLoaderParameters', {
                showLoader: true,
                showImportView: false
            });

            this.$store.dispatch('rigStore/PostRig', {
                    rig: context.rig,
                    designId: selectedTorqueDragDesign.id,
                    userId: IdentityModel._id,
                    companyName: companyName
                });
        }
        
    },
    created(){
      var tabCaption = "Rig Equipment";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
    }
}
</script>

<style scoped>

#rigpage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}

</style>