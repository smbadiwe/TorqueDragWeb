<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12 q-pa-sm bg-accent">
                <svg height="1000" width="700">
                    <!-- <path 
                    v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id1"
                    :d="holeSegment.d1" :stroke="holeSegment.stroke"
                    :stroke-width="holeSegment.strokeWidth_Shoe1" :fill="holeSegment.fill" />

                    <path 
                    v-for="holeSegment in schematicDTO.holeSegments" :key="holeSegment.id2"
                    :d="holeSegment.d2" :stroke="holeSegment.stroke"
                    :stroke-width="holeSegment.strokeWidth_Shoe2" :fill="holeSegment.fill" />

                    <polygon 
                    :points="holeSegmentLast.d1_Shoe" 
                    :style="'fill:' + holeSegmentLast.fill + ';stroke:' + holeSegmentLast.stroke + ';stroke-width:' + holeSegmentLast.strokeWidth_Shoe1 + ';'" />

                     <polygon 
                    :points="holeSegmentLast.d2_Shoe" 
                    :style="'fill:' + holeSegmentLast.fill + ';stroke:' + holeSegmentLast.stroke + ';stroke-width:' + holeSegmentLast.strokeWidth_Shoe2 + ';'" />
 -->
                    <path 
                    v-for="pipeSegment in schematicDTO.pipeSegments" :key="pipeSegment.id"
                    :d="pipeSegment.d" :stroke="pipeSegment.stroke"
                    :stroke-width="pipeSegment.strokeWidth" :fill="pipeSegment.fill" />

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