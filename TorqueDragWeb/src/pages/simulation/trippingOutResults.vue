<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:50px;">
                    <q-card-section align="right">
                        <div class="text-center text-subtitle1 q-pb-md">Tripping Out Report</div>
                    </q-card-section>
                    </q-card>
            </div>
        </div>

        <div class="row">
            <div class="col-12 q-pa-sm">
                <q-table
                    class="my-sticky-header-table"  
                    :data="trippingOutResults" 
                    :columns="columns" 
                    row-key="name"
                    flat
                    bordered
                    :separator="separator">


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
                            <q-td key="tensionBottomOfPipe" :props="props">{{ props.row.tensionBottomOfPipe }}</q-td>
                            <q-td key="normalForce" :props="props">{{ props.row.normalForce }}</q-td>
                            <q-td key="tensionTopOfPipe" :props="props">{{ props.row.tensionTopOfPipe }}</q-td>
                            <q-td key="totalDrag" :props="props">{{ props.row.totalDrag }}</q-td>
                            <q-td key="HookeLoadAtJoint" :props="props">{{ props.row.HookeLoadAtJoint }}</q-td>
                            <q-td key="torqueBottom" :props="props">{{ props.row.torqueBottom }}</q-td>
                            <q-td key="torqueTop" :props="props">{{ props.row.torqueTop }}</q-td>
                            <q-td v-if="props.row.isSinusoidalBuckling"
                            style="background:orange;"
                             key="isSinusoidalBuckling" 
                             :props="props"></q-td>
                             <q-td v-else
                            style="background:white;"
                             key="isSinusoidalBuckling" 
                             :props="props"></q-td>
                             <q-td v-if="props.row.isHelicalBuckling"
                            style="background:red;"
                             key="isHelicalBuckling" 
                             :props="props"></q-td>
                             <q-td v-else
                            style="background:white;"
                             key="isHelicalBuckling" 
                             :props="props"></q-td>
                            <q-td key="torqueTop" :props="props">{{ props.row.torqueTop }}</q-td>
                            <q-td key="criticalInclinationAngle" :props="props">{{ props.row.criticalInclinationAngle }}</q-td>
                            <q-td key="criticalSinusoidalBuckling" :props="props">{{ props.row.criticalSinusoidalBuckling }}</q-td>
                            <q-td key="criticalHelicalBuckling" :props="props">{{ props.row.criticalHelicalBuckling }}</q-td>
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
        trippingOutResults() {
        return this.$store.getters['simulationStore/trippingOutResults'];
        }
    },
    data () {
        return {
        separator: 'cell',
        columns: [
            { name: "typeOfSection", label: "Type Of Section", field: "", align: "left" },
            { name: "length", label: "length (m)", field: "", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "", align: "left" },
            { name: "pipeTotalWeight", label: "Total Weight (lbs)", field: "", align: "left" },
            { name: "buoyancyWeight", label: "Buoyancy Weight (lbs)", field: "", align: "left" },
            { name: "tensileStrength", label: "Tensile Strength", field: "", align: "left" },
            { name: "bottomMeasuredDepth", label: "Bottom MeasuredDepth (m)", field: "", align: "left" },
            { name: "topInclination", label: "Top Inclination (rad)", field: "", align: "left" },
            { name: "bottomInclination", label: "Bottom Inclination (rad)", field: "", align: "left" },
            { name: "topAzimuth", label: "Top Azimuth (rad)", field: "", align: "left" },
            { name: "bottomAzimuth", label: "Bottom Azimuth (rad)", field: "", align: "left" },
            { name: "dogLegSeverity", label: "DogLeg Severity", field: "", align: "left" },
            { name: "tensionBottomOfPipe", label: "Bottom Tension (Ib)", field: "", align: "left" },
            { name: "normalForce", label: "Normal Force (Ib)", field: "", align: "left" },
            { name: "tensionTopOfPipe", label: "Top Tension (Ib)", field: "", align: "left" },
            { name: "totalDrag", label: "Drag Force (Ib)", field: "", align: "left" },
            { name: "HookeLoadAtJoint", label: "Hook Load (Ib)", field: "", align: "left" },
            { name: "torqueBottom", label: "Bottom Torque (Ib)", field: "", align: "left" },
            { name: "torqueTop", label: "Top Torque (Ib)", field: "", align: "left" },
            { name: "isSinusoidalBuckling", label: "isSinusoidalBuckling", field: "", align: "left" },
            { name: "isHelicalBuckling", label: "isHelicalBuckling", field: "", align: "left" },
            { name: "criticalInclinationAngle", label: "critical Inc. (rad)", field: "", align: "left" },
            { name: "criticalSinusoidalBuckling", label: "Sinusoidal Buckling (Ib)", field: "", align: "left" },
            { name: "criticalHelicalBuckling", label: "Helical Buckling (Ib)", field: "", align: "left" }
        ]
    }
  },
  methods: {

  }
}
</script>