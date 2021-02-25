<template>
    <div class="bg-accent" style="height: 1100px;">
        <div 
        v-if="showView"
        class="row">
            <div class="col-12"> 

                <div class="row">
                    <q-bar class="col-12 q-pa-sm row bg-secondary" >
                        <q-btn dense flat round icon="content_copy" label="Copy"
                        />
                        <a  href="#" @click="copySchematic($event)">Download Schematic</a>
                        
                        <q-space />
                        <q-checkbox left-label v-model="isShowHoleMDs" label="Hole Depth" 
                        @input="onCheckBoxChecked($event)" />
                        <q-checkbox left-label v-model="isShowPipeMDs" label="Tubing Depth" 
                        @input="onCheckBoxCheckedTubing($event)" />
                        <q-btn-dropdown class="q-pa-sm" flat :label="selectedSensitivity">
                            <q-list>
                                <q-item 
                                v-for="series in sensitivityIndices" :key="series"
                                clickable v-close-popup @click="onItemClick(series)">
                                <q-item-section>
                                    <q-item-label>{{ series }}</q-item-label>
                                </q-item-section>
                                </q-item>

                            </q-list>
                        </q-btn-dropdown>
                        <q-btn-dropdown class="q-pa-sm" flat :label="selectedYVariable">
                            <q-list>
                                <q-item 
                                v-for="operation in operations" :key="operation"
                                clickable v-close-popup @click="onItemSelectionChanged(operation)">
                                <q-item-section>
                                    <q-item-label>{{ operation }}</q-item-label>
                                </q-item-section>
                                </q-item>

                            </q-list>
                            </q-btn-dropdown>
                    </q-bar>
                </div>
                
                <div class="row q-pa-md bg-accent">
                    <div class="col-4 bg-accent">
                        <!-- Select Operation:
                        <br>
                        <select
                            name="NameOfOperation"
                            id="" 
                            v-on:change="onItemSelectionChanged($event)">
                            <option
                                v-for="operation in operations" :key="operation">
                                {{ operation }}
                            </option>
                        </select> -->
                    </div>
                    <div class="col-4 bg-accent">
                        
                    </div>

                    <div class="col-4 q-pa-sm bg-primary text-left">
                        <div class="row">
                            <div class="col-12">
                                <!--  -->
                                <q-card class="my-card bg-primary text-white">
                                    <q-card-section align="center">
                                        <div class="text-center text-subtitle1 q-pa-sm">Buckling Legend</div>
                                    </q-card-section>
                                </q-card>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-12">
                                <br>
                                <hr style="color: white;"/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6 q-pa-sm">
                                <svg height="30" width="40">
                                    <rect  fill="orange" width="40" height="10"  x="0" y="0">
                                    </rect>
                                </svg>
                            </div>
                            <div class="col-6 q-pa-sm text-center text-subtitle1 text-white">
                                Helical
                            </div>
                            <div class="col-6 q-pa-sm">
                                <svg height="30" width="40">
                                    <rect  fill="yellow" width="40" height="10"  x="0" y="0">
                                    </rect>
                                </svg>
                            </div>
                            <div class="col-6 q-pa-sm text-center text-subtitle1 text-white">
                                Sinusiodal
                            </div>
                        </div>
                    </div>
                </div>

                <div  
                v-if="isOperation"
                style="height: 800px;"
                >
                    <svg 
                    id="svgObject"
                    ref="svgObject"
                    class="formation0"  :height="schematicDTO.yMax + 100" :width="schematicDTO.xMax + 100"
                    >

                        <rect  id="formation" :width="schematicDTO.xMax + 100" :height="schematicDTO.yMax + 50"  x="0" y="20">
                        </rect>

                            <path 
                            v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id1"
                            :d="holeSegment.dh1" :stroke="holeSegment.stroke"
                            :stroke-width="holeSegment.strokeWidth" fill="9896A5" />

                        <!-- <path 
                            v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id2"
                            :d="holeSegment.dh2" :stroke="holeSegment.stroke"
                            :stroke-width="holeSegment.strokeWidth" fill="none" /> -->

                            <path 
                            v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id3"
                            :d="holeSegment.dc" :stroke="holeSegment.stroke"
                            :stroke-width="holeSegment.strokeWidth" fill="#b2beb5"  />
                            
                            <path 
                            v-for="pipeSegment in segmentPipeList" :key="pipeSegment.id"
                            :d="pipeSegment.dp" :stroke="pipeSegment.stroke"
                            :stroke-width="pipeSegment.strokeWidth" :fill="pipeSegment.fill" />

                            <path 
                            v-for="holeSegmentLabel in holeSegmentLabels" :key="holeSegmentLabel.id"
                            :d="holeSegmentLabel.line" :stroke="holeSegmentLabel.stroke"
                            :stroke-width="holeSegmentLabel.strokeWidth" :fill="holeSegmentLabel.fill" />

                            <text 
                            v-for="holeSegmentLabel in holeSegmentLabels" :key="holeSegmentLabel.id2"
                            :x="holeSegmentLabel.textX" 
                            :y="holeSegmentLabel.textY" :fill="holeSegmentLabel.fill">{{ holeSegmentLabel.text }}</text>


                            <path 
                            v-for="tubingSegmentLabel in tubingSegmentLabels" :key="tubingSegmentLabel.id"
                            :d="tubingSegmentLabel.line" :stroke="tubingSegmentLabel.stroke"
                            :stroke-width="tubingSegmentLabel.strokeWidth" :fill="tubingSegmentLabel.fill" />

                            <text 
                            v-for="tubingSegmentLabel in tubingSegmentLabels" :key="tubingSegmentLabel.id2"
                            :x="tubingSegmentLabel.textX" 
                            :y="tubingSegmentLabel.textY" :fill="tubingSegmentLabel.fill">{{ tubingSegmentLabel.text }}</text>
                            
                    </svg>
                </div>

                <div  
                v-else
                style="height: 800px;"
                >
                    <svg 
                    class="formation0"  :height="schematicDTO.yMax + 100" :width="schematicDTO.xMax + 100">
                        <!-- <defs>
                            <linearGradient id="grad1" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                                <stop offset="0" stop-color="#9896A5" stop-opacity="1"></stop>
                                <stop offset="0.6109" stop-color="#9896A5" stop-opacity="1"></stop>
                                <stop offset="1" stop-color="#9896A5" stop-opacity="1"></stop>
                            </linearGradient>
                        </defs> -->

                        <rect  id="formation" :width="schematicDTO.xMax + 100" :height="schematicDTO.yMax + 50"  x="0" y="20">
                        </rect>

                            <path 
                            v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id1"
                            :d="holeSegment.dh1" :stroke="holeSegment.stroke"
                            :stroke-width="holeSegment.strokeWidth" fill="9896A5" />

                        <!-- <path 
                            v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id2"
                            :d="holeSegment.dh2" :stroke="holeSegment.stroke"
                            :stroke-width="holeSegment.strokeWidth" fill="none" /> -->

                            <path 
                            v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id3"
                            :d="holeSegment.dc" :stroke="holeSegment.stroke"
                            :stroke-width="holeSegment.strokeWidth" fill="#b2beb5"  />
                            
                            <path 
                            v-for="pipeSegment in schematicDTO.pipeSegments" :key="pipeSegment.id"
                            :d="pipeSegment.d" :stroke="pipeSegment.stroke"
                            :stroke-width="pipeSegment.strokeWidth" fill="#D3D3D3" />

                            <path 
                            v-for="holeSegmentLabel in holeSegmentLabels" :key="holeSegmentLabel.id"
                            :d="holeSegmentLabel.line" :stroke="holeSegmentLabel.stroke"
                            :stroke-width="holeSegmentLabel.strokeWidth" :fill="holeSegmentLabel.fill" />

                            <text 
                            v-for="holeSegmentLabel in holeSegmentLabels" :key="holeSegmentLabel.id2"
                            :x="holeSegmentLabel.textX" 
                            :y="holeSegmentLabel.textY" :fill="holeSegmentLabel.fill">
                            {{ holeSegmentLabel.text }}
                            </text>

                            <path 
                            v-for="tubingSegmentLabel in tubingSegmentLabels" :key="tubingSegmentLabel.id"
                            :d="tubingSegmentLabel.line" :stroke="tubingSegmentLabel.stroke"
                            :stroke-width="tubingSegmentLabel.strokeWidth" :fill="tubingSegmentLabel.fill" />

                            <text 
                            v-for="tubingSegmentLabel in tubingSegmentLabels" :key="tubingSegmentLabel.id2"
                            :x="tubingSegmentLabel.textX" 
                            :y="tubingSegmentLabel.textY" :fill="tubingSegmentLabel.fill">{{ tubingSegmentLabel.text }}</text>
                            
                    </svg>
                </div>

            </div>
        </div>

        <div 
        v-if="showLoader"
        class="row">
          <div class="col-12 q-pa-sm bg-primary">
                <q-inner-loading :showing="showLoader">
                  <q-spinner-gears size="100px" color="primary" />
              </q-inner-loading>
          </div>
      </div>

    </div>
