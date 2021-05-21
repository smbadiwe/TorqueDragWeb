<template>
    <div class="bg-primary text-accent">
        <div class="row">
            <div class="col-3 q-pa-sm">
              Select Operational Pump Rate (gpm): 
            </div>
            <div class="col-3 q-pa-sm">
                <select style="width:100%;"
                class="text-center bg-positive text-accent"
                name="NameOfPumpRate" 
                id="" 
                v-on:change="onPumpRateSelectionChanged($event)">
                    <option
                    v-for="pumpFlow in rigDTO.pumpFlowRate" :key="pumpFlow">
                    {{ pumpFlow }}
                    </option>
                </select>
          </div>
          <div class="col-6 q-pa-sm"></div>
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
         surgeSwabSensitivityDTO(){
            return this.$store.getters['simulationStore/surgeSwabSensitivityDTO'];
        },
        rigDTO(){
            return this.$store.getters['simulationStore/rigDTOSurgeSwab'];
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
        ],
        surgeSwabResults: []
    }
  },
  methods: {
      onCheckBoxChecked(evt){
          var context =  this;
            console.log(evt);
            if(evt == true){

            }
      },
      onPumpRateSelectionChanged(e){
        var context = this;
        var id = e.target.value;
        var name = e.target.options[e.target.options.selectedIndex].text;
        console.log('id ', id );
        console.log('name ',name );
        var i = e.target.options.selectedIndex;
        console.log('selectedIndex ', i);
        context.surgeSwabResults = context.surgeSwabSensitivityDTO[i].surgeSwabResults;

      }
  },
  created(){
    var context = this;
   var length = context.surgeSwabSensitivityDTO.length;
   if(length > 0){
       context.surgeSwabResults = context.surgeSwabSensitivityDTO[0].surgeSwabResults;
   }
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