<template>
    <div class="bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:70px;">
                    <q-card-section align="right">
                        <div class="row">
                            <q-checkbox left-label v-model="isSummary" label="Summary" 
                            @input="onCheckBoxChecked($event)" />
                            <q-space />
                            <div class="col text-center text-subtitle1 q-pb-md">Surge and Swab</div>
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
                    v-if="isSummary"
                    class="my-sticky-header-table"
                    :data="surgeSwabResults"
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
                                <q-td key="bottomMeasuredDepth" :props="props">{{ props.row.bottomMeasuredDepth }}</q-td>
                                <q-td key="bottomTrueVerticalDepth" :props="props">{{ props.row.bottomTrueVerticalDepth }}</q-td>
                                <q-td key="surgePipePressureLoss" :props="props">{{ props.row.surgePipePressureLoss }}</q-td>
                                <q-td key="swabPipePressureLoss" :props="props">{{ props.row.swabPipePressureLoss }}</q-td>
                                <q-td key="surgeAnnulusPressureLoss" :props="props">{{ props.row.surgeAnnulusPressureLoss }}</q-td>
                                <q-td key="swabAnnulusPressureLoss" :props="props">{{ props.row.swabAnnulusPressureLoss }}</q-td>
                                <q-td key="pipeFlowRegime" :props="props">{{ props.row.pipeFlowRegime }}</q-td>
                                <q-td key="annularFlowRegime" :props="props">{{ props.row.annularFlowRegime }}</q-td>
                                <q-td key="pipeInnerArea" :props="props">{{ props.row.pipeInnerArea }}</q-td>
                                <q-td key="pipeOuterArea" :props="props">{{ props.row.pipeOuterArea }}</q-td>
                                <q-td key="crossSectionalArea" :props="props">{{ props.row.crossSectionalArea }}</q-td>
                                <q-td key="holeInnerArea" :props="props">{{ props.row.holeInnerArea }}</q-td>
                                <q-td key="annularArea" :props="props">{{ props.row.annularArea }}</q-td>
                                <q-td key="absoluteRoughness" :props="props">{{ props.row.absoluteRoughness }}</q-td>
                                <q-td key="mudDensityInsidePipe" :props="props">{{ props.row.mudDensityInsidePipe }}</q-td>
                                <q-td key="mudDensityAnnulus" :props="props">{{ props.row.mudDensityAnnulus }}</q-td>
                                <q-td key="insidePipeFlowRate" :props="props">{{ props.row.insidePipeFlowRate }}</q-td>
                                <q-td key="pipeFluidVelocity" :props="props">{{ props.row.pipeFluidVelocity }}</q-td>
                                <q-td key="outsidePipeFlowRate" :props="props">{{ props.row.outsidePipeFlowRate }}</q-td>
                                <q-td key="annulusFluidVelocity" :props="props">{{ props.row.annulusFluidVelocity }}</q-td>
                                <q-td key="fluidViscosity" :props="props">{{ props.row.fluidViscosity }}</q-td>
                                <q-td key="pipeReynoldsNumber" :props="props">{{ props.row.pipeReynoldsNumber }}</q-td>
                                <q-td key="annulusReynoldsNumber" :props="props">{{ props.row.annulusReynoldsNumber }}</q-td>
                                <q-td key="pipeEffectiveFluidVelocity" :props="props">{{ props.row.pipeEffectiveFluidVelocity }}</q-td>
                                <q-td key="pipeFrictionFactor" :props="props">{{ props.row.pipeFrictionFactor }}</q-td>
                                <q-td key="clingingConstant" :props="props">{{ props.row.clingingConstant }}</q-td>
                                <q-td key="annulusEffectiveFluidVelocity" :props="props">{{ props.row.annulusEffectiveFluidVelocity }}</q-td>
                                <q-td key="annulusFrictionFactor" :props="props">{{ props.row.annulusFrictionFactor }}</q-td>
                                <q-td key="pipePressureLoss" :props="props">{{ props.row.pipePressureLoss }}</q-td>
                                <q-td key="annulusPressureLoss" :props="props">{{ props.row.annulusPressureLoss }}</q-td>
                                <q-td key="totalPipePressureLoss" :props="props">{{ props.row.totalPipePressureLoss }}</q-td>
                                <q-td key="totalAnnulusPressureLoss" :props="props">{{ props.row.totalAnnulusPressureLoss }}</q-td>
                            </q-tr>
                        </template>
                </q-table>

                 <q-table
                    v-else
                    class="my-sticky-header-table"
                    :data="surgeSwabResults"
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
                                <q-td key="bottomMeasuredDepth" :props="props">{{ props.row.bottomMeasuredDepth }}</q-td>
                                <q-td key="bottomTrueVerticalDepth" :props="props">{{ props.row.bottomTrueVerticalDepth }}</q-td>
                                <q-td key="surgePipePressureLoss" :props="props">{{ props.row.surgePipePressureLoss }}</q-td>
                                <q-td key="swabPipePressureLoss" :props="props">{{ props.row.swabPipePressureLoss }}</q-td>
                                <q-td key="surgeAnnulusPressureLoss" :props="props">{{ props.row.surgeAnnulusPressureLoss }}</q-td>
                                <q-td key="swabAnnulusPressureLoss" :props="props">{{ props.row.swabAnnulusPressureLoss }}</q-td>
                                <q-td key="pipeFlowRegime" :props="props">{{ props.row.pipeFlowRegime }}</q-td>
                                <q-td key="annularFlowRegime" :props="props">{{ props.row.annularFlowRegime }}</q-td>
                                <q-td key="pipeInnerArea" :props="props">{{ props.row.pipeInnerArea }}</q-td>
                                <q-td key="pipeOuterArea" :props="props">{{ props.row.pipeOuterArea }}</q-td>
                                <q-td key="crossSectionalArea" :props="props">{{ props.row.crossSectionalArea }}</q-td>
                                <q-td key="holeInnerArea" :props="props">{{ props.row.holeInnerArea }}</q-td>
                                <q-td key="annularArea" :props="props">{{ props.row.annularArea }}</q-td>
                                <q-td key="absoluteRoughness" :props="props">{{ props.row.absoluteRoughness }}</q-td>
                                <q-td key="mudDensityInsidePipe" :props="props">{{ props.row.mudDensityInsidePipe }}</q-td>
                                <q-td key="mudDensityAnnulus" :props="props">{{ props.row.mudDensityAnnulus }}</q-td>
                                <q-td key="insidePipeFlowRate" :props="props">{{ props.row.insidePipeFlowRate }}</q-td>
                                <q-td key="pipeFluidVelocity" :props="props">{{ props.row.pipeFluidVelocity }}</q-td>
                                <q-td key="outsidePipeFlowRate" :props="props">{{ props.row.outsidePipeFlowRate }}</q-td>
                                <q-td key="annulusFluidVelocity" :props="props">{{ props.row.annulusFluidVelocity }}</q-td>
                                <q-td key="fluidViscosity" :props="props">{{ props.row.fluidViscosity }}</q-td>
                                <q-td key="pipeReynoldsNumber" :props="props">{{ props.row.pipeReynoldsNumber }}</q-td>
                                <q-td key="annulusReynoldsNumber" :props="props">{{ props.row.annulusReynoldsNumber }}</q-td>
                                <q-td key="pipeEffectiveFluidVelocity" :props="props">{{ props.row.pipeEffectiveFluidVelocity }}</q-td>
                                <q-td key="pipeFrictionFactor" :props="props">{{ props.row.pipeFrictionFactor }}</q-td>
                                <q-td key="clingingConstant" :props="props">{{ props.row.clingingConstant }}</q-td>
                                <q-td key="annulusEffectiveFluidVelocity" :props="props">{{ props.row.annulusEffectiveFluidVelocity }}</q-td>
                                <q-td key="annulusFrictionFactor" :props="props">{{ props.row.annulusFrictionFactor }}</q-td>
                                <q-td key="pipePressureLoss" :props="props">{{ props.row.pipePressureLoss }}</q-td>
                                <q-td key="annulusPressureLoss" :props="props">{{ props.row.annulusPressureLoss }}</q-td>
                                <q-td key="totalPipePressureLoss" :props="props">{{ props.row.totalPipePressureLoss }}</q-td>
                                <q-td key="totalAnnulusPressureLoss" :props="props">{{ props.row.totalAnnulusPressureLoss }}</q-td>
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
        surgeSwabResults() {
            return this.$store.getters['simulationStore/surgeSwabResults'];
        }
    },
    data () {
        return {
        separator: 'cell',
        isLoadData: true,
        isSummary: false,
        columns: [
            { name: "typeOfSection", label: "Type Of Section", field: "", align: "left" },
            { name: "length", label: "length (m)", field: "", align: "left" },
            { name: "bottomMeasuredDepth", label: "MeasuredDepth (ft)", field: "", align: "left" },
            { name: "bottomTrueVerticalDepth", label: "True Vertical Depth (ft)", field: "", align: "left" },
            { name: "surgePipePressureLoss", label: "Surge Pipe PressureLoss (psi)", field: "", align: "left" },
            { name: "swabPipePressureLoss", label: "Swab Pipe PressureLoss (psi)", field: "", align: "left" },
            { name: "surgeAnnulusPressureLoss", label: "Surge Annular PressureLoss (psi)", field: "", align: "left" },
            { name: "swabAnnulusPressureLoss", label: "Swab Annular PressureLoss (psi)", field: "", align: "left" },
            { name: "pipeFlowRegime", label: "Pipe Flow Regime", field: "", align: "left" },
            { name: "annularFlowRegime", label: "Annular Flow Regime", field: "", align: "left" },
            { name: "pipeInnerArea", label: "Inner Area (sqin)", field: "", align: "left" },
            { name: "pipeOuterArea", label: "Outer Area (sqin)", field: "", align: "left" },
            { name: "crossSectionalArea", label: "Cross Sectional Area (sqin)", field: "", align: "left" },
            { name: "holeInnerArea", label: "Hole Inner Area (sqin)", field: "", align: "left" },
            { name: "annularArea", label: "Annular Area (sqin)", field: "", align: "left" },
            { name: "absoluteRoughness", label: "Absolute Roughness (in)", field: "", align: "left" },
            { name: "mudDensityInsidePipe", label: "Mud Weight Inside Pipe (ppg)", field: "", align: "left" },
            { name: "mudDensityAnnulus", label: "Mud Weight Annulus (ppg)", field: "", align: "left" },
            { name: "insidePipeFlowRate", label: "Inside Pipe FlowRate (cu.ft/s)", field: "", align: "left" },
            { name: "pipeFluidVelocity", label: "Pipe Fluid Velocity (ft/s)", field: "", align: "left" },
            { name: "outsidePipeFlowRate", label: "Outside Pipe FlowRate (cu.ft/sc)", field: "", align: "left" },
            { name: "annulusFluidVelocity", label: "Annulus Fluid Velocity (ft/s)", field: "", align: "left" },
            { name: "fluidViscosity", label: "Fluid Viscosity (cp)", field: "", align: "left" },
            { name: "pipeReynoldsNumber", label: "Pipe Reynolds Number", field: "", align: "left" },
            { name: "annulusReynoldsNumber", label: "Annulus Reynolds Number", field: "", align: "left" },
            { name: "pipeEffectiveFluidVelocity", label: "Pipe Effective Fluid Velocity (ft/s)", field: "", align: "left" },
            { name: "pipeFrictionFactor", label: "Pipe Friction Factor", field: "", align: "left" },
            { name: "clingingConstant", label: "Clinging Constant", field: "", align: "left" },
            { name: "annulusEffectiveFluidVelocity", label: "Annulus Effective Fluid Velocity (ft/s)", field: "", align: "left" },
            { name: "annulusFrictionFactor", label: "Annulus Friction Factor", field: "", align: "left" },
            { name: "pipePressureLoss", label: "Pipe Pressure Loss (psi)", field: "", align: "left" },
            { name: "annulusPressureLoss", label: "Annulus Pressure Loss (psi)", field: "", align: "left" },
            { name: "totalPipePressureLoss", label: "Total PipePressure Loss (psi)", field: "", align: "left" },
            { name: "totalAnnulusPressureLoss", label: "Total AnnulusPressure Loss (psi)", field: "", align: "left" }
        ]
    }
  },
  methods: {
      onCheckBoxChecked(evt){
          var context =  this;
            console.log(evt);
            if(evt == true){

            }
      }
  },
  created(){
    var selectedItem = 0;
    var surgeSwabSensitivityDTO = this.$store.getters['simulationStore/surgeSwabSensitivityDTO'];
    var simulationResultsDTOs = surgeSwabSensitivityDTO.simulationResultsDTOs;
    var simulationResultsDTOsCount = simulationResultsDTOs.length;
    var simulationResultsDTO = simulationResultsDTOs[selectedItem];
    this.$store.commit('simulationStore/setSurgeSwabResults', simulationResultsDTO.surgeSwabResults);
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