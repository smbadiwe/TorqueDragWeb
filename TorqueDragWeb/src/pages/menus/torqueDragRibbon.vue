<template>
  <div>
    <q-toolbar class=" bg-info text-accent q-my-md">

     <!-- <q-tabs 
            v-model="tab"
            no-caps
            mobile-arrows
            outside-arrows
          > -->
          
        <!-- <q-tab name="loadPlots" label=""> -->
            <div>
                <div class="row buttonTD1">
                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack 
                            @click="effectiveTensionPlots">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/chart_1.jpg">
                            </q-avatar></span>
                        Effective Tension
                        </q-btn>
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn 
                            stretch 
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack
                            @click="normalForcePlots" >
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/chart_2.jpg">
                            </q-avatar></span>
                        Normal Force
                        </q-btn>    
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn 
                            stretch
                            flat
                            :size="size"   
                            class="text-capitalize"
                            stack 
                            @click="hookLoadPlots">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/chart_3.jpg">
                            </q-avatar></span>
                        Hook Load
                        </q-btn>
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            stretch
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack
                            @click="torquePlots" >
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/chart_4.jpg">
                            </q-avatar></span>
                        Torque
                        </q-btn>
                        </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            stretch
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack
                            @click="dragPlots" >
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/chart_5.jpg">
                            </q-avatar></span>
                        Drag
                        </q-btn>
                    </div>

                    
                </div>
                
                <div class="row buttonTD2">
                </div>
                
                <div class="row buttonTD3">
                    <div class="col-12 q-pa-sm text-center">
                        Load Plots
                    </div>
                </div>
            </div>
            <q-separator dark vertical />
        <!-- </q-tab> -->


        <!-- <q-tab name="stressPlots" label=""> -->
            <div>
                <div class="row buttonTD1">
                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack 
                            @click="TrippingInStress">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/table_1.jpg">
                            </q-avatar></span>
                        Tripping In
                        </q-btn>
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn 
                            stretch 
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack 
                            @click="TrippingOutStress">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/table_2.jpg">
                            </q-avatar></span>
                        Tripping Out
                        </q-btn>    
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            stretch
                            flat
                            :size="size"   
                            class="text-capitalize"
                            stack 
                            @click="RotatingOnBottomStress">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/table_3.jpg">
                            </q-avatar></span>
                        Rotating On Bottom
                        </q-btn>
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            stretch
                            flat
                            :size="size"  
                            class="text-capitalize"
                            stack
                            @click="SlideDrillingStress">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/table_4.jpg">
                            </q-avatar></span>
                        Slide Drilling
                        </q-btn>
                        </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            stretch
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack 
                            @click="BackReamingStress">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/table_5.jpg">
                            </q-avatar></span>
                        Back Reaming
                        </q-btn>
                    </div>

                    <div class="q-pa-sm text-caption col">
                        <q-btn  
                            stretch
                            flat
                            :size="size" 
                            class="text-capitalize"
                            stack 
                            @click="RotatingOffBottomStress">
                            <span><q-avatar square size="42px">
                                <img src="~/assets/images/table_1.jpg">
                            </q-avatar></span>
                        Rotating Off Bottom
                        </q-btn>
                    </div>

                    
                </div>
                
                <div class="row buttonTD2">
                </div>
                
                <div class="row buttonTD3">
                    <div class="col-12 q-pa-sm text-center">
                        Stress Plot
                    </div>
                </div>
            </div>
        <!-- </q-tab> -->

        <q-separator dark vertical />
      <!-- <q-tab name="loadstressData" label=""> -->
        <div>
            <div class="row buttonTD1">
                <div class="q-pa-sm text-caption col">
                    <q-btn  
                        flat
                        :size="size" 
                        class="text-capitalize"
                        stack 
                        @click="TrippingInDetails">
                        <span><q-avatar square size="42px">
                            <img src="~/assets/images/table_1.jpg">
                        </q-avatar></span>
                    Tripping In
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                        stretch 
                        flat
                        :size="size" 
                        class="text-capitalize"
                        stack 
                        @click="TrippingOutDetails">
                        <span><q-avatar square size="42px">
                            <img src="~/assets/images/table_2.jpg">
                        </q-avatar></span>
                    Tripping Out
                    </q-btn>    
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                        stretch
                        flat
                        :size="size"   
                        class="text-capitalize"
                        stack 
                        @click="RotatingOnBottomDetails">
                        <span><q-avatar square size="42px">
                            <img src="~/assets/images/table_3.jpg">
                        </q-avatar></span>
                    Rotating On Bottom
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                        stretch
                        flat
                        :size="size"  
                        class="text-capitalize"
                        stack
                        @click="SlideDrillingDetails">
                        <span><q-avatar square size="42px">
                            <img src="~/assets/images/table_4.jpg">
                        </q-avatar></span>
                    Slide Drilling
                    </q-btn>
                    </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                        stretch
                        flat
                        :size="size" 
                        class="text-capitalize"
                        stack 
                        @click="BackReamingDetails">
                        <span><q-avatar square size="42px">
                            <img src="~/assets/images/table_5.jpg">
                        </q-avatar></span>
                    Back Reaming
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                        stretch
                        flat
                        :size="size" 
                        class="text-capitalize"
                        stack 
                        @click="rotatingOffBottomDetails">
                        <span><q-avatar square size="42px">
                            <img src="~/assets/images/table_1.jpg">
                        </q-avatar></span>
                    Rotating Off Bottom
                    </q-btn>
                </div>

                
            </div>
            
            <div class="row buttonTD2">
            </div>
            
            <div class="row buttonTD3">
                <div class="col-12 q-pa-sm text-center">
                    Report
                </div>
            </div>
        </div>
        <!-- <q-separator dark vertical /> -->
      <!-- </q-tab> -->

     <!-- </q-tabs> -->
      
      
    </q-toolbar>
  </div>