</template>

<script>
import html2canvas from 'html2canvas';
export default {
    computed:{
        sensitivityIndices() {
            return this.$store.getters['simulationStore/sensitivityIndices'];
        },
        dockViewWidth(){
            var wd =this.$store.getters['authStore/dockViewWidth'];
            console.log("Width: ", wd);
            return wd;
        },
        showLoader(){
            return this.$store.getters['dataImportStore/showLoader'];
        },
        showView(){
            return this.$store.getters['dataImportStore/showImportView'];
        },
        schematicDTO(){
            return this.$store.getters['simulationStore/schematicDTO'];
        },
        segmentPipeList(){
            return this.$store.getters['simulationStore/segmentPipeList'];
        },
        holeSegmentLast(){
            return this.$store.getters['simulationStore/holeSegmentLast'];
        },
        holeSegmentLabels(){
            var holeSegmentLabels = this.$store.getters['simulationStore/holeSegmentLabels'];
            var context = this;
            if(context.isShowHoleMDs == false){
                holeSegmentLabels = [];
            }
            return holeSegmentLabels;
        },
        tubingSegmentLabels(){
            var tubingSegmentLabelList = this.$store.getters['simulationStore/tubingSegmentLabels'];
            var context = this;
            if(context.isShowPipeMDs == false){
                tubingSegmentLabelList = [];
            }
            return tubingSegmentLabelList;
        }
    },
    data(){
        return {
            operations: ["No Operation", "Tripping In", "Tripping Out", "Rotating On Bottom", "Slide Drilling", "Back reaming"],
            //labels: ["Hide ODs", "Show Pipe ODs", "Hide"]
            isOperation: false,
            selectedYVariable: "",
            isShowHoleMDs: false,
            isShowPipeMDs: false,
            selectedSensitivity: ''
        }
    },
    methods: {
        copySchematic(evt){
            //console.log(this.$refs.svgObject);
            /* html2canvas(document.querySelector("#myDiv")).then(canvas => {
                document.body.appendChild(canvas)
            }); */

            const wellschematic = document.querySelector("#svgObject");
            console.log(wellschematic);
            var code = (new XMLSerializer).serializeToString(wellschematic);
            var b64 = window.btoa(unescape(encodeURIComponent(code))); // Workaround on UTF-8 char
            const dataURL = "data:image/png;base64," + b64;//  "data:image/svg+xml;base64," + b64;
            console.log(dataURL);

            ////link.target = "_blank";
            ////link.download = "Illustration1.svg";
            //link.href = dataURL; 

           //var link = document.createElement('a');
            var link = evt.target;
            link.target = "_blank";
            link.download ="well.png";// "image.svg";
            link.style.opacity = "0";
            link.href = dataURL; 
            //document.append(link);
            link.click();
            link.remove();

            /* const svgContent = document.getElementById("myDiv").outerHTML
            var Blob = require('blob');
            blob = new Blob([svgContent], {
            type: "image/svg+xml"
            })
            url = window.URL.createObjectURL(blob)
            link = evt.target;

        link.target = "_blank";
        link.download = "Illustration1.svg";
        link.href = url; */
        // });

        },
        onItemSelectionChanged(name){
            // var id = e.target.value;
            // var name = e.target.options[e.target.options.selectedIndex].text;
            var context =  this;
            context.selectedYVariable =  name;
            console.log("selectedYVariable: ", context.selectedYVariable);
            var operationResults = []


            switch(name) {
                case "No Operation":
                    context.isOperation = false;
                    break;

                case "Tripping In":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/trippingInResults'];
                    break;

                case "Tripping Out":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/trippingOutResults'];
                    break;
                
                case "Rotating On Bottom":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/drillingResults'];
                    break;

                case "Slide Drilling":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/slideDrillingResults'];
                    break;
                
                case "Back reaming":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/backReamingResults'];
                    break;
            }

            this.$store.dispatch('simulationStore/DrawPipeBuckledSections', {
                        pipeLeftX:  context.schematicDTO.holeSegments[0].pipeLeftX,
                        pipeLeftY:  context.schematicDTO.holeSegments[0].pipeLeftY,
                        pipeRightX:  context.schematicDTO.holeSegments[0].pipeRightX,
                        pipeRightY:  context.schematicDTO.holeSegments[0].pipeRightY,
                        pipeMDs: context.schematicDTO.holeSegments[0].pipeMDs,
                        operationResults: operationResults
                        });
            console.log("isOperation: ", context.isOperation);
        },
        onCheckBoxChecked(evt){
            var context =  this;
            console.log(evt);
            if(evt == true){
                
                var Conn = this.$store.getters['authStore/companyName'];
                var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
                var IdentityModel = this.$store.getters['authStore/IdentityModel'];
  

                this.$store.dispatch('simulationStore/DrawHoleSegmentLabel', {
                companyName: Conn,
                payload: {
                        designId: selectedTorqueDragDesign.id,
                        xListHole1:  context.schematicDTO.holeSegments[0].xListHole1,
                        yListHole1:  context.schematicDTO.holeSegments[0].yListHole1,
                        xListHole2:  context.schematicDTO.holeSegments[0].xListHole2,
                        yListHole2:  context.schematicDTO.holeSegments[0].yListHole2,
                        pipeMDs: context.schematicDTO.holeSegments[0].pipeMDs,
                        userId: IdentityModel.id
                        }
                    }
                );

            }
        },
        onCheckBoxCheckedTubing(evt){
            var context =  this;
            
            if(evt == true){
                var Conn = this.$store.getters['authStore/companyName'];
                var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
                var IdentityModel = this.$store.getters['authStore/IdentityModel'];
                this.$store.dispatch('simulationStore/DrawTubingSegmentLabel', {
                companyName: Conn,
                payload: {
                        designId: selectedTorqueDragDesign.id,
                        pipeLeftX:  context.schematicDTO.holeSegments[0].pipeLeftX,
                        pipeLeftY:  context.schematicDTO.holeSegments[0].pipeLeftY,
                        pipeRightX:  context.schematicDTO.holeSegments[0].pipeRightX,
                        pipeRightY:  context.schematicDTO.holeSegments[0].pipeRightY,
                        pipeMDs: context.schematicDTO.holeSegments[0].pipeMDs
                        }
                    }
                );
            }
        },
        onItemClick(selectedItem){
         var context =  this;
         context.selectedSensitivity = "Sensitivity #"+ selectedItem.toString();
          var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
          var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
          var simulationResultsDTOsCount = simulationResultsDTOs.length;
          var simulationResultsDTO = simulationResultsDTOs[selectedItem-1];
          switch(context.selectedYVariable) {
                case "No Operation":
                    context.isOperation = false;
                    break;

                case "Tripping In":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setTrippingInResults', simulationResultsDTO.trippingInResults);
                    break;

                case "Tripping Out":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setTrippingOutResults', simulationResultsDTO.trippingOutResults);
                    break;
                
                case "Rotating On Bottom":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setDrillingResults', simulationResultsDTO.drillingResults);
                    break;

                case "Slide Drilling":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setSlideDrillingResults', simulationResultsDTO.slideDrillingResults);
                    break;
                
                case "Back reaming":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setBackReamingResults', simulationResultsDTO.backReamingResults);
                    break;
            }
      }
    }
}
</script>

<style scoped>

.formation0 {
	/* fill: rgba(71, 53, 53, 0.993);
	stroke: rgba(71, 53, 53, 0.993);  #b9e3f3*/
    fill: white;
	stroke: white;
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}

#formation {
	/* fill: rgba(71, 53, 53, 0.993);
	stroke: rgba(71, 53, 53, 0.993); */
    fill: #a26c37;
	stroke:#a26c37;
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}

</style>