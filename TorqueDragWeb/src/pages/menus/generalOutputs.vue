<template>
  <div>
    <q-toolbar class=" bg-dark text-white q-my-md">

       <div>
            <div class="row buttonTD1">
                  <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Vertical Section"
                    class="text-capitalize"
                    stack 
                    @click="verticalSectionPlot"
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Plain View"
                    class="text-capitalize"
                    stack 
                    @click="planViewPlot"
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Inclination"
                    class="text-capitalize"
                    stack 
                    @click="inclinationPlot"
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Azimuth"
                    class="text-capitalize"
                    stack 
                    @click="azimuthPlot"
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Dogleg Severity"
                    class="text-capitalize"
                    stack 
                    @click="doglegSeverityPlot"
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Build"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>


                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Walk"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Absolute Tortuosity"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Relative Tortuosity"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Geothmermal Gradient"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="WellPath Table"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Deviated Schematic"
                    class="text-capitalize"
                    stack 
                    @click="DrawSchematic"
                    >
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Formation Tops"
                    class="text-capitalize"
                    stack 
                    >
                    </q-btn>
                </div>

            </div>

          <!-- <div class="row buttonTD2">
          </div>

            <div class="row buttonTD3">
                <div class="col-12 q-pt-sm text-center">
                    Simulation
                </div>
            </div> -->
       </div>

    
      
    </q-toolbar>
  </div>
</template>


<script>

export default {
    computed: {
        dockViewWidth(){
            var wd =this.$store.getters['authStore/dockViewWidth'];
            console.log("Width: ", wd);
            return wd;
        },
    },
    components: {
    },
    data(){
        return {
        }

    },
    methods: {
        doglegSeverityPlot(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Dogleg Severity",
                route: "doglegSeverity"
            });
        },
        verticalSectionPlot(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Vertical Section",
                route: "verticalSection"
            });
        },
        planViewPlot(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Plan View",
                route: "planView"
            });
        },
        inclinationPlot(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Inclination",
                route: "inclination"
            });
        },
        azimuthPlot(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Azimuth",
                route: "azimuth"
            });
        },
        DrawSchematic(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            this.$store.commit('authStore/AddOutputTab', {
                name: "Deviated Schematic",
                route: "schematic"
            });
//context.dockViewWidth
            this.$store.dispatch('simulationStore/DrawSchematic', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                canvasDepth: 800,
                canvasWidth: 800,
                xCanvasOffset: 400,
                yCanvasOffset: 20
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
    height:10px;
}

.buttonTD3 {
    height:20px;
}


</style>>

</style>