</template>



<script>
export default {
    computed: {
        win_width() {
            //0.885 * 
            return (this.$q.screen.width);
        },
        win_height() {
            return this.$q.screen.height;
        }
    },
    data(){
        return {
            size: "md",
            tab: "loadPlots"
        }
    },
    methods: {
        effectiveTensionPlots(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Effective Tension",
                route: 'effectiveTension'
            });

            //chart
            //effectiveTension
        },
        normalForcePlots(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Normal Force",
                route: "normalForce"
            });
        },
        hookLoadPlots(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Hook Load",
                route: 'hookLoad'
            });
        },
        torquePlots(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Torque",
                route: 'torque'
            });
        },
        dragPlots(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Drag",
                route: 'drag'
            });
        },
        TrippingInDetails(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Tripping In",
                route: 'trippingInResults'
            });
        },
        TrippingOutDetails(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Tripping Out",
                route: 'trippingOutResults'
            });
        },
        RotatingOnBottomDetails(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Rotating On Bottom",
                route: 'rotatingOnBottomResults'
            });
        },
        rotatingOffBottomDetails(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Rotating Off Bottom",
                route: 'rotatingOffBottom'
            });
        },
        SlideDrillingDetails(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Slide Drilling Report",
                route: 'slideDrillingResults'
            });
        },
        BackReamingDetails(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Back Reaming Report",
                route: 'backReamingResults'
            });
        },
        TrippingInStress(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Trip In Stress",
                route: 'trippingInStress'
            });
        },
        TrippingOutStress(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Trip Out Stress",
                route: 'trippingOutStress'
            });
        },
        SlideDrillingStress(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Slide Drilling Stress",
                route: 'slideDrillingStress'
            });
        },
        RotatingOnBottomStress(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Rotating On Bottom Stress",
                route: 'rotatingOnBottomStress'
            });
        },
        RotatingOffBottomStress(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Rotating Off Bottom Stress",
                route: 'rotatingOffBottomStress'
            });
        },
        BackReamingStress(){
            this.$store.commit('authStore/AddOutputTab',  {
                name: "Back Reaming Stress",
                route: 'backReamingStress'
            });
        }
    }
}

</script>

<style scoped>

#torquedragmenu {
	
    /* width: 1700px;
    left: 0px;
    top: 30px;
    position: absolute;
    overflow: visible; */
    
	height: 80px;
	background-color:  rgba(50,50,50,1); 
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}



.vl {
  border-right: 2px solid rgba(255,255,255,1);
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
    height:80px;
}

.buttonTD2 {
    height:10px;
}

.buttonTD3 {
    height:20px;
}


</style>>
