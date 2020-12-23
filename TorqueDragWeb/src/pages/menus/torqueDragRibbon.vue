<template>
    <div>
        <div class="row" id="torquedragmenu">
              <div class="col-1 vl">
                <div class="row buttonTD1">
                     <!-- <div class="col q-pa-sm text-caption buttonHover buttonTD2" 
                        clickable
                        @click="RunSimulation">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Run
                    </div> -->

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Run"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="RunSimulation">
                    </q-btn>
                </div>

                <div class="row">
                    <div class="col-12 q-pb-sm q-pt-sm text-center">
                        Simulation
                    </div>
                </div>
            </div>

            <div class="col vl">
                <div class="row buttonTD1">
                    <!-- <div class="col q-pa-sm text-caption buttonHover buttonTD2" 
                        clickable
                        @click="effectiveTensionPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Effective Tension
                    </div> -->

                     <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Effective Tension"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="effectiveTensionPlots">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Normal Force"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="normalForcePlots">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Hook Load"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="hookLoadPlots">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Torque"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="torquePlots">
                    </q-btn>

                     <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Drag"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="dragPlots">
                    </q-btn>

                   
                </div>
                
                <div class="row">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Plots
                    </div>
                </div>
            </div>

            <div class="col vl">
                <div class="row buttonTD1">

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Tripping In"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="TrippingInDetails">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Tripping Out"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="TrippingOutDetails">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Rotating On Bottom"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="RotatingOnBottomDetails">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Slide Drilling"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="SlideDrillingDetails">
                    </q-btn>

                    <q-btn 
                        icon="phone" 
                        flat
                        size="md" 
                        label="Back reaming"
                        class="text-capitalize"
                        stack 
                        glossy 
                        @click="BackReamingDetails">
                    </q-btn>
                   
                </div>
                
                <div class="row">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Report
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script>
export default {
    methods: {
        RunSimulation(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            this.$store.dispatch('simulationStore/RunSimulation', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id
            });

        },
        effectiveTensionPlots(){
            this.$router.push('/effectiveTension');
        },
        normalForcePlots(){
            this.$router.push('/normalForce');
        },
        hookLoadPlots(){
            this.$router.push('/hookLoad');
        },
        torquePlots(){
            this.$router.push('/torque');
        },
        dragPlots(){
            this.$router.push('/drag');
        },
        TrippingInDetails(){
            this.$router.push('/trippingInResults');
        },
        TrippingOutDetails(){
            this.$router.push('/trippingOutResults');
        },
        RotatingOnBottomDetails(){
            this.$router.push('/rotatingOnBottomResults');
        },
        SlideDrillingDetails(){
            this.$router.push('/slideDrillingResults');
        },
        BackReamingDetails(){
            this.$router.push('/backReamingResults');
        }
    }
}
</script>

<style scoped>

#torquedragmenu {
	position: absolute;
	width: 1700px;
	height: 60px;
	left: 0px;
	top: 30px;
	overflow: visible;
	background-color:  rgba(50,50,50,1); 
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}



.vl {
  border-right: 2px solid rgba(24,24,24,1);
  height: 70px;
}

.buttonHover:hover {
  background-color: grey;
}

#TrueTension:hover {
  background-color: grey;
}

#Torque:hover {
    background-color: grey;
}

.object-fit-cover {
  width: 100%;
  height: 100%;
  object-fit: cover; /*magic*/
}
.buttonTD1 {
    height:40px;
}

.buttonTD2 {
    height:30px;
}


</style>>

</style>