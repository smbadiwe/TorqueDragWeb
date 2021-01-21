<template>
    <div class="bg-accent" style="height: 1100px;">

        <div class="row q-pa-md bg-accent">
            <div class="col-6 bg-accent">
                Select Operation:
            </div>
            <div class="col-6 bg-accent">
                <select
                    name="NameOfOperation"
                    id="" 
                    v-on:change="onItemSelectionChanged($event)">
                    <!--  <option disabled>
                        Please select sheet Name
                    </option> -->
                    <option
                        v-for="operation in operations" :key="operation">
                        {{ operation }}
                    </option>
                </select>
            </div>
        </div>
        
        <div class="row q-pa-md bg-accent">
            <div class="col-12 bg-accent" style="height: 100px;">

            </div>
        </div>

        <div  
        v-if="isOperation"
        class="row q-pa-md"
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
                    v-for="pipeSegment in segmentPipeList" :key="pipeSegment.id"
                    :d="pipeSegment.dp" :stroke="pipeSegment.stroke"
                    :stroke-width="pipeSegment.strokeWidth" :fill="pipeSegment.fill" />
                    <!-- fill="#9896A5" -->
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
                    <!-- fill="#9896A5" -->
            </svg>
        </div>

    </div>
</template>

<script>
export default {
    computed:{
        dockViewWidth(){
            var wd =this.$store.getters['authStore/dockViewWidth'];
            console.log("Width: ", wd);
            return wd;
        },
        visible(){
            return this.$store.getters['simulationStore/visible'];
        },
        showSimulatedReturnData(){
            return this.$store.getters['simulationStore/showSimulatedReturnData'];
        },
        schematicDTO(){
            return this.$store.getters['simulationStore/schematicDTO'];
        },
        segmentPipeList(){
            return this.$store.getters['simulationStore/segmentPipeList'];
        },
        holeSegmentLast(){
            return this.$store.getters['simulationStore/holeSegmentLast'];
        }
    },
    data(){
        return {
            operations: ["No Operation", "Tripping In", "Tripping Out", "Rotating On Bottom", "Slide Drilling", "Back reaming"],
            isOperation: false
        }
    },
    methods: {
        onItemSelectionChanged(e){
            var id = e.target.value;
            var name = e.target.options[e.target.options.selectedIndex].text;
            var context =  this;
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
        }
    }
}
</script>

<style scoped>

.formation0 {
	/* fill: rgba(71, 53, 53, 0.993);
	stroke: rgba(71, 53, 53, 0.993); */
    fill: #e8e3e3;
	stroke:#e8e3e3;
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}

#formation {
	/* fill: rgba(71, 53, 53, 0.993);
	stroke: rgba(71, 53, 53, 0.993); */
    fill: rgba(71, 53, 53, 0.993);
	stroke: rgba(71, 53, 53, 0.993);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}

</style>