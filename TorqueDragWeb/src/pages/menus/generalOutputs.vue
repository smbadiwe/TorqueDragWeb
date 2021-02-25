<template>
  <div>
    <q-toolbar class=" bg-info text-white q-my-md">

       <div>
            <div class="row buttonTD1">
                  <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    @click="verticalSectionPlot"
                    >
                     <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_1.jpg">
                    </q-avatar></span>
                    Vertical Section
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    @click="planViewPlot"
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_2.jpg">
                    </q-avatar></span>
                    Plain View
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    @click="inclinationPlot"
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_3.jpg">
                    </q-avatar></span>
                    Inclination
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    @click="azimuthPlot"
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_4.jpg">
                    </q-avatar></span>
                    Azimuth
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size"  
                    class="text-capitalize"
                    stack 
                    @click="doglegSeverityPlot"
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_5.jpg">
                    </q-avatar></span>
                    Dogleg Severity
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_6.jpg">
                    </q-avatar></span>
                    Build
                    </q-btn>
                </div>


                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_7.jpg">
                    </q-avatar></span>
                    Walk
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    flat
                    stretch
                    :size="size"  
                    class="text-capitalize"
                    stack 
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_8.jpg">
                    </q-avatar></span>
                    Absolute Tortuosity
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_9.jpg">
                    </q-avatar></span>
                    Relative Tortuosity
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    flat
                    stretch
                    :size="size"  
                    class="text-capitalize"
                    stack 
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_10.jpg">
                    </q-avatar></span>
                    Geothmermal Gradient
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size" 
                    class="text-capitalize"
                    stack 
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_11.jpg">
                    </q-avatar></span>
                    WellPath Table
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn 
                    flat
                    stretch
                    :size="size"  
                    class="text-capitalize"
                    stack 
                    @click="DrawSchematic"
                    >
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_12.jpg">
                    </q-avatar></span>
                    Deviated Schematic
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size"  
                    class="text-capitalize"
                    stack 
                    @click="formationTopsPlot">
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_13.jpg">
                    </q-avatar></span>
                    Formation Tops
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
            size: "md"
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
         formationTopsPlot(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Formation Tops",
                route: "formationTops"
            });
        },
        DrawSchematic(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            this.$store.commit('authStore/AddOutputTab', {
                name: "Deviated Schematic",
                route: "schematic"
            });

            //schematic schematicView

             this.$store.commit('dataImportStore/SetLoaderParameters', {
                showLoader: true,
                showImportView: false
            });

            this.$store.dispatch('simulationStore/DrawSchematic', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                canvasDepth: 800,
                canvasWidth: 800,
                xCanvasOffset: 400,
                yCanvasOffset: 20,
                userId: IdentityModel.id
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
