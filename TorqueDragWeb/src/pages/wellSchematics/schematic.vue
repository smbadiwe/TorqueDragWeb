<template>
    <div class="row bg-accent" style="height: 1100px;">

        <div class="row bg-accent" style="height: 200px;">

        </div>

        <div  style="height: 800px;">
            <svg class="formation0"  height="800" width="1300">
                 <rect  id="formation" width="1300" height="780"  x="0" y="20">
                </rect>

                    <path 
                    v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id2"
                    :d="holeSegment.dc" :stroke="holeSegment.stroke"
                    :stroke-width="holeSegment.strokeWidth" fill="#9896A5" />

                    <path 
                    v-for="pipeSegment in schematicDTO.pipeSegments" :key="pipeSegment.id"
                    :d="pipeSegment.d" :stroke="pipeSegment.stroke"
                    :stroke-width="pipeSegment.strokeWidth" fill="#9896A5" />
                    <!-- fill="#9896A5" -->
            </svg>
        </div>

        <!-- <div class="row">
            <div class="col-12 q-pa-sm bg-accent">
                <svg height="1000" width="700">

                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:rgb(92,192,192);stop-opacity:1" />
                        <stop offset="100%" style="stop-color:rgb(105,105,105);stop-opacity:1" />
                        </linearGradient>
                    </defs>

                    <path 
                    v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id1"
                    :d="holeSegment.d1" :stroke="holeSegment.stroke"
                    :stroke-width="holeSegment.strokeWidth" :fill="holeSegment.fill" />

                    <path 
                    v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id2"
                    :d="holeSegment.d2" :stroke="holeSegment.stroke"
                    :stroke-width="holeSegment.strokeWidth" :fill="holeSegment.fill" />

      
                    <path 
                    v-for="pipeSegment in schematicDTO.pipeSegments" :key="pipeSegment.id"
                    :d="pipeSegment.d" :stroke="pipeSegment.stroke"
                    :stroke-width="pipeSegment.strokeWidth" fill="url(#grad1)" />

                    <g stroke="black" stroke-width="2" fill="black">
                        <circle 
                        v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id3"
                         :cx="holeSegment.cx1" :cy="holeSegment.cy1" :r="holeSegment.r" />

                         <circle 
                        v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id4"
                         :cx="holeSegment.cx2" :cy="holeSegment.cy2" :r="holeSegment.r" />
                    </g>

                </svg>
            </div>
        </div> -->

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
        holeSegmentLast(){
            return this.$store.getters['simulationStore/holeSegmentLast'];
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