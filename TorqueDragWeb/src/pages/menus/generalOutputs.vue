<template>
  <div>
    <q-toolbar class=" bg-info text-white q-my-md">

       <div>
            <div class="row buttonTD1">
                  <div class="q-pa-sm text-caption">
                    <q-btn 
                    v-if="isRunning"
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
                <q-btn 
                v-else
                    icon="stop" 
                    flat
                    stretch
                    :size="size" 
                    label="Stop"
                    class="text-capitalize"
                    stack 
                    @click="StopSimulation"
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
                    @click="getDataFromClipBoard"
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
                    @click="readFromClipBoard"
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
                    Vertical Schematic
                    </q-btn>
                </div>

                <div class="q-pa-sm text-caption col">
                    <q-btn  
                    flat
                    stretch
                    :size="size"  
                    class="text-capitalize"
                    stack 
                    @click=" deviatedSchematicPlot">
                    <span><q-avatar square size="42px">
                        <img src="~/assets/images/well_13.jpg">
                    </q-avatar></span>
                     Deviated Schematic
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
import { dataFormattingMethods } from 'boot/fornatInputData.js'
export default {
    computed: {
        dockViewWidth(){
            var wd =this.$store.getters['authStore/dockViewWidth'];
            console.log("Width: ", wd);
            return wd;
        },
        isRunning(){
            return this.$store.getters['simulationStore/isRunning'];
        },
        rig(){
            return this.$store.getters['rigStore/rig'];
        },
        drillBit(){
            return this.$store.getters['tubingStringStore/drillBit'];
        },
        datum(){
            return this.$store.getters['datumStore/datum'];
        },
        deviationSurveys(){
            return this.$store.getters['wellPathStore/deviationSurveys'];
        },
        fluid(){
            return this.$store.getters['fluidsStore/fluid'];
        },
        mudPVTs(){
            return this.$store.getters['fluidsStore/mudPVTs'];
        },
        holeSections(){
            return this.$store.getters['holeStore/holeSections'];
        },
        operation(){
            return this.$store.getters['operationsStore/operation'];
        },
        pipes(){
            return this.$store.getters['tubingStringStore/pipes'];
        },
        common(){
            return this.$store.getters['settingsStore/common'];
        }
    },
    components: {
    },
    data(){
        return {
            size: "md"
        }

    },
    methods: {
        getDataFromClipBoard(){
            /*  window.Clipboard.write("Gab", {
                jude: 123,
                james: 1020
            });   */
            //console.log("window: " , window);

            /* var gab =  window.Clipboard.read("Gab");
            console.log("gab: " , gab); */
            var context =  this;
            context.writeToClipboard();

        },
        writeToClipboard(){
             var gab = {
                jude: 123,
                james: 1020
            };
            //const objBlob = new Blob([JSON.stringify({'myobjLabel' : 'myObj'})], {type: 'text/plain'});
            const objBlob = new Blob([JSON.stringify(gab)], {type: 'text/plain'});

            const item = new ClipboardItem({
                'text/plain': objBlob
            });

            navigator.clipboard.write([item]).catch((ex) => { 
            console.log(ex) 
            } ); 
        },
        readFromClipBoard(){
            //const clipboardItems = await navigator.clipboard.read();
            

            navigator.clipboard.read().then((clipboardItems) => {
                for (const clipboardItem of clipboardItems) {

                    for (const type of clipboardItem.types) {

                        if (type === 'text/plain') {
                            clipboardItem.getType(type).then((dat)=> {
                                console.log("dat: ", dat)
                            })

                        // return PNG blob
                        //return await clipboardItem.getType(type);

                        }

                    }

                    }
           
            });
        },
         copy() {
             var gab = {
                jude: 123,
                james: 1020
            };
            //navigator.clipboard.writeText("Yes Yes Yes")
      navigator.clipboard.write("gab", gab)
        .then(() => {
          console.log('Text is on the clipboard.');
          //this.message = 'Code copied to clipboard.';
        })
      .catch(e => {
        console.error(e);
        //this.message = 'Sorry, unable to copy to clipboard.'
      });    
    },
        StopSimulation(){
             this.$store.commit('simulationStore/setIsRunning', true);
             this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }); 
          this.$store.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Simulation stopped suddenly",
            visibility: true
          }, {root:true});  
        },
          RunSimulation(){
            this.$store.commit('authStore/AddOutputTab', {
                name: "Simulation Log",
                route: 'simulationConsole'
            });
            this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });

            var context =  this;
            this.$store.commit('simulationStore/setIsRunning', false);
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            
            var allInputsDTO = {
                rig: dataFormattingMethods.RigFormatting(context.rig),
                drillBit: dataFormattingMethods.DrillBitFormatting(context.drillBit),
                datum: dataFormattingMethods.DatumFormatting(context.datum),
                deviationSurveys: context.deviationSurveys,
                fluid: dataFormattingMethods.FluidFormatting(context.fluid),
                mudPVTs: context.mudPVTs,
                holeSections: context.holeSections,
                operation: dataFormattingMethods.OperationFormatting(context.operation),
                pipes: context.pipes,
                common: dataFormattingMethods.SettingFormatting(context.common)
            }

            //console.log("allInputsDTO: ", allInputsDTO)

            this.$store.dispatch('simulationStore/RunSensitivities', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                allInputsDTO
            });

        },
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
        deviatedSchematicPlot(){
           this.$store.commit('authStore/AddOutputTab', {
                name: "Schematic",
                route: "schematic"
            });
        },
        DrawSchematic(){

             this.$store.commit('authStore/AddOutputTab', {
                name: "Schematic 2",
                route: "formationTops"
            });

            var currentRoute = this.$route.path;
            this.$store.commit('propertyGridStore/setCurrentRoutePropertyGrid', currentRoute);
            
            /* var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];
            this.$store.commit('authStore/AddOutputTab', {
                name: "Deviated Schematic",
                route: "schematic"
            });


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
 */
            


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
