<template>
    <div class="bg-primary" style="width: 2000px; max-height: 700px;">
        
        <div 
        v-if="showView"
        class="row">

            <div class="col-12">

                <div  
                class="row">
                    <q-bar class="col-12 q-pa-sm row bg-secondary text-accent" >
                        <div>Friction Factors</div>
                        <q-space />
                    </q-bar>
                    <q-bar class="col-12 q-pa-sm row bg-info text-accent" >
                        <q-btn  icon="add_box"
                            size="sm"
                            flat
                            @click="addSensitivity">
                            <q-tooltip>
                                Add Cases
                            </q-tooltip>
                        </q-btn>
                        <input class="text-center bg-accent text-primary" style="width:30px;" v-model="noOfSensitivities">
                        <q-btn  icon="remove"
                            size="sm"
                            flat
                            @click="removeSensitivity">
                            <q-tooltip>
                                Add Cases
                            </q-tooltip>
                        </q-btn>
                        <q-btn dense flat icon="close"
                        @click="closeAction" />
                    </q-bar>
                </div>

                    <div 
                    class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm text-center"></div>
                        <div class="textBox q-pa-sm text-center">Casing</div>
                        <div class="textBox q-pa-sm text-center">Open Hole</div>
                        <div class="textBox q-pa-sm text-center">Casing</div>
                        <div class="textBox q-pa-sm text-center">Open Hole</div>

                        <div
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm text-center">Casing</div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm text-center">Open Hole</div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm text-center">Casing</div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm text-center">Open Hole</div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm text-center">Casing</div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm text-center">Open Hole</div>

                    </div>

                    <div class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm">Tripping in</div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_1"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_2"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_3"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_4"></div>

                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_5"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_6"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_7"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_8"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_9"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingIn_10"></div>
                    </div>

                    <div class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm">Tripping out</div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_1"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_2"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_3"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_4"></div>

                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_5"></div>
                        <div v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_6"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_7"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_8"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_9"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.trippingOut_10"></div>
                    </div>

                    <div class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm">Rotating on bottom</div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_1"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_2"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_3"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_4"></div>

                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_5"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_6"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_7"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_8"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_9"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.drilling_10"></div>
                    </div>

                    <div class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm">Slide drilling</div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_1"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_2"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_3"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_4"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_5"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_6"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_7"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_8"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_9"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.slideDrilling_10"></div>
                    </div>

                    <div class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm">Back reaming</div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_1"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_2"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_3"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_4"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_5"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_6"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_7"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_8"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_9"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.backReaming_10"></div>
                    </div>

                    <div class="row bg-primary text-accent">
                        <div class="col-1 q-pa-sm">Rotating off bottom</div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_1"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_2"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_3"></div>
                        <div class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_4"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_5"></div>
                        <div 
                        v-if="isThreeVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_6"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_7"></div>
                        <div 
                        v-if="isFourVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_8"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_9"></div>
                        <div 
                        v-if="isFiveVisible"
                        class="textBox q-pa-sm"><input class="text-center bg-positive text-accent" v-model="sensitivityParameters.rotatingOffBottom_10"></div>
                    </div>

                    <div class="row  bg-primary text-accent">
                    <div class="q-pa-sm text-caption">
                        <q-btn 
                            align="right"
                            icon="play_arrow" 
                            flat
                            stretch
                            size="md" 
                            label="Run"
                            class="text-capitalize"
                            stack 
                            @click="RunSensitivities"
                            >
                        </q-btn>
                    </div>
                </div>
            
            </div>

        </div>

        <div class="row">
          <div class="col-12 q-pa-sm bg-primary">
                <q-inner-loading :showing="showLoader">
                  <q-spinner-gears size="100px" color="primary" />
              </q-inner-loading>
          </div>
      </div>
    </div>
    
</template>

<script>
export default {
    computed: {
        showLoader(){
            return this.$store.getters['dataImportStore/showLoader'];
        },
        showView(){
        return this.$store.getters['dataImportStore/showImportView'];
        },
        noOfSensitivities(){
            return this.$store.getters['simulationStore/noOfSensitivities'];
        },
        incremetVisibility(){
            return this.$store.getters['simulationStore/incremetVisibility'];
        },
        isThreeVisible(){
            return this.$store.getters['simulationStore/isThreeVisible'];
        },
        isFourVisible(){
            return this.$store.getters['simulationStore/isFourVisible'];
        },
        isFiveVisible(){
            return this.$store.getters['simulationStore/isFiveVisible'];
        },
        companyName(){
            return this.$store.getters['authStore/companyName'];
        },
        SelectedTorqueDragDesign(){
            return this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
        },
        IdentityModel(){
            return this.$store.getters['authStore/IdentityModel'];
        }
    },
    data() {
        return {
           separator: 'cell' ,
           sensitivityParameters:{
                trippingIn_1: null,
                trippingIn_2: null,
                trippingIn_3: null,
                trippingIn_4: null,
                trippingIn_5: null,
                trippingIn_6: null,
                trippingIn_7: null,
                trippingIn_8: null,
                trippingIn_9: null,
                trippingIn_10: null,
                trippingOut_1: null,
                trippingOut_2: null,
                trippingOut_3: null,
                trippingOut_4: null,
                trippingOut_5: null,
                trippingOut_6: null,
                trippingOut_7: null,
                trippingOut_8: null,
                trippingOut_9: null,
                trippingOut_10: null,
                drilling_1: null,
                drilling_2: null,
                drilling_3: null,
                drilling_4: null,
                drilling_5: null,
                drilling_6: null,
                drilling_7: null,
                drilling_8: null,
                drilling_9: null,
                drilling_10: null,
                slideDrilling_1: null,
                slideDrilling_2: null,
                slideDrilling_3: null,
                slideDrilling_4: null,
                slideDrilling_5: null,
                slideDrilling_6: null,
                slideDrilling_7: null,
                slideDrilling_8: null,
                slideDrilling_9: null,
                slideDrilling_10: null,
                backReaming_1: null,
                backReaming_2: null,
                backReaming_3: null,
                backReaming_4: null,
                backReaming_5: null,
                backReaming_6: null,
                backReaming_7: null,
                backReaming_8: null,
                backReaming_9: null,
                backReaming_10: null,
                rotatingOffBottom_1: null,
                rotatingOffBottom_2: null,
                rotatingOffBottom_3: null,
                rotatingOffBottom_4: null,
                rotatingOffBottom_5: null,
                rotatingOffBottom_6: null,
                rotatingOffBottom_7: null,
                rotatingOffBottom_8: null,
                rotatingOffBottom_9: null,
                rotatingOffBottom_10: null
           }
        }
    },
    methods: {
        removeSensitivity(){
            this.$store.commit('simulationStore/removeSensitivity');
        },
        addSensitivity(){
            this.$store.commit('simulationStore/addSensitivity');
        },
        closeAction(){
            this.$store.commit('simulationStore/showSensitivityDialog', false);
        },
        RunSensitivities(){
            var context =  this;
            this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });
            this.$store.dispatch('simulationStore/RunSensitivities', {
                companyName: context.companyName,
                designId: context.SelectedTorqueDragDesign.id,
                userId: context.IdentityModel._id,
                sensitivityParameters: context.sensitivityParameters
            });
        }
    },
    created(){
        this.$store.commit('simulationStore/initializeSensitivityIndices');
    }
    
}
</script>

<style scoped>

.textBox{
    width: 170px;
}

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
    max-height: 700px;
  /* height: 50px; */
}



</style>