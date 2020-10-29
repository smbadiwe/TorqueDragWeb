<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:50px;">
                    <q-card-section align="right">
                        <div class="text-center text-subtitle1 q-pb-md">Tripping In Report</div>
                    </q-card-section>
                    </q-card>
            </div>
        </div>

        <div class="row">
            <div class="col-12 q-pa-sm">
                <q-table  
                    :data="PipeCalculatedVariables" 
                    :columns="columns" 
                    row-key="name" >


                    <template v-slot:body="props">
                        <q-tr
                        :props="props">
                            <q-td key="typeOfSection" :props="props">{{ props.row.typeOfSection }}</q-td>
                            <q-td key="length" :props="props">{{ props.row.length }}</q-td>
                            <q-td key="pipeInnerArea" :props="props">{{ props.row.pipeInnerArea }}</q-td>
                            <q-td key="pipeOuterArea" :props="props">{{ props.row.pipeOuterArea }}</q-td>
                            <q-td key="pipeTotalWeight" :props="props">{{ props.row.pipeTotalWeight }}</q-td>
                            <q-td key="buoyancyWeight" :props="props">{{ props.row.buoyancyWeight }}</q-td>
                            <q-td key="tensileStrength" :props="props">{{ props.row.tensileStrength }}</q-td>
                            <q-td key="bottomMeasuredDepth" :props="props">{{ props.row.bottomMeasuredDepth }}</q-td>
                            <q-td key="topInclination" :props="props">{{ props.row.topInclination }}</q-td>
                            <q-td key="bottomInclination" :props="props">{{ props.row.bottomInclination }}</q-td>
                            <q-td key="topAzimuth" :props="props">{{ props.row.topAzimuth }}</q-td>
                            <q-td key="bottomAzimuth" :props="props">{{ props.row.bottomAzimuth }}</q-td>
                            <q-td key="dogLegSeverity" :props="props">{{ props.row.dogLegSeverity }}</q-td>
                        </q-tr>
                        </template>
                </q-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        PipeCalculatedVariables() {
        return this.$store.getters['simulationStore/PipeCalculatedVariables'];
        }
    },
    data () {
        return {
        columns: [
            { name: "typeOfSection", label: "Type Of Section", field: "", align: "left" },
            { name: "length", label: "length (ft)", field: "", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "", align: "left" },
            { name: "pipeOuterArea", label: "Ouetr Area (sqin)", field: "", align: "left" },
            { name: "pipeTotalWeight", label: "Total Weight (lbs)", field: "", align: "left" },
            { name: "buoyancyWeight", label: "Buoyancy Weight (lbs)", field: "", align: "left" },
            { name: "tensileStrength", label: "Tensile Strength", field: "", align: "left" },
            { name: "bottomMeasuredDepth", label: "Bottom MeasuredDepth (ft)", field: "", align: "left" },
            { name: "topInclination", label: "Top Inclination (rad)", field: "", align: "left" },
            { name: "bottomInclination", label: "Bottom Inclination (rad)", field: "", align: "left" },
            { name: "topAzimuth", label: "Top Azimuth (rad)", field: "", align: "left" },
            { name: "bottomAzimuth", label: "Bottom Azimuth (rad)", field: "", align: "left" },
            { name: "dogLegSeverity", label: "DogLeg Severity", field: "", align: "left" }
        ]
    }
  },
  methods: {

  }
}
</script>