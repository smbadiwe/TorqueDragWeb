<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:70px;">
                    <q-card-section align="right">
                        <div class="row">
                            <div class="col text-center text-subtitle1 q-pb-md">Tripping Out</div>
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
                        <q-btn
                            flat
                            dense
                            round
                            size="md"
                            :icon="dynamicIcon"
                            aria-label="Menu"
                            @click="toggleTable"
                            />
                            </div>
                        
                        
                    </q-card-section>
                    </q-card>
            </div>
        </div>

        <div class="row">
            <div class="col-12 q-pa-sm bg-primary text-accent">
               <chartToTable></chartToTable>
            </div>
        </div>
       
    </div>
</template>

<script>
import chartToTable from "pages/fixedDepthPlots/chartToTable.vue"

export default {
    computed:{
        sensitivityIndices() {
            return this.$store.getters['simulationStore/sensitivityIndices'];
        },
        trippingOutResults() {
            return this.$store.getters['simulationStore/trippingOutResults'];
        }
    },
    components:{
		chartToTable
	},
    data () {
        return {
        dynamicIcon:"table_chart",
        expandLoadData: true,
        expandStressData:false,
        separator: 'cell',
        isLoadData: true,
        columns: [
            { name: "typeOfSection", label: "Type Of Section", field: "typeOfSection", align: "left" },
            { name: "section2D", label: "2D section", field: "section2D", align: "left" },
            { name: "length", label: "length (ft)", field: "length", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "pipeInnerArea", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "pipeOuterArea", align: "left" },
            { name: "pipeTotalWeight", label: "Total Weight (lbs)", field: "pipeTotalWeight", align: "left" },
            { name: "buoyancyWeight", label: "Buoyancy Weight (lbs)", field: "buoyancyWeight", align: "left" },
            { name: "bottomMeasuredDepth", label: "Bottom MeasuredDepth (ft)", field: "bottomMeasuredDepth", align: "left" },
            { name: "topInclination", label: "Top Inclination (rad)", field: "topInclination", align: "left" },
            { name: "bottomInclination", label: "Bottom Inclination (rad)", field: "bottomInclination", align: "left" },
            { name: "topAzimuth", label: "Top Azimuth (rad)", field: "topAzimuth", align: "left" },
            { name: "bottomAzimuth", label: "Bottom Azimuth (rad)", field: "bottomAzimuth", align: "left" },
            { name: "dogLegSeverity", label: "DogLeg Severity", field: "dogLegSeverity", align: "left" },
            { name: "tensionBottomOfPipe", label: "Bottom Tension (Ib)", field: "tensionBottomOfPipe", align: "left" },
            { name: "normalForce", label: "Normal Force (Ib)", field: "normalForce", align: "left" },
            { name: "tensionTopOfPipe", label: "Top Tension (Ib)", field: "tensionTopOfPipe", align: "left" },
            { name: "totalDrag", label: "Drag Force (Ib)", field: "totalDrag", align: "left" },
            { name: "tensileStrength", label: "Tensile Strength", field: "tensileStrength", align: "left" },
            { name: "hookeLoadAtJoint", label: "Hook Load (Ib)", field: "hookeLoadAtJoint", align: "left" },
            { name: "overPullMargin", label: "Overpull Margin (Ib)", field: "overPullMargin", align: "left" },
            { name: "torqueBottom", label: "Bottom Torque (Ib)", field: "torqueBottom", align: "left" },
            { name: "torqueTop", label: "Top Torque (Ib)", field: "torqueTop", align: "left" },
            { name: "criticalInclinationAngle", label: "critical Inc. (rad)", field: "criticalInclinationAngle", align: "left" },
            { name: "criticalSinusoidalBuckling", label: "Sinusoidal Buckling (Ib)", field: "criticalSinusoidalBuckling", align: "left" },
            { name: "criticalHelicalBuckling", label: "Helical Buckling (Ib)", field: "criticalHelicalBuckling", align: "left" }
        ],
        columnsStressData: [
            { name: "typeOfSection", label: "Type Of Section", field: "typeOfSection", align: "left" },
            { name: "length", label: "length (ft)", field: "length", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "pipeInnerArea", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "pipeOuterArea", align: "left" },
            { name: "pipeTotalWeight", label: "Total Weight (lbs)", field: "pipeTotalWeight", align: "left" },
            { name: "buoyancyWeight", label: "Buoyancy Weight (lbs)", field: "buoyancyWeight", align: "left" },
            { name: "bottomMeasuredDepth", label: "Bottom MeasuredDepth (ft)", field: "bottomMeasuredDepth", align: "left" },
            { name: "mudDensityInsidePipe", label: "Pipe Mud Density (lb/ft3)", field: "mudDensityInsidePipe", align: "left" },
            { name: "mudDensityAnnulus", label: "Annulus Mud Density (lb/ft3)", field: "mudDensityAnnulus", align: "left" },
            { name: "insidePipeHydrostaticPressure", label: "Pipe Hydrostatic Pressure (psi)", field: "insidePipeHydrostaticPressure", align: "left" },
            { name: "annulusHydrostaticPressure", label: "Annulus Hydrostatic Pressure (m)", field: "annulusHydrostaticPressure", align: "left" },
            { name: "pipeBottomPressureForce", label: "Pipe Hydrostatic Force (lb)", field: "pipeBottomPressureForce", align: "left" },
            { name: "annulusBottomPressureForce", label: "Annulus Hydrostatic Forece (lb)", field: "annulusBottomPressureForce", align: "left" },
            { name: "shearRateInAnnulus", label: "Annulus Shear Rate (Sec^-1)", field: "shearRateInAnnulus", align: "left" },
            { name: "shearStress", label: "Shear Stress (psi)", field: "shearStress", align: "left" },
            { name: "fatiqueLimit", label: "Fatique Limit (psi)", field: "fatiqueLimit", align: "left" },
            { name: "fatiqueRatioInner", label: "Pipe Fatique Ratio", field: "fatiqueRatioInner", align: "left" },
            { name: "fatiqueRatioOuter", label: "Annulus Fatique Ratio", field: "fatiqueRatioOuter", align: "left" },
            { name: "effectiveStressInner", label: "Pipe Effective Stress (psi)", field: "effectiveStressInner", align: "left" },
            { name: "effectiveStressOuter", label: "Annulus Effective Stress (psi)", field: "effectiveStressOuter", align: "left" },
            { name: "axilStressInner", label: "Pipe Axial Stress (psi)", field: "axilStressInner", align: "left" },
            { name: "axilStressOuter", label: "Annulus Axial Stress (psi)", field: "axilStressOuter", align: "left" },
            { name: "transverseStressInner", label: "Pipe Transverse Stress (psi)", field: "transverseStressInner", align: "left" },
            { name: "transverseStressOuter", label: "Annulus Transverse Stress (psi)", field: "transverseStressOuter", align: "left" },
            { name: "bendingStressInner", label: "Pipe Bending Stress (psi)", field: "bendingStressInner", align: "left" },
            { name: "bendingStressOuter", label: "Annulus Bending Stress (psi)", field: "bendingStressOuter", align: "left" },
            { name: "bucklingStressInner", label: "Pipe Buckling Stress (psi)", field: "bucklingStressInner", align: "left" },
            { name: "bucklingStressOuter", label: "Annulus Buckling Stress (psi)", field: "maxAxialStress", align: "left" },
            { name: "maxAxialStress", label: "Maximum Axial Stress (psi)", field: "maxBendingStress", align: "left" },
            { name: "maxBendingStress", label: "Maximum Bending Stress (psi)", field: "maxBendingStress", align: "left" },
            { name: "maxDoglegSeverity", label: "Max. Dogleg Severity (deg/100ft)", field: "maxDoglegSeverity", align: "left" },
            { name: "angleSinusoidalBuckling", label: "Angle Sinusoidal Buckling (degrees)", field: "angleSinusoidalBuckling", align: "left" },
            { name: "angleHelicalBuckling", label: "Angle Helical Buckling (degrees)", field: "angleHelicalBuckling", align: "left" },
            { name: "pitchHelical", label: "Pitch", field: "pitchHelical", align: "left" },
            { name: "pressureLoss", label: "Pressure Loss (psi)", field: "pressureLoss", align: "left" },
            { name: "fluidDragForce", label: "Fluid Drag Force (lb)", field: "fluidDragForce", align: "left" }
            
        ]
    }
  },
  methods: {
      toggleTable(){
          var context = this;
          var tableData = {
                data: context.trippingOutResults,
                columns: [],
				excelFileName: "Tripping Out.csv",
				tableTitle: "Tripping Out"
            }
            
            if(context.isLoadData == false){
                tableData.columns = context.columns;
                tableData.excelFileName = "Tripping Out Load Data.csv"
                tableData.tableTitle = "Tripping Out Load Data"
                context.isLoadData = true;
            }else{
                tableData.columns = context.columnsStressData;
                tableData.excelFileName = "Tripping Out Stress Data.csv"
                tableData.tableTitle = "Tripping Out Stress Data"
                context.isLoadData = false;
            }

        this.$store.commit('simulationStore/setCustomColumnsForReport', tableData);
        this.$store.commit('simulationStore/setCustomTableForReport', tableData);
        this.$store.commit('simulationStore/setExcelFileName', tableData);
        this.$store.commit('simulationStore/setTableTitle', tableData);
          
          
      },
      onItemClick(selectedItem){
          var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
          var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
          var simulationResultsDTOsCount = simulationResultsDTOs.length;
          var simulationResultsDTO = simulationResultsDTOs[selectedItem-1];
          this.$store.commit('simulationStore/setTrippingOutResults', simulationResultsDTO.trippingOutResults);
           var tableData = {
                data: simulationResultsDTO.trippingOutResults,
                columns: context.columns,
				excelFileName: "Tripping Out Load Data.csv",
				tableTitle: "Tripping Out Load Data"
			}

        this.$store.commit('simulationStore/setCustomColumnsForReport', tableData);
        this.$store.commit('simulationStore/setCustomTableForReport', tableData);
        this.$store.commit('simulationStore/setExcelFileName', tableData);
        this.$store.commit('simulationStore/setTableTitle', tableData);
      }
  },
  created(){
    var selectedItem = 0;
    var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
    var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
    var simulationResultsDTOsCount = simulationResultsDTOs.length;
    var simulationResultsDTO = simulationResultsDTOs[selectedItem];
    this.$store.commit('simulationStore/setTrippingOutResults', simulationResultsDTO.trippingOutResults);
    var context =  this;
    var tableData = {
                data: simulationResultsDTO.trippingOutResults,
                columns: context.columns,
				excelFileName: "Tripping Out Load Data.csv",
				tableTitle: "Tripping Out Load Data"
			}

        this.$store.commit('simulationStore/setCustomColumnsForReport', tableData);
        this.$store.commit('simulationStore/setCustomTableForReport', tableData);
        this.$store.commit('simulationStore/setExcelFileName', tableData);
        this.$store.commit('simulationStore/setTableTitle', tableData);
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
    
    background-color: black;
  }

 thead tr th{
     position: sticky;
    z-index: 1;
 }
    
  thead tr:first-child th{
      top: 0;
  }
    

  /* this is when the loading indicator appears */
  .q-table--loading thead tr:last-child th{
      /* height of all previous header rows */
    top: 48px;
  }
    
   
</style>