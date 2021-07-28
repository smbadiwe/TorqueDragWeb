<template>
  <div>
	   <div class="row">
            <q-bar class="col-12 q-pa-sm row bg-secondary" >
                 <q-btn
                    flat
                    dense
                    round
                    size="md"
                    icon="refresh"
                    aria-label="Menu"
                    @click="reFreshPlot"
                    />
					<q-space />
					<q-btn
                    flat
                    dense
                    round
                    size="md"
                    :icon="dynamicIcon"
                    aria-label="Menu"
                    @click="toggleTable"
                    />
            </q-bar>
        </div>

		<div class="row">
			<div v-if="isTable">
				<chartToTable></chartToTable>
			</div>
			<div 
			v-else
			id="myDiv" class="col-12 bg-accent">

			</div>
		</div>
  </div>
</template>


<script>
import Plotly from 'plotly.js-dist'
import chartToTable from "pages/fixedDepthPlots/chartToTable.vue"
export default {
	components:{
		chartToTable
	},
    data(){
        return {
			isTable: false,
			dynamicIcon: "table_chart"

        }
    },
    methods:{
		toggleTable(){
			var context = this;
			if(context.isTable == true){
				context.isTable = false;
				context.dynamicIcon = "table_chart";
			}else{
				context.isTable = true
				context.dynamicIcon = "auto_graph";
			}
		},
        createChart() {
			var context = this;
            var rigDTO = this.$store.getters['simulationStore/rigDTO'];
            var hydraulicSensitivityDTO = this.$store.getters['simulationStore/hydraulicSensitivityDTO'];
            console.log("hydraulicSensitivityDTO", hydraulicSensitivityDTO)
			var j = 0;
			var M = 1000.0;
			var i = 0;
			var simulationResultsDTOsCount = hydraulicSensitivityDTO.length;
			var data  = [];
			var bitPressureLoss = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Bit Pressure Loss',
				actualName: 'bitPressureLoss'
            }
            
            var parasiticPressureLoss = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Parasitic Pressure Loss',
				actualName: 'parasiticPressureLoss'
			}

			
            //console.log("simulationResultsDTOsCount", simulationResultsDTOsCount)
			for(j = 0; j < simulationResultsDTOsCount; j++){


				var hydraulicsResults =  hydraulicSensitivityDTO[j].hydraulicsResults;
				

                bitPressureLoss.x.push(rigDTO.pumpFlowRate[j]);
                bitPressureLoss.y.push(hydraulicsResults[0].bitPressureLoss);

                parasiticPressureLoss.x.push(rigDTO.pumpFlowRate[j]);
                parasiticPressureLoss.y.push(hydraulicsResults[0].parasticPressureLoss);
				
				
	
			}

            bitPressureLoss.line.color = 'blue'
            parasiticPressureLoss.line.color = 'green'

            data.push(bitPressureLoss)
            data.push(parasiticPressureLoss)
			console.log("data: ", data);

			var tableData = {
				data,
				xAxisData: {
					actualName:"pumpRate",
					name: "Pump Rate",
					unit: "gpm"
				},
				yAxisData: {
					unit: "psi"
				},
				excelFileName: "pressureLoss.csv",
				tableTitle: "Pressure Loss",
				isReversed: false
			}

			this.$store.commit('simulationStore/setCustomColumns', tableData);
			this.$store.commit('simulationStore/setCustomTable', tableData);
			this.$store.commit('simulationStore/setExcelFileName', tableData);
			this.$store.commit('simulationStore/setTableTitle', tableData);

			
			var layout = { 
				showlegend: true,
				title: '',
				height: 900,
				xaxis: {
					title: 'Pump Rate (gpm)',
					titlefont: {
					family: 'Arial, sans-serif',
					size: 14,
					color: 'black'
					},
					showticklabels: true,
					tickangle: 'auto',
					tickfont: {
					family: 'Old Standard TT, serif',
					size: 14,
					color: 'black'
					},
					showgrid: true,
					zeroline: true,
					showline: true,
					mirror: 'ticks',
					gridcolor: '#bdbdbd',
					gridwidth: 2,
					zerolinecolor: '#969696',
					zerolinewidth: 4,
					linecolor: '#636363',
					linewidth: 4
				},
				yaxis: { 
					title: 'Pressure Loss (psi)',
					titlefont: {
					family: 'Arial, sans-serif',
					size: 14,
					color: 'black'
					},
					showticklabels: true,
					tickangle: 45,
					tickfont: {
						family: 'Old Standard TT, serif',
						size: 14,
						color: 'black'
						},
					showgrid: true,
					zeroline: true,
					showline: true,
					mirror: 'ticks',
					gridcolor: '#bdbdbd',
					gridwidth: 2,
					zerolinecolor: '#969696',
					zerolinewidth: 4,
					linecolor: '#636363',
					linewidth: 4
				 	} 
				};
			var config = {responsive: true}
			Plotly.newPlot('myDiv', data, layout, config);
		},
		reFreshPlot(){
			var context = this;
			context.isTable = false;
			context.createChart();
		}
    },
    mounted() {
        var context = this;
		context.createChart();
		
    }
}
</script>