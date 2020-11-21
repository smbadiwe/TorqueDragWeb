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
                    :data="PipeCalculatedVariables" 
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
                            <q-td key="tensionBottomOfPipeTripOut" :props="props">{{ props.row.tensionBottomOfPipeTripOut }}</q-td>
                            <q-td key="normalForce" :props="props">{{ props.row.normalForce }}</q-td>
                            <q-td key="changeIntensionTripOut" :props="props">{{ props.row.changeIntensionTripOut }}</q-td>
                            <q-td key="tensionTopOfPipeTripOut" :props="props">{{ props.row.tensionTopOfPipeTripOut }}</q-td>
                            <q-td key="dragForce" :props="props">{{ props.row.dragForce }}</q-td>
                            <q-td key="totalDrag" :props="props">{{ props.row.totalDrag }}</q-td>
                            <q-td key="trippinOutHookeLoadAtJoint" :props="props">{{ props.row.trippinOutHookeLoadAtJoint }}</q-td>
                            <q-td key="torqueBottomTripOut" :props="props">{{ props.row.torqueBottomTripOut }}</q-td>
                            <q-td key="torqueChangeTripOut" :props="props">{{ props.row.torqueChangeTripOut }}</q-td>
                            <q-td key="torqueTopTripInOut" :props="props">{{ props.row.torqueTopTripInOut }}</q-td>
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
            { name: "tensionBottomOfPipeTripOut", label: "Bottom Tension (Ib)", field: "", align: "left" },
            { name: "normalForce", label: "Normal Force (Ib)", field: "", align: "left" },
            { name: "changeIntensionTripOut", label: "Tension Increment (Ib)", field: "", align: "left" },
            { name: "tensionTopOfPipeTripOut", label: "Top Tension (Ib)", field: "", align: "left" },
            { name: "dragForce", label: "Drag Force Increment (Ib)", field: "", align: "left" },
            { name: "totalDrag", label: "Drag Force (Ib)", field: "", align: "left" },
            { name: "trippinOutHookeLoadAtJoint", label: "Hook Load (Ib)", field: "", align: "left" },
            { name: "torqueBottomTripOut", label: "Bottom Torque (Ib)", field: "", align: "left" },
            { name: "torqueChangeTripOut", label: "Torque Increment (Ib)", field: "", align: "left" },
            { name: "torqueTopTripInOut", label: "Top Torque (Ib)", field: "", align: "left" }
        ]
    }
  },
  methods: {

  }
}
</script>