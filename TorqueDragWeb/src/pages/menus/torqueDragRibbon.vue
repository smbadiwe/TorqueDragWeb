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
                        @click="TrippingInPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Tripping In
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrippingOutPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_2.jpg">
                        <br/>
                        Tripping Out
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="slideDrillingPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_3.jpg">
                        <br/>
                        Slide Drilling
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                            clickable
                            @click="rotatingOnBottomPlots">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_4.jpg">
                            <br/>
                            Rotating On Bottom
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="rotatingOffBottomPlots">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_5.jpg">
                        <br/>
                        Rotating Off Bottom
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
                        @click="EffectiveTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_7.jpg">
                        <br/>
                        Tripping In
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrueTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_8.jpg">
                        <br/>
                        Tripping Out
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_9.jpg">
                        <br/>
                        Rotating On Bottom
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                            clickable
                            @click="EffectiveTension">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_10.jpg">
                            <br/>
                            Slide Drilling
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrueTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_11.jpg">
                        <br/>
                        Back reaming
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_12.jpg">
                        <br/>
                        Rotating Off Bottom
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_13.jpg">
                        <br/>
                        User Defined Operation
                    </div>

                   
                </div>
                
                <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Stress Plots
                    </div>
                </div>
            </div>

            <div class="col vl">
                <div class="row" style="height:100px">
                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        clickable
                        @click="TrippingInDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_14.jpg">
                        <br/>
                        Tripping In Details
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrippingOutDetails">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_15.jpg">
                        <br/>
                        Tripping Out Details
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_16.jpg">
                        <br/>
                        Rotating on Bottom Details
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                            clickable
                            @click="EffectiveTension">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_17.jpg">
                            <br/>
                            Slide Drilling Details
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrueTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_18.jpg">
                        <br/>
                        Back reaming Details
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_19.jpg">
                        <br/>
                        Rotating Off Bottom Details
                    </div>

                   
                </div>
                
                <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Load and Stress Data
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
        TrippingInPlots(){
            this.$store.commit('dataVisualizationStore/setIsDataVisualization', true);
            this.$router.push('/chartAreaTorqueDrag');
        },
        TrippingOutPlots(){
            this.$store.commit('dataVisualizationStore/setIsDataVisualization', true);
            this.$router.push('/chartAreaTorqueDrag');
        },
        slideDrillingPlots(){
            this.$router.push('/effectiveTension');
        },
        rotatingOnBottomPlots(){
            this.$router.push('/effectiveTension');
        },
        rotatingOffBottomPlots(){
            this.$router.push('/effectiveTension');
        },
        TrueTension(){
            console.log("TrueTension");
        },
        Torque(){
            console.log("Torque");
        },
        TrippingInDetails(){
            
        },
        TrippingOutDetails(){
            this.$router.push('/TrippingOutDetails');
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