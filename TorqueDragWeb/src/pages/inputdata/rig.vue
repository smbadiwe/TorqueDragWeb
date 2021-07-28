<template>
    <div id="rigpage">
        <!-- <div class="row q-pa-sm">
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
    
        </div> -->

        <div class="row q-pa-sm">
            <div class="col-12">
            Circulating System
            <br>
            <hr/>
            </div>

            <!-- <div class="col-12">
                <div class="row">
                    <div class="col-5">Rated working pressure</div>
                    <div class="col-4"></div>
                    <div class="col-3">5,000 psi</div>
                </div>
            </div> -->

            <q-expansion-item class="col-12"
            v-model="expandTwoSetsOfFieldData"
                        dense
                        dense-toggle
                        expand-separator
                        label="Two Sets of Field Data"
                        clickable>

                <textbox variableName="Surface System Constant" :col1="col1" :col2="col2"
                v-bind:variable="rig.surfaceSystemConstant"
                unit="" :hasUnit="false"
                :toolTipDescription="rigDescriptions.surfaceSystemConstant"></textbox>

                <textbox variableName="Minimum Pump Flow Rate" :col1="col1" :col2="col2"
                v-bind:variable="rig.minimumFlowRate"
                unit="gpm" :hasUnit="true"
                :toolTipDescription="rigDescriptions.minimumFlowRate"></textbox>

                <textbox variableName="Maximum Horse Power" :col1="col1" :col2="col2"
                v-bind:variable="rig.maxHorsePower"
                unit="hp" :hasUnit="true"
                :toolTipDescription="rigDescriptions.maxHorsePower"></textbox>

                <textbox variableName="Maximum Surface Pressure" :col1="col1" :col2="col2"
                v-bind:variable="rig.maxAllowableSurfacePressure"
                unit="psi" :hasUnit="true"
                :toolTipDescription="rigDescriptions.maxAllowableSurfacePressure"></textbox>

                <textbox variableName="High Pump Pressure" :col1="col1" :col2="col2"
                v-bind:variable="rig.highPumpPressure"
                unit="psi" :hasUnit="true"
                :toolTipDescription="rigDescriptions.highPumpPressure"></textbox>

                <textbox variableName="Flow Rate High Pump Pressure" :col1="col1" :col2="col2"
                v-bind:variable="rig.flowRateHighPumpPressure"
                unit="gpm" :hasUnit="true"
                :toolTipDescription="rigDescriptions.flowRateHighPumpPressure"></textbox>

                <textbox variableName="Low Pump Pressure" :col1="col1" :col2="col2"
                v-bind:variable="rig.lowPumpPressure"
                unit="psi" :hasUnit="true"
                :toolTipDescription="rigDescriptions.lowPumpPressure"></textbox>

                <textbox variableName="Flow Rate Low Pump Pressure" :col1="col1" :col2="col2"
                v-bind:variable="rig.flowRateLowPumpPressure"
                unit="gpm" :hasUnit="true"
                :toolTipDescription="rigDescriptions.flowRateLowPumpPressure"></textbox>

                <textbox variableName="Pump Efficiency" :col1="col1" :col2="col2"
                v-bind:variable="rig.pumpEfficiency"
                unit="fraction" :hasUnit="true"
                :toolTipDescription="rigDescriptions.pumpEfficiency"></textbox>

                <div class="row">
                    <q-expansion-item class="col-12"
                    v-model="expandBitLossesParams"
                    dense
                    dense-toggle
                    expand-separator
                    label="Bit Pressure Loss"
                    clickable>

                    <textbox variableName="Bit Nozzle Area" :col1="col1" :col2="col2"
                    v-bind:variable="bitLosses.nozzleArea"
                    unit="ft2" :hasUnit="true" disabled></textbox>

                    <textbox variableName="Low Pressure Loss" :col1="col1" :col2="col2"
                    v-bind:variable="bitLosses.lowPressureDropThroughBit"
                    unit="psi" :hasUnit="true" disabled></textbox>

                    <textbox variableName="High Pressure Loss" :col1="col1" :col2="col2"
                    v-bind:variable="bitLosses.highPressureDropThroughBit"
                    unit="psi" :hasUnit="true" disabled></textbox>

                    <div class="row">
                        <div class="col-4 q-pa-sm">
                                <q-btn 
                                size="sm"
                                label="Calculate Bit Pressure Losses"
                                @click="calculatePressureLosses">
                                </q-btn>
                            </div>
                            <div class="col-4 q-pa-sm"></div>
                            <div class="col-4 q-pa-sm"
                            v-if="isBitPressureLossesCorrect">
                                <q-btn 
                                size="sm"
                                label="Calculatee the flow exponent (M) =>"
                                @click="calculateFlowExponent">
                                </q-btn>
                            </div>
                        <div class="col-12 q-pa-sm">{{ flowExponentMessage }}</div>
                    </div>
                    </q-expansion-item>
                </div>

                <div class="row">
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
import textbox from "components/controls/textbox.vue"
export default {
    computed:{
        rig() {
        return this.$store.getters['rigStore/rig'];
        },
        bitLosses(){
            return this.$store.getters['rigStore/bitLosses'];
        },
        isBitPressureLossesCorrect(){
            return this.$store.getters['rigStore/isBitPressureLossesCorrect'];
        },
        flowExponentMessage(){
            return this.$store.getters['rigStore/flowExponentMessage'];
        },
        rigDescriptions(){
            return this.$store.getters['rigStore/rigDescriptions'];
        }
    },
    components:{
        textbox
    },
    data() {
        return {
            col1: "4",
            col2: "8",
            expandBitLossesParams: true,
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
        calculatePressureLosses(){
            var context =  this;
            var companyName = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            
            this.$store.dispatch('rigStore/calculatePressureLosses', {
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
                    userId: IdentityModel.id,
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