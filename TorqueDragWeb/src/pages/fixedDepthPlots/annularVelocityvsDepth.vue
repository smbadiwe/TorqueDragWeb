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
			rateSelectedIndex: 0

        }
    },
    methods:{
		onPumpRateSelectionChanged(e){
			 var context = this;
        	//var id = e.target.value;
            //var name = e.target.options[e.target.options.selectedIndex].text;
            //console.log('id ', id );
            //console.log('name ',name );
            context.rateSelectedIndex = e.target.options.selectedIndex;
            context.createChart();
		},
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
			for(j = 0; j < simulationResultsDTOsCount; j++){

                var annularVelocity = {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline',
                        width: 3
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: 'Pump Rate: ' + rigDTO.pumpFlowRate[j] + " (gpm)",
                }
            
                var surgeSwabResults =  surgeSwabSensitivityDTO[j].surgeSwabResults;
                var surgeSwabResultsLength = surgeSwabResults.length;

                for(i = 0; i < surgeSwabResultsLength; i++){

                    annularVelocity.x.push(surgeSwabResults[i].annulusFluidVelocity * M);
                    annularVelocity.y.push(surgeSwabResults[i].bottomMeasuredDepth);

                }


                data.push(annularVelocity);
	
			}

		
			//console.log("data: ", data);
			
			var layout = { 
				showlegend: true,
				title: '',
				height: 900,
				xaxis: {
					title: 'Annular Velocity (ft/m)',
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