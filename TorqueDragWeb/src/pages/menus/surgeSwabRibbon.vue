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
                    label="Report"
                    class="text-capitalize"
                    stack 
                    @click="showSurgeSwabReport"
                    >
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

      <q-separator dark vertical />

      <div>
        <div class="row buttonTD1">
              <div class="q-pa-sm text-caption col">
                <q-btn  
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack>
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_1.jpg">
                    </q-avatar></span>
                   Min Flow Rate vs Depth
                </q-btn>
              </div>

              <div class="q-pa-sm text-caption col">
                <q-btn 
                    stretch 
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_2.jpg">
                    </q-avatar></span>
                   Min Flow Rate vs DOP
                </q-btn>    
              </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    stretch
                    flat
                    :size="size"   
                    class="text-capitalize"
                    stack >
                     <span><q-avatar square size="42px">
                       <img src="~/assets/images/hydraulics_3.jpg">
                    </q-avatar></span>
                   Cuttings Vol vs Depth
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack>
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_4.jpg">
                    </q-avatar></span>
                   Cuttings Bed Hgt. vs Depth
                </q-btn>
                </div>

            
        </div>
        
        <div class="row buttonTD2">
        </div>
        
        <div class="row buttonTD3">
            <div class="col-12 q-pa-sm text-center">
                Hole Cleaning Plots
            </div>
        </div>
      </div>

      <q-separator dark vertical />

      
      <div>
        <div class="row buttonTD1">
              <div class="q-pa-sm text-caption col">
                <q-btn  
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_5.jpg">
                    </q-avatar></span>
                   Pressure Loss vs Pump Rate
                </q-btn>
              </div>

              <div class="q-pa-sm text-caption col">
                <q-btn 
                    stretch 
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_6.jpg">
                    </q-avatar></span>
                   Circulating Pressure vs Depth
                </q-btn>    
              </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size"   
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_7.jpg">
                    </q-avatar></span>
                   ECD vs Depth
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size"  
                    class="text-capitalize"
                    stack>
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_8.jpg">
                    </q-avatar></span>
                   Critical Pump Rate vs Depth
                </q-btn>
                </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_9.jpg">
                    </q-avatar></span>
                   Annular Velocity vs Depth
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_10.jpg">
                    </q-avatar></span>
                   Pressure to Break Gel
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_11.jpg">
                    </q-avatar></span>
                   Flow Regime
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_12.jpg">
                    </q-avatar></span>
                   Component Pressure Losses
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn  
                    stretch
                    flat
                    :size="size" 
                    class="text-capitalize"
                    stack >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/hydraulics_13.jpg">
                    </q-avatar></span>
                   Component Power Losses
                </q-btn>
            </div>
            
        </div>
        
        <div class="row buttonTD2">
        </div>
        
        <div class="row buttonTD3">
            <div class="col-12 q-pa-sm text-center">
                
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
        RunHydraulics(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Simulation Log",
                route: 'simulationConsole'
            });
            this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });

            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            this.$store.dispatch('simulationStore/RunHydraulics', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id
            });

        },
        showSurgeSwabReport(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Surge & Swab",
                route: 'surgeSwabReport'
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
