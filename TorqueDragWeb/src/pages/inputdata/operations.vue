<template>
    <div id="operationspage">
        
            <div class="row">
                <div class="col-12 q-pa-sm text-right"> 
                        <q-btn 
                        allign="right"
                            size="sm"
                                label="Save"
                                @click="PostOperation">
                        </q-btn>
                    </div>
            </div>

            <div class="row" style="height: 450px;">

                <div class="col-12">
                    <q-expansion-item
                        v-model="expandedTDrmalAnalysis"
                        dense
                        dense-toggle
                        expand-separator
                        label="T & D Normal Analysis"
                        class="text-left"
                        >

                        <div class="row">

                            <div class="col-12">
                                <q-card class="my-card" flat > 

                                    <q-card-section class="bg-primary text-white text-center">

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isTrippingInChecked">
                                                <label for="checkbox"> Tripping In </label>
                                                <br>
                                                <hr/>
                                            </div>

                                                <q-expansion-item
                                                    class="col-12"
                                                    v-model="expandedTrippingIn"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                    <textbox variableName="Speed" :col1="col1" :col2="col2"
                                                    v-model="operation.trippingInSpeed"
                                                    unit="ft/min" :hasUnit="true"
                                                    :toolTipDescription="operationDescriptions.trippingInSpeed"></textbox>

                                                    <textbox variableName="RPM" :col1="col1" :col2="col2"
                                                    v-model="operation.trippingInRPM"
                                                    unit="rpm" :hasUnit="true"
                                                    :toolTipDescription="operationDescriptions.trippingInRPM"></textbox>
                                                </q-expansion-item>
                                        </div>
                                

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isTrippingOutChecked">
                                                <label for="checkbox"> Tripping Out </label>
                                                <br>
                                                <hr/>
                                            </div>

                                        
                                            <q-expansion-item
                                            class="col-12"
                                                v-model="expandedTrippingOut"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >

                                             <textbox variableName="Speed" :col1="col1" :col2="col2"
                                                    v-model="operation.trippingOutSpeed"
                                                    unit="ft/min" :hasUnit="true"
                                                    :toolTipDescription="operationDescriptions.trippingOutSpeed"></textbox>

                                            <textbox variableName="RPM" :col1="col1" :col2="col2"
                                            v-model="operation.trippingOutRPM"
                                            unit="rpm" :hasUnit="true"
                                            :toolTipDescription="operationDescriptions.trippingOutRPM"></textbox>

                                            </q-expansion-item>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isRotatingOnBottomChecked">
                                                <label for="checkbox"> Rotating On Bottom </label>
                                                <br>
                                                <hr/>
                                            </div>

                                                <q-expansion-item
                                                class="col-12"
                                                    v-model="expandedRotatingOnBottom"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >

                                                <textbox variableName="WOB" :col1="col1" :col2="col2"
                                                    v-model="operation.weightOnBit"
                                                    unit="kip" :hasUnit="true"
                                                    :toolTipDescription="operationDescriptions.weightOnBit"></textbox>

                                                <textbox variableName="Torque at bit" :col1="col1" :col2="col2"
                                                v-model="operation.torqueAtBitDrillingOperation"
                                                unit="ft-lbf" :hasUnit="true"
                                                :toolTipDescription="operationDescriptions.torqueAtBitDrillingOperation"></textbox>

                                                </q-expansion-item>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isSlideDrillingChecked">
                                                <label for="checkbox"> Slide Drilling </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <q-expansion-item
                                                class="col-12"
                                                v-model="expandedSlideDrilling"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >

                                                <textbox variableName="WOB" :col1="col1" :col2="col2"
                                                    v-model="operation.weightOnBitIDHM"
                                                    unit="kip" :hasUnit="true"
                                                    :toolTipDescription="operationDescriptions.weightOnBitIDHM"></textbox>

                                                <textbox variableName="Torque at bit" :col1="col1" :col2="col2"
                                                v-model="operation.torqueAtBit"
                                                unit="ft-lbf" :hasUnit="true"
                                                :toolTipDescription="operationDescriptions.torqueAtBit"></textbox>

                                            </q-expansion-item>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isBackReamingChecked">
                                                <label for="checkbox"> Back Reaming </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <q-expansion-item
                                                class="col-12"
                                                v-model="expandedBackReaming"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                <textbox variableName="Overpull" :col1="col1" :col2="col2"
                                                    v-model="operation.overpullBackReaming"
                                                    unit="kip" :hasUnit="true"
                                                    :toolTipDescription="operationDescriptions.overpullBackReaming"></textbox>

                                                <textbox variableName="Torque at bit" :col1="col1" :col2="col2"
                                                v-model="operation.torqueAtBitBackReaming"
                                                unit="ft-lbf" :hasUnit="true"
                                                :toolTipDescription="operationDescriptions.torqueAtBitBackReaming"></textbox>

                                            </q-expansion-item>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isRotatingOffBottomChecked">
                                                <label for="checkbox"> Rotating Off Bottom </label>
                                                <br>
                                                <hr/>
                                            </div>

                                           <!--  <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedRotatingOffBottom"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                                <div class="col-3 q-pa-sm">WOB</div>
                                                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent"></div>
                                                                <div class="col-3 q-pa-sm">kip</div>

                                                                <div class="col-3 q-pa-sm">Torque at bit</div>
                                                                <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="operation.torqueAtBitBackReaming"></div>
                                                                <div class="col-3 q-pa-sm">ft-lbf</div>
                                                        </div>
                                                </q-expansion-item>
                                            </div> -->

                                        </div>

                                    </q-card-section>

                                </q-card>
                            </div>
                        </div>

                    </q-expansion-item>
                </div>
            </div>

    </div>
