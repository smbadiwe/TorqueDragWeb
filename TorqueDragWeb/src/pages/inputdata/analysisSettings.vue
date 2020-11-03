<template>
<div>
     <div class="row">
            <div class="col-12 q-pa-sm text-right"> 
                    <q-btn 
                    allign="right"
                        size="sm"
                            label="Save"
                            @click="PostCommon">
                    </q-btn>
                </div>
        </div>
    <div class="row">
        <div class="col-12">

        <q-card class="my-card bg-secondary text-white" style="height:50px;">
        <q-card-section align="right">
            <div class="text-center text-subtitle1 q-pb-md">Analysis Settings</div>
        </q-card-section>
        </q-card>

        <q-scroll-area
            :visible="visible"
        style="height: 500px; width: 100%;"
        >
            <div class="row">
                <div class="col-12">
                    <q-expansion-item
                        v-model="expandedAnalysisSettings"
                        dense
                        dense-toggle
                        expand-separator
                        label="Common"
                        class="text-left"
                        >

                        <div class="row">

                            <div class="col-6 q-pa-sm">
                                Active fluid: 
                            </div>
                            <div class="col-6 q-pa-sm">
                                {{ common.activeFluid}} 
                            </div>

                            <div class="col-12 q-pa-sm">
                                Run Parameters
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">Start MD:</div>
                            <div class="col-6 q-pa-sm"><input v-model="common.startMeasuredDepth"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-3 q-pa-sm">End MD</div>
                            <div class="col-6 q-pa-sm"><input v-model="common.endMeasuredDepth"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-3 q-pa-sm">Step size:</div>
                            <div class="col-6 q-pa-sm"><input v-model="common.stepSize"></div>
                            <div class="col-3 q-pa-sm">ft</div>

                            <div class="col-12 q-pa-sm text-left"> 
                                <q-btn 
                                    size="sm"
                                    label="Reset">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm">
                                Circulating Options
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">Sea water density:</div>
                            <div class="col-6 q-pa-sm"><input v-model="common.seaWaterDensity"></div>
                            <div class="col-3 q-pa-sm">lb/ft3</div>

                        </div>

                     
                    </q-expansion-item>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <q-expansion-item
                        v-model="expandedTorqueAndDrag"
                        dense
                        dense-toggle
                        expand-separator
                        label="Torque & Drag"
                        class="text-left"
                        >

                        <div class="row"> 
                            
                            <div class="col-12 q-pa-sm">
                                Hook Load/Weight-Indicator Correction
                            </div>

                            <div class="col-3 q-pa-sm">Block weight:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">kip</div>

                            <div class="col-12 q-pa-sm text-left">
                                <input type="checkbox" id="checkbox" v-model="checked">
                                <label for="checkbox"> Use sheave friction factor </label>
                            </div>

                            <div class="col-3 q-pa-sm">Lines shung:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm"></div>

                            <div class="col-3 q-pa-sm">Mechanical Efficiency:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">%</div>

                            <div class="col-12 q-pa-sm">
                                Analytical Method
                                <br>
                                <hr/>
                            </div>

                            <div class="col-12 q-pa-sm text-left">
                                <input type="checkbox" id="checkbox" v-model="checked">
                                <label for="checkbox"> Use Bending Stress Magnification</label>
                            </div>

                            <div class="col-12 q-pa-sm">
                                String Analysis Model
                                <br>
                                <hr/>
                            </div>

                            <div class="col-12 q-pa-sm text-left">
                                <input type="checkbox" id="checkbox" v-model="checked">
                                <label for="checkbox"> Use stiff string</label>
                            </div>

                            <div class="col-12 q-pa-sm text-left">
                                <input type="checkbox" id="checkbox" v-model="checked">
                                <label for="checkbox"> Use viscous torque and drag</label>
                            </div>

                            <div class="col-3 q-pa-sm">Buckling limit factor:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm"></div>

                            <div class="col-12 q-pa-sm">
                                Minimun Overpull
                                <br>
                                <hr/>
                            </div>

                            <div class="col-3 q-pa-sm">Use % of yield:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">%</div>

                            <div class="col-12 q-pa-sm">
                                Fluid Column
                                <br>
                                <hr/>
                            </div>

                            <div class="col-12 q-pa-sm text-left">
                                <input type="checkbox" id="checkbox" v-model="checked">
                                <label for="checkbox"> Use fluid column gradient</label>
                            </div>


                        </div>
                    </q-expansion-item>
                </div>
            </div>
        </q-scroll-area>
    </div>
    </div>
</div>
</template>

<script>
export default {
 computed:{
        common() {
        return this.$store.getters['settingsStore/common'];
        },
        isFromDB() {
        return this.$store.getters['settingsStore/isFromDB'];
        }
    },
  data () {
    return {
        visible: true,
        expandedAnalysisSettings: true,
        expandedTorqueAndDrag: false,
        checked: false,
        activeFluid: "",
        startMeasuredDepth: null,
        endMeasuredDepth: null,
        stepSize: null,
        seaWaterDensity: null,
        courseLength: 50,
        youngsModulus: 20,
        message: ""
    }
  },
  methods: {
      PostCommon(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyDBConnectionString'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            this.$store.dispatch('settingsStore/PostCommon', {
                companyDBConnectionString: Conn,
                designId: selectedTorqueDragDesign.id,
                common: {}
            });

                
        }
  },
  created(){
       var Conn = this.$store.getters['authStore/companyDBConnectionString'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var payload = {
          companyDBConnectionString: Conn,
          designId: selectedTorqueDragDesign.id
      }
      this.$store.dispatch('settingsStore/GetCommon', payload);
  }
}
</script>