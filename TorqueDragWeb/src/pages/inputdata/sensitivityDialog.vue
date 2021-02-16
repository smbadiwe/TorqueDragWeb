<template>
    <div class="row bg-primary" style="width: 2000px; max-height: 700px;">
        <div class="col-12">

            <div  
            class="row">
                <q-bar class="col-12 q-pa-sm row bg-secondary text-accent" >
                    <div>Friction Factors</div>
                    <q-space />
                    <q-btn dense flat icon="close"
                    @click="closeAction" />
                </q-bar>
            </div>

                <div 
                 class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm text-center"></div>
                    <div class="col q-pa-sm text-center">Casing</div>
                    <div class="col q-pa-sm text-center">Open Hole</div>
                    <div class="col q-pa-sm text-center">Casing</div>
                    <div class="col q-pa-sm text-center">Open Hole</div>
                    <div class="col q-pa-sm text-center">Casing</div>
                    <div class="col q-pa-sm text-center">Open Hole</div>
                    <div class="col q-pa-sm text-center">Casing</div>
                    <div class="col q-pa-sm text-center">Open Hole</div>
                    <div class="col q-pa-sm text-center">Casing</div>
                    <div class="col q-pa-sm text-center">Open Hole</div>

                </div>

                <div class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm">Tripping in</div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                </div>

                <div class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm">Tripping out</div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                </div>

                <div class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm">Rotating on bottom</div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                </div>

                <div class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm">Slide drilling</div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                </div>

                <div class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm">Back reaming</div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                </div>

                <div class="row bg-primary text-accent">
                    <div class="col-1 q-pa-sm">Rotating off bottom</div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_1"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_2"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_3"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_4"></div>
                    <div class="col q-pa-sm"><input class="text-center bg-positive text-accent" v-model="trippingIn_5"></div>
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
                        @click="RunSimulation"
                        >
                    </q-btn>
                </div>
            </div>
          
        </div>
    </div>
    
</template>

<script>
export default {
    computed: {
        noOfSensitivities(){
            return this.$store.getters['simulationStore/noOfSensitivities'];
        },
        incremetVisibility(){
            return this.$store.getters['simulationStore/incremetVisibility'];
        }
    },
    data() {
        return {
           separator: 'cell' ,
           trippingIn_1: null,
           trippingIn_2: null,
           trippingIn_3: null,
           trippingIn_4: null,
           trippingIn_5: null,
           trippingIn_6: null,
           trippingOut_1: null,
           trippingOut_2: null,
           trippingOut_3: null,
           trippingOut_4: null,
           trippingOut_5: null,
           trippingOut_6: null
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
        RunSimulation(){

        }
    }
    
}
</script>

<style scoped>

.textBox{
    width: 90px;
}

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
    max-height: 700px;
  /* height: 50px; */
}



</style>