</template>

<script>
import textbox from "components/controls/textbox.vue"
export default {
    computed:{
       operation() {
        return this.$store.getters['operationsStore/operation'];
        },
        operationDescriptions(){
            return this.$store.getters['operationsStore/operationDescriptions'];
        }
    },
    components:{
        textbox
    },
    data() {
        return {
            col1: "4",
            col2: "8",
            visible: true,
            expandedTDrmalAnalysis: true,
            expandedTrippingIn: false,
            expandedTrippingOut: false,
            expandedRotatingOnBottom: false,
            expandedSlideDrilling: false,
            expandedBackReaming: false,
            expandedRotatingOffBottom: false,
            checked: false,
            isUserDefinedOperationsChecked : false,
        }
    },
    methods:{
        PostOperation(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });
            this.$store.dispatch('operationsStore/PostOperation', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel._id,
                operation: context.operation
                /* operation: {
                    isTrippingInChecked: context.isTrippingInChecked,
                    trippingInSpeed : parseFloat(context.trippingInSpeed),
                    trippingInRPM : parseFloat(context.trippingInRPM),
                    isTrippingOutChecked : context.isTrippingOutChecked,
                    trippingOutSpeed : parseFloat(context.trippingOutSpeed),
                    trippingOutRPM : parseFloat(context.trippingOutRPM),
                    isRotatingOnBottomChecked : context.isRotatingOnBottomChecked,
                    isSlideDrillingChecked : context.isSlideDrillingChecked,
                    weightOnBit : parseFloat(context.weightOnBit),
                    torqueAtBit : parseFloat(context.torqueAtBit),
                    isBackReamingChecked: context.isBackReamingChecked,
                    isRotatingOffBottomChecked : context.isRotatingOffBottomChecked,
                    isUserDefinedOperationsChecked : context.isUserDefinedOperationsChecked,
                    isHookLoad : context.isHookLoad,
                    isWeightOnBit : context.isWeightOnBit,
                    isIDHMTrippingInChecked : context.isIDHMTrippingInChecked,
                    weightOnBitIDHM : parseFloat(context.weightOnBitIDHM),
                    hookLoadIDHM : parseFloat(context.hookLoadIDHM),
                    isIDHMTrippingOutChecked: context.isIDHMTrippingOutChecked,
                    isIDHMRotatingChecked : context.isIDHMRotatingChecked,
                    tripSpeedBackReam : parseFloat(context.tripSpeedBackReam),
                    tripRPMBackReam : parseFloat(context.tripRPMBackReam),
                    designId: selectedTorqueDragDesign.id
                } */
            });

        }
    },
    created(){
     /* var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel']
       var keys = Object.keys(selectedTorqueDragDesign);
      var length = keys.length;
      if(length > 0){
        var payload = {
        companyName: Conn,
        designId: selectedTorqueDragDesign.id,
        userId: IdentityModel.id
        } */
        //this.$store.dispatch('operationsStore/GetOperation', payload);
        var tabCaption = "Operational Parameters";
        this.$store.commit('settingsStore/GetTabCaption', tabCaption);
      //}



      //var context =  this;
      /* var operation = this.$store.getters['operationsStore/operation'];

            isTrippingInChecked = operation.isTrippingInChecked
            context.trippingInSpeed = operation.trippingInSpeed
            context.trippingInRPM = operation.trippingInRPM
            context.isTrippingOutChecked = operation.isTrippingOutChecked
            context.trippingOutSpeed = operation.trippingOutSpeed
            context.trippingOutRPM = operation.trippingOutRPM
            context.isRotatingOnBottomChecked = operation.isRotatingOnBottomChecked
            context.isSlideDrillingChecked = operation.isSlideDrillingChecked
            context.weightOnBit = operation.weightOnBit
            context.torqueAtBit = operation.torqueAtBit
            context.isBackReamingChecked = operation.isBackReamingChecked
            context.isRotatingOffBottomChecked = operation.isRotatingOffBottomChecked
            context.isUserDefinedOperationsChecked = operation.isUserDefinedOperationsChecked
            context.isHookLoad = operation.isHookLoad
            context.isWeightOnBit = operation.isWeightOnBit
            context.isIDHMTrippingInChecked = operation.isIDHMTrippingInChecked
            context.weightOnBitIDHM = operation.weightOnBitIDHM
            context.hookLoadIDHM = operation.hookLoadIDHM
            context.isIDHMTrippingOutChecked = operation.isIDHMTrippingOutChecked
            context.isIDHMRotatingChecked = operation.isIDHMRotatingChecked */
  }
}
</script>

<style scoped>
.my-card {
    border: none;
}

#operationspage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}
</style>