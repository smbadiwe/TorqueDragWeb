<template>
<div class="bg-primary text-accent">
    <!-- <q-scroll-area
        :visible="visible"
        id="scrollview"
    > -->
        <div id="settigspage">
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

                    <div class="row">
                            <q-expansion-item
                                class="col-12 text-left"
                                v-model="expandedAnalysisSettings"
                                dense
                                dense-toggle
                                expand-separator
                                label="Common"
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

                                    <div class="col-3 q-pa-sm">Start MD (ft):</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.startMeasuredDepth"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                    <div class="col-3 q-pa-sm">End MD (ft)</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.endMeasuredDepth"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                    <div class="col-3 q-pa-sm">Step size (ft):</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.stepSize"></div>
                                    <div class="col-3 q-pa-sm"></div>

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

                                    <div class="col-3 q-pa-sm">Sea water density (lb/ft3):</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.seaWaterDensity"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                    <div class="col-3 q-pa-sm">Young Modulus (Mlbin4):</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.youngsModulus"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                </div>

                            
                            </q-expansion-item>
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

                                    <div class="col-3 q-pa-sm">Block weight (kip):</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.blockWeight"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                    <div class="col-12 q-pa-sm text-left">
                                        <input type="checkbox" id="checkbox" v-model="checked">
                                        <label for="checkbox"> Use sheave friction factor </label>
                                    </div>

                                    <div class="col-3 q-pa-sm">Lines shung:</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="message"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                    <div class="col-3 q-pa-sm">Mechanical Efficiency (%):</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="message"></div>
                                    <div class="col-3 q-pa-sm"></div>

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
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.bucklingLimitFactor"></div>
                                    <div class="col-3 q-pa-sm"></div>

                                    <div class="col-12 q-pa-sm">
                                        Minimun Overpull
                                        <br>
                                        <hr/>
                                    </div>

                                    <div class="col-3 q-pa-sm">Use % of yield:</div>
                                    <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="common.percentOfYield"></div>
                                    <div class="col-3 q-pa-sm"></div>

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
            </div>
            </div>
        </div>
    <!-- </q-scroll-area> -->
</div>
</template>

<script>
import textbox from "components/controls/textbox.vue"
export default {
 computed:{
        common() {
        return this.$store.getters['settingsStore/common'];
        },
        isFromDB() {
        return this.$store.getters['settingsStore/isFromDB'];
        }
    },
  components:{
      textbox
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
        youngsModulus: null,
        message: "",
        blockWeight: null
    }
  },
  methods: {
      toNumber(value){
            var ans = 0;
            //console.log("value: ", value)
            ans = parseFloat(value);
            if(Number.isNaN(ans) === true){
                console.log("ans: ", ans)
                ans = 0;
            }

            return ans;
        },
       SettingFormatting(){
            var context  =  this;
            var common = context.common;
            common.startMeasuredDepth = context.toNumber(common.startMeasuredDepth);
            common.endMeasuredDepth = context.toNumber(common.endMeasuredDepth);
            common.stepSize = context.toNumber(common.stepSize);
            common.seaWaterDensity = context.toNumber(common.seaWaterDensity);
            common.courseLength = context.toNumber(common.courseLength);
            common.youngsModulus = context.toNumber(common.youngsModulus);
            common.blockWeight =  context.toNumber(common.blockWeight);
            common.percentOfYield = context.toNumber(common.percentOfYield);
            common.bucklingLimitFactor = context.toNumber(common.bucklingLimitFactor);

            return common;
      },
      PostCommon(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel']
            this.$store.commit('dataImportStore/SetLoaderParameters', {
                showLoader: true,
                showImportView: false
            });

            this.$store.dispatch('settingsStore/PostCommon', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                common: context.SettingFormatting()
            });

                
        }
  },
  created(){
      var tabCaption = "Settings";
      this.$store.commit('settingsStore/GetTabCaptionRight', tabCaption);
      /* var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];
      console.log('userId', IdentityModel.id);
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          userId: IdentityModel.id
      }
      this.$store.dispatch('settingsStore/GetCommon', payload); */
      
  }
}
</script>

<style scoped>
#settigspage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
}
#scrollview {
    height: 390px;
     width: 240px;
}
</style>