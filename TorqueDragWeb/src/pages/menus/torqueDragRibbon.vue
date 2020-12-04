<template>
    <div>
        <div class="row bg-accent text-primary" style="height:140px;">
              <div class="col-1 vl">
                <div class="row" style="height:100px">
                     <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        clickable
                        @click="RunSimulation">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Run
                    </div>
                </div>

                <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Simulation
                    </div>
                </div>
            </div>

            <div class="col vl">
                <div class="row" style="height:100px">
                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        clickable
                        @click="effectiveTensionPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Effective Tension
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="normalForcePlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_2.jpg">
                        <br/>
                        Normal Force
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="hookLoadPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_3.jpg">
                        <br/>
                        Hook Load
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                            clickable
                            @click="torquePlots">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_4.jpg">
                            <br/>
                            Torque
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="dragPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_5.jpg">
                        <br/>
                        Drag
                    </div>

                   
                </div>
                
                <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Plots
                    </div>
                </div>
            </div>

            <div class="col vl">
                <div class="row" style="height:100px">
                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrippingInDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_7.jpg">
                        <br/>
                        Tripping In
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrippingOutDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_8.jpg">
                        <br/>
                        Tripping Out
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="RotatingOnBottomDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_9.jpg">
                        <br/>
                        Rotating On Bottom
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                            clickable
                            @click="SlideDrillingDetails">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_10.jpg">
                            <br/>
                            Slide Drilling
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="BackReamingDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_11.jpg">
                        <br/>
                        Back reaming
                    </div>
                   
                </div>
                
                <div class="row" style="height:20px">
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

.vl {
  border-right: 2px solid rgba(24,24,24,1);
  height: 140px;
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


</style>>

</style>