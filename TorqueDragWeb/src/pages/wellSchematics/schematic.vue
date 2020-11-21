<template>
    <div class="bg-accent">
        <div class="row">
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

                    <!-- <polygon 
                    :points="holeSegmentLast.d1_Shoe" 
                    :style="'fill:' + holeSegmentLast.fill + ';stroke:' + holeSegmentLast.stroke + ';stroke-width:' + holeSegmentLast.strokeWidth_Shoe1 + ';'" />

                     <polygon 
                    :points="holeSegmentLast.d2_Shoe" 
                    :style="'fill:' + holeSegmentLast.fill + ';stroke:' + holeSegmentLast.stroke + ';stroke-width:' + holeSegmentLast.strokeWidth_Shoe2 + ';'" />
 -->
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
        </div>
        <!-- <div class="row">
            <div class="col-12 q-pa-sm bg-accent">
                 <q-inner-loading :showing="visible">
                    <q-spinner-gears size="100px" color="primary" />
                </q-inner-loading>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    computed:{
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