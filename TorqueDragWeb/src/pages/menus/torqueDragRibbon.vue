<template>
  <div>
    <q-toolbar class=" bg-info text-accent q-my-md">

       <div>
            <div class="row buttonTD1">
                  <div class="q-pa-sm text-caption">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    :size="size" 
                    label="Run"
                    class="text-capitalize"
                    stack 
                    @click="RunSimulation"
                    >
                </q-btn>
                </div>
            </div>

          <div class="row buttonTD2">
          </div>

            <div class="row buttonTD3">
                <!-- <q-card 
                    class="col-12 bg-secondary text-accent">
                        <q-card-section align="center">
                            <div class="text-center text-subtitle1 q-pa-sm">Simulation</div>
                        </q-card-section>
                </q-card> -->
                <div class="col-12 q-pa-sm text-center">
                    Simulation
                </div>
            </div>
       </div>

      <q-separator dark vertical />

      <div>
        <div class="row buttonTD1">
              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="legend_toggle" 
                    flat
                    :size="size" 
                    label="Effective Tension"
                    class="text-capitalize"
                    stack 
                    @click="effectiveTensionPlots">
                </q-btn>
              </div>

              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_horizontal_center"
                    stretch 
                    flat
                    :size="size" 
                    label="Normal Force"
                    class="text-capitalize"
                    stack
                    @click="normalForcePlots" >
                </q-btn>    
              </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_horizontal_left" 
                    stretch
                    flat
                    :size="size"   
                    label="Hook Load"
                    class="text-capitalize"
                    stack 
                     @click="hookLoadPlots">
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_horizontal_right" 
                    stretch
                    flat
                    :size="size" 
                    label="Torque"
                    class="text-capitalize"
                    stack
                    @click="torquePlots" >
                </q-btn>
                </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_vertical_bottom" 
                    stretch
                    flat
                    :size="size" 
                    label="Drag"
                    class="text-capitalize"
                    stack
                    @click="dragPlots" >
                </q-btn>
            </div>

            
        </div>
        
        <div class="row buttonTD2">
        </div>
        
        <div class="row buttonTD3">
            <div class="col-12 q-pa-sm text-center">
                Plots
            </div>
        </div>
      </div>

      <q-separator dark vertical />

      
      <div>
        <div class="row buttonTD1">
              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="table_chart" 
                    flat
                    :size="size" 
                    label="Tripping In"
                    class="text-capitalize"
                    stack 
                    @click="TrippingInDetails">
                </q-btn>
              </div>

              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="table_rows"
                    stretch 
                    flat
                    :size="size" 
                    label="Tripping Out"
                    class="text-capitalize"
                    stack 
                    @click="TrippingOutDetails">
                </q-btn>    
              </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="reorder" 
                    stretch
                    flat
                    :size="size"   
                    label="Rotating On Bottom"
                    class="text-capitalize"
                    stack 
                    @click="RotatingOnBottomDetails">
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="view_list" 
                    stretch
                    flat
                    :size="size"  
                    label="Slide Drilling"
                    class="text-capitalize"
                    stack
                    @click="SlideDrillingDetails">
                </q-btn>
                </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="list_alt" 
                    stretch
                    flat
                    :size="size" 
                    label="Back reaming"
                    class="text-capitalize"
                    stack 
                    @click="BackReamingDetails">
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
            size: "md"
        }
    },
    methods: {
        RunSimulation(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Simulation Log",
                route: 'simulationConsole'
            });

        },
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
