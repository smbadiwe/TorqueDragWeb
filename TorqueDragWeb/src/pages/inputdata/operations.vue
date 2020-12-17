<template>
    <div id="operationspage">
        <q-scroll-area
            :visible="visible"
            style="height: 700px; width: 240px"
            > 
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

                                            <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedTrippingIn"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                                <div class="col-3 q-pa-sm">Speed</div>
                                                                <div class="col-6 q-pa-sm"><input v-model="operation.trippingInSpeed"></div>
                                                                <div class="col-3 q-pa-sm">ft/min</div>

                                                                <div class="col-3 q-pa-sm">RPM</div>
                                                                <div class="col-6 q-pa-sm"><input v-model="operation.trippingInRPM"></div>
                                                                <div class="col-3 q-pa-sm">rpm</div>

                                                        </div>
                                                </q-expansion-item>
                                            </div>
                                        </div>
                                

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isTrippingOutChecked">
                                                <label for="checkbox"> Tripping Out </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedTrippingOut"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                            <div class="col-3 q-pa-sm">Speed</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="operation.trippingOutSpeed"></div>
                                                            <div class="col-3 q-pa-sm">ft/min</div>

                                                            <div class="col-3 q-pa-sm">RPM</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="operation.trippingOutRPM"></div>
                                                            <div class="col-3 q-pa-sm">rpm</div>
                                                        </div>
                                                </q-expansion-item>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isRotatingOnBottomChecked">
                                                <label for="checkbox"> Rotating On Bottom </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedRotatingOnBottom"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                            <div class="col-3 q-pa-sm">WOB</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="operation.weightOnBit"></div>
                                                            <div class="col-3 q-pa-sm">kip/min</div>
                                                        </div>
                                                </q-expansion-item>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isSlideDrillingChecked">
                                                <label for="checkbox"> Slide Drilling </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedSlideDrilling"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                                <div class="col-3 q-pa-sm">WOB</div>
                                                                <div class="col-6 q-pa-sm"><input v-model="operation.weightOnBitIDHM"></div>
                                                                <div class="col-3 q-pa-sm">kip/min</div>

                                                                <div class="col-3 q-pa-sm">Torque at bit</div>
                                                                <div class="col-6 q-pa-sm"><input v-model="operation.torqueAtBit"></div>
                                                                <div class="col-3 q-pa-sm">ft-klbf</div>
                                                        </div>
                                                </q-expansion-item>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox" v-model="operation.isBackReamingChecked">
                                                <label for="checkbox"> Back Reaming </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedBackReaming"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                                <div class="col-3 q-pa-sm">Tripping Speed</div>
                                                                <div class="col-6 q-pa-sm"><input v-model="operation.tripSpeedBackReam"></div>
                                                                <div class="col-3 q-pa-sm">ft/min</div>

                                                                <div class="col-3 q-pa-sm">RPM</div>
                                                                <div class="col-6 q-pa-sm"><input v-model="operation.tripRPMBackReam"></div>
                                                                <div class="col-3 q-pa-sm">rpm</div>
                                                        </div>
                                                </q-expansion-item>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-12 q-pa-sm text-left">
                                                <input type="checkbox" id="checkbox">
                                                <label for="checkbox"> Rotating Off Bottom </label>
                                                <br>
                                                <hr/>
                                            </div>

                                            <div class="col-12">
                                                <q-expansion-item
                                                    v-model="expandedRotatingOffBottom"
                                                    dense
                                                    dense-toggle
                                                    expand-separator
                                                >
                                                        <div class="row">

                                                                <div class="col-3 q-pa-sm">WOB</div>
                                                                <div class="col-6 q-pa-sm"><input></div>
                                                                <div class="col-3 q-pa-sm">kip/min</div>

                                                                <div class="col-3 q-pa-sm">Torque at bit</div>
                                                                <div class="col-6 q-pa-sm"><input></div>
                                                                <div class="col-3 q-pa-sm">ft-lbf</div>
                                                        </div>
                                                </q-expansion-item>
                                            </div>

                                        </div>

                                    </q-card-section>

                                </q-card>
                            </div>
                        </div>

                    </q-expansion-item>
                </div>
            </div>

        </q-scroll-area>
    </div>
</template>

<script>
export default {
    computed:{
       operation() {
        return this.$store.getters['operationsStore/operation'];
        } 
    },
    data() {
        return {
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
            this.$store.dispatch('operationsStore/PostOperation', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
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
     var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
       var keys = Object.keys(selectedTorqueDragDesign);
      var length = keys.length;
      if(length > 0){
        var payload = {
        companyName: Conn,
        designId: selectedTorqueDragDesign.id
        }
        this.$store.dispatch('operationsStore/GetOperation', payload);
        var tabCaption = "Operational Parameters";
        this.$store.commit('settingsStore/GetTabCaption', tabCaption);
      }



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