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
                        @click="EffectiveTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Effective Tension
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrueTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_2.jpg">
                        <br/>
                        True Tension
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_3.jpg">
                        <br/>
                        Torque
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                            clickable
                            @click="EffectiveTension">
                            <img
                            class="object-fit-cover"
                            src="~assets/images/well_4.jpg">
                            <br/>
                            Side Force
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="TrueTension">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_5.jpg">
                        <br/>
                        Fatique
                    </div>

                    <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        @click="Torque">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_6.jpg">
                        <br/>
                        String Clearance
                    </div>

                   
                </div>
                
                <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Fixed Depth Plots
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
                        @click="TrueTension">
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
                        Load & Stress Data
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
            var Conn = this.$store.getters['authStore/companyDBConnectionString'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            this.$store.dispatch('simulationStore/RunSimulation', {
                companyDBConnectionString: Conn,
                designId: selectedTorqueDragDesign.designId
            });

        },
        EffectiveTension(){
            console.log("EffectiveTension");
        },
        TrueTension(){
            console.log("TrueTension");
        },
        Torque(){
            console.log("Torque");
        },
        TrippingInDetails(){
            this.$router.push('/TrippingInDetails');
        }
    }
}
</script>

<style scoped>

.vl {
  border-right: 2px solid #00a300;
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