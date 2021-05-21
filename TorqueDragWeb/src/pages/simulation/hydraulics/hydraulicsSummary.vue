<template>
    <div class="bg-primary q-pa-sm text-accent">
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
            <q-expansion-item class="col-12 q-pa-sm"
                v-model="isPumpSummaryExpanded"
                dense
                dense-toggle
                expand-separator
                label="Pump Summary"
                clickable
            >
                    
                <div class="row bg-positive q-pa-sm">

                    <div class="col-4 q-pt-sm">Operational pump rate (gpm)</div>
                    <div class="col-8 q-pa-sm">{{ pumpSummary.operationalPumpRate }}</div>

                    <div class="col-4 q-pt-sm">Stand Pipe Pressure (psi)</div>
                    <div class="col-8 q-pa-sm">{{ pumpSummary.standPipePressure }}</div>
                    
                    <div class="col-4 q-pt-sm">Pump Power (hp)</div>
                    <div class="col-8 q-pa-sm">{{ pumpSummary.pumpPower }}</div>

                </div>

            </q-expansion-item>
        </div>

        <div class="row">
            <q-expansion-item class="col-12 q-pa-sm"
                v-model="isPressureLossExpanded"
                dense
                dense-toggle
                expand-separator
                label="Pressure Loss @ Operational Pump Rate"
                clickable
            >
                    
                <div class="row bg-positive q-pa-sm">
                    <div class="col-8">
                        <div class="row">
                            <div class="col-4 q-pt-sm">Surface Equipment (psi)</div>
                            <div class="col-8 q-pa-sm">{{ pressureLossAtOperationalPumpRate.surfaceEquipment }}</div>
                        </div>
                        <div class="row">
                            <div class="col-4 q-pt-sm">String (psi)</div>
                            <div class="col-8 q-pa-sm">{{ pressureLossAtOperationalPumpRate.string }}</div>
                        </div>
                        <div class="row">
                            <div class="col-4 q-pt-sm">Bit (psi)</div>
                            <div class="col-8 q-pa-sm">{{ pressureLossAtOperationalPumpRate.bit }}</div>
                        </div>
                        <div class="row">
                            <div class="col-4 q-pt-sm">Annulus (psi)</div>
                            <div class="col-8 q-pa-sm">{{ pressureLossAtOperationalPumpRate.annulus }}</div>
                        </div>
                    </div>
                    <div class="col-4 q-pa-sm">
                        <div class="row">
                            <div id="myDiv" class="col-12 bg-accent">

                            </div>
                        </div>
                    </div>

                </div>

            </q-expansion-item>
        </div>

        <div class="row">
            <q-expansion-item class="col-12 q-pa-sm"
                v-model="isBitSummaryExpanded"
                dense
                dense-toggle
                expand-separator
                label="Bit Summary @ Operational Pump Rate"
                clickable
            >
                    
                <div class="row bg-positive q-pa-sm">

                    <div class="col-4 q-pt-sm">Total Flow Area (sqin)</div>
                    <div class="col-8 q-pa-sm">{{ bitSummary.totalFlowArea }}</div>

                    <div class="col-4 q-pt-sm">Bit Hydraulic Power (hp)</div>
                    <div class="col-8 q-pa-sm">{{ bitSummary.bitHydraulicPower }}</div>
                    
                    <div class="col-4 q-pt-sm">Percentage Power at Bit (%)</div>
                    <div class="col-8 q-pa-sm">{{ bitSummary.percentagePowerAtBit }}</div>

                    <div class="col-4 q-pt-sm">Bit Nozzle Velocity (ft/s)</div>
                    <div class="col-8 q-pa-sm">{{ bitSummary.bitNozzleVelocity }}</div>

                    <div class="col-4 q-pt-sm">HSI (hp/sqin)</div>
                    <div class="col-8 q-pa-sm">{{ bitSummary.hSI }}</div>
                    
                    <div class="col-4 q-pt-sm">Bit Impact Force (lbf)</div>
                    <div class="col-8 q-pa-sm">{{ bitSummary.bitImpactForce }}</div>

                </div>

            </q-expansion-item>
        </div>

        <div class="row">
            <q-expansion-item class="col-12 q-pa-sm"
                v-model="isHydraulicSummaryExpanded"
                dense
                dense-toggle
                expand-separator
                label="Hydraulic Summary @ Operational Pump Rate"
                clickable
            >
                    
                <div class="row bg-positive q-pa-sm">

                    <div class="col-4 q-pt-sm">Mud Weight (ppg)</div>
                    <div class="col-8 q-pa-sm">{{ hydraulicSummary.mudWeight }}</div>

                    <div class="col-4 q-pt-sm">ECD at Shoe (ppg)</div>
                    <div class="col-8 q-pa-sm">{{ hydraulicSummary.eCDAtShoe }}</div>
                    
                    <div class="col-4 q-pt-sm">ECD at Bit (ppg)</div>
                    <div class="col-8 q-pa-sm">{{ hydraulicSummary.eCDAtBit }}</div>

                </div>

            </q-expansion-item>
        </div>
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist'
export default {
    computed:{
        hydraulicSensitivityDTO(){
            return this.$store.getters['simulationStore/surgeSwabSensitivityDTO'];
        },
        rigDTO(){
            return this.$store.getters['simulationStore/rigDTO'];
        }
    },
    data(){
        return {
            isPumpSummaryExpanded: true,
            isPressureLossExpanded: true,
            isBitSummaryExpanded: false,
            isHydraulicSummaryExpanded: false,
            pumpSummary: {
                operationalPumpRate: 0,
                standPipePressure: 0,
                pumpPower: 0
            },
            pressureLossAtOperationalPumpRate: {
                surfaceEquipment: 0,
                string: 0,
                bit: 0,
                annulus: 0
            },
            bitSummary:{
                totalFlowArea: 0,
                bitHydraulicPower: 0,
                percentagePowerAtBit: 0,
                bitNozzleVelocity: 0,
                hSI: 0,
                bitImpactForce: 0
            },
            hydraulicSummary: {
                mudWeight: 0,
                eCDAtShoe: 0,
                eCDAtBit: 0
            }
        }
    },
    methods:{
        onPumpRateSelectionChanged(e){
        var context = this;
        var id = e.target.value;
            var name = e.target.options[e.target.options.selectedIndex].text;
            console.log('id ', id );
            console.log('name ',name );
            var i = e.target.options.selectedIndex;
            console.log('selectedIndex ', i);
            context.pumpRateSelection(i);
            



        },
        pumpRateSelection(i){
            var context =  this;
            context.pumpSummary.operationalPumpRate = context.rigDTO.pumpFlowRate[i];
            context.pumpSummary.standPipePressure = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].parasticPressureLoss;
            context.pumpSummary.pumpPower = context.rigDTO.maxHorsePower;


            context.pressureLossAtOperationalPumpRate.surfaceEquipment = 0;
            context.pressureLossAtOperationalPumpRate.string = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].totalPipePressureLoss;
            context.pressureLossAtOperationalPumpRate.bit = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].bitPressureLoss;
            context.pressureLossAtOperationalPumpRate.annulus = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].totalAnnulusPressureLoss;

            context.bitSummary.totalFlowArea = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].nozzleFlowArea;
            context.bitSummary.bitHydraulicPower = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].bitHydraulicPower;
            context.bitSummary.percentagePowerAtBit = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].percentagebitHydraulicPower;
            context.bitSummary.bitNozzleVelocity = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].nozzleVelocity;
            context.bitSummary.hSI = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].bitPowerOverArea;
            context.bitSummary.bitImpactForce = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].bitImpactForce;

            context.hydraulicSummary.mudWeight = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].mudDensityAnnulus;
            context.hydraulicSummary.eCDAtShoe = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].equivalentCirculatingDensity;
            context.hydraulicSummary.eCDAtBit = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].equivalentCirculatingDensity;


            context.pressureLossAtOperationalPumpRate.surfaceEquipment = 0;
            context.pressureLossAtOperationalPumpRate.string = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].totalPipePressureLoss;
            context.pressureLossAtOperationalPumpRate.bit = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].bitPressureLoss;
            context.pressureLossAtOperationalPumpRate.annulus = context.hydraulicSensitivityDTO[i].surgeSwabResults[0].totalAnnulusPressureLoss;

            var values = [context.pressureLossAtOperationalPumpRate.surfaceEquipment,
            context.pressureLossAtOperationalPumpRate.string, context.pressureLossAtOperationalPumpRate.bit,
            context.pressureLossAtOperationalPumpRate.annulus];

            var labels = ["Surface equipment", "String", "Bit", "Annulus"];
            context.createPieChart(values, labels);
        },
        createPieChart(values, labels){
                var valueDrists = {
                    values: values,
                    labels: labels,
                    textinfo: "label+percent",
                    textposition: "outside",
                    automargin: true,
                    type: 'pie'
                }	

               
                
                var data = [valueDrists]
                console.log("plot data: ", data)
                var layout = { 
                    title: '',
                    height: 200,
                    width: 400,
                    margin: {"t": 0, "b": 0, "l": 0, "r": 0},
                    showlegend: false,
                    plot_bgcolor:"rgb(27, 25, 25)"
                    //paper_bgcolor:"#FFF3"
                    };
            
                var config = {responsive: true}
                Plotly.newPlot('myDiv', data, layout, config);
        }
    },
    mounted(){
        var context = this;
        var length = context.hydraulicSensitivityDTO.length;
        if(length > 0){
            var i = 0;
            context.pumpRateSelection(i);
        }
    }
}
</script>