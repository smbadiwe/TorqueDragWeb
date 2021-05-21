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
            </q-bar>
        </div>

		<div class="row">
			<div id="myDiv" class="col-12 bg-accent">

			</div>
		</div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
    data(){
        return {
			trace1: {
				x: [1, 2, 3, 4],
				y: [10, 15, 13, 17],
				mode: 'markers',
				type: 'scatter'
				},
			trace2: {
				x: [2, 3, 4, 5],
				y: [16, 5, 11, 9],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter'
				},
			trace3: {
				x: [1, 2, 3, 4],
				y: [12, 9, 15, 12],
				mode: 'lines+markers',
				type: 'scatter'
				}

        }
    },
    methods:{
        createChart() {
			var context = this;
            var rigDTO = this.$store.getters['simulationStore/rigDTOSurgeSwab'];
            var surgeSwabSensitivityDTO = this.$store.getters['simulationStore/surgeSwabSensitivityDTO'];
            console.log("surgeSwabSensitivityDTO", surgeSwabSensitivityDTO)
            console.log("rigDTO", rigDTO)
			var j = 0;
			var M = 60.0;
			var i = 0;
			var simulationResultsDTOsCount = surgeSwabSensitivityDTO.length;
			var data  = [];
	
            //console.log("simulationResultsDTOsCount", simulationResultsDTOsCount)
			for(j = simulationResultsDTOsCount-1; j < simulationResultsDTOsCount; j++){

                var criticalPumpRate = {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline',
                        width: 3
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: 'Critical Pump Rate: ' + rigDTO.pumpFlowRate[j] + " (gpm)",
                }
            
                var surgeSwabResults =  surgeSwabSensitivityDTO[j].surgeSwabResults;
                var surgeSwabResultsLength = surgeSwabResults.length;

                for(i = 0; i < surgeSwabResultsLength; i++){

                    criticalPumpRate.x.push(surgeSwabResults[i].annularCriticalFlowRate);
                    criticalPumpRate.y.push(surgeSwabResults[i].bottomMeasuredDepth);

                }


                data.push(criticalPumpRate);
	
			}

		
			//console.log("data: ", data);
			
			var layout = { 
				showlegend: true,
				title: '',
				height: 900,
				xaxis: {
					title: 'Critical Pump Rate (gpm)',
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
                    autorange: "reversed",
					title: 'Distance Along String (ft)',
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
			context.createChart();
		}
    },
    mounted() {
        var context = this;
		context.createChart();
		
    }
}
</script>