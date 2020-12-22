<template>
    <div>
        <div class="row" id="torquedragmenu">
              <div class="col-2 vl">
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
                        flat
                        size="md" 
                        label="Run"
                        class="text-capitalize"
                        @click="RunSimulation">
                    </q-btn>
                </div>

                <div class="row">
                    <div class="col-12 q-pb-sm q-pt-sm text-center">
                        Simulation
                    </div>
                </div>
            </div>

            <div class="col-5 vl">
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
                        flat
                        size="md" 
                        label="Effective Tension"
                        class="text-capitalize"
                        @click="effectiveTensionPlots">
                    </q-btn>

                    <!-- <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                        @click="normalForcePlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_2.jpg">
                        <br/>
                        Normal Force
                    </div> -->

                    <q-btn 
                        flat
                        size="md" 
                        label="Normal Force"
                        class="text-capitalize"
                        @click="normalForcePlots">
                    </q-btn>

                    <!-- <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                        @click="hookLoadPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_3.jpg">
                        <br/>
                        Hook Load
                    </div> -->

                    <q-btn 
                        flat
                        size="md" 
                        label="Hook Load"
                        class="text-capitalize"
                        @click="hookLoadPlots">
                    </q-btn>

                   <!--  <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                            clickable
                            @click="torquePlots">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_4.jpg">
                            <br/>
                            Torque
                    </div> -->

                    <q-btn 
                        flat
                        size="md" 
                        label="Torque"
                        class="text-capitalize"
                        @click="torquePlots">
                    </q-btn>

                    <!-- <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                        @click="dragPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_5.jpg">
                        <br/>
                        Drag
                    </div> -->

                    <q-btn 
                        flat
                        size="md" 
                        label="Drag"
                        class="text-capitalize"
                        @click="dragPlots">
                    </q-btn>

                   
                </div>
                
                <div class="row">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Plots
                    </div>
                </div>
            </div>

            <div class="col-5 vl">
                <div class="row buttonTD1">
                    <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                        @click="TrippingInDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_7.jpg">
                        <br/>
                        Tripping In
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover buttonTD2" 
                        @click="TrippingOutDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_8.jpg">
                        <br/>
                        Tripping Out
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                        @click="RotatingOnBottomDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_9.jpg">
                        <br/>
                        Rotating On Bottom
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                            clickable
                            @click="SlideDrillingDetails">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_10.jpg">
                            <br/>
                            Slide Drilling
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover buttonTD2"
                        @click="BackReamingDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_11.jpg">
                        <br/>
                        Back reaming
                    </div>
                   
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
  height: 60px;
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