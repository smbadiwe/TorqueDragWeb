<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:70px;">
                    <q-card-section align="right">
                        <div class="row">
                            <div class="col text-center text-subtitle1 q-pb-md">Hydraulics</div>
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
                    class="my-sticky-header-table"
                    :data="hydraulicsResults"
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
                            <q-td key="pipeInnerArea" :props="props">{{ props.row.pipeInnerArea }}</q-td>
                            <q-td key="pipeOuterArea" :props="props">{{ props.row.pipeOuterArea }}</q-td>
                            <q-td key="absoluteRoughness" :props="props">{{ props.row.absoluteRoughness }}</q-td>
                            <q-td key="crossSectionalArea" :props="props">{{ props.row.crossSectionalArea }}</q-td>
                            <q-td key="mudDensityInsidePipe" :props="props">{{ props.row.mudDensityInsidePipe }}</q-td>
                            <q-td key="mudDensityAnnulus" :props="props">{{ props.row.mudDensityAnnulus }}</q-td>
                            <q-td key="topMeasuredDepth" :props="props">{{ props.row.topMeasuredDepth }}</q-td>
                            <q-td key="bottomMeasuredDepth" :props="props">{{ props.row.bottomMeasuredDepth }}</q-td>
                            <q-td key="fluidViscosity" :props="props">{{ props.row.fluidViscosity }}</q-td>
                            <q-td key="pipeFluidVelocity" :props="props">{{ props.row.pipeFluidVelocity }}</q-td>
                            <q-td key="pipeReynoldsNumber" :props="props">{{ props.row.pipeReynoldsNumber }}</q-td>
                            <q-td key="annulusFluidVelocity" :props="props">{{ props.row.annulusFluidVelocity }}</q-td>
                            <q-td key="annulusReynoldsNumber" :props="props">{{ props.row.annulusReynoldsNumber }}</q-td>
                            <q-td key="pipeFrictionFactor" :props="props">{{ props.row.pipeFrictionFactor }}</q-td>
                            <q-td key="pipePressureLoss" :props="props">{{ props.row.pipePressureLoss }}</q-td>
                            <q-td key="annulusFrictionFactor" :props="props">{{ props.row.annulusFrictionFactor }}</q-td>
                            <q-td key="annulusPressureLoss" :props="props">{{ props.row.annulusPressureLoss }}</q-td>
                            <q-td key="yeildPoint" :props="props">{{ props.row.yeildPoint }}</q-td>
                            <q-td key="effectiveFluidViscosity" :props="props">{{ props.row.effectiveFluidViscosity }}</q-td>
                            <q-td key="yeildStress" :props="props">{{ props.row.yeildStress }}</q-td>


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
        hydraulicsResults() {
        return this.$store.getters['simulationStore/hydraulicsResults'];
        },
        sensitivityIndices() {
            return this.$store.getters['simulationStore/sensitivityIndices'];
        },
    },
    data () {
        return {
        separator: 'cell',
        columns: [
            { name: "typeOfSection", label: "Type Of Section", field: "", align: "left" },
            { name: "length", label: "length (m)", field: "", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "", align: "left" },
            { name: "absoluteRoughness", label: "Absolute Roughness (ft)", field: "", align: "left" },
            { name: "crossSectionalArea", label: "Cross-Sectional Area (ft2)", field: "", align: "left" },
            { name: "mudDensityInsidePipe", label: "Pipe Mud Density (ppg)", field: "", align: "left" },
            { name: "mudDensityAnnulus", label: "Annulus Mud Density (ppg)", field: "", align: "left" },
            { name: "topMeasuredDepth", label: "Top MD (ft)", field: "", align: "left" },
            { name: "bottomMeasuredDepth", label: "Bottom MD (ft)", field: "", align: "left" },
            { name: "fluidViscosity", label: "Plastic Viscosity (cp)", field: "", align: "left" },
            { name: "pipeFluidVelocity", label: "Pipe Fluid Velocity (ft/sec)", field: "", align: "left" },
            { name: "pipeReynoldsNumber", label: "Pipe Reynolds Number", field: "", align: "left" },
            { name: "annulusFluidVelocity", label: "Annulus Fluid Velocity (ft/sec)", field: "", align: "left" },
            { name: "annulusReynoldsNumber", label: "Annulus Reynolds Number", field: "", align: "left" },
            { name: "pipeFrictionFactor", label: "Pipe Friction Factor", field: "", align: "left" },
            { name: "pipePressureLoss", label: "Pipe Pressure Loss (psi)", field: "", align: "left" },
            { name: "annulusFrictionFactor", label: "Annulus Friction Factor", field: "", align: "left" },
            { name: "annulusPressureLoss", label: "Annulus Pressure Loss (psi)", field: "", align: "left" },
            { name: "yeildPoint", label: "Yeild Point. (Ib/ft2)", field: "", align: "left" },
            { name: "effectiveFluidViscosity", label: "Effective Fluid Viscosity (cp)", field: "", align: "left" },
            { name: "yeildStress", label: "Yeild Stress (psi)", field: "", align: "left" }
        ]
    }
  },
   methods: {
      onItemClick(selectedItem){
          var hydraulicSensitivityDTO = this.$store.getters['simulationStore/hydraulicSensitivityDTO'];
          var simulationResultsDTOs = hydraulicSensitivityDTO.simulationResultsDTOs;
          var simulationResultsDTOsCount = simulationResultsDTOs.length;
          var simulationResultsDTO = simulationResultsDTOs[selectedItem-1];
           this.$store.commit('simulationStore/setHydraulicsResults', simulationResultsDTO.hydraulicsResults);
      }
  },
  created(){
    var selectedItem = 0;
    var hydraulicSensitivityDTO = this.$store.getters['simulationStore/hydraulicSensitivityDTO'];
    var simulationResultsDTOs = hydraulicSensitivityDTO.simulationResultsDTOs;
    var simulationResultsDTOsCount = simulationResultsDTOs.length;
    var simulationResultsDTO = simulationResultsDTOs[selectedItem];
    this.$store.commit('simulationStore/setHydraulicsResults', simulationResultsDTO.hydraulicsResults);
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