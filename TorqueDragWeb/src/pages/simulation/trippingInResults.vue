<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:70px;">
                    <q-card-section align="right">
                        <div class="row">
                            <div class="col text-center text-subtitle1 q-pb-md">Tripping In</div>
                            <q-btn-dropdown class="q-pa-sm" flat>
                            <q-list class="bg-primary text-accent">
                                <q-item 
                                v-for="series in sensitivityIndices" :key="series"
                                clickable v-close-popup @click="onItemClick(series)">
                                <q-item-section>
                                    <q-item-label>{{ series }}</q-item-label>
                                </q-item-section>
                                </q-item>

                            </q-list>
                        </q-btn-dropdown>
                        </div>
                        
                        
                    </q-card-section>
                    </q-card>
            </div>
        </div>

        <div class="row">
            <div class="col-12 q-pa-sm">
                <q-table
                    v-if="isLoadData"
                    class="my-sticky-header-table"
                    :data="trippingInResults"
                    :columns="columns"
                    row-key="name"
                    dark
                    color="amber"
                    bordered
                    :separator="separator">


                    <template v-slot:body="props">
                        <q-tr
                        :props="props">
                            <q-td key="typeOfSection" :props="props">{{ props.row.typeOfSection }}</q-td>
                            <q-td key="length" :props="props">{{ props.row.length }}</q-td>
                            <q-td key="section2D" :props="props">{{ props.row.section2D }}</q-td>
                            <q-td key="pipeInnerArea" :props="props">{{ props.row.pipeInnerArea }}</q-td>
                            <q-td key="pipeOuterArea" :props="props">{{ props.row.pipeOuterArea }}</q-td>
                            <q-td key="pipeTotalWeight" :props="props">{{ props.row.pipeTotalWeight }}</q-td>
                            <q-td key="buoyancyWeight" :props="props">{{ props.row.buoyancyWeight }}</q-td>
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
                            <q-td key="tensileStrength" :props="props">{{ props.row.tensileStrength }}</q-td>
                            <q-td key="HookeLoadAtJoint" :props="props">{{ props.row.hookeLoadAtJointTop }}</q-td>
                            <q-td key="overPullMargin" :props="props">{{ props.row.overPullMargin }}</q-td>
                            <q-td key="torqueBottom" :props="props">{{ props.row.torqueBottom }}</q-td>
                            <q-td key="torqueTop" :props="props">{{ props.row.torqueTop }}</q-td>
                            <q-td key="criticalInclinationAngle" :props="props">{{ props.row.criticalInclinationAngle }}</q-td>
                            <q-td key="criticalSinusoidalBuckling" :props="props">{{ props.row.criticalSinusoidalBuckling }}</q-td>
                            <q-td key="criticalHelicalBuckling" :props="props">{{ props.row.criticalHelicalBuckling }}</q-td>
                        </q-tr>
                        </template>
                </q-table>

                 <q-table
                    v-else
                    class="my-sticky-header-table"
                    :data="trippingInResults"
                    :columns="columnsStressData"
                    row-key="name"
                    dark
                    color="amber"
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
                            <q-td key="tensileStrength" :props="props">{{ props.row.tensileStrength }}</q-td>
                            <q-td key="HookeLoadAtJoint" :props="props">{{ props.row.hookeLoadAtJointTop }}</q-td>
                            <q-td key="overPullMargin" :props="props">{{ props.row.overPullMargin }}</q-td>
                            <q-td key="torqueBottom" :props="props">{{ props.row.torqueBottom }}</q-td>
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
        sensitivityIndices() {
            return this.$store.getters['simulationStore/sensitivityIndices'];
        },
        trippingInResults() {
            return this.$store.getters['simulationStore/trippingInResults'];
        }
    },
    data () {
        return {
        separator: 'cell',
        isLoadData: true,
        columns: [
            { name: "typeOfSection", label: "Type Of Section", field: "", align: "left" },
            { name: "section2D", label: "2D section", field: "", align: "left" },
            { name: "length", label: "length (m)", field: "", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "", align: "left" },
            { name: "pipeTotalWeight", label: "Total Weight (lbs)", field: "", align: "left" },
            { name: "buoyancyWeight", label: "Buoyancy Weight (lbs)", field: "", align: "left" },
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
            { name: "tensileStrength", label: "Tensile Strength", field: "", align: "left" },
            { name: "HookeLoadAtJoint", label: "Hook Load (Ib)", field: "", align: "left" },
            { name: "overPullMargin", label: "Overpull Margin (Ib)", field: "", align: "left" },
            { name: "torqueBottom", label: "Bottom Torque (Ib)", field: "", align: "left" },
            { name: "torqueTop", label: "Top Torque (Ib)", field: "", align: "left" },
            { name: "criticalInclinationAngle", label: "critical Inc. (rad)", field: "", align: "left" },
            { name: "criticalSinusoidalBuckling", label: "Sinusoidal Buckling (Ib)", field: "", align: "left" },
            { name: "criticalHelicalBuckling", label: "Helical Buckling (Ib)", field: "", align: "left" }
        ],
        columnsStressData: [
            { name: "typeOfSection", label: "Type Of Section", field: "", align: "left" },
            { name: "length", label: "length (m)", field: "", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "", align: "left" },
            { name: "pipeTotalWeight", label: "Total Weight (lbs)", field: "", align: "left" },
            { name: "buoyancyWeight", label: "Buoyancy Weight (lbs)", field: "", align: "left" },
            { name: "bottomMeasuredDepth", label: "Bottom MeasuredDepth (m)", field: "", align: "left" },
            { name: "mudDensityInsidePipe", label: "Pipe Mud Density (ppg)", field: "", align: "left" },
            { name: "mudDensityAnnulus", label: "Annulus Mud Density (m)", field: "", align: "left" },
            { name: "insidePipeHydrostaticPressure", label: "Pipe Hydrostatic Pressure (psi)", field: "", align: "left" },
            { name: "annulusHydrostaticPressure", label: "Annulus Hydrostatic Pressure (m)", field: "", align: "left" },
            { name: "pipeBottomPressureForce", label: "Pipe Hydrostatic Force (lb)", field: "", align: "left" },
            { name: "annulusBottomPressureForce", label: "Annulus Hydrostatic Forece (lb)", field: "", align: "left" },
            { name: "shearRateInAnnulus", label: "Annulus Shear Rate (Sec^-1)", field: "", align: "left" },
            { name: "shearStress", label: "Shear Stress (psi)", field: "", align: "left" },
            { name: "fatiqueLimit", label: "Fatique Limit (psi)", field: "", align: "left" },
            { name: "fatiqueRatioInner", label: "Pipe Fatique Ratio", field: "", align: "left" },
            { name: "fatiqueRatioOuter", label: "Annulus Fatique Ratio", field: "", align: "left" },
            { name: "effectiveStressInner", label: "Pipe Effective Stress (psi)", field: "", align: "left" },
            { name: "effectiveStressOuter", label: "Annulus Effective Stress (psi)", field: "", align: "left" },
            { name: "axilStressInner", label: "Pipe Axial Stress (psi)", field: "", align: "left" },
            { name: "axilStressOuter", label: "Annulus Axial Stress (psi)", field: "", align: "left" },
            { name: "transverseStressInner", label: "Pipe Transverse Stress (psi)", field: "", align: "left" },
            { name: "transverseStressOuter", label: "Annulus Transverse Stress (psi)", field: "", align: "left" },
            { name: "bendingStressInner", label: "Pipe Bending Stress (psi)", field: "", align: "left" },
            { name: "bendingStressOuter", label: "Annulus Bending Stress (psi)", field: "", align: "left" },
            { name: "bucklingStressInner", label: "Pipe Buckling Stress (psi)", field: "", align: "left" },
            { name: "bucklingStressOuter", label: "Annulus Buckling Stress (psi)", field: "", align: "left" },
            { name: "maxAxialStress", label: "Maximum Axial Stress (psi)", field: "", align: "left" },
            { name: "maxBendingStress", label: "Maximum Bending Stress (psi)", field: "", align: "left" },
            { name: "maxDoglegSeverity", label: "Max. Dogleg Severity (deg/100ft)", field: "", align: "left" },
            { name: "angleSinusoidalBuckling", label: "Angle Sinusoidal Buckling (degrees)", field: "", align: "left" },
            { name: "angleHelicalBuckling", label: "Angle Helical Buckling (degrees)", field: "", align: "left" },
            { name: "pitchHelical", label: "Pitch", field: "", align: "left" }
            
        ]
    }
  },
  methods: {
      onItemClick(selectedItem){
          var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
          var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
          var simulationResultsDTOsCount = simulationResultsDTOs.length;
          var simulationResultsDTO = simulationResultsDTOs[selectedItem-1];
           this.$store.commit('simulationStore/setTrippingInResults', simulationResultsDTO.trippingInResults);
      }
  },
  created(){
    var selectedItem = 0;
    var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
    var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
    var simulationResultsDTOsCount = simulationResultsDTOs.length;
    var simulationResultsDTO = simulationResultsDTOs[selectedItem];
    this.$store.commit('simulationStore/setTrippingInResults', simulationResultsDTO.trippingInResults);
  }
}
</script>

<style scoped>
.my-sticky-header-table{
  height: 650px;
}

.q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    
    background-color: black
  }
</